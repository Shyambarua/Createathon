'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { questions } from '../../data/questions';
import type { Question } from '@/types/questions';
import Editor from '@monaco-editor/react';
import { motion } from 'framer-motion';

export default function QuestionPage() {
  const { id } = useParams();
  const [question, setQuestion] = useState<Question | null>(null);
  const [code, setCode] = useState('// Write your solution here...');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const q = questions.find((q) => q.id === id) ?? null;
    setQuestion(q);
  }, [id]);

  const runCode = () => {
    try {
      const result = new Function(`return (${code})()`)();
      setOutput(String(result));
    } catch (error) {
      if (error instanceof Error) {
        setOutput(`Error: ${error.message}`);
      } else {
        setOutput('Error: Unknown error occurred');
      }
    }
  };

  if (!question) return <div className="text-white p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-6 flex">
      {/* Left Sidebar - Problem Details */}
      <div className="w-1/3 p-4 border-r border-gray-700 space-y-6">
        <motion.div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold text-blue-400">Problem: {question.title}</h2>
          <p className="text-sm mt-2 text-white/80">
            Write a function to solve this problem. Make sure you cover edge cases.
          </p>
          <div className="mt-4">
            <span className="font-semibold">Difficulty: </span>
            <span
              className={`${
                question.difficulty === 'Hard'
                  ? 'text-red-500'
                  : question.difficulty === 'Medium'
                  ? 'text-yellow-400'
                  : 'text-green-400'
              }`}
            >
              {question.difficulty}
            </span>
          </div>
          <p className="text-sm mt-2 text-white/50">Acceptance: {question.acceptance}%</p>
        </motion.div>

        <motion.div className="bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-bold text-green-400 text-lg">Hint</h3>
          <p className="text-sm text-white/80 mt-2">Think about using a hash map or two pointers.</p>
        </motion.div>
      </div>

      {/* Right Section - Code Editor & Output */}
      <div className="w-2/3 p-4 flex flex-col">
        <motion.div className="flex-1 bg-gray-900 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold text-purple-400 mb-2">Code Editor</h2>
          <Editor
            height="300px"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || '')}
          />
        </motion.div>

        <button
          onClick={runCode}
          className="mt-4 bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded font-semibold"
        >
          Run Code
        </button>

        <motion.div className="mt-4 p-4 bg-gray-800 rounded-lg shadow">
          <h2 className="text-lg font-bold text-orange-400">Output</h2>
          <div className="mt-2 bg-black p-2 rounded text-green-400 text-sm min-h-[40px]">
            {output || 'Click Run Code to see the result...'}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
