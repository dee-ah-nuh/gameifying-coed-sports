import React, { useState } from 'react';
import { Users, Settings, Plus, Crown, Shield, Zap, Target, Heart, ChevronDown, Save, Share2, MessageSquare } from 'lucide-react';

export default function TeamManagement() {
  const [activeView, setActiveView] = useState('lineup');
  const [selectedFormation, setSelectedFormation] = useState('4-3-3');
  const [draggedPlayer, setDraggedPlayer] = useState(null);

  const team = {
    name: "Thunder FC",
    captain: "You",
    overall: 78,
    chemistry: 85,
    wins: 12,
    losses: 5,
    draws: 2
  };

  const formations = ['4-3-3', '4-4-2', '3-5-2', '4-2-3-1'];

  const positions = {
    '4-3-3': [
      { id: 'gk', x: 50, y: 90, label: 'GK' },
      { id: 'lb', x: 20, y: 70, label: 'LB' },
      { id: 'cb1', x: 40, y: 70, label: 'CB' },
      { id: 'cb2', x: 60, y: 70, label: 'CB' },
      { id: 'rb', x: 80, y: 70, label: 'RB' },
      { id: 'cm1', x: 30, y: 45, label: 'CM' },
      { id: 'cm2', x: 50, y: 50, label: 'CM' },
      { id: 'cm3', x: 70, y: 45, label: 'CM' },
      { id: 'lw', x: 20, y: 20, label: 'LW' },
      { id: 'st', x: 50, y: 15, label: 'ST' },
      { id: 'rw', x: 80, y: 20, label: 'RW' }
    ]
  };

  const players = [
    { id: 1, name: "Alex Morgan", position: "ST", rating: 85, pace: 88, shooting: 90, passing: 78, available: true, captain: true },
    { id: 2, name: "Jordan Lee", position: "GK", rating: 82, diving: 85, handling: 88, reflexes: 84, available: true },
    { id: 3, name: "Sam Rivera", position: "CM", rating: 80, pace: 75, passing: 85, dribbling: 82, available: true },
    { id: 4, name: "Casey Park", position: "CB", rating: 79, defending: 86, physical: 84, pace: 70, available: true },
    { id: 5, name: "Taylor Swift", position: "LW", rating: 83, pace: 90, dribbling: 88, shooting: 79, available: true },
    { id: 6, name: "Morgan Chase", position: "RB", rating: 77, pace: 82, defending: 80, passing: 75, available: false },
    { id: 7, name: "Jamie Fox", position: "CM", rating: 81, passing: 84, dribbling: 80, defending: 76, available: true },
    { id: 8, name: "Riley Brooks", position: "CB", rating: 78, defending: 83, physical: 85, pace: 68, available: true },
    { id: 9, name: "Avery Stone", position: "RW", rating: 82, pace: 87, shooting: 83, dribbling: 85, available: true },
    { id: 10, name: "Drew Miller", position: "LB", rating: 76, pace: 80, defending: 78, passing: 74, available: true },
    { id: 11, name: "Quinn Davis", position: "CM", rating: 75, passing: 78, defending: 74, pace: 72, available: true }
  ];

  const [lineup, setLineup] = useState({
    gk: players[1],
    lb: players[9],
    cb1: players[3],
    cb2: players[7],
    rb: players[5],
    cm1: players[2],
    cm2: players[6],
    cm3: players[10],
    lw: players[4],
    st: players[0],
    rw: players[8]
  });

  const getRatingColor = (rating) => {
    if (rating >= 85) return 'text-green-400';
    if (rating >= 80) return 'text-blue-400';
    if (rating >= 75) return 'text-purple-400';
    return 'text-slate-400';
  };

  const handleDragStart = (player) => {
    setDraggedPlayer(player);
  };

  const handleDrop = (positionId) => {
    if (draggedPlayer) {
      setLineup({ ...lineup, [positionId]: draggedPlayer });
      setDraggedPlayer(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 rounded-b-3xl shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              {team.name}
              <Shield className="text-yellow-400" size={24} />
            </h1>
            <p className="text-blue-100 text-sm flex items-center gap-1">
              <Crown size={14} />
              Captain: {team.captain}
            </p>
          </div>
          <button className="bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:bg-white/30 transition-all">
            <Settings size={20} />
          </button>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
            <p className="text-2xl font-bold">{team.overall}</p>
            <p className="text-xs text-blue-100">Overall</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
            <p className="text-2xl font-bold">{team.chemistry}</p>
            <p className="text-xs text-blue-100">Chemistry</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-green-400">{team.wins}</p>
            <p className="text-xs text-blue-100">Wins</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-red-400">{team.losses}</p>
            <p className="text-xs text-blue-100">Losses</p>
          </div>
        </div>
      </div>

      {/* View Toggle */}
      <div className="px-6 mt-6">
        <div className="flex gap-2 bg-slate-800/50 rounded-xl p-1">
          <button
            onClick={() => setActiveView('lineup')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
              activeView === 'lineup' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Lineup Builder
          </button>
          <button
            onClick={() => setActiveView('roster')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
              activeView === 'roster' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Full Roster
          </button>
        </div>
      </div>

      {activeView === 'lineup' && (
        <div className="px-6 mt-6">
          {/* Formation Selector */}
          <div className="mb-4">
            <label className="text-sm text-slate-400 mb-2 block">Formation</label>
            <div className="flex gap-2">
              {formations.map((formation) => (
                <button
                  key={formation}
                  onClick={() => setSelectedFormation(formation)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedFormation === formation
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {formation}
                </button>
              ))}
            </div>
          </div>

          {/* Soccer Field */}
          <div className="bg-gradient-to-b from-green-700 to-green-600 rounded-2xl p-4 relative overflow-hidden border-4 border-white/20 shadow-2xl mb-6"
               style={{ height: '500px' }}>
            {/* Field Lines */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/30"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/30 rounded-full"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 border-2 border-white/30 border-t-0"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-12 border-2 border-white/30 border-b-0"></div>
            </div>

            {/* Player Positions */}
            {positions[selectedFormation].map((pos) => (
              <div
                key={pos.id}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(pos.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              >
                {lineup[pos.id] ? (
                  <div className="flex flex-col items-center">
                    <div className="bg-indigo-600 border-2 border-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <span className="text-xs font-bold">{lineup[pos.id].rating}</span>
                      <span className="text-[10px] opacity-90">{pos.label}</span>
                    </div>
                    <span className="text-[10px] font-semibold mt-1 bg-black/50 px-2 py-0.5 rounded-full">
                      {lineup[pos.id].name.split(' ')[0]}
                    </span>
                  </div>
                ) : (
                  <div className="bg-slate-800/80 border-2 border-dashed border-slate-500 rounded-full w-16 h-16 flex items-center justify-center hover:border-indigo-400 transition-all">
                    <span className="text-xs font-bold text-slate-500">{pos.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all">
              <Save size={18} />
              Save Lineup
            </button>
            <button className="flex-1 bg-slate-800 hover:bg-slate-700 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all">
              <Share2 size={18} />
              Share
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 py-3 px-4 rounded-xl transition-all">
              <MessageSquare size={18} />
            </button>
          </div>

          {/* Available Players */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Users size={20} />
              Available Players
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {players.filter(p => p.available && !Object.values(lineup).includes(p)).map((player) => (
                <div
                  key={player.id}
                  draggable
                  onDragStart={() => handleDragStart(player)}
                  className="bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-indigo-500 transition-all cursor-move"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-sm">{player.name}</p>
                      <p className="text-xs text-slate-400">{player.position}</p>
                    </div>
                    <span className={`text-xl font-bold ${getRatingColor(player.rating)}`}>
                      {player.rating}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {player.pace && (
                      <div className="text-center">
                        <p className="text-[10px] text-slate-500">PAC</p>
                        <p className="text-xs font-semibold">{player.pace}</p>
                      </div>
                    )}
                    {player.shooting && (
                      <div className="text-center">
                        <p className="text-[10px] text-slate-500">SHO</p>
                        <p className="text-xs font-semibold">{player.shooting}</p>
                      </div>
                    )}
                    {player.passing && (
                      <div className="text-center">
                        <p className="text-[10px] text-slate-500">PAS</p>
                        <p className="text-xs font-semibold">{player.passing}</p>
                      </div>
                    )}
                    {player.defending && (
                      <div className="text-center">
                        <p className="text-[10px] text-slate-500">DEF</p>
                        <p className="text-xs font-semibold">{player.defending}</p>
                      </div>
                    )}
                    {player.dribbling && (
                      <div className="text-center">
                        <p className="text-[10px] text-slate-500">DRI</p>
                        <p className="text-xs font-semibold">{player.dribbling}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeView === 'roster' && (
        <div className="px-6 mt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Team Roster</h3>
            <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all">
              <Plus size={16} />
              Add Player
            </button>
          </div>

          <div className="space-y-3">
            {players.map((player) => (
              <div key={player.id} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-16 h-20 rounded-lg flex flex-col items-center justify-center font-bold ${
                      player.rating >= 85 ? 'bg-gradient-to-b from-yellow-600 to-yellow-700' :
                      player.rating >= 80 ? 'bg-gradient-to-b from-blue-600 to-blue-700' :
                      'bg-gradient-to-b from-slate-600 to-slate-700'
                    }`}>
                      <span className="text-2xl">{player.rating}</span>
                      <span className="text-[10px] opacity-75">{player.position}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold">{player.name}</p>
                        {player.captain && <Crown className="text-yellow-400" size={14} />}
                      </div>
                      <div className="flex items-center gap-4 mb-2">
                        <span className={`text-xs px-2 py-1 rounded ${
                          player.available ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {player.available ? 'Available' : 'Unavailable'}
                        </span>
                      </div>
                      <div className="flex gap-3 text-xs">
                        {player.pace && (
                          <div className="flex items-center gap-1">
                            <Zap size={12} className="text-yellow-400" />
                            <span>{player.pace} PAC</span>
                          </div>
                        )}
                        {player.shooting && (
                          <div className="flex items-center gap-1">
                            <Target size={12} className="text-red-400" />
                            <span>{player.shooting} SHO</span>
                          </div>
                        )}
                        {player.physical && (
                          <div className="flex items-center gap-1">
                            <Heart size={12} className="text-pink-400" />
                            <span>{player.physical} PHY</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-white">
                    <ChevronDown size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 px-6 py-4">
        <div className="flex justify-around items-center max-w-lg mx-auto">
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
              <Shield size={20} className="text-slate-400" />
            </div>
            <span className="text-xs text-slate-500">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
              <Users size={20} />
            </div>
            <span className="text-xs font-medium text-indigo-400">Team</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
              <MessageSquare size={20} className="text-slate-400" />
            </div>
            <span className="text-xs text-slate-500">Social</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
              <Target size={20} className="text-slate-400" />
            </div>
            <span className="text-xs text-slate-500">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}