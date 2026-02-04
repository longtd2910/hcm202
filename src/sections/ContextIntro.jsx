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
    <section id="context" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_70%_10%,rgba(251,191,36,0.12),transparent_60%),radial-gradient(1000px_700px_at_20%_80%,rgba(251,191,36,0.08),transparent_60%)]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(251,191,36,0.3) 0.8px, transparent 0.8px), radial-gradient(rgba(251,191,36,0.2) 0.6px, transparent 0.6px)",
          backgroundSize: "50px 50px, 35px 35px",
          backgroundPosition: "0 0, 15px 12px",
        }}
      />

      <div className="relative z-10 flex min-h-screen items-center py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 text-xs tracking-[0.3em] uppercase text-amber-400/90 font-medium bg-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur-sm mb-4">
              Tóm tắt
            </span>
            <motion.h2
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0em" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white mb-2"
            >
              Trích dẫn
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4" />
          </motion.div>
          
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="space-y-6 text-left">
                {abstract.match(/[^.!?]+[.!?]+/g)?.map((sentence, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + (i * 0.08) }}
                    className="text-slate-100 leading-relaxed text-lg sm:text-xl font-light"
                  >
                    {sentence.trim()}
                  </motion.p>
                )) || (
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-slate-100 leading-relaxed text-lg sm:text-xl font-light"
                  >
                    {abstract}
                  </motion.p>
                )}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            <button
              onClick={handleStart}
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold px-8 py-4 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden"
              disabled={isSpeaking}
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaPlay className="text-sm" />
                {isSpeaking ? "Đang đọc..." : "BẮT ĐẦU"}
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
            <button
              onClick={toggleMute}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-amber-400/40 text-amber-200 px-5 py-4 hover:bg-white/10 hover:border-amber-400/60 transition-all duration-300 backdrop-blur-sm"
              aria-label="Toggle Mute"
            >
              {muted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
