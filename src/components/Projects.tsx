"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GithubIcon } from "./icons/GithubIcon";

const projects = [
  {
    id: "01",
    title: "CORESYS",
    subtitle: "CRM PLATFORM",
    desc: "Sistema completo de CRM desenvolvido para otimizar o relacionamento com o cliente e a gestão de processos internos. Conta com uma arquitetura moderna para alta escalabilidade e segurança de dados.",
    tech: ["NEXT.JS", "NODE.JS", "TYPESCRIPT", "POSTGRESQL"],
    github: null,
    Visual: () => (
      <div className="w-full h-full bg-[#050505] border border-zinc-900 flex items-center justify-center overflow-hidden relative group cursor-pointer" data-cursor="EXPLORE">
        <img src="/coresys-premium.jpg" alt="Coresys CRM" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
      </div>
    )
  },
  {
    id: "02",
    title: "MIKASA",
    subtitle: "OPEN SOURCE",
    desc: "Projeto open-source focado em simplificar integrações e automações. Desenvolvido para a comunidade, prezando por uma arquitetura moderna, tipagem rigorosa e facilidade de extensão.",
    tech: ["TYPESCRIPT", "NODE.JS", "GITHUB"],
    github: "https://github.com/Ryanluskas/mikasa",
    Visual: () => (
      <div className="w-full h-full bg-[#050505] border border-zinc-900 flex items-center justify-center overflow-hidden relative group cursor-pointer" data-cursor="GITHUB">
        <img src="/mikasa-premium.jpg" alt="Mikasa Project" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105 grayscale-[50%] group-hover:grayscale-0" />
      </div>
    )
  },
  {
    id: "03",
    title: "ALLANA BOT",
    subtitle: "WHATSAPP AUTOMATION",
    desc: "Assistente virtual autônoma desenvolvida para WhatsApp. Realiza atendimento automatizado, qualificação de leads e gestão de simulações com alta taxa de conversão e arquitetura robusta (Python + Ollama/LLMs).",
    tech: ["PYTHON", "WHATSAPP API", "LLM / OLLAMA", "PYTEST"],
    github: null,
    Visual: () => (
      <div className="w-full h-full bg-[#050505] border border-zinc-900 flex items-center justify-center overflow-hidden relative group cursor-pointer" data-cursor="EXPLORE">
        <img src="/allana-premium.jpg" alt="Allana Bot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
      </div>
    )
  },
  {
    id: "04",
    title: "VÉRTICE",
    subtitle: "WEB DESIGN & PRODUCTS",
    desc: "Iniciativa de criação de sites para empresas e produtos digitais. Desenvolvimento de landing pages, design responsivo, experiência visual e integração direta com WhatsApp para sites comerciais.",
    tech: ["REACT", "TAILWIND CSS", "FRAMER MOTION", "UX/UI"],
    github: null,
    Visual: () => (
      <div className="w-full h-full bg-[#050505] border border-zinc-900 flex items-center justify-center overflow-hidden relative group cursor-pointer" data-cursor="EXPLORE">
         <img src="/vertice-premium.jpg" alt="Vértice Logo" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
      </div>
    )
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={ref} className="min-h-screen flex items-center border-b border-zinc-900 py-24 md:py-0 relative">
      {/* Background Line */}
      <div className="absolute top-0 left-4 md:left-12 w-[1px] h-full bg-zinc-800 -z-10 hidden md:block" />
      
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 px-4 md:pl-16">
        
        {/* Visual Component */}
        <div className="w-full lg:w-3/5 h-[50vh] md:h-[70vh] order-2 lg:order-1 relative overflow-hidden bg-zinc-900/50">
          <project.Visual />
        </div>

        {/* Text Component */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center order-1 lg:order-2">
          <div className="flex items-center gap-4 mb-6 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
            <span>[ {project.id} ]</span>
            <span>{project.subtitle}</span>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors" data-cursor="OPEN">
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
            {project.title}
          </h2>
          
          <p className="text-zinc-400 font-light leading-relaxed mb-12 md:text-lg">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] tracking-widest text-zinc-500">
            {project.tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0a0a0a] text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-12 mb-12 md:mb-0">
        <h2 className="text-[10px] font-mono tracking-widest uppercase text-zinc-600 md:pl-16">
          [ 02 — Selected Works ]
        </h2>
      </div>

      <div className="flex flex-col">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Secondary Projects / Experiments */}
      <div className="max-w-7xl mx-auto py-32 px-4 md:px-12 md:pl-16 relative">
        <div className="absolute top-0 left-4 md:left-12 w-[1px] h-full bg-zinc-800 -z-10 hidden md:block" />
        
        <h3 className="text-2xl md:text-4xl font-serif italic text-zinc-500 mb-12">Outros experimentos & sites comerciais</h3>
        <div className="flex flex-wrap gap-4 font-mono text-xs tracking-widest text-zinc-400">
          {["BELLA ESSENCE", "VARGAS ACADEMIA", "SLIM FIT", "FLORES DE CETIM", "LEAD FINDER", "SUPABASE INTEGRATIONS"].map((p, i) => (
            <span key={i} className="border border-zinc-800 px-4 py-2 hover:bg-white hover:text-black transition-colors cursor-default" data-cursor="EXPLORE">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
