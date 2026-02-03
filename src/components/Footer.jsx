import { FaBook } from "react-icons/fa";
import { source, sourceUrl } from "../content/article";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="flex items-center justify-center gap-3 text-amber-500 text-2xl font-bold mb-4">
          <FaBook />
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition"
          >
            {source}
          </a>
        </div>
        <p className="text-sm mb-6">
          Bài viết gốc đăng trên Tạp chí Quản lý nhà nước
        </p>
        <p className="text-xs text-gray-500">
          © 2025 • Được xây dựng với React & Framer Motion
        </p>
      </div>
    </footer>
  );
}
