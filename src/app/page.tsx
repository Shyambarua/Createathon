'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center min-h-screen text-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Develop Faster. Deploy Smarter.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          The ultimate cloud-powered coding and deployment platform for modern developers.
        </p>

        <div className="mt-6 flex space-x-4">
          <Link href="/signup">
            <Button className="bg-blue-500 text-white">Get Started</Button>
          </Link>
          <Link href="/docs">
            <Button className="border border-white text-white">Learn More</Button>
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.section 
        className="mt-16 px-6 md:px-20 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-4xl font-bold text-white">Why Createathon?</h2>
        <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section className="mt-16 px-6 md:px-20 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">What Developers Say</h2>
        <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section className="mt-16 px-6 md:px-20 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">Get Started Today</h2>
        <p className="mt-4 text-lg text-gray-300">Join thousands of developers already using CodeX.</p>
        <div className="mt-6">
          <Link href="/signup">
            <Button className="bg-green-500 text-white px-8 py-4 text-xl">Sign Up Now</Button>
          </Link>
        </div>
      </motion.section>

      
    </div>
  );
}

// ✅ Button Component
function Button({ children, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 text-lg rounded-lg shadow-lg transition ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

// ✅ Feature Card
function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-gray-900/70 rounded-xl shadow-lg text-left"
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold text-white mt-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  );
}

// ✅ Feature Data
const features = [
  { icon: '🚀', title: 'Lightning Fast Deployment', description: 'Ship your code in seconds with our zero-config deployment system.' },
  { icon: '⚙️', title: 'AI-Powered Debugging', description: 'Get real-time AI suggestions for fixing your code instantly.' },
  { icon: '☁️', title: 'Cloud-Based Collaboration', description: 'Work seamlessly with your team in a fully cloud-based dev environment.' },
];

// ✅ Testimonials Data
const testimonials = [
  { name: 'Alice Johnson', feedback: 'Createathon made my workflow 10x faster! Highly recommend to all developers.' },
  { name: 'Mark Smith', feedback: 'AI debugging is a game-changer. Found and fixed bugs in minutes!' },
  { name: 'Alice Johnson', feedback: 'Craetathon made my workflow 10x faster! Highly recommend to all developers.' },
  { name: 'Mark Smith', feedback: 'AI debugging is a game-changer. Found and fixed bugs in minutes!' },
];

// ✅ Testimonial Card
function TestimonialCard({ name, feedback }) {
  
  return (
    <motion.div className="p-6 bg-gray-800 rounded-xl shadow-lg text-left">
      <p className="text-gray-300 text-sm">"{feedback}"</p>
      <h4 className="text-lg font-semibold text-white mt-2">- {name}</h4>
    </motion.div>
  );
}
