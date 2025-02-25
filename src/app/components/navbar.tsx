'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Createathon
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link href="/challenges" className="text-gray-700 hover:text-blue-600">Challenges</Link>
          <Link href="/leaderboard" className="text-gray-700 hover:text-blue-600">Leaderboard</Link>
          <Link href="/community" className="text-gray-700 hover:text-blue-600">Community</Link>
          <Link href="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2 flex flex-col">
          <Link href="/challenges" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Challenges</Link>
          <Link href="/leaderboard" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Leaderboard</Link>
          <Link href="/community" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Community</Link>
          <Link href="/profile" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Profile</Link>
        </div>
      )}
    </nav>
  );
}