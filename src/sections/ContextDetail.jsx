import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import IMAGES from "../../public/assets/images";
import { FaPlayCircle, FaStopCircle } from "react-icons/fa";
import { useSpeechSynthesis } from "../hook/useSpeechSynthesis.jsx";
const TIMELINE = [
  {
    time: "20:15 — 18/12/1972",
    text: "Bắt đầu rồi! Từ phía Tây, tiếng còi hú xé toạc màn đêm. Đèn phố vụt tắt, Hà Nội chìm vào bóng tối đặc quánh. Dưới mặt đất, nòng pháo ngẩng cao. Tất cả các trận địa phòng không chuyển trạng thái sẵn sàng chiến đấu cao nhất!",
    img: IMAGES.siren,
  },
  {
    time: "22:05",
    text: "Tín hiệu xác nhận! Hàng chục đốm sáng lạ xuất hiện trên màn hình radar. Chúng không phải nhiễu. Bộ chỉ huy nhận định dứt khoát: B-52 đã vào đội hình ném bom. Lệnh chiến đấu được phát ra trên toàn thành phố.",
    img: IMAGES.radar,
  },
  {
    time: "22:45",
    text: "Chúng đến. Những tiếng nổ long trời làm rung chuyển cả thành phố. Lửa bốc lên từ Khâm Thiên, ga Yên Viên, bệnh viện Bạch Mai. Nhưng từ trong khói lửa, những con rồng lửa SAM-2 vẫn gầm thét lao vút lên, rạch ngang bầu trời đêm.",
    img: IMAGES.sam,
  },
  {
    time: "23:00 — 19/12",
    text: "Trúng rồi! Một pháo đài bay B-52 bốc cháy như một ngọn đuốc khổng lồ, rơi xuống ngoại thành. Tiếng reo hò vang dậy từ các trận địa, át cả tiếng bom. Đêm nay, huyền thoại 'Điện Biên Phủ trên không' bắt đầu được viết nên.",
    img: IMAGES.b52,
  },
];

function TimelineItem({
  time,
  text,
  img,
  index,
  handleSpeak,
  isCurrentlySpeaking,
}) {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["0.6 1", "0.2 0.4"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);

  return (
    <motion.div
      ref={itemRef}
      className="grid md:grid-cols-2 gap-8 items-center"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, delay: index * 0.08 }}
    >
      <div className="order-2 md:order-1">
        <div className="flex justify-between items-center mb-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-amber-600 font-semibold tracking-wide"
          >
            {time}
          </motion.p>
          <button
            onClick={() => handleSpeak(text)}
            className="text-slate-400 hover:text-amber-600 transition-colors"
            aria-label="Đọc to"
          >
            {isCurrentlySpeaking ? (
              <FaStopCircle size={20} />
            ) : (
              <FaPlayCircle size={20} />
            )}
          </button>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-lg leading-relaxed text-[#0F172A]/90"
        >
          {text}
        </motion.p>
      </div>
      <div className="order-1 md:order-2">
        <motion.div
          style={{ y, scale }}
          className="overflow-hidden rounded-2xl shadow-lg border border-[#0F172A]/10"
        >
          <img
            src={img}
            alt={time}
            className="w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover"
            loading="lazy"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 text-sm text-gray-500 italic"
        >
          Ảnh tư liệu minh họa — bối cảnh {time}.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function ContextDetail() {
  const { speak, cancel, isSpeaking, isSupported } = useSpeechSynthesis();
  const [speakingText, setSpeakingText] = useState("");

  const handleItemSpeak = (text) => {
    if (isSpeaking && speakingText === text) {
      cancel();
      setSpeakingText("");
    } else {
      setSpeakingText(text);
      speak(text);
    }
  };

  return (
    <section id="context-detail" className="relative bg-white py-20 sm:py-24">
      {/* **Sửa lỗi 2: Thêm class `relative` để sửa cảnh báo của Framer Motion** */}
      <div className="mx-auto max-w-5xl px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-amber-600/90">
            Chương 1 • Nhật ký radio
          </p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-black text-[#0F172A] leading-tight">
            Hà Nội rực lửa
          </h2>
          <p className="mt-4 text-[#334155] max-w-2xl mx-auto">
            Dòng chảy thời gian giữa bom đạn — từng khoảnh khắc mở ra như thước
            phim tài liệu.
          </p>
        </motion.div>
        <div className="mt-10 mb-14 h-px w-full bg-[#0F172A]/10" />
        <div className="space-y-20">
          {isSupported &&
            TIMELINE.map((item, idx) => (
              <TimelineItem
                key={idx}
                {...item}
                index={idx}
                handleSpeak={handleItemSpeak}
                isCurrentlySpeaking={isSpeaking && speakingText === item.text}
              />
            ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="#strategy"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-50 px-5 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-100 transition"
          >
            Sang Chương 2 — Đường lối & chiến lược <span aria-hidden>→</span>
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
