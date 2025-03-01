'use client';

// import { useState } from 'react';
import { motion } from 'framer-motion';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

export default function Dashboard() {
  // Dummy data
  const completedChallenges = ['Reverse String', 'Binary Search', 'Sorting Algorithm'];
  const ongoingChallenges = ['Graph Traversal', 'Dynamic Programming'];

  const userStats = {
    progress: 75, // Example: 75% completed
    totalChallenges: 50,
    completed: 38,
    ongoing: 5,
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white flex pt-[80px] px-8">
      
      {/* Left Sidebar */}
      <div className="w-1/4 p-6 border-r border-gray-700 h-screen overflow-y-auto">
        
        {/* Progress Overview */}
        <motion.div className="p-6 bg-gray-800 rounded-lg shadow flex flex-col items-center">
          <h2 className="text-xl font-bold text-blue-400">Progress Overview</h2>
          <div className="w-24 h-24 mt-4">
            {/* <CircularProgressbar
              value={userStats.progress}
              text={`${userStats.progress}%`}
              styles={buildStyles({
                textColor: 'white',
                pathColor: '#4F46E5',
                trailColor: '#2D3748',
              })}
            /> */}
          </div>
          <p className="text-gray-400 text-sm mt-3">
            {userStats.completed} / {userStats.totalChallenges} challenges completed
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div className="mt-6 p-6 bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-bold text-green-400">Achievements</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-yellow-500 text-black rounded-lg text-sm">🏆 Expert Coder</span>
            <span className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm">🔥 10 Challenges</span>
            <span className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm">🚀 Speed Solver</span>
          </div>
        </motion.div>
        
      </div>

      {/* Right Panel */}
      <div className="w-3/4 p-6 h-screen overflow-y-auto">
        
        {/* Completed Challenges */}
        <motion.div className="p-6 bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-bold text-purple-400">Completed Challenges</h2>
          <ul className="mt-3 text-gray-300 text-sm space-y-2">
            {completedChallenges.map((challenge, index) => (
              <li key={index} className="p-2 bg-gray-700 rounded-lg">
                ✅ {challenge}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Ongoing Challenges */}
        <motion.div className="mt-6 p-6 bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-bold text-orange-400">Ongoing Challenges</h2>
          <ul className="mt-3 text-gray-300 text-sm space-y-2">
            {ongoingChallenges.map((challenge, index) => (
              <li key={index} className="p-2 bg-gray-700 rounded-lg">
                ⏳ {challenge}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Personal Performance Analytics */}
        <motion.div className="mt-6 p-6 bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-bold text-cyan-400">Performance Analytics</h2>
          <p className="text-gray-400 text-sm mt-3">Your coding speed and accuracy are improving! Keep pushing forward! 🚀</p>
        </motion.div>

      </div>

    </div>
  );
}
