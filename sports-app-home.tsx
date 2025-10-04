import React, { useState } from 'react';
import { Trophy, MapPin, Calendar, TrendingUp, Flame, Award, Users, ChevronRight, Star } from 'lucide-react';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('all');
  
  const user = {
    name: "Alex",
    level: 12,
    xp: 2450,
    xpToNext: 3000,
    streak: 5,
    team: "Thunder FC"
  };

  const recentGames = [
    { id: 1, sport: "Soccer", result: "W", score: "5-3", opponent: "Lightning SC", date: "Oct 2", xp: 150 },
    { id: 2, sport: "Soccer", result: "L", score: "2-4", opponent: "Storm United", date: "Sep 28", xp: 75 },
    { id: 3, sport: "Soccer", result: "W", score: "6-2", opponent: "Bolt FC", date: "Sep 25", xp: 180 }
  ];

  const nearbyGames = [
    { id: 1, sport: "Soccer", venue: "Lincoln Park Field 3", time: "Today, 6:30 PM", distance: "1.2 mi", needsPlayers: 2, skill: "Intermediate" },
    { id: 2, sport: "Basketball", venue: "West Side Courts", time: "Today, 7:00 PM", distance: "2.5 mi", needsPlayers: 1, skill: "Advanced" },
    { id: 3, sport: "Soccer", venue: "Grant Park", time: "Tomorrow, 5:00 PM", distance: "0.8 mi", needsPlayers: 3, skill: "Beginner" }
  ];

  const weeklyChallenge = {
    title: "Score 5 goals this week",
    progress: 3,
    total: 5,
    reward: "200 XP + Golden Boot Badge"
  };

  const recentAchievements = [
    { icon: "🎯", title: "Hat Trick Hero", desc: "Score 3 goals in one game" },
    { icon: "🔥", title: "5 Game Streak", desc: "Play 5 games in a row" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-b-3xl shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Hey, {user.name}! 👋</h1>
            <p className="text-blue-100 text-sm">{user.team}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end">
              <Flame className="text-orange-400" size={20} />
              <span className="text-xl font-bold">{user.streak}</span>
            </div>
            <p className="text-xs text-blue-100">day streak</p>
          </div>
        </div>

        {/* XP Progress Bar */}
        <div className="bg-white/20 rounded-full p-1 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-1 px-2">
            <span className="text-xs font-semibold">Level {user.level}</span>
            <span className="text-xs">{user.xp}/{user.xpToNext} XP</span>
          </div>
          <div className="bg-white/30 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${(user.xp / user.xpToNext) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 px-6 -mt-6">
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700 shadow-lg">
          <Trophy className="text-yellow-400 mb-2" size={24} />
          <p className="text-2xl font-bold">12</p>
          <p className="text-xs text-slate-400">Wins</p>
        </div>
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700 shadow-lg">
          <TrendingUp className="text-green-400 mb-2" size={24} />
          <p className="text-2xl font-bold">23</p>
          <p className="text-xs text-slate-400">Goals</p>
        </div>
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700 shadow-lg">
          <Award className="text-purple-400 mb-2" size={24} />
          <p className="text-2xl font-bold">8</p>
          <p className="text-xs text-slate-400">MVPs</p>
        </div>
      </div>

      {/* Weekly Challenge */}
      <div className="px-6 mt-6">
        <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl p-5 backdrop-blur-sm">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Star className="text-amber-400" size={20} />
                <h3 className="font-bold text-lg">Weekly Challenge</h3>
              </div>
              <p className="text-sm text-slate-300">{weeklyChallenge.title}</p>
            </div>
            <span className="text-xs bg-amber-500/30 px-2 py-1 rounded-full">
              {weeklyChallenge.reward.split('+')[0]}
            </span>
          </div>
          <div className="bg-slate-900/50 rounded-full h-4 overflow-hidden mb-2">
            <div 
              className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all"
              style={{ width: `${(weeklyChallenge.progress / weeklyChallenge.total) * 100}%` }}
            />
          </div>
          <p className="text-xs text-slate-400 text-right">{weeklyChallenge.progress}/{weeklyChallenge.total} goals</p>
        </div>
      </div>

      {/* Recent Achievements */}
      {recentAchievements.length > 0 && (
        <div className="px-6 mt-6">
          <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
            <Award className="text-purple-400" size={20} />
            Recent Unlocks
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {recentAchievements.map((achievement, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl p-4 min-w-[200px] border border-purple-500/30 shadow-lg">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <p className="font-semibold text-sm">{achievement.title}</p>
                <p className="text-xs text-slate-400 mt-1">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="px-6 mt-6">
        <div className="flex gap-2 bg-slate-800/50 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Recent Games
          </button>
          <button
            onClick={() => setActiveTab('nearby')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'nearby' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Nearby Games
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-6 mt-4">
        {activeTab === 'all' && (
          <div className="space-y-3">
            {recentGames.map((game) => (
              <div key={game.id} className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      game.result === 'W' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {game.result}
                    </div>
                    <div>
                      <p className="font-semibold">{game.opponent}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <p className="text-sm text-slate-400">{game.sport}</p>
                        <span className="text-slate-600">•</span>
                        <p className="text-sm text-slate-400">{game.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{game.score}</p>
                    <p className="text-xs text-green-400">+{game.xp} XP</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'nearby' && (
          <div className="space-y-3">
            {nearbyGames.map((game) => (
              <div key={game.id} className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-blue-500 transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold bg-blue-600/20 text-blue-400 px-2 py-1 rounded">
                        {game.sport}
                      </span>
                      <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                        {game.skill}
                      </span>
                    </div>
                    <p className="font-semibold text-sm mb-1">{game.venue}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{game.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{game.distance}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="text-slate-600" size={20} />
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-slate-700">
                  <Users className="text-orange-400" size={16} />
                  <span className="text-sm text-orange-400 font-medium">
                    Need {game.needsPlayers} more {game.needsPlayers === 1 ? 'player' : 'players'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 px-6 py-4">
        <div className="flex justify-around items-center max-w-lg mx-auto">
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <Trophy size={20} />
            </div>
            <span className="text-xs font-medium text-blue-400">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
              <Users size={20} className="text-slate-400" />
            </div>
            <span className="text-xs text-slate-500">Team</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
              <Calendar size={20} className="text-slate-400" />
            </div>
            <span className="text-xs text-slate-500">Social</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
              <TrendingUp size={20} className="text-slate-400" />
            </div>
            <span className="text-xs text-slate-500">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}