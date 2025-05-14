import React from 'react';
import { motion } from 'framer-motion';

const ConversationItem = ({ conversation, isActive, onClick }) => {
  const { user, lastMessage, unreadCount } = conversation;
  
  // Format timestamp
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    
    // If today, show time
    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    // If this year, show month and day
    if (date.getFullYear() === now.getFullYear()) {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
    
    // Otherwise show date
    return date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  // Truncate message
  const truncateMessage = (text, maxLength = 65) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  };
  
  return (
    <motion.li
      whileHover={{ backgroundColor: 'rgba(236, 240, 243, 0.5)' }}
      className={`${
        isActive ? 'bg-blue-50 border-l-4 border-blue-500' : ''
      } cursor-pointer`}
      onClick={onClick}
    >
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              <img
                className="h-10 w-10 rounded-full"
                src={user.avatar}
                alt={user.name}
              />
              {user.status === 'online' && (
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white"></span>
              )}
              {user.status === 'away' && (
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-yellow-400 ring-2 ring-white"></span>
              )}
            </div>
            <div className="ml-4 truncate">
              <div className="flex items-center">
                <h3 className={`text-sm font-medium ${unreadCount > 0 ? 'text-gray-900 font-semibold' : 'text-gray-700'}`}>
                  {user.name}
                </h3>
                <span className="ml-2 text-xs text-gray-500">
                  {formatTime(lastMessage.timestamp)}
                </span>
              </div>
              <p className={`mt-1 text-sm ${unreadCount > 0 ? 'text-gray-900 font-medium' : 'text-gray-500'} truncate`}>
                {truncateMessage(lastMessage.body)}
              </p>
            </div>
          </div>
          {unreadCount > 0 && (
            <div className="ml-2 flex-shrink-0">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-xs font-medium text-white">
                {unreadCount}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.li>
  );
};

export default ConversationItem;
