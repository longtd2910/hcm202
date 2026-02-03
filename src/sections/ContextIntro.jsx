import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useSpeechSynthesis } from "../hook/useSpeechSynthesis.jsx";
import { abstract } from "../content/article";

export default function ContextIntro({ nextId = "dap-van-de" }) {
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);
  const { speak, cancel, isSpeaking } = useSpeechSynthesis();

  useEffect(() => {
    const audio = new Audio("/assets/radio-ambient.mp3");
    audio.loop = true;
    audio.volume = 0.15;
    audioRef.current = audio;

    return () => {
      cancel();
      try {
        audio.pause();
        audio.src = "";
      } catch {}
    };
  }, [cancel]);

  const handleStart = async () => {
    if (isSpeaking) return;

    const scrollToNextSection = () => {
      const el = document.getElementById(nextId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    try {
      if (audioRef.current && !muted) {
        await audioRef.current.play();
      }
      setStarted(true);

      speak(abstract);

      const checkEnd = setInterval(() => {
        if (!window.speechSynthesis.speaking) {
          clearInterval(checkEnd);
          scrollToNextSection();
        }
      }, 300);
    } catch (error) {
      console.error("Lỗi phát nhạc nền:", error);
      alert(
        "Trình duyệt đã chặn phát âm thanh. Vui lòng bấm vào màn hình rồi thử lại."
      );
    }
  };

  const toggleMute = async () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    if (!audioRef.current) return;
    audioRef.current.muted = nextMuted;
    if (!nextMuted && started) {
      try {
        await audioRef.current.play();
      } catch {}
    }
  };

  return (
    <section id="context" className="relative min-h-[100vh] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_70%_10%,rgba(255,200,120,0.15),transparent_60%),radial-gradient(1000px_700px_at_20%_80%,rgba(56,189,248,0.15),transparent_60%),linear-gradient(180deg,#0b1220,#101826_60%,#0b1220)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(#ffd27a 0.6px, transparent 0.6px), radial-gradient(#ffd27a 0.6px, transparent 0.6px)",
          backgroundSize: "40px 40px, 28px 28px",
          backgroundPosition: "0 0, 10px 8px",
        }}
      />

      <div className="relative z-10 flex min-h-[100vh] items-center">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xs tracking-[0.35em] uppercase text-amber-300/90"
          >
            Tóm tắt
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.12em" }}
            whileInView={{ opacity: 1, letterSpacing: "0em" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.15] text-amber-50"
          >
            Trích dẫn
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-slate-200/90 max-w-3xl mx-auto text-left leading-relaxed"
          >
            {abstract}
          </motion.p>

          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              onClick={handleStart}
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-slate-900 font-semibold px-6 py-3 hover:bg-amber-300 transition-colors"
              disabled={isSpeaking}
            >
              <FaPlay /> {isSpeaking ? "Đang đọc..." : "BẮT ĐẦU"}
            </button>
            <button
              onClick={toggleMute}
              className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 text-amber-200 px-5 py-3 hover:bg-white/10 transition-colors"
              aria-label="Toggle Mute"
            >
              {muted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0b1220] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b1220] to-transparent" />
    </section>
  );
}
