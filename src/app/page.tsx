import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact, { Footer } from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-16 md:pb-0">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Impact />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
