"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <BackgroundEffect />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient">
          Build. Deploy. Scale.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          The ultimate cloud-powered development & deployment platform.
        </p>

        <div className="mt-6 flex space-x-4">
          <Link href="/signup">
            <Button className="bg-blue-500 text-white">🚀 Get Started</Button>
          </Link>
          <Link href="/LearnMore">
            <Button className="border border-white text-white">
              📖 Learn More
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.section
        className="relative z-10 mt-16 px-6 md:px-20 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-4xl font-bold text-white">🚀 Why Choose Creatathon?</h2>
        <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section className="relative z-10 mt-16 px-6 md:px-20 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">💬 What Developers Say</h2>
        <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section className="relative z-10 mt-16 px-6 md:px-20 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">Get Started Today</h2>
        <p className="mt-4 text-lg text-gray-300">
          Join thousands of developers already using CodeX.
        </p>
        <div className="mt-6">
          <Link href="/signup">
            <Button className="bg-green-500 text-white px-8 py-4 text-xl">
              🚀 Sign Up Now
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

// ✅ Button Component
function Button({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
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
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-gray-900/70 backdrop-blur-lg rounded-xl shadow-lg text-left hover:shadow-xl hover:-translate-y-2 transition"
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold text-white mt-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  );
}

// ✅ Feature Data
const features = [
  {
    icon: "🚀",
    title: "Lightning Fast Deployment",
    description: "Ship your code in seconds with our zero-config deployment.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Debugging",
    description: "Instantly detect and fix issues with AI-assisted debugging.",
  },
  {
    icon: "☁️",
    title: "Cloud-Based Collaboration",
    description: "Work seamlessly with your team in a fully cloud-based environment.",
  },
];

// ✅ Testimonial Card
function TestimonialCard({
  name,
  feedback,
}: {
  name: string;
  feedback: string;
}) {
  return (
    <motion.div className="p-6 bg-gray-800 backdrop-blur-lg rounded-xl shadow-lg text-left hover:shadow-xl hover:-translate-y-2 transition">
      <p className="text-gray-300 text-sm">&quot;{feedback}&quot;</p>
      <h4 className="text-lg font-semibold text-white mt-2">- {name}</h4>
    </motion.div>
  );
}

// ✅ Testimonials Data
const testimonials = [
  {
    name: "Alice Johnson",
    feedback: "Createathon made my workflow 10x faster! Highly recommended!",
  },
  {
    name: "Mark Smith",
    feedback: "AI debugging is a game-changer. Fixed bugs in minutes!",
  },
  {
    name: "Sophia Lee",
    feedback: "Seamless collaboration with my team. Love the cloud integration!",
  },
  {
    name: "Jake Wilson",
    feedback: "Zero-config deployment is a lifesaver. A must for developers!",
  },
];

// ✅ Background Animation Effect
function BackgroundEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute w-40 h-40 bg-blue-500 rounded-full opacity-20"
        animate={{ x: [0, 200, 0], y: [0, -100, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-32 h-32 bg-purple-500 rounded-full opacity-20 bottom-10 right-10"
        animate={{ x: [0, -150, 0], y: [0, 80, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-48 h-48 bg-green-500 rounded-full opacity-10 top-20 left-20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
