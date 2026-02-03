import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { sections, references } from "../content/article";

function SectionBlock({ section, index }) {
  const paragraphs = section.body.split(/\n\n+/).filter(Boolean);
  const isDark = index % 2 === 1;
  const bgClass = isDark
    ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white"
    : "bg-white text-[#0F172A]";
  const textMutedClass = isDark ? "text-gray-300" : "text-[#334155]";
  const accentClass = isDark ? "text-amber-400" : "text-amber-600";

  return (
    <AnimatedSection id={section.id} className={`py-20 sm:py-24 ${bgClass}`}>
      <div className="mx-auto max-w-4xl px-6">
        <p
          className={`text-xs tracking-[0.35em] uppercase ${accentClass} font-semibold`}
        >
          Phần {section.number}
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          {section.title}
        </h2>
        <div className="mt-6 space-y-4">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className={`text-base sm:text-lg leading-relaxed ${textMutedClass}`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function ArticleBody() {
  return (
    <>
      {sections.map((section, index) => (
        <SectionBlock key={section.id} section={section} index={index} />
      ))}
      <AnimatedSection
        id="chu-thich"
        className="bg-white py-20 sm:py-24 text-[#0F172A]"
      >
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs tracking-[0.35em] uppercase text-amber-600 font-semibold">
            Chú thích
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Chú thích</h2>
          <ol className="mt-6 space-y-2 list-decimal list-inside text-sm sm:text-base text-[#334155] leading-relaxed">
            {references.map((ref, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <span className="font-medium text-amber-700">{ref.number}.</span>{" "}
                {ref.text}
              </motion.li>
            ))}
          </ol>
        </div>
      </AnimatedSection>
    </>
  );
}
