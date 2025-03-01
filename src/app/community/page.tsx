"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Community() {
  const [leaderboardType, setLeaderboardType] = useState("global");
  const [comments, setComments] = useState([
    { user: "Alice", text: "Anyone stuck on Challenge 5? I need help!" },
    { user: "Mark", text: "Just cleared the hardest level! 🎉" },
  ]);
  const [newComment, setNewComment] = useState("");

  const globalLeaderboard = [
    { rank: 1, name: "Alice Johnson", score: 1580 },
    { rank: 2, name: "Mark Smith", score: 1470 },
    { rank: 3, name: "Sophia Lee", score: 1395 },
  ];

  const challengeLeaderboard = [
    { rank: 1, name: "David Brown", score: 320 },
    { rank: 2, name: "Emily Davis", score: 310 },
    { rank: 3, name: "Michael Wilson", score: 295 },
  ];

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { user: "User123", text: newComment }]);
      setNewComment("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex pt-[80px]">
      {/* Left Sidebar */}
      <div className="w-1/3 p-6 border-r border-gray-700 h-[calc(100vh-80px)] overflow-y-auto">
        {/* Leaderboard */}
        <motion.div className="p-6 bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-bold text-yellow-400">Leaderboard</h2>
          <div className="mt-3 flex gap-4">
            <button
              onClick={() => setLeaderboardType("global")}
              className={`px-4 py-2 rounded-lg text-sm ${
                leaderboardType === "global" ? "bg-blue-500" : "bg-gray-700"
              }`}
            >
              Global
            </button>
            <button
              onClick={() => setLeaderboardType("challenge")}
              className={`px-4 py-2 rounded-lg text-sm ${
                leaderboardType === "challenge" ? "bg-green-500" : "bg-gray-700"
              }`}
            >
              Challenge
            </button>
          </div>

          <ul className="mt-4 text-gray-300 text-sm space-y-2">
            {(leaderboardType === "global"
              ? globalLeaderboard
              : challengeLeaderboard
            ).map((user, index) => (
              <li key={index} className="p-2 bg-gray-700 rounded-lg">
                #{user.rank} {user.name} - {user.score} pts
              </li>
            ))}
          </ul>
        </motion.div>

        {/* User Profile */}
        <motion.div className="mt-6 p-6 bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-bold text-purple-400">User Profile</h2>
          <p className="text-gray-400 text-sm mt-2">🔥 Achievements Unlocked</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-yellow-500 text-black rounded-lg text-sm">
              🏆 Top 10
            </span>
            <span className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm">
              🔥 50 Challenges
            </span>
            <span className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm">
              🚀 Fast Solver
            </span>
          </div>
        </motion.div>
      </div>

      {/* Right Panel */}
      <div className="w-2/3 p-6 h-[calc(100vh-80px)] overflow-y-auto">
        {/* Discussion Section */}
        <motion.div className="p-6 bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-bold text-green-400">Discussion</h2>
          <div className="h-56 overflow-y-auto bg-gray-700 p-4 rounded mt-2">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="mb-3 p-3 bg-gray-600 rounded">
                  <p className="text-sm text-gray-300">{comment.user}:</p>
                  <p>{comment.text}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No comments yet. Be the first to comment!</p>
            )}
          </div>
          {/* Comment Input */}
          <div className="mt-4 flex">
            <input
              className="flex-1 p-2 rounded-l bg-gray-700 text-white"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r" onClick={handleAddComment}>
              Post
            </button>
          </div>
        </motion.div>

        {/* Social Sharing */}
        <motion.div className="mt-6 p-6 bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-bold text-cyan-400">Share Your Progress</h2>
          <p className="text-gray-400 text-sm mt-3">
            Let others know about your achievements!
          </p>
          <button className="mt-4 bg-blue-500 px-4 py-2 rounded-lg text-sm">
            Share Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}
