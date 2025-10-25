import React from "react";
import Hero from "../sections/Hero";
import ScrollHint from "../components/ScrollHint";
import Strategy from "../sections/Strategy.jsx";
import Battle from "../sections/Battle.jsx";
import Victory from "../sections/Victory.jsx";
import ContextIntro from "../sections/ContextIntro.jsx";
import ContextDetail from "../sections/ContextDetail.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollHint />
      <ContextIntro nextId="context-detail" />
      <ContextDetail />
      <Strategy />
      {/*
      <Battle />
      <Victory /> */}
    </>
  );
}
