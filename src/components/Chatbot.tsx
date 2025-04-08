"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Chatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hey there! Need help with something?" },
  ]);
  const [input, setInput] = useState("");
  const [botTyping, setBotTyping] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    setBotTyping(true);

    setTimeout(() => {
      setBotTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: getBotResponse(input),
        },
      ]);
    }, 1500);
  };

  const getBotResponse = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes("hi") || lowerInput.includes("hello")) {
      return "Hello! 😊 How can I assist you today?";
    } else if (lowerInput.includes("help")) {
      return "Sure! Let me know what you're looking for. 🤖";
    } else if (lowerInput.includes("thanks")) {
      return "You're welcome! ✨";
    }
    return "Hmm... I'm still learning. But I'm here to help! 😊";
  };

  return (
    <>
      {/* Chatbot Floating Button */}
      <div className="fixed bottom-6 right-6">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transition"
        >
          {chatOpen ? "❌" : "💬"}
        </motion.button>
      </div>

      {/* Chatbot Window */}
      {chatOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-16 right-6 w-80 p-4 bg-gray-900 rounded-lg shadow-xl h-72 flex flex-col border border-gray-700"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-700 pb-2">
            <div className="flex items-center gap-2">
              <span className="bg-green-400 w-8 h-8 rounded-full flex items-center justify-center text-black font-bold">
                🤖
              </span>
              <h2 className="text-lg font-bold text-green-400">Creatathon Bot</h2>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-gray-400 hover:text-red-500">
              ❌
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto mt-2 space-y-2 scrollbar-hide">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: msg.sender === "user" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 self-end text-white"
                    : "bg-gray-700 text-gray-200"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}

            {botTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="bg-gray-700 text-gray-200 p-2 rounded-lg max-w-fit"
              >
                Typing<span className="animate-pulse">...</span>
              </motion.div>
            )}
          </div>

          {/* Input Field */}
          <div className="mt-4 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
              placeholder="Type a message..."
            />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={sendMessage}
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
            >
              🚀
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
}
