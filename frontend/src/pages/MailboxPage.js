import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import Conversation from '../components/Conversation';
import { getConversations } from '../mock/mailData';

const MailboxPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Load conversations from mock data
    const loadedConversations = getConversations();
    setConversations(loadedConversations);
    
    // Set the first conversation as active by default
    if (loadedConversations.length > 0) {
      setActiveConversation(loadedConversations[0]);
    }
  }, []);

  const handleConversationClick = (conversation) => {
    setActiveConversation(conversation);
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top navigation */}
      <header className="bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              {/* Mobile menu button */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block h-8 w-auto"
                  src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_512dp.png"
                  alt="GmailChat"
                />
                <span className="ml-2 text-xl font-semibold text-gray-900">GmailChat</span>
              </div>
            </div>
            
            {/* User profile dropdown */}
            <div className="flex items-center">
              <div className="ml-3 relative">
                <div className="flex items-center">
                  <span className="hidden md:block text-sm font-medium text-gray-700 mr-4">
                    {user?.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="ml-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -300, opacity: 0 }}
          animate={{ 
            x: 0, 
            opacity: 1,
            width: isMobileMenuOpen ? '100%' : undefined
          }}
          transition={{ duration: 0.3 }}
          className={`bg-white w-full md:w-80 flex-shrink-0 border-r border-gray-200 ${
            isMobileMenuOpen ? 'block absolute z-10 h-full' : 'hidden md:block'
          }`}
        >
          <Sidebar 
            conversations={conversations}
            activeConversation={activeConversation}
            onConversationClick={handleConversationClick}
          />
        </motion.aside>

        {/* Email conversation */}
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="flex-1 overflow-hidden flex flex-col bg-white"
        >
          {activeConversation ? (
            <Conversation 
              conversation={activeConversation}
              onBackClick={() => setIsMobileMenuOpen(true)}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center p-6 text-center">
              <div className="max-w-md">
                <h3 className="text-xl font-medium text-gray-900">No conversation selected</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Select a conversation from the sidebar to view messages.
                </p>
              </div>
            </div>
          )}
        </motion.main>
      </div>
    </div>
  );
};

export default MailboxPage;
