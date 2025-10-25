import { useState, useEffect, useRef } from "react";

export const useSpeechSynthesis = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const synthRef = useRef(null);
  const voiceRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setIsSupported(true);
      synthRef.current = window.speechSynthesis;

      // Load voices (asynchronously on some browsers)
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        // ƯU TIÊN GIỌNG NỮ HÀ NỘI
        voiceRef.current =
          voices.find((v) => v.lang === "vi-VN" && v.name.includes("Female")) ||
          voices.find((v) => v.lang === "vi-VN") ||
          null;
      };

      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      if (synthRef.current && synthRef.current.speaking) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const speak = (text) => {
    if (!isSupported || !synthRef.current) {
      console.warn("Speech Synthesis không được trình duyệt hỗ trợ.");
      return;
    }

    if (synthRef.current.speaking) {
      synthRef.current.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "vi-VN";
    utterance.voice = voiceRef.current;
    utterance.rate = 0.95; // Tăng cảm xúc, không quá chậm
    utterance.pitch = 1.05; // Tự nhiên + hơi nâng cảm xúc

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    setTimeout(() => {
      synthRef.current.speak(utterance);
    }, 800); // DELAY 0.8s CINEMATIC
  };

  const cancel = () => {
    if (!synthRef.current || !synthRef.current.speaking) return;
    synthRef.current.cancel();
    setIsSpeaking(false);
  };

  return { speak, cancel, isSpeaking, isSupported };
};
