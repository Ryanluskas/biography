import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
