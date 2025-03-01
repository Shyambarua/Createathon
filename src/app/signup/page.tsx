'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center">Create an Account</h2>
        <p className="text-gray-400 text-center mt-2">Sign up to get started</p>

        <form className="mt-6">
          <div>
            <label className="block text-gray-300">Username</label>
            <input type="text" className="w-full mt-2 p-3 bg-gray-700 rounded-lg focus:outline-none" placeholder="Choose a username" />
          </div>

          <div className="mt-4">
            <label className="block text-gray-300">Email</label>
            <input type="email" className="w-full mt-2 p-3 bg-gray-700 rounded-lg focus:outline-none" placeholder="Enter your email" />
          </div>
          
          <div className="mt-4">
            <label className="block text-gray-300">Password</label>
            <input type="password" className="w-full mt-2 p-3 bg-gray-700 rounded-lg focus:outline-none" placeholder="Create a password" />
          </div>

          <button className="w-full mt-6 bg-green-500 hover:bg-green-600 transition p-3 rounded-lg text-white font-semibold">
            Sign Up
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Already have an account? <Link href="/login" className="text-blue-400 hover:underline">Login</Link>
        </p>
      </motion.div>
    </div>
  );
}
