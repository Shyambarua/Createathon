"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Chatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "This is a static response!" },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot Floating Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          💬
        </button>
      </div>

      {/* Chatbot Window */}
      {chatOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-16 right-6 w-80 p-4 bg-gray-800 rounded-lg shadow-lg h-64 flex flex-col"
        >
          <h2 className="text-xl font-bold text-green-400">Creatathon agent</h2>
          <div className="flex-1 overflow-y-auto mt-2 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-xs ${
                  msg.sender === "user" ? "bg-blue-500 self-end" : "bg-gray-600"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="mt-4 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 rounded-lg bg-gray-700 text-white"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
