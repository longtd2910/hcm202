import React, { useState, useEffect } from "react";
import { FaBook, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
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
    setMobileMenuOpen(false);
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl
        bg-white/90 border-b border-gray-200/50 text-[#0F172A] shadow-lg transition-all duration-500
        ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-18 flex items-center justify-between">
          <div
            className="flex items-center gap-3 text-amber-600 text-xl font-bold cursor-pointer group"
            onClick={() => scrollToSection("hero")}
          >
            <div className="p-2 rounded-lg bg-amber-100 group-hover:bg-amber-200 transition-colors">
              <FaBook className="text-amber-700" />
            </div>
            <span className="hidden sm:inline bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Nhóm 10
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200 relative group"
              >
                {label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-600 group-hover:w-3/4 transition-all duration-200" />
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden mt-[72px] bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl">
          <div className="px-4 py-6 space-y-2">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="w-full text-left px-4 py-3 text-base font-medium text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
