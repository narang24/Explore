"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../contexts/ModalContext";

export default function ComingSoonModal() {
  const { isOpen, message, icon, closeModal } = useModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl"
          >
            <div className="text-5xl mb-3">{icon}</div>
            <h2 className="text-xl font-semibold mb-2">Feature Notice</h2>
            <p className="text-gray-600 mb-5">{message}</p>
            <button
              onClick={closeModal}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
