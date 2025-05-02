import React, { useState, useRef, useEffect } from "react";
import {
  ChatBubbleLeftEllipsisIcon,
  ShoppingCartIcon,
  HeartIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Services = () => {
  const [communityMessages, setCommunityMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [likes, setLikes] = useState({});
  const [cart, setCart] = useState([]);
  const [medicine, setMedicine] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("community");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [communityMessages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newMsg = { text: newMessage, time };
      setCommunityMessages([...communityMessages, newMsg]);
      setNewMessage("");
    }
  };

  const toggleLike = (index) => {
    setLikes({ ...likes, [index]: !likes[index] });
  };

  const handleAddMedicine = () => {
    if (medicine.trim() && price && quantity > 0) {
      const medObj = {
        name: medicine,
        price: parseFloat(price),
        quantity: parseInt(quantity),
      };
      setCart([...cart, medObj]);
      setMedicine("");
      setPrice("");
      setQuantity(1);
    }
  };

  const removeMedicine = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const totalBill = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirmOrder = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is empty!");
      return;
    }

    toast.success("🎉 Order Confirmed! Thank you for your purchase.", {
      position: "top-center",
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

    setCart([]); // Clear cart hona h after the  confirmation
  };

  return (
    <div className="p-6 max-w-5xl mx-auto font-sans text-gray-800">
      <ToastContainer />

      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8 drop-shadow-md">
        Healthcare Services
      </h1>

      <div className="flex justify-center mb-6">
        <button
          className={`px-6 py-3 font-semibold rounded-l-xl transition ${
            activeTab === "community" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("community")}
        >
          Community
        </button>
        <button
          className={`px-6 py-3 font-semibold rounded-r-xl transition ${
            activeTab === "telemedicine" ? "bg-green-600 text-white" : "bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("telemedicine")}
        >
          Telemedicine
        </button>
      </div>

      {/* COMMUNITY ka SECTION */}
      {activeTab === "community" && (
        <div className="backdrop-blur-lg bg-white/70 shadow-xl p-6 rounded-2xl transition">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
            <ChatBubbleLeftEllipsisIcon className="w-6 h-6 mr-2" />
            Connect with Others
          </h2>
          <div className="space-y-3 h-60 overflow-y-auto p-4 bg-gray-100 rounded-md shadow-inner">
            {communityMessages.length ? (
              communityMessages.map((msg, index) => (
                <div key={index} className="flex justify-between items-center bg-white p-3 rounded-lg shadow">
                  <div>
                    <p className="text-gray-700">{msg.text}</p>
                    <span className="text-xs text-gray-400">{msg.time}</span>
                  </div>
                  <button onClick={() => toggleLike(index)}>
                    <HeartIcon className={`w-5 h-5 ml-2 ${likes[index] ? "text-red-500" : "text-gray-300"}`} />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">No messages yet. Be the first to start the discussion!</p>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="mt-4 flex">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* TELE-:)MEDICINE SECTION */}
      {activeTab === "telemedicine" && (
        <div className="backdrop-blur-lg bg-white/70 shadow-xl p-6 rounded-2xl transition">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
            <ShoppingCartIcon className="w-6 h-6 mr-2" />
            Order Medicines
          </h2>
          <div className="space-y-3 mb-4">
            {cart.length ? (
              cart.map((med, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded-md flex justify-between items-center shadow">
                  <div>
                    <p className="font-semibold">{med.name}</p>
                    <p className="text-sm text-gray-600">
                      ₹{med.price} x {med.quantity} = ₹{med.price * med.quantity}
                    </p>
                  </div>
                  <button onClick={() => removeMedicine(index)}>
                    <XMarkIcon className="w-5 h-5 text-red-500 hover:text-red-700" />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">No medicines in cart yet.</p>
            )}
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-2">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="Medicine name"
              value={medicine}
              onChange={(e) => setMedicine(e.target.value)}
            />
            <input
              type="number"
              className="p-2 border border-gray-300 rounded"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="number"
              className="p-2 border border-gray-300 rounded"
              placeholder="Qty"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
            />
            <button
              onClick={handleAddMedicine}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Add
            </button>
          </div>

          <div className="mt-6 text-lg font-semibold text-right">
            Total: ₹{totalBill}
          </div>

          <div className="mt-4 text-right">
            <button
              onClick={handleConfirmOrder}
              className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;


