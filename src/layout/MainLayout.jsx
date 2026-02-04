import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer.jsx";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] transition-colors">
      {/* ProgressBar luôn nằm TRÊN CÙNG */}
      <ProgressBar />

      {/* Navbar tự ẩn/hiện khi scroll */}
      <Navbar />

      {/* Nội dung trang (Hero, Context, v.v.) */}
      <div className="pt-[72px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
