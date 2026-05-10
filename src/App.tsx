import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WhatWeBuild } from "@/components/site/WhatWeBuild";
import { Approach } from "@/components/site/Approach";
import { Projects } from "@/components/site/Projects";
import { Stack } from "@/components/site/Stack";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function App() {
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
