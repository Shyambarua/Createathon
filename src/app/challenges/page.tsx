'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Editor from '@monaco-editor/react';

export default function Challenge() {
  const [code, setCode] = useState('// Write your solution here...');
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      const result = new Function(`return (${code})()`)();
      setOutput(String(result));
    } catch (error) {
      if (error instanceof Error) {
        setOutput(`Error: ${error.message}`);
      } else {
        setOutput('Error: An unknown error occurred');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white flex pt-[80px]">
      {/* Left Sidebar */}
      <div className="w-1/3 p-6 space-y-6 border-r border-gray-700 h-screen overflow-y-auto">
        {/* Problem Statement */}
        <motion.div className="p-4 bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-bold text-blue-400">Problem Statement</h2>
          <p className="text-gray-300 text-sm mt-2">
            Implement a function to reverse a string without using built-in methods.
          </p>
        </motion.div>

        {/* Hint Section */}
        <motion.div className="p-4 bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-bold text-green-400">Hint</h2>
          <p className="text-gray-300 text-sm mt-2">
            Try using a loop and swapping characters from start to end.
          </p>
        </motion.div>

        {/* Leaderboard */}
        <motion.div className="p-4 bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-bold text-yellow-400">Leaderboard</h2>
          <ul className="text-gray-300 text-sm mt-2 space-y-1">
            <li>🚀 Alice - 10s</li>
            <li>⚡ Bob - 12s</li>
            <li>🔥 Charlie - 15s</li>
          </ul>
        </motion.div>
      </div>

      {/* Right Panel */}
      <div className="w-2/3 p-6 flex flex-col h-screen overflow-y-auto">
        {/* Code Editor */}
        <motion.div className="flex-1 bg-gray-900 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold text-purple-400">Code Editor</h2>
          <Editor
            height="300px"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || '')}
          />
        </motion.div>

        {/* Run Button */}
        <button
          onClick={runCode}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Run Code
        </button>

        {/* Test Cases & Output */}
        <div className="flex mt-6 space-x-6">
          {/* Test Cases */}
          <motion.div className="flex-1 p-4 bg-gray-800 rounded-lg shadow">
            <h2 className="text-xl font-bold text-orange-400">Test Cases</h2>
            <ul className="text-gray-300 text-sm mt-2 space-y-1">
              <li>✅ Input: &quot;hello&quot; → Output: &quot;olleh&quot;</li>
              <li>✅ Input: &quot;world&quot; → Output: &quot;dlrow&quot;</li>
              <li>❌ Input: &quot;code&quot; → Output: &quot;edoc&quot; (Wrong Answer)</li>
            </ul>
          </motion.div>

          {/* Output Section */}
          <motion.div className="flex-1 p-4 bg-gray-800 rounded-lg shadow">
            <h2 className="text-xl font-bold text-red-400">Output</h2>
            <div className="mt-2 p-2 bg-black rounded text-green-400 text-sm">
              {output || 'Run your code to see output...'}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
