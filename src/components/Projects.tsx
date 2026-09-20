"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GithubIcon } from "./icons/GithubIcon";

const projects = [
  {
    id: "01",
    title: "ARQUEIRO",
    subtitle: "WHATSAPP AUTOMATION & AI",
    desc: "Sistema de automação para processamento de solicitações via WhatsApp. Arquitetura modular robusta com parser de mensagens, filas, controle de estado, anti-duplicidade (request_id) e tratamento de erros avançado (retries). Integração com Ollama e Groq. Centenas de testes passando.",
    tech: ["PYTHON", "WHATSAPP API", "OLLAMA", "GROQ", "PYTEST"],
    github: null,
    Visual: () => (
      <div className="w-full h-full bg-[#050505] border border-zinc-900 flex items-center justify-center p-8 overflow-hidden relative" data-cursor="EXPLORE">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#333_1px,_transparent_1px)] bg-[size:24px_24px]" />
        <div className="font-mono text-xs md:text-sm text-emerald-900 leading-loose w-full max-w-lg z-10">
          {`[INFO] Starting queue worker...
[DEBUG] whatsapp.py: receiving payload
[DEBUG] parser.py: processing message_id=8f9a2
[INFO] simulator.py: requesting data...
[WARN] retrying connection... (1/3)
[INFO] success. generated via Ollama.
[DEBUG] formatter.py: formatting output...
[INFO] jobs.py: job completed. duration=1.2s`}
        </div>
      </div>
    )
  },
  {
    id: "02",
    title: "CAPITALCRED",
    subtitle: "FINANCIAL PLATFORM",
    desc: "Plataforma completa para consultoria financeira. Inclui dashboard gerencial, gestão de clientes, consultores, simulações e cálculo de comissões. Integração com simuladores da Caixa e Santander. Sistema com frontend, backend, banco de dados, autenticação e permissões estruturadas.",
    tech: ["NEXT.JS", "NODE.JS", "PRISMA", "POSTGRESQL", "SUPABASE", "ZUSTAND"],
    github: null,
    Visual: () => (
      <div className="w-full h-full bg-[#050505] border border-zinc-900 p-8 flex flex-col gap-6 overflow-hidden relative" data-cursor="EXPLORE">
        <div className="w-full flex gap-4">
          <div className="h-24 md:h-32 flex-1 bg-zinc-900/50 border border-zinc-800/50 rounded-sm" />
          <div className="h-24 md:h-32 flex-1 bg-zinc-900/50 border border-zinc-800/50 rounded-sm" />
          <div className="h-24 md:h-32 flex-1 bg-zinc-900/50 border border-zinc-800/50 rounded-sm" />
        </div>
        <div className="flex-1 flex gap-6">
           <div className="w-32 md:w-64 h-full bg-zinc-900/30 border border-zinc-800/50 rounded-sm hidden sm:block" />
           <div className="flex-1 h-full bg-zinc-900/20 border border-zinc-800/50 rounded-sm" />
        </div>
      </div>
    )
  },
  {
    id: "03",
    title: "MIKASA",
    subtitle: "OPEN SOURCE",
    desc: "Projeto open-source focado em simplificar integrações e automações. Desenvolvido para a comunidade, prezando por uma arquitetura moderna, tipagem rigorosa e facilidade de extensão.",
    tech: ["TYPESCRIPT", "NODE.JS", "GITHUB"],
    github: "https://github.com/Ryanluskas/mikasa",
    Visual: () => (
      <div className="w-full h-full bg-black border border-zinc-900 flex items-center justify-center p-8 overflow-hidden relative group" data-cursor="GITHUB">
        <h3 className="text-7xl md:text-9xl font-serif italic text-zinc-800 group-hover:text-zinc-600 transition-colors duration-700">Mikasa</h3>
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
      <div className="w-full h-full bg-[#050505] border border-zinc-900 flex items-center justify-center p-8 overflow-hidden relative" data-cursor="EXPLORE">
        <div className="w-64 h-96 border border-zinc-800 rounded-full flex items-center justify-center opacity-50">
           <div className="w-48 h-72 border border-zinc-700 rounded-full" />
        </div>
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
