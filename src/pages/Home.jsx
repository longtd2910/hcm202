import React from "react";
import Hero from "../sections/Hero";
import ScrollHint from "../components/ScrollHint";
import ContextIntro from "../sections/ContextIntro.jsx";
import ArticleBody from "../sections/ArticleBody.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollHint />
      <ContextIntro nextId="dap-van-de" />
      <ArticleBody />
    </>
  );
}
