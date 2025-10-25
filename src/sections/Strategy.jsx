import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

export default function Strategy() {
  const strategies = [
    {
      icon: "🎯",
      title: "Đánh Trúng Yếu Huyệt",
      desc: "Không quân Mỹ là lực lượng ưu thế nhưng cũng là 'bộ mặt' và niềm tự hào. Đánh thắng B-52 trên Hà Nội = đánh vào ý chí và uy tín Mỹ.",
    },
    {
      icon: "🛡️",
      title: "Phòng Không Hiện Đại",
      desc: "Xây dựng hệ thống tên lửa SAM, pháo phòng không, kết hợp với chiến thuật linh hoạt để đối phó với 'pháo đài bay'.",
    },
    {
      icon: "💬",
      title: "Đánh & Đàm Phán",
      desc: "Vừa đánh vừa đàm, đàm vừa đánh. Thắng lợi quân sự tạo thế chính trị, buộc Mỹ phải đàm phán trong thế yếu.",
    },
  ];

  return (
    <AnimatedSection
      id="strategy"
      className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs tracking-widest uppercase text-amber-400 font-bold">
          Chương 2
        </p>

        <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
          Đường Lối & Chiến Lược
          <br />
          <span className="text-amber-400">Của Đảng</span>
        </h2>

        <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-3xl">
          Đảng Cộng sản Việt Nam xác định rõ: Hà Nội là trái tim Cách mạng,
          không thể khuất phục. Chiến thắng trên bầu trời Hà Nội sẽ là đòn quyết
          định.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {strategies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 border border-white/10"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
