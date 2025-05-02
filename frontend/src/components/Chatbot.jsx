
import React, { useState, useEffect } from "react";
import { Minimize2, Maximize2 } from "lucide-react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);

  useEffect(() => {
    const handleReceiveMessage = (message) => {
      setMessages((prev) => [...prev, { text: message, sender: "bot" }]);
    };

    const handleReady = () => {
      setIsReady(true);
    };

    socket.on("receiveMessage", handleReceiveMessage);
    socket.on("ready", handleReady);
    socket.emit("join-room");

    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
      socket.off("ready", handleReady);
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    socket.emit("sendMessage", input);
    setInput("");
  };

  const toggleChatbot = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={toggleChatbot}
        className={`flex items-center gap-2 px-6 py-3 text-white rounded-full shadow-xl transition-all duration-300 ease-in-out ${
          isMinimized
            ? "bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700"
            : "bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800"
        }`}
      >
        {isMinimized ? <Maximize2 size={20} /> : <Minimize2 size={20} />}
        {isMinimized ? "Open HealthBot" : "Minimize"}
      </button>

      {/* Chatbox */}
      {!isMinimized && (
        <div className="w-[350px] md:w-[400px] mt-4 bg-white border border-green-500 shadow-2xl rounded-3xl overflow-hidden animate__animated animate__fadeInUp animate__fast">
          <div className="bg-green-600 text-white text-center py-3 font-semibold text-lg tracking-wider shadow-lg">
            🩺 AI Healthcare Chatbot
          </div>

          <div className="h-72 overflow-y-auto bg-gray-50 px-4 py-3 space-y-2 scroll-smooth">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl max-w-[80%] transition-all duration-300 ease-in-out ${
                  msg.sender === "user"
                    ? "ml-auto bg-gradient-to-r from-green-200 to-green-300 text-right shadow-md"
                    : "mr-auto bg-gray-300 text-left shadow-md"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex gap-2 border-t px-3 py-3 bg-white border-t-2 border-gray-300">
            <input
              type="text"
              placeholder="Ask about symptoms, advice, diseases..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-3 mb-3 text-sm rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200"
            />
            <button
              onClick={sendMessage}
              className="px-6 py-3 bg-green-600 mb-3 text-white rounded-lg hover:bg-green-700 transition-all duration-200"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
