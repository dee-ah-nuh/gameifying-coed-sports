import React, { useState } from 'react';
import { MessageSquare, Bell, Users, Send, Trophy, Calendar, MapPin, ThumbsUp, MessageCircle, Share2, Clock, Crown, Flame, CheckCheck, Image, Smile, MoreHorizontal } from 'lucide-react';

export default function SocialHub() {
  const [activeTab, setActiveTab] = useState('notifications');
  const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState('');

  const notifications = [
    { id: 1, type: 'game', title: 'Game Tomorrow!', message: 'Thunder FC vs Lightning SC at Lincoln Park', time: '2h ago', icon: Calendar, color: 'blue', unread: true },
    { id: 2, type: 'achievement', title: 'Achievement Unlocked! 🎯', message: 'Hat Trick Hero - Score 3 goals in one game', time: '5h ago', icon: Trophy, color: 'yellow', unread: true },
    { id: 3, type: 'lineup', title: 'Lineup Updated', message: 'Alex moved you to striker for next game', time: '8h ago', icon: Users, color: 'indigo', unread: false },
    { id: 4, type: 'message', title: 'New team message', message: 'Jordan: Who\'s bringing the cooler?', time: '12h ago', icon: MessageSquare, color: 'green', unread: false },
    { id: 5, type: 'challenge', title: 'Weekly Challenge Progress', message: 'You\'re 2 goals away from completing this week\'s challenge!', time: '1d ago', icon: Flame, color: 'orange', unread: false },
    { id: 6, type: 'invite', title: 'Game Invite', message: 'Storm United needs 1 more player for pickup game', time: '1d ago', icon: MapPin, color: 'red', unread: false },
    { id: 7, type: 'result', title: 'Match Result Posted', message: 'Thunder FC won 5-3! +150 XP earned', time: '2d ago', icon: Trophy, color: 'green', unread: false }
  ];

  const chats = [
    { 
      id: 1, 
      name: 'Thunder FC', 
      type: 'team', 
      avatar: '⚡', 
      lastMessage: 'Jordan: See you all tomorrow!', 
      time: '10m ago', 
      unread: 3,
      online: 8
    },
    { 
      id: 2, 
      name: 'Alex Morgan', 
      type: 'dm', 
      avatar: '🏃', 
      lastMessage: 'Thanks for the assist today!', 
      time: '1h ago', 
      unread: 0,
      online: true
    },
    { 
      id: 3, 
      name: 'Chicago Soccer League', 
      type: 'league', 
      avatar: '🏆', 
      lastMessage: 'Next tournament starts Oct 15', 
      time: '3h ago', 
      unread: 1,
      online: 42
    },
    { 
      id: 4, 
      name: 'Sam Rivera', 
      type: 'dm', 
      avatar: '⚽', 
      lastMessage: 'You: Great game today!', 
      time: '5h ago', 
      unread: 0,
      online: false
    },
    { 
      id: 5, 
      name: 'Lightning SC (Opponents)', 
      type: 'opponent', 
      avatar: '⚡', 
      lastMessage: 'See you on the field tomorrow 😤', 
      time: '8h ago', 
      unread: 2,
      online: 5
    }
  ];

  const chatMessages = {
    1: [
      { id: 1, sender: 'Jordan Lee', avatar: '🧤', message: 'Great practice today everyone!', time: '2:30 PM', isOwn: false },
      { id: 2, sender: 'You', avatar: '🏃', message: 'Definitely! Feeling good about tomorrow', time: '2:32 PM', isOwn: true },
      { id: 3, sender: 'Sam Rivera', avatar: '⚽', message: 'Who\'s bringing the cooler? 🥤', time: '2:35 PM', isOwn: false },
      { id: 4, sender: 'Casey Park', avatar: '🛡️', message: 'I got it covered', time: '2:36 PM', isOwn: false },
      { id: 5, sender: 'Taylor Swift', avatar: '💨', message: 'Can someone pick me up? Car\'s in the shop', time: '2:40 PM', isOwn: false },
      { id: 6, sender: 'Jordan Lee', avatar: '🧤', message: 'I can grab you! I\'m in your area', time: '2:42 PM', isOwn: false },
      { id: 7, sender: 'You', avatar: '🏃', message: 'Perfect. See you all tomorrow at 6!', time: '2:45 PM', isOwn: true },
      { id: 8, sender: 'Jordan Lee', avatar: '🧤', message: 'See you all tomorrow! 💪', time: '2:50 PM', isOwn: false }
    ]
  };

  const feed = [
    { 
      id: 1, 
      user: 'Thunder FC', 
      avatar: '⚡', 
      action: 'won their match', 
      detail: '5-3 vs Lightning SC',
      time: '2h ago',
      likes: 24,
      comments: 8,
      image: true
    },
    { 
      id: 2, 
      user: 'Alex Morgan', 
      avatar: '🏃', 
      action: 'unlocked an achievement', 
      detail: '🎯 Hat Trick Hero',
      time: '5h ago',
      likes: 42,
      comments: 12,
      image: false
    },
    { 
      id: 3, 
      user: 'Sam Rivera', 
      avatar: '⚽', 
      action: 'reached Level 15', 
      detail: 'Elite Player status achieved!',
      time: '8h ago',
      likes: 31,
      comments: 6,
      image: false
    },
    { 
      id: 4, 
      user: 'Chicago Soccer League', 
      avatar: '🏆', 
      action: 'posted an announcement', 
      detail: 'Fall Tournament registration now open',
      time: '12h ago',
      likes: 89,
      comments: 23,
      image: true
    }
  ];

  const getNotificationColor = (color) => {
    const colors = {
      blue: 'bg-blue-500/20 text-blue-400',
      yellow: 'bg-yellow-500/20 text-yellow-400',
      indigo: 'bg-indigo-500/20 text-indigo-400',
      green: 'bg-green-500/20 text-green-400',
      orange: 'bg-orange-500/20 text-orange-400',
      red: 'bg-red-500/20 text-red-400'
    };
    return colors[color] || colors.blue;
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 rounded-b-3xl shadow-xl">
        <h1 className="text-2xl font-bold mb-1">Social Hub</h1>
        <p className="text-green-100 text-sm">Stay connected with your team</p>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 mt-6">
        <div className="flex gap-2 bg-slate-800/50 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('notifications')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === 'notifications' ? 'bg-green-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Bell size={16} />
            Notifications
            {notifications.filter(n => n.unread).length > 0 && (
              <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {notifications.filter(n => n.unread).length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === 'messages' ? 'bg-green-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <MessageSquare size={16} />
            Messages
            {chats.filter(c => c.unread > 0).length > 0 && (
              <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {chats.reduce((sum, c) => sum + c.unread, 0)}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('feed')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === 'feed' ? 'bg-green-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users size={16} />
            Feed
          </button>
        </div>
      </div>

      {/* Notifications View */}
      {activeTab === 'notifications' && (
        <div className="px-6 mt-6 space-y-3">
          {notifications.map((notif) => {
            const Icon = notif.icon;
            return (
              <div
                key={notif.id}
                className={`bg-slate-800 rounded-xl p-4 border ${
                  notif.unread ? 'border-green-500/50' : 'border-slate-700'
                } hover:border-slate-600 transition-all cursor-pointer`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getNotificationColor(notif.color)}`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold text-sm">{notif.title}</h4>
                      {notif.unread && (
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-sm text-slate-400 mb-2">{notif.message}</p>
                    <div className="flex items-center gap-2">
                      <Clock size={12} className="text-slate-600" />
                      <span className="text-xs text-slate-500">{notif.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Messages View */}
      {activeTab === 'messages' && !activeChat && (
        <div className="px-6 mt-6 space-y-3">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`bg-slate-800 rounded-xl p-4 border ${
                chat.unread > 0 ? 'border-green-500/50' : 'border-slate-700'
              } hover:border-slate-600 transition-all cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-2xl">
                    {chat.avatar}
                  </div>
                  {chat.type === 'dm' && chat.online && (
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-slate-800 rounded-full"></span>
                  )}
                  {(chat.type === 'team' || chat.type === 'league' || chat.type === 'opponent') && (
                    <span className="absolute -bottom-1 -right-1 bg-slate-700 text-white text-[10px] px-1.5 py-0.5 rounded-full border border-slate-600">
                      {chat.online}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-sm truncate">{chat.name}</h4>
                    <span className="text-xs text-slate-500">{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-400 truncate flex-1">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Chat View */}
      {activeTab === 'messages' && activeChat && (
        <div className="flex flex-col h-screen">
          {/* Chat Header */}
          <div className="px-6 mt-6 mb-4">
            <button
              onClick={() => setActiveChat(null)}
              className="text-green-400 text-sm mb-3 flex items-center gap-1 hover:text-green-300"
            >
              ← Back to chats
            </button>
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-xl">
                  {chats.find(c => c.id === activeChat)?.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{chats.find(c => c.id === activeChat)?.name}</h3>
                  <p className="text-xs text-slate-400">
                    {chats.find(c => c.id === activeChat)?.type === 'team' && `${chats.find(c => c.id === activeChat)?.online} members online`}
                    {chats.find(c => c.id === activeChat)?.type === 'dm' && (chats.find(c => c.id === activeChat)?.online ? 'Online' : 'Offline')}
                    {chats.find(c => c.id === activeChat)?.type === 'league' && `${chats.find(c => c.id === activeChat)?.online} members`}
                  </p>
                </div>
                <button className="text-slate-400 hover:text-white">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 px-6 space-y-4 overflow-y-auto pb-32">
            {chatMessages[activeChat]?.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.isOwn ? 'flex-row-reverse' : ''}`}>
                {!msg.isOwn && (
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                    {msg.avatar}
                  </div>
                )}
                <div className={`flex flex-col ${msg.isOwn ? 'items-end' : 'items-start'} max-w-[75%]`}>
                  {!msg.isOwn && (
                    <span className="text-xs text-slate-500 mb-1 px-2">{msg.sender}</span>
                  )}
                  <div className={`rounded-2xl px-4 py-2 ${
                    msg.isOwn 
                      ? 'bg-green-600 text-white rounded-br-sm' 
                      : 'bg-slate-800 text-white rounded-bl-sm'
                  }`}>
                    <p className="text-sm">{msg.message}</p>
                  </div>
                  <div className="flex items-center gap-1 mt-1 px-2">
                    <span className="text-xs text-slate-500">{msg.time}</span>
                    {msg.isOwn && <CheckCheck size={12} className="text-green-400" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="fixed bottom-20 left-0 right-0 px-6 pb-4 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent pt-4">
            <div className="bg-slate-800 rounded-2xl border border-slate-700 flex items-center gap-2 px-4 py-2">
              <button className="text-slate-400 hover:text-white">
                <Image size={20} />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <button className="text-slate-400 hover:text-white">
                <Smile size={20} />
              </button>
              <button
                onClick={handleSendMessage}
                className="bg-green-600 hover:bg-green-700 rounded-xl p-2 transition-all"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Feed View */}
      {activeTab === 'feed' && (
        <div className="px-6 mt-6 space-y-4">
          {feed.map((post) => (
            <div key={post.id} className="bg-slate-800 rounded-xl border border-slate-700">
              {/* Post Header */}
              <div className="p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-xl">
                  {post.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{post.user}</h4>
                  <p className="text-xs text-slate-400">{post.action}</p>
                </div>
                <span className="text-xs text-slate-500">{post.time}</span>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-3">
                <p className="text-sm font-medium mb-3">{post.detail}</p>
                {post.image && (
                  <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl h-48 flex items-center justify-center text-slate-600">
                    <Image size={40} />
                  </div>
                )}
              </div>

              {/* Post Actions */}
              <div className="border-t border-slate-700 px-4 py-3 flex items-center gap-6">
                <button className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-all">
                  <ThumbsUp size={18} />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-all">
                  <MessageCircle size={18} />
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-all ml-auto">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 px-6 py-4">
        <div className="flex justify-around items-center max-w-lg mx-auto">
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
              <Trophy size={20} className="text-slate-400" />
            </div>
            <span className="text-xs text-slate-500">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
              <Users size={20} className="text-slate-400" />
            </div>
            <span className="text-xs text-slate-500">Team</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
              <MessageSquare size={20} />
            </div>
            <span className="text-xs font-medium text-green-400">Social</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
              <Trophy size={20} className="text-slate-400" />
            </div>
            <span className="text-xs text-slate-500">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}