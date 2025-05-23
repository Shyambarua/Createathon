'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-opacity-40 backdrop-blur-md bg-gray-900 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-white tracking-wide">
          CRAETATHON
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="/questions" mobile={false} onClick={() => {}}>Challenges</NavLink>
          <NavLink href="/community" mobile={false} onClick={() => {}}>Community</NavLink>
          <NavLink href="/dashboard" mobile={false} onClick={() => {}}>Dashboard</NavLink>
          <NavLink href="/profile" mobile={false} onClick={() => {}}>Profile</NavLink>

        </div>
        
        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
        <Link href="/login" className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg">
            Login
          </Link>
          <Link href="/signup" className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90 backdrop-blur-lg shadow-md px-6 py-4 flex flex-col space-y-4">
          <NavLink href="/questions" mobile onClick={() => setIsOpen(false)}>Challenges</NavLink>
          <NavLink href="/dashboard" mobile onClick={() => setIsOpen(false)}>Dashboard</NavLink>
          <NavLink href="/community" mobile onClick={() => setIsOpen(false)}>Community</NavLink>
          <NavLink href="/profile" mobile onClick={() => setIsOpen(false)}>Profile</NavLink>
         
          <Link href="/login" className="px-6 py-2 rounded-md bg-blue-600 text-white text-center hover:bg-blue-700 transition shadow-lg" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link href="/signup" className="px-6 py-2 rounded-md bg-blue-600 text-white text-center hover:bg-blue-700 transition shadow-lg" onClick={() => setIsOpen(false)}>
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

// Reusable NavLink Component
function NavLink({ href, children, mobile, onClick }: { href: string; children: React.ReactNode; mobile?: boolean; onClick?: () => void; }) {

  return (
    <Link 
      href={href} 
      className={`text-white ${mobile ? 'text-lg block' : 'hover:text-blue-500 transition'}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
