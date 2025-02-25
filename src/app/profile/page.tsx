'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function ProfilePage() {
  const user = {
    name: 'John Doe',
    avatar: '/avatar.png', // Change to actual avatar URL
    bio: 'Passionate full-stack developer & problem solver.',
    completedChallenges: ['Algorithm Master', 'Web Dev Pro', 'Database Guru'],
    badges: ['🔥 Top Coder', '🏆 Hackathon Winner', '💡 Innovator'],
    progress: [
      { month: 'Jan', score: 120 },
      { month: 'Feb', score: 180 },
      { month: 'Mar', score: 250 },
      { month: 'Apr', score: 320 },
      { month: 'May', score: 400 },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-6">
      {/* User Info */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }} 
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl text-center"
      >
        <img src={user.avatar} alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md" />
        <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
        <p className="text-gray-600">{user.bio}</p>
      </motion.div>

      {/* Completed Challenges */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }} 
        className="mt-8 w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-xl font-semibold text-gray-900">Completed Challenges</h3>
        <ul className="mt-4 space-y-2">
          {user.completedChallenges.map((challenge, index) => (
            <li key={index} className="bg-gray-200 p-3 rounded-lg shadow-sm text-gray-700">
              ✅ {challenge}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Earned Badges */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.4 }} 
        className="mt-8 w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-xl font-semibold text-gray-900">Earned Badges</h3>
        <div className="mt-4 flex space-x-3 justify-center">
          {user.badges.map((badge, index) => (
            <span key={index} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
              {badge}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Performance Analytics */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.6 }} 
        className="mt-8 w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-xl font-semibold text-gray-900">Performance Progress</h3>
        <div className="mt-4 w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={user.progress}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
