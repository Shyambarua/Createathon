'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function ProfilePage() {
  const user = {
    name: 'Shyam Barua',
    avatar: '/avtar.jpeg', // Change to actual avatar URL
    bio: 'MERN Stack Developer | UI/UX Enthusiast | GSoC 2025 Aspirant',
    location: 'KIIT University, India',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Next.js', 'AWS', 'UI/UX'],
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
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white flex flex-col items-center pt-20 px-6">
      {/* User Info */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }} 
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl text-center"
      >
        <img src={user.avatar} alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md border-2 border-green-500" />
        <h2 className="text-3xl font-bold text-white">{user.name}</h2>
        <p className="text-gray-400">{user.bio}</p>
        <p className="text-gray-500 mt-2">📍 {user.location}</p>
      </motion.div>

      {/* Skills Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }} 
        className="mt-8 w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-xl font-semibold text-white">Skills</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {user.skills.map((skill, index) => (
            <span key={index} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.4 }} 
        className="mt-8 w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
        <ul className="mt-4 space-y-2">
          {user.completedChallenges.map((challenge, index) => (
            <li key={index} className="bg-gray-700 p-3 rounded-lg shadow-sm text-gray-300">
              ✅ {challenge}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Earned Badges */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.6 }} 
        className="mt-8 w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-xl font-semibold text-white">Earned Badges</h3>
        <div className="mt-4 flex space-x-3 justify-center">
          {user.badges.map((badge, index) => (
            <span key={index} className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">
              {badge}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Performance Analytics */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.8 }} 
        className="mt-8 w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-xl font-semibold text-white">Performance Progress</h3>
        <div className="mt-4 w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={user.progress}>
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip contentStyle={{ backgroundColor: '#222', color: '#fff' }} />
              <Line type="monotone" dataKey="score" stroke="#38bdf8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 2 }} 
        className="mt-8 w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg text-center"
      >
        <h3 className="text-xl font-semibold text-white">Connect with Me</h3>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-blue-400 text-2xl hover:text-blue-500">
            <FaGithub />
          </a>
          <a href="#" className="text-blue-400 text-2xl hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="#" className="text-blue-400 text-2xl hover:text-blue-500">
            <FaTwitter />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
