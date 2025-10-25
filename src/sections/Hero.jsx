import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl px-6 py-20">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6 text-sm tracking-widest text-amber-400 uppercase font-semibold"
        >
          Website Kể Chuyện Tương Tác • Lịch Sử Việt Nam
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-white mb-6"
        >
          "Mỹ nhất định thua.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            Nhưng chỉ sau khi thua
            <br />
            trên bầu trời Hà Nội"
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Lời tiên đoán lịch sử của Chủ tịch Hồ Chí Minh năm 1967 – Mở ra chương
          huyền thoại trong cuộc đối đầu với "pháo đài bay" B-52 trên bầu trời
          Hà Nội tháng 12/1972.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex gap-4 justify-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("context")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Khám Phá Câu Chuyện
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
