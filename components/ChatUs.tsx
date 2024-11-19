'use client'
import React, { useState } from 'react';
import { MessageCircle, X, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const StickyContactChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setShowSocial(false);
  };

  const toggleSocial = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowSocial(!showSocial);
  };

  return (
    <div className="fixed bottom-5 left-2 z-50">
      <div 
        className={`bg-white rounded-lg shadow-lg transition-all duration-300 ${
          isOpen ? 'w-64 h-96' : 'w-16 h-16'
        }`}
      >
        {isOpen ? (
          <div className="p-4 h-full flex flex-col">
            <button 
              onClick={toggleOpen}
              className="self-end text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <div className="space-y-4 mb-4">
              <div className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-500" />
                <span>contact@example.com</span>
              </div>
            </div>
            <button 
              onClick={toggleSocial}
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition-colors"
            >
              {showSocial ? 'Hide Social Links' : 'Show Social Links'}
            </button>
            {showSocial && (
              <div className="mt-4 flex justify-around">
                <a href="#" className="text-blue-600 hover:text-blue-800" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600" aria-label="Twitter">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-800" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-pink-800 hover:text-pink-700" aria-label="Mail">
                  <Mail size={24} />
                </a>
                
              </div>
            )}
            <div className="mt-auto">
              <textarea 
                className="w-full p-2 border rounded"
                placeholder="Type your message here..."
                rows={3}
              />
              <button className="mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors w-full">
                Send Message
              </button>
            </div>
          </div>
        ) : (
          <button 
            onClick={toggleOpen}
            className="w-full h-full flex items-center justify-center bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            aria-label="Open contact chat"
          >
            <MessageCircle size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default StickyContactChat;
