import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PartyPopper, X } from 'lucide-react';
import posterImage from '../assets/Photos/Poster.png'; // Import the image file

const InaugurationNotification = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenInauguration', 'true');
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleMaximize = () => {
    setIsMinimized(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isMinimized ? 0 : 0.5 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 bg-black z-[60] ${isMinimized ? 'pointer-events-none' : ''}`}
            onClick={() => !isMinimized && handleMinimize()}
          />

          {/* Notification */}
          <motion.div
            initial={isMinimized ? { top: '4rem' } : { opacity: 0, scale: 0.9 }}
            animate={
              isMinimized
                ? { top: '4rem', x: '-50%' }
                : { opacity: 1, scale: 1, top: '50%', x: '-50%', y: '-50%' }
            }
            exit={isMinimized ? { top: -100 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`fixed left-1/2 z-[70] ${
              isMinimized
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 py-3 px-6 rounded-b-lg shadow-md'
                : 'bg-white w-[90%] max-w-lg rounded-lg shadow-2xl'
            }`}
          >
            {isMinimized ? (
              // Minimized version
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  <PartyPopper className="w-5 h-5 animate-bounce" />
                  <p className="font-medium text-sm sm:text-base">Grand Inauguration on February 17, 2025!</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleMaximize}
                    className="text-white hover:text-gray-200 transition-colors flex items-center text-sm"
                  >
                    <span className="hidden sm:inline">Show Details</span>
                    <span className="sm:hidden">Details</span>
                  </button>
                  <div className="w-px h-4 bg-white/30" />
                  <button
                    onClick={handleClose}
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              // Full version
              <div className="p-8">
                <div className="flex justify-end">
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-center  ">
                  <PartyPopper className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-bounce" />
                  <h2 className="text-3xl font-serif text-gray-900 mb-4">Grand Inauguration!</h2>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-xl font-semibold">Join us on February 17, 2025</p>
                    <p className="text-lg">Time: 4:00 PM</p>
                  </div>
                  {/* <div className='overflow-y-scroll mt-4'> */}
                    
                  <img src={posterImage} alt="Inauguration Poster" className="w-full max-h-72 sm:max-h-64 object-contain mb-4" />
                  {/* </div> */}
                  <button
                    onClick={handleMinimize}
                    className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                  >
                    Continue to Website
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InaugurationNotification;