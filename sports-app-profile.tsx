import React, { useState } from 'react';
import { Trophy, TrendingUp, Target, Zap, Heart, Activity, Award, Calendar, Clock, Flame, Star, ChevronRight, Watch, MapPin, Shield, Users } from 'lucide-react';

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('stats');

  const profile = {
    name: "Alex Morgan",
    username: "@alexm",
    level: 12,
    xp: 2450,
    xpToNext: 3000,
    rank: "Elite Player",
    avatar: "🏃",
    joinedDate: "Jan 2024",
    location: "Chicago, IL"
  };

  const stats = {
    gamesPlayed: 47,
    wins: 28,
    losses: 14,
    draws: 5,
    winRate: 60,
    goals: 34,
    assists: 18,
    mvps: 12,
    cleanSheets: 8,
    avgHeartRate: 152,
    totalDistance: 127.5,
    totalCalories: 18420,
    longestStreak: 12,
    currentStreak: 5
  };

  const recentPerformance = [
    { date: "Oct 2", result: "W", goals: 2, assists: 1, rating: 8.5, heartRate: 165, distance: 6.2 },
    { date: "Sep 28", result: "L", goals: 1, assists: 0, rating: 7.0, heartRate: 158, distance: 5.8 },
    { date: "Sep 25", result: "W", goals: 3, assists: 2, rating: 9.2, heartRate: 172, distance: 7.1 },
    { date: "Sep 20", result: "W", goals: 1, assists: 1, rating: 7.8, heartRate: 160, distance: 6.5 },
    { date: "Sep 15", result: "D", goals: 0, assists: 2, rating: 7.5, heartRate: 155, distance: 6.0 }
  ];

  const achievements = [
    { icon: "🎯", title: "Hat Trick Hero", desc: "Score 3 goals in one game", date: "Sep 25", rarity: "rare" },
    { icon: "🔥", title: "On Fire", desc: "5 game win streak", date: "Sep 20", rarity: "epic" },
    { icon: "👑", title: "MVP Master", desc: "Win 10 MVP awards", date: "Sep 10", rarity: "legendary" },
    { icon: "⚡", title: "Speed Demon", desc: "Run 8km in a single game", date: "Aug 28", rarity: "rare" },
    { icon: "🛡️", title: "Iron Wall", desc: "5 clean sheets", date: "Aug 15", rarity: "common" },
    { icon: "🎪", title: "Assist King", desc: "10 assists in a season", date: "Aug 5", rarity: "rare" },
    { icon: "💎", title: "Century Club", desc: "Play 100 games", date: "Jul 20", rarity: "epic" },
    { icon: "🌟", title: "Rising Star", desc: "Reach level 10", date: "Jul 1", rarity: "common" }
  ];

  const positions = [
    { name: "Striker", rating: 88, games: 25 },
    { name: "Winger", rating: 82, games: 15 },
    { name: "Midfielder", rating: 75, games: 7 }
  ];

  const getRarityColor = (rarity) => {
    switch(rarity) {
      case 'legendary': return 'from-yellow-600 to-orange-600';
      case 'epic': return 'from-purple-600 to-pink-600';
      case 'rare': return 'from-blue-600 to-cyan-600';
      default: return 'from-slate-600 to-slate-700';
    }
  };

  const getRarityBorder = (rarity) => {
    switch(rarity) {
      case 'legendary': return 'border-yellow-500/50';
      case 'epic': return 'border-purple-500/50';
      case 'rare': return 'border-blue-500/50';
      default: return 'border-slate-600/50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pb-20">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-6 rounded-b-3xl shadow-xl">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
              {profile.avatar}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p className="text-purple-100 text-sm">{profile.username}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                  {profile.rank}
                </span>
                <span className="text-xs text-purple-100">Level {profile.level}</span>
              </div>
            </div>
          </div>
          <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/30 transition-all">
            Edit
          </button>
        </div>

        {/* XP Progress */}
        <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold">Level {profile.level} Progress</span>
            <span className="text-sm">{profile.xp}/{profile.xpToNext} XP</span>
          </div>
          <div className="bg-white/30 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${(profile.xp / profile.xpToNext) * 100}%` }}
            />
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
            <Calendar size={16} className="mx-auto mb-1 text-purple-200" />
            <p className="text-xs text-purple-100">Joined {profile.joinedDate}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
            <MapPin size={16} className="mx-auto mb-1 text-purple-200" />
            <p className="text-xs text-purple-100">{profile.location}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
            <Flame size={16} className="mx-auto mb-1 text-orange-400" />
            <p className="text-xs text-purple-100">{stats.currentStreak} day streak</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 mt-6">
        <div className="flex gap-2 bg-slate-800/50 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('stats')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'stats' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Statistics
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'achievements' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Achievements
          </button>
        </div>
      </div>

      {/* Stats View */}
      {activeTab === 'stats' && (
        <div className="px-6 mt-6 space-y-6">
          {/* Career Overview */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Trophy className="text-yellow-400" size={20} />
              Career Overview
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-3xl font-bold text-green-400">{stats.wins}</p>
                <p className="text-sm text-slate-400">Wins</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-3xl font-bold text-blue-400">{stats.gamesPlayed}</p>
                <p className="text-sm text-slate-400">Games Played</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-3xl font-bold text-purple-400">{stats.winRate}%</p>
                <p className="text-sm text-slate-400">Win Rate</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-3xl font-bold text-orange-400">{stats.mvps}</p>
                <p className="text-sm text-slate-400">MVP Awards</p>
              </div>
            </div>
          </div>

          {/* Offensive Stats */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Target className="text-red-400" size={20} />
              Offensive Stats
            </h3>
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Goals Scored</span>
                <span className="text-xl font-bold">{stats.goals}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Assists</span>
                <span className="text-xl font-bold">{stats.assists}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Goal Contributions</span>
                <span className="text-xl font-bold text-green-400">{stats.goals + stats.assists}</span>
              </div>
            </div>
          </div>

          {/* Physical Stats (Wearables) */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Watch className="text-cyan-400" size={20} />
              Physical Performance
            </h3>
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl p-4 border border-cyan-500/30">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="text-cyan-400" size={16} />
                <span className="text-xs text-cyan-300">Connected: Apple Watch</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Heart className="text-red-400" size={16} />
                    <span className="text-sm text-slate-400">Avg Heart Rate</span>
                  </div>
                  <p className="text-2xl font-bold">{stats.avgHeartRate} <span className="text-sm text-slate-500">bpm</span></p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="text-yellow-400" size={16} />
                    <span className="text-sm text-slate-400">Total Distance</span>
                  </div>
                  <p className="text-2xl font-bold">{stats.totalDistance} <span className="text-sm text-slate-500">km</span></p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Flame className="text-orange-400" size={16} />
                    <span className="text-sm text-slate-400">Calories Burned</span>
                  </div>
                  <p className="text-2xl font-bold">{stats.totalCalories.toLocaleString()}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="text-green-400" size={16} />
                    <span className="text-sm text-slate-400">Longest Streak</span>
                  </div>
                  <p className="text-2xl font-bold">{stats.longestStreak} <span className="text-sm text-slate-500">days</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Position Ratings */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Star className="text-purple-400" size={20} />
              Position Ratings
            </h3>
            <div className="space-y-3">
              {positions.map((pos, idx) => (
                <div key={idx} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{pos.name}</span>
                    <span className="text-2xl font-bold text-green-400">{pos.rating}</span>
                  </div>
                  <div className="bg-slate-900 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full"
                      style={{ width: `${pos.rating}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{pos.games} games played</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Performance */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="text-blue-400" size={20} />
              Recent Performance
            </h3>
            <div className="space-y-2">
              {recentPerformance.map((game, idx) => (
                <div key={idx} className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                        game.result === 'W' ? 'bg-green-500/20 text-green-400' :
                        game.result === 'L' ? 'bg-red-500/20 text-red-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {game.result}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{game.date}</p>
                        <p className="text-xs text-slate-500">Match Rating: {game.rating}</p>
                      </div>
                    </div>
                    <ChevronRight className="text-slate-600" size={20} />
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div>
                      <p className="text-xs text-slate-500">Goals</p>
                      <p className="text-lg font-bold">{game.goals}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Assists</p>
                      <p className="text-lg font-bold">{game.assists}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">HR</p>
                      <p className="text-lg font-bold text-red-400">{game.heartRate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Dist</p>
                      <p className="text-lg font-bold text-cyan-400">{game.distance}km</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Achievements View */}
      {activeTab === 'achievements' && (
        <div className="px-6 mt-6">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Unlocked Achievements</h3>
              <span className="text-sm text-slate-400">{achievements.length}/50</span>
            </div>
            <div className="bg-slate-800 rounded-full h-2 mt-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full"
                style={{ width: `${(achievements.length / 50) * 100}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${getRarityColor(achievement.rarity)} rounded-xl p-4 border-2 ${getRarityBorder(achievement.rarity)} shadow-lg`}>
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <p className="font-bold text-sm mb-1">{achievement.title}</p>
                <p className="text-xs opacity-90 mb-2">{achievement.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] bg-black/30 px-2 py-1 rounded-full uppercase font-semibold">
                    {achievement.rarity}
                  </span>
                  <span className="text-[10px] opacity-75">{achievement.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Locked Achievements Preview */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-3 text-slate-400">Coming Soon...</h3>
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-4 border-2 border-slate-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm flex items-center justify-center">
                    <Award className="text-slate-600" size={40} />
                  </div>
                  <div className="text-4xl mb-2 opacity-20">🔒</div>
                  <p className="font-bold text-sm text-slate-600">???</p>
                </div>
              ))}
            </div>
          </div>
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
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
              <Shield size={20} className="text-slate-400" />
            </div>
            <span className="text-xs text-slate-500">Social</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
              <Target size={20} />
            </div>
            <span className="text-xs font-medium text-purple-400">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}