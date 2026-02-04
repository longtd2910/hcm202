import { motion } from "framer-motion";
import { title, date, source, authors, lead } from "../content/article";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251,191,36,0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(251,191,36,0.1) 50%, transparent 70%)`,
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl px-6 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 text-xs tracking-[0.2em] text-amber-400/90 uppercase font-medium bg-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur-sm">
            {date}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-white mb-8 tracking-tight"
        >
          <span className="block bg-gradient-to-r from-white via-amber-50 to-white bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm text-amber-200/90">
            <span className="text-amber-400/70 font-medium">Tác giả:</span>
            {authors.map((a, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="font-medium">{a.name}</span>
                {a.affiliation && (
                  <span className="text-amber-300/60 text-xs">
                    {a.affiliation}
                  </span>
                )}
                {i < authors.length - 1 && (
                  <span className="text-amber-400/40 mx-1">•</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light"
        >
          {lead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 flex gap-4 justify-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("context")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-10 py-4 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Đọc tiếp
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-amber-400/50 to-transparent" />
      </motion.div>
    </section>
  );
}
