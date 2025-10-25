import React, { useState, useEffect } from "react";
import { FaFire, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md
      bg-white/80 text-[#0F172A] shadow-sm transition-all duration-500
      ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div
          className="flex items-center gap-2 text-amber-600 text-xl font-bold cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <FaFire />
          <span className="hidden sm:inline">Điện Biên Phủ Trên Không</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => scrollToSection("context")}
            className="hover:text-amber-600 transition"
          >
            Bối Cảnh
          </button>
          <button
            onClick={() => scrollToSection("strategy")}
            className="hover:text-amber-600 transition"
          >
            Chiến Lược
          </button>
          <button
            onClick={() => scrollToSection("battle")}
            className="hover:text-amber-600 transition"
          >
            Trận Chiến
          </button>
          <button
            onClick={() => scrollToSection("victory")}
            className="hover:text-amber-600 transition"
          >
            Chiến Thắng
          </button>
        </div>

        <button className="md:hidden text-[#0F172A]/80 hover:text-amber-600 transition text-xl">
          <FaBars />
        </button>
      </div>
    </nav>
  );
}
