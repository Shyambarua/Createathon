'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 text-center px-6 pt-56">
      {/* Hero Section */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-5xl  md:text-7xl font-extrabold text-gray-900 drop-shadow-lg"
      >
        Welcome to <span className="text-blue-600">Createathon</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
        className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl"
      >
        Join interactive coding challenges, track your progress, and compete with others. Enhance your skills and become a top creator!
      </motion.p>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 2 }}
        className="mt-6 flex space-x-4"
      >
        <Link href="/challenges">
          <Button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
            Get Started
          </Button>
        </Link>
        <Link href="/community">
          <Button className="px-6 py-3 bg-gray-200 text-gray-800 text-lg rounded-lg shadow-lg hover:bg-gray-300 transition-transform transform hover:scale-105">
            Join Community
          </Button>
        </Link>
      </motion.div>
      <motion.img 
        src="/hero.webp" 
        alt="Coding Challenges" 
        className="mt-10 w-full max-w-2xl drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Key Features Section */}
      <section className="mt-16 w-full max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-gray-900">Why Choose Createathon?</h2>
        <motion.ul 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mt-6 space-y-4 text-gray-700"
        >
          <li className="bg-white p-4 shadow-lg rounded-lg">✅ Interactive Coding Challenges</li>
          <li className="bg-white p-4 shadow-lg rounded-lg">🎯 Real-time Leaderboards</li>
          <li className="bg-white p-4 shadow-lg rounded-lg">🏆 Reward-based Progress System</li>
          <li className="bg-white p-4 shadow-lg rounded-lg">🤝 Community-driven Learning</li>
        </motion.ul>
      </section>
      
      {/* Showcase Top Challenges */}
      <section className="mt-16 w-full max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-gray-900">Top Challenges</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 shadow-lg rounded-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900">Hack the Algorithm</h3>
            <p className="text-gray-700">Solve challenging algorithms to enhance your problem-solving skills.</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 shadow-lg rounded-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900">Web Dev Showdown</h3>
            <p className="text-gray-700">Build and optimize web applications with real-world scenarios.</p>
          </motion.div>
        </div>
      </section>
      
      {/* Leaderboard Highlights */}
      <section className="mt-16 w-full max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-gray-900">Leaderboard Highlights</h2>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 2 }}
          className="mt-6 bg-white p-6 shadow-lg rounded-lg"
        >
          <p className="text-gray-700">🔥 <strong>Top Performer:</strong> John Doe (5000 Points)</p>
          <p className="text-gray-700">🏅 <strong>Runner-up:</strong> Jane Smith (4700 Points)</p>
        </motion.div>
      </section>
      
      {/* Sign-up/Login Buttons */}
      <div className="mt-16 flex space-x-4">
        <Link href="/signup">
          <Button className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105">
            Sign Up
          </Button>
        </Link>
        <Link href="/login">
          <Button className="px-6 py-3 bg-gray-800 text-white text-lg rounded-lg shadow-lg hover:bg-gray-900 transition-transform transform hover:scale-105">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}

function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}