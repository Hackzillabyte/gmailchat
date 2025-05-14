import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, PaperClipIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import MessageBubble from './MessageBubble';
import { sendMessage, markMessageAsRead, getConversationMessages } from '../mock/mailData';

const Conversation = ({ conversation, onBackClick }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const messageInputRef = useRef(null);
  
  useEffect(() => {
    // Load messages
    if (conversation) {
      const loadedMessages = getConversationMessages(conversation.id);
      
      // Mark unread messages as read
      loadedMessages.forEach(message => {
        if (!message.isRead && message.from !== 'current') {
          markMessageAsRead(message.id);
        }
      });
      
      setMessages(loadedMessages);
    }
  }, [conversation]);
  
  useEffect(() => {
    // Scroll to bottom when messages change
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (newMessage.trim() === '') return;
    
    // Add message to conversation
    const message = sendMessage(conversation.id, newMessage);
    setMessages([...messages, message]);
    setNewMessage('');
    
    // Simulate reply after a delay
    setTimeout(() => setIsTyping(true), 1000);
    
    setTimeout(() => {
      setIsTyping(false);
      
      // Generate a mock response
      const responses = [
        "Got it, thanks!",
        "I'll take a look and get back to you soon.",
        "Thanks for the update.",
        "That works for me.",
        "Can you provide more details?",
        "I appreciate the information."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const reply = sendMessage(conversation.id, randomResponse);
      
      setMessages(prev => [...prev, reply]);
    }, 3000);
  };
  
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString([], { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <div className="flex flex-col h-full">
      {/* Conversation header */}
      <div className="flex items-center px-4 py-3 border-b border-gray-200 bg-white shadow-sm">
        <button
          className="md:hidden mr-2 text-gray-500 hover:text-gray-700"
          onClick={onBackClick}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full"
            src={conversation.user.avatar}
            alt={conversation.user.name}
          />
          <div className="ml-3">
            <h2 className="text-lg font-medium text-gray-900">
              {conversation.user.name}
            </h2>
            <p className="text-sm text-gray-500">
              {conversation.user.email}
            </p>
          </div>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message, index) => {
          // Check if we need to show a date separator
          const showDateSeparator = index === 0 || 
            new Date(message.timestamp).toDateString() !== 
            new Date(messages[index - 1].timestamp).toDateString();
          
          return (
            <React.Fragment key={message.id}>
              {showDateSeparator && (
                <div className="flex justify-center my-4">
                  <span className="px-4 py-1 bg-gray-200 rounded-full text-xs text-gray-600">
                    {new Date(message.timestamp).toLocaleDateString([], { 
                      weekday: 'long',
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
              )}
              <MessageBubble 
                message={message}
                isOutgoing={message.from === 'current'}
              />
            </React.Fragment>
          );
        })}
        
        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-center mt-2">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
            <div className="ml-2 text-sm text-gray-500">
              {conversation.user.name} is typing...
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Message input */}
      <div className="p-4 bg-white border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-full text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <PaperClipIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <input
            type="text"
            ref={messageInputRef}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 mx-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Type a message..."
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="inline-flex items-center justify-center p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <PaperAirplaneIcon className="h-5 w-5 rotate-90" aria-hidden="true" />
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Conversation;
