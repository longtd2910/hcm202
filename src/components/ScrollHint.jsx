import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setVisible(false);
      else setVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-40"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-2 text-amber-400/80"
      >
        <div className="w-10 h-10 rounded-full bg-amber-500/10 backdrop-blur-sm border border-amber-400/30 flex items-center justify-center">
          <FaArrowDown className="text-lg" />
        </div>
        <span className="text-xs font-medium text-white/70">Cuộn xuống</span>
      </motion.div>
      <motion.div
        className="w-px h-12 bg-gradient-to-b from-amber-400/50 to-transparent mt-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  );
}
