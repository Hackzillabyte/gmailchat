import React from 'react';
import { motion } from 'framer-motion';
import { PaperClipIcon, CheckIcon } from '@heroicons/react/24/outline';

const MessageBubble = ({ message, isOutgoing }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString([], { 
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mb-4 flex ${isOutgoing ? 'justify-end' : 'justify-start'}`}
    >
      <div 
        className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 shadow-sm ${
          isOutgoing ? 'bg-blue-50 text-blue-900' : 'bg-white text-gray-900'
        }`}
      >
        {/* Message header */}
        <div className="flex justify-between items-center mb-1">
          <div className="text-xs font-medium text-gray-500">
            {message.subject}
          </div>
          <div className="text-xs text-gray-400">
            {formatDate(message.timestamp)}
          </div>
        </div>
        
        {/* Message body */}
        <div className="text-sm whitespace-pre-wrap mb-1">
          {message.body}
        </div>
        
        {/* Attachment (if any) */}
        {message.hasAttachment && (
          <div className="mt-2 bg-gray-100 rounded p-2 flex items-center">
            <PaperClipIcon className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-700 truncate">
              {message.attachmentName}
            </span>
          </div>
        )}
        
        {/* Message footer */}
        <div className="flex justify-end items-center mt-1">
          <div className="text-xs text-gray-400 mr-1">
            {formatTime(message.timestamp)}
          </div>
          {isOutgoing && (
            <div className="text-blue-500">
              <CheckIcon className="h-3 w-3" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MessageBubble;
