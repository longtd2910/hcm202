import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

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
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 flex flex-col items-center animate-bounce z-40">
      <FaArrowDown className="text-2xl" />
      <span className="text-xs mt-1 font-medium">Cuộn xuống</span>
    </div>
  );
}
