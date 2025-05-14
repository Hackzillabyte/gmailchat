import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MailboxPage from "./pages/MailboxPage";
import { getConversations } from "./mock/mailData";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('gmailChatUser');
    if (storedUser) {
      setIsAuthenticated(true);
    }

    // Load conversations
    const loadedConversations = getConversations();
    setConversations(loadedConversations);
    
    // Set initial active conversation
    if (loadedConversations.length > 0) {
      setActiveConversation(loadedConversations[0]);
    }
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem('gmailChatUser', JSON.stringify(userData));
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('gmailChatUser');
    setIsAuthenticated(false);
  };

  const handleConversationClick = (conversation) => {
    setActiveConversation(conversation);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/login" 
            element={
              isAuthenticated ? 
                <Navigate to="/" replace /> : 
                <LoginPage onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/" 
            element={
              isAuthenticated ? 
                <MailboxPage 
                  conversations={conversations}
                  activeConversation={activeConversation}
                  onConversationClick={handleConversationClick}
                  onLogout={handleLogout}
                /> : 
                <Navigate to="/login" replace />
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
