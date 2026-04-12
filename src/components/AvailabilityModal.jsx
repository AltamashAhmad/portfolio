import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaTimes, FaBriefcase } from 'react-icons/fa';

function AvailabilityModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);

  // Auto-show after 3 seconds, then minimize after 10 seconds
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsMinimized(false);
    }, 3000);

    const minimizeTimer = setTimeout(() => {
      setIsMinimized(true);
    }, 13000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(minimizeTimer);
    };
  }, []);

  const toggleModal = () => {
    setIsMinimized(!isMinimized);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Altamash! I found your portfolio and would like to discuss opportunities.");
    const phoneNumber = "971568408658"; // UAE number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Job Opportunity - Let's Connect");
    const body = encodeURIComponent("Hi Altamash,\n\nI found your portfolio and I'm impressed with your work. I'd like to discuss some exciting opportunities that might be a good fit for your skills.\n\nWould you be available for a brief conversation?\n\nBest regards,");
    window.open(`mailto:altamashahmadajaz2@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl dark:shadow-gray-700 border border-gray-200 dark:border-gray-700 p-4 w-80 mb-4 transition-colors duration-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Immediately Available to Join</h3>
              </div>
              <button 
                onClick={toggleModal}
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>

            {/* Content */}
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
              Ready to start immediately! Experienced full-stack developer seeking exciting opportunities to contribute to innovative teams and projects.
            </p>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <FaWhatsapp className="text-sm" />
                Message on WhatsApp
              </button>
              <button
                onClick={handleEmail}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <FaEnvelope className="text-sm" />
                Send Email
              </button>
            </div>

            {/* Footer */}
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
              Response within 24 hours
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized Button */}
      <motion.button
        onClick={toggleModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-full shadow-lg transition-all ${
          !isMinimized ? 'opacity-50' : 'opacity-100'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <FaBriefcase className="text-sm" />
          <span className="text-sm font-medium">Open to Join</span>
        </div>
      </motion.button>
    </div>
  );
}

export default AvailabilityModal;
