import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WhatWeBuild } from "@/components/site/WhatWeBuild";
import { Approach } from "@/components/site/Approach";
import { Projects } from "@/components/site/Projects";
import { Stack } from "@/components/site/Stack";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TheXbyte — Software, IoT & Automation Engineering Studio" },
      {
        name: "description",
        content:
          "TheXbyte builds operational software, IoT infrastructure, embedded systems and automation platforms for startups, labs and industrial businesses. Tunis, Tunisia.",
      },
      { property: "og:title", content: "TheXbyte — Engineering systems that interact with the real world." },
      {
        property: "og:description",
        content:
          "Software, IoT, embedded and automation systems for operational businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <WhatWeBuild />
        <Approach />
        <Projects />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
