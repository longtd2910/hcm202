import React, { useState, useEffect } from "react";
import { FaBook, FaBars } from "react-icons/fa";

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

  const navItems = [
    { id: "context", label: "Tóm tắt" },
    { id: "dap-van-de", label: "Đặt vấn đề" },
    { id: "tu-tuong-hcm", label: "Tư tưởng HCM" },
    { id: "van-dung", label: "Vận dụng" },
    { id: "giai-phap", label: "Giải pháp" },
    { id: "ket-luan", label: "Kết luận" },
    { id: "chu-thich", label: "Chú thích" },
  ];

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
          <FaBook />
          <span className="hidden sm:inline">Tạp chí QLNN</span>
        </div>

        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="hover:text-amber-600 transition whitespace-nowrap"
            >
              {label}
            </button>
          ))}
        </div>

        <button className="md:hidden text-[#0F172A]/80 hover:text-amber-600 transition text-xl">
          <FaBars />
        </button>
      </div>
    </nav>
  );
}
