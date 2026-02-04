import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { sections, references } from "../content/article";

const PARAGRAPH_SPACING = {
  between: "space-y-8",
  blockMargin: "my-6",
  chunkSpacing: "space-y-5",
  quotePadding: "p-8",
  quoteMargin: "my-6"
};

function ParagraphBlock({ paragraph, index, isDark, textMutedClass }) {
  const trimmedPara = paragraph.trim();
  if (!trimmedPara) return null;

  const isKeyPoint = trimmedPara.length < 200 || trimmedPara.includes(":") || trimmedPara.includes("•");
  const isQuote = trimmedPara.startsWith('"') || 
    trimmedPara.includes("khẳng định") || 
    trimmedPara.includes("nói") || 
    trimmedPara.includes("nêu rõ") || 
    trimmedPara.includes("xác định") ||
    /^Thứ (nhất|hai|ba|tư|năm)/.test(trimmedPara);
  
  if (isKeyPoint || isQuote) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        className={`${PARAGRAPH_SPACING.quoteMargin} ${PARAGRAPH_SPACING.quotePadding} rounded-2xl border-l-4 shadow-lg backdrop-blur-sm ${
          isDark
            ? "bg-gradient-to-r from-slate-800/80 to-slate-800/40 border-amber-400/80 shadow-amber-500/10"
            : "bg-gradient-to-r from-amber-50/90 to-white border-amber-600/80 shadow-amber-500/5"
        }`}
      >
        <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${textMutedClass} font-medium`}>
          {trimmedPara}
        </p>
      </motion.div>
    );
  }

  const sentenceEndings = /([.!?])\s+/g;
  const parts = trimmedPara.split(sentenceEndings);
  const sentences = [];
  for (let i = 0; i < parts.length; i += 2) {
    if (parts[i]) {
      sentences.push(parts[i] + (parts[i + 1] || ''));
    }
  }

  const chunks = [];
  let currentChunk = '';
  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    if (!trimmed) continue;
    
    if (currentChunk.length + trimmed.length > 400 && currentChunk) {
      chunks.push(currentChunk.trim());
      currentChunk = trimmed;
    } else {
      currentChunk += (currentChunk ? ' ' : '') + trimmed;
    }
  }
  if (currentChunk) {
    chunks.push(currentChunk.trim());
  }

  if (chunks.length === 0) {
    chunks.push(trimmedPara);
  }

  return (
    <div className={`${PARAGRAPH_SPACING.chunkSpacing} ${PARAGRAPH_SPACING.blockMargin}`}>
      {chunks.map((chunk, chunkIndex) => (
        <motion.p
          key={chunkIndex}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: (index * 0.08) + (chunkIndex * 0.04) }}
          className={`text-base sm:text-lg md:text-xl leading-[1.9] ${textMutedClass} font-light`}
        >
          {chunk}
        </motion.p>
      ))}
    </div>
  );
}

function SectionBlock({ section, index }) {
  const paragraphs = section.body.split(/\n\n+/).filter(Boolean);
  const isDark = index % 2 === 1;
  const bgClass = isDark
    ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
    : "bg-gradient-to-br from-white via-gray-50 to-white text-[#0F172A]";
  const textMutedClass = isDark ? "text-gray-200" : "text-slate-700";
  const accentClass = isDark ? "text-amber-400" : "text-amber-600";
  const cardBgClass = isDark ? "bg-slate-800/60 backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm";
  const borderClass = isDark ? "border-slate-700/50" : "border-gray-200/80";

  return (
    <AnimatedSection id={section.id} className={`py-20 sm:py-28 ${bgClass} relative overflow-hidden`}>
      {isDark && (
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251,191,36,0.1) 1px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      )}
      
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 pb-8 border-b border-opacity-20 border-current">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isDark ? 'bg-amber-500/20 border border-amber-400/30' : 'bg-amber-100 border border-amber-200'}`}>
              <span className={`text-lg font-bold ${accentClass}`}>
                {section.number}
              </span>
            </div>
            <p
              className={`text-xs tracking-[0.3em] uppercase ${accentClass} font-semibold`}
            >
              Phần {section.number}
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
          >
            {section.title}
          </motion.h2>
        </div>

        {section.image && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-opacity-20 ring-current"
          >
            <div className="relative group">
              <img
                src={section.image}
                alt={section.imageAlt || section.title}
                className="w-full h-[350px] sm:h-[450px] md:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-950/60 to-transparent' : 'from-white/40 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          </motion.div>
        )}
        
        <div className={PARAGRAPH_SPACING.between}>
          {paragraphs.map((para, i) => (
            <React.Fragment key={i}>
              <ParagraphBlock
                paragraph={para}
                index={i}
                isDark={isDark}
                textMutedClass={textMutedClass}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function SectionDivider({ isDark }) {
  return (
    <div className="relative py-8">
      <div className={`h-px ${isDark ? 'bg-gradient-to-r from-transparent via-slate-700 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'} mx-auto max-w-6xl`} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-amber-400/40' : 'bg-amber-500/30'} border-2 ${isDark ? 'border-amber-400/60' : 'border-amber-500/50'}`} />
      </div>
    </div>
  );
}

export default function ArticleBody() {
  return (
    <>
      {sections.map((section, index) => (
        <React.Fragment key={section.id}>
          <SectionBlock section={section} index={index} />
          {index < sections.length - 1 && (
            <SectionDivider isDark={index % 2 === 1} />
          )}
        </React.Fragment>
      ))}
      <AnimatedSection
        id="chu-thich"
        className="bg-gradient-to-br from-slate-50 via-white to-amber-50/30 py-24 sm:py-32 text-[#0F172A] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251,191,36,0.1) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 pb-8 border-b-2 border-amber-200/60"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-amber-600 font-semibold mb-3">
              Tài liệu tham khảo
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Chú thích
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {references.map((ref, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-amber-300/50 transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mr-3 mb-2 group-hover:bg-amber-200 transition-colors">
                  {ref.number}
                </span>
                <span className="text-sm sm:text-base text-slate-700 leading-relaxed block">
                  {ref.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
