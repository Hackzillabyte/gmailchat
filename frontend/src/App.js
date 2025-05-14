import React, { useState, useEffect } from "react";
import "./App.css";
import MailboxPage from "./pages/MailboxPage";
import LoginPage from "./pages/LoginPage";
import { getConversations } from "./mock/mailData";

function App() {
  const [showMailbox, setShowMailbox] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);

  useEffect(() => {
    // Load conversations
    const loadedConversations = getConversations();
    setConversations(loadedConversations);
    
    // Set initial active conversation
    if (loadedConversations.length > 0) {
      setActiveConversation(loadedConversations[0]);
    }
  }, []);

  const handleConversationClick = (conversation) => {
    setActiveConversation(conversation);
  };

  // If user wants to go back to login page
  const handleLogout = () => {
    setShowMailbox(false);
  };

  if (showMailbox) {
    return (
      <MailboxPage 
        conversations={conversations}
        activeConversation={activeConversation}
        onConversationClick={handleConversationClick}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <div className="App">
      <LoginPage onLogin={() => setShowMailbox(true)} />
    </div>
  );
}

export default App;
