// Mock data for email conversations
export const users = [
  {
    id: 'u1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    avatar: 'https://ui-avatars.com/api/?name=John+Smith&background=1a73e8&color=fff',
    status: 'online'
  },
  {
    id: 'u2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=fbbc04&color=fff',
    status: 'offline'
  },
  {
    id: 'u3',
    name: 'Alex Taylor',
    email: 'alex.taylor@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Alex+Taylor&background=34a853&color=fff',
    status: 'online'
  },
  {
    id: 'u4',
    name: 'Maya Patel',
    email: 'maya.patel@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Maya+Patel&background=ea4335&color=fff',
    status: 'away'
  },
  {
    id: 'u5',
    name: 'Project Team',
    email: 'project-team@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Project+Team&background=9c27b0&color=fff',
    status: 'online'
  },
  {
    id: 'u6',
    name: 'Technical Support',
    email: 'support@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Tech+Support&background=009688&color=fff',
    status: 'online'
  }
];

// Current logged in user
export const currentUser = {
  id: 'current',
  name: 'Jamie Wilson',
  email: 'jamie.wilson@example.com',
  avatar: 'https://ui-avatars.com/api/?name=Jamie+Wilson&background=4285f4&color=fff'
};

// Emails/messages
export const messages = [
  // Conversation with John Smith
  {
    id: 'm1',
    conversationId: 'u1',
    from: 'u1',
    to: 'current',
    subject: 'Project Status Update',
    body: 'Hi Jamie, just checking in on the status of the project. Do you have any updates to share? Best, John',
    timestamp: '2023-07-10T10:30:00.000Z',
    isRead: true,
    hasAttachment: false,
    labels: ['inbox']
  },
  {
    id: 'm2',
    conversationId: 'u1',
    from: 'current',
    to: 'u1',
    subject: 'Re: Project Status Update',
    body: 'Hi John, thanks for checking in. We\'re on track with the project timeline. I\'ll send you a detailed report by the end of the day. Regards, Jamie',
    timestamp: '2023-07-10T11:45:00.000Z',
    isRead: true,
    hasAttachment: false,
    labels: ['sent']
  },
  {
    id: 'm3',
    conversationId: 'u1',
    from: 'u1',
    to: 'current',
    subject: 'Re: Project Status Update',
    body: 'Sounds good, Jamie. Looking forward to the report. John',
    timestamp: '2023-07-10T12:15:00.000Z',
    isRead: true,
    hasAttachment: false,
    labels: ['inbox']
  },
  {
    id: 'm4',
    conversationId: 'u1',
    from: 'current',
    to: 'u1',
    subject: 'Project Status Report',
    body: 'John, please find attached the detailed project status report as promised. Let me know if you have any questions. Best, Jamie',
    timestamp: '2023-07-10T16:30:00.000Z',
    isRead: true,
    hasAttachment: true,
    attachmentName: 'project_status_report.pdf',
    labels: ['sent']
  },
  {
    id: 'm5',
    conversationId: 'u1',
    from: 'u1',
    to: 'current',
    subject: 'Re: Project Status Report',
    body: 'Jamie, thanks for the report. It looks great. I have a couple of questions about the timeline for Phase 2. Can we schedule a quick call tomorrow? John',
    timestamp: '2023-07-11T09:05:00.000Z',
    isRead: false,
    hasAttachment: false,
    labels: ['inbox']
  },

  // Conversation with Sarah Johnson
  {
    id: 'm6',
    conversationId: 'u2',
    from: 'current',
    to: 'u2',
    subject: 'Meeting Agenda',
    body: 'Hi Sarah, I\'m preparing the agenda for our upcoming team meeting. Is there anything specific you\'d like to discuss? Jamie',
    timestamp: '2023-07-08T14:20:00.000Z',
    isRead: true,
    hasAttachment: false,
    labels: ['sent']
  },
  {
    id: 'm7',
    conversationId: 'u2',
    from: 'u2',
    to: 'current',
    subject: 'Re: Meeting Agenda',
    body: 'Hi Jamie, thanks for checking. I would like to discuss the new marketing strategy and get team feedback. Also, I have some updates on the client presentation. Best, Sarah',
    timestamp: '2023-07-08T15:45:00.000Z',
    isRead: true,
    hasAttachment: false,
    labels: ['inbox']
  },
  {
    id: 'm8',
    conversationId: 'u2',
    from: 'current',
    to: 'u2',
    subject: 'Re: Meeting Agenda',
    body: 'Great suggestions, Sarah. I\'ve added both items to the agenda. The meeting is scheduled for Monday at 10 AM. Looking forward to your presentation updates. Jamie',
    timestamp: '2023-07-08T16:30:00.000Z',
    isRead: true,
    hasAttachment: false,
    labels: ['sent']
  },
  {
    id: 'm9',
    conversationId: 'u2',
    from: 'u2',
    to: 'current',
    subject: 'Client Presentation Draft',
    body: 'Jamie, I\'ve attached the draft of the client presentation for your review. Let me know your thoughts before I finalize it. Thanks, Sarah',
    timestamp: '2023-07-09T11:20:00.000Z',
    isRead: true,
    hasAttachment: true,
    attachmentName: 'client_presentation_draft.pptx',
    labels: ['inbox']
  },

  // Conversation with Alex Taylor
  {
    id: 'm10',
    conversationId: 'u3',
    from: 'u3',
    to: 'current',
    subject: 'API Integration Issue',
    body: 'Hi Jamie, we\'re experiencing some issues with the new API integration. Can you help troubleshoot? The error logs are attached. Best, Alex',
    timestamp: '2023-07-11T13:10:00.000Z',
    isRead: false,
    hasAttachment: true,
    attachmentName: 'api_error_logs.txt',
    labels: ['inbox']
  },
  {
    id: 'm11',
    conversationId: 'u3',
    from: 'current',
    to: 'u3',
    subject: 'Re: API Integration Issue',
    body: 'Hi Alex, I\'ll take a look at the logs right away. Have you tried clearing the cache and restarting the service? That might resolve the immediate issue while I investigate further. Jamie',
    timestamp: '2023-07-11T13:45:00.000Z',
    isRead: true,
    hasAttachment: false,
    labels: ['sent']
  },
  
  // Conversation with Maya Patel
  {
    id: 'm12',
    conversationId: 'u4',
    from: 'u4',
    to: 'current',
    subject: 'Design Review Meeting',
    body: 'Hello Jamie, just a reminder about our design review meeting tomorrow at 2 PM. I\'ve made some revisions to the UI mockups based on your feedback. Maya',
    timestamp: '2023-07-10T15:30:00.000Z',
    isRead: true,
    hasAttachment: false,
    labels: ['inbox']
  },
  {
    id: 'm13',
    conversationId: 'u4',
    from: 'current',
    to: 'u4',
    subject: 'Re: Design Review Meeting',
    body: 'Hi Maya, looking forward to seeing the revisions. I\'ll be there for the meeting. Could you also bring the user journey maps we discussed? Thanks, Jamie',
    timestamp: '2023-07-10T16:05:00.000Z',
    isRead: true,
    hasAttachment: false,
    labels: ['sent']
  },
  {
    id: 'm14',
    conversationId: 'u4',
    from: 'u4',
    to: 'current',
    subject: 'Re: Design Review Meeting',
    body: 'Sure thing, Jamie. I\'ll bring the user journey maps. Also, I\'ve attached the latest UI mockups for you to review before the meeting. Best, Maya',
    timestamp: '2023-07-10T17:20:00.000Z',
    isRead: true,
    hasAttachment: true,
    attachmentName: 'ui_mockups_v2.fig',
    labels: ['inbox']
  },
  
  // Project Team Group
  {
    id: 'm15',
    conversationId: 'u5',
    from: 'u5',
    to: 'current',
    subject: 'Sprint Planning',
    body: 'Team, let\'s discuss the upcoming sprint goals and task assignments. Please come prepared with your updates and estimates. -Project Manager',
    timestamp: '2023-07-09T09:00:00.000Z',
    isRead: true,
    hasAttachment: false,
    labels: ['inbox']
  },
  {
    id: 'm16',
    conversationId: 'u5',
    from: 'current',
    to: 'u5',
    subject: 'Re: Sprint Planning',
    body: 'I\'ve completed the backend tasks from the current sprint and will be available to take on new assignments. I estimate I can handle about 30 story points in the next sprint. -Jamie',
    timestamp: '2023-07-09T10:15:00.000Z',
    isRead: true,
    hasAttachment: false,
    labels: ['sent']
  },
  {
    id: 'm17',
    conversationId: 'u5',
    from: 'u1',
    to: 'current',
    cc: 'u5',
    subject: 'Re: Sprint Planning',
    body: 'Great job on the backend tasks, Jamie. Let\'s discuss how to integrate that with the frontend work in the planning meeting. -John',
    timestamp: '2023-07-09T10:45:00.000Z',
    isRead: true,
    hasAttachment: false,
    labels: ['inbox']
  },
  
  // Technical Support
  {
    id: 'm18',
    conversationId: 'u6',
    from: 'current',
    to: 'u6',
    subject: 'Access Issues with Cloud Services',
    body: 'Hi Support Team, I\'m having trouble accessing the cloud development environment. It gives an error about insufficient permissions. Can you help? Jamie',
    timestamp: '2023-07-11T08:30:00.000Z',
    isRead: true,
    hasAttachment: false,
    labels: ['sent']
  },
  {
    id: 'm19',
    conversationId: 'u6',
    from: 'u6',
    to: 'current',
    subject: 'Re: Access Issues with Cloud Services',
    body: 'Hello Jamie, Thanks for reporting this issue. We\'ve checked your account and found that your access token needs to be refreshed. We\'ve done this from our side. Please try logging in again and let us know if it works. Technical Support Team',
    timestamp: '2023-07-11T09:15:00.000Z',
    isRead: false,
    hasAttachment: false,
    labels: ['inbox']
  }
];

// Get all conversations
export const getConversations = () => {
  // Group messages by conversation
  const conversationMap = {};
  
  messages.forEach(message => {
    if (!conversationMap[message.conversationId]) {
      const user = users.find(u => u.id === message.conversationId);
      conversationMap[message.conversationId] = {
        id: message.conversationId,
        user: user,
        messages: [],
        lastMessage: null,
        unreadCount: 0
      };
    }
    
    conversationMap[message.conversationId].messages.push(message);
    
    // Check if this message is unread and from someone else
    if (!message.isRead && message.from !== 'current') {
      conversationMap[message.conversationId].unreadCount++;
    }
  });
  
  // Sort messages within each conversation by timestamp
  Object.values(conversationMap).forEach(conversation => {
    conversation.messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    conversation.lastMessage = conversation.messages[conversation.messages.length - 1];
  });
  
  // Sort conversations by the timestamp of the last message (most recent first)
  return Object.values(conversationMap).sort(
    (a, b) => new Date(b.lastMessage.timestamp) - new Date(a.lastMessage.timestamp)
  );
};

// Get messages for a specific conversation
export const getConversationMessages = (conversationId) => {
  return messages
    .filter(message => message.conversationId === conversationId)
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
};

// Mark message as read
export const markMessageAsRead = (messageId) => {
  const message = messages.find(m => m.id === messageId);
  if (message) {
    message.isRead = true;
  }
};

// Send a new message
export const sendMessage = (conversationId, body, subject = null, hasAttachment = false, attachmentName = null) => {
  const timestamp = new Date().toISOString();
  const id = `m${messages.length + 1}`;
  
  let replySubject = subject;
  if (!replySubject) {
    // Find the existing conversation and use its subject with 'Re:' prefix
    const existingMessages = messages.filter(m => m.conversationId === conversationId);
    if (existingMessages.length > 0) {
      const lastMessage = existingMessages[existingMessages.length - 1];
      replySubject = lastMessage.subject.startsWith('Re:') 
        ? lastMessage.subject 
        : `Re: ${lastMessage.subject}`;
    } else {
      replySubject = 'No Subject';
    }
  }
  
  const newMessage = {
    id,
    conversationId,
    from: 'current',
    to: conversationId,
    subject: replySubject,
    body,
    timestamp,
    isRead: true,
    hasAttachment,
    attachmentName,
    labels: ['sent']
  };
  
  messages.push(newMessage);
  return newMessage;
};
