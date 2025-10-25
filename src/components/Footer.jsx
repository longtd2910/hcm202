import { FaFire } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="flex items-center justify-center gap-3 text-amber-500 text-2xl font-bold mb-4">
          <FaFire />
          <span>Điện Biên Phủ Trên Không</span>
        </div>
        <p className="text-sm mb-6">
          Website kể chuyện tương tác về chiến thắng lịch sử tháng 12/1972
        </p>
        <p className="text-xs text-gray-500">
          © 2025 - Tư liệu lịch sử Việt Nam • Được xây dựng với React & Framer
          Motion
        </p>
      </div>
    </footer>
  );
}
