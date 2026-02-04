export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-400 py-16 border-t border-slate-800/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-amber-500/80">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <span className="text-amber-400 font-bold">10</span>
            </div>
            <span className="font-semibold text-white">Nhóm 10</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 • Được xây dựng với React & Framer Motion
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mt-2" />
        </div>
      </div>
    </footer>
  );
}
