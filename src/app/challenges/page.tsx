'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { EditorState } from '@codemirror/state';
import { basicSetup } from 'codemirror';


export default function ChallengePage() {
  const [code, setCode] = useState('// Write your solution here');
  const [timeLeft, setTimeLeft] = useState(300); // 5-minute timer
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleSubmit = () => {
    // Simulate test case execution
    setResult("✅ All test cases passed!");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 p-6">
      {/* Problem Statement */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg overflow-y-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900">Challenge: Reverse a String</h1>
        <p className="text-gray-600 mt-2">Difficulty: <span className="font-semibold">Beginner</span></p>
        <div className="mt-4 text-gray-700">
          <ReactMarkdown>
            {`### Problem Statement
            Given a string, write a function to reverse it.
            
            **Example:**
            
            \`\`\`js
            Input: "hello"
            Output: "olleh"
            \`\`\`
            `}
          </ReactMarkdown>
        </div>
        <div className="mt-6">
          <p className="text-gray-800 font-semibold">Time Left: {timeLeft}s</p>
        </div>
      </motion.div>
      
      {/* Code Editor */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg mt-6 md:mt-0 md:ml-6"
      >
        <h2 className="text-2xl font-semibold text-gray-900">Code Editor</h2>
        <textarea 
          className="w-full mt-4 p-2 border rounded-lg font-mono text-sm" 
          rows={10}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <div className="mt-4 flex justify-between">
          <Button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700" onClick={handleSubmit}>
            Submit
          </Button>
          {result && <p className="text-green-600 font-semibold">{result}</p>}
        </div>
      </motion.div>
    </div>
  );
}


function Button({ children, className = '', ...props }) {
    return (
      <button className={`px-4 py-2 rounded-lg font-medium transition ${className}`} {...props}>
        {children}
      </button>
    );
  }
  