'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { contactConfig } from '@/config/contact';

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePhoneCall = () => {
    window.open(`tel:${contactConfig.phoneLink}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = "Hello! I'm interested in learning more about Level Up Math Academy's services.";
    const whatsappUrl = `https://wa.me/${contactConfig.phoneLink.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mb-4 space-y-3"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {/* Phone Button */}
            <motion.button
              onClick={handlePhoneCall}
              className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg shadow-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">Call Now</span>
            </motion.button>

            {/* WhatsApp Button */}
            <motion.button
              onClick={handleWhatsApp}
              className="flex items-center space-x-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 rounded-lg shadow-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">WhatsApp</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        onClick={toggleMenu}
        className="w-14 h-14 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:opacity-90"
        style={{ backgroundColor: '#30519d' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
