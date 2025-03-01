'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate login API call (Replace with actual authentication logic)
    setTimeout(() => {
      console.log('User logged in:', formData);
      router.push('/dashboard'); // Redirect to dashboard or profile page
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center">Welcome Back</h2>
        <p className="text-gray-400 text-center mt-2">Login to continue</p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-300">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 bg-gray-700 rounded-lg focus:outline-none" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          
          <div className="mt-4">
            <label className="block text-gray-300">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-2 p-3 bg-gray-700 rounded-lg focus:outline-none" 
              placeholder="Enter your password" 
              required 
            />
          </div>

          <button type="submit" className="w-full mt-6 bg-blue-500 hover:bg-blue-600 transition p-3 rounded-lg text-white font-semibold">
            Login
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Don't have an account? <Link href="/signup" className="text-blue-400 hover:underline">Sign Up</Link>
        </p>
      </motion.div>
    </div>
  );
}
