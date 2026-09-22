"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GithubIcon } from "./icons/GithubIcon";

const projects = [
  {
    id: "01",
    title: "CORESYS",
    subtitle: "CRM PLATFORM",
    desc: "CRM focado na gestão e otimização de funil de vendas. Desenvolvido para resolver gargalos operacionais no atendimento ao cliente, com pipeline interativo, controle de métricas e integração direta com backend relacional escalável.",
    tech: ["NEXT.JS", "NODE.JS", "TYPESCRIPT", "POSTGRESQL"],
    github: "https://coresys.vercel.app/",
    Visual: () => (
      <div className="w-full h-full bg-[#030303] flex flex-col overflow-hidden relative group cursor-pointer select-none" data-cursor="EXPLORE">
        {/* Modern SaaS CRM UI - Pure CSS */}
        <div className="w-full h-10 border-b border-zinc-900 bg-[#0a0a0a] flex items-center px-6 gap-3 z-10">
          <div className="flex gap-1.5 opacity-50">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          </div>
          <div className="w-px h-4 bg-zinc-800 ml-2" />
          <span className="text-[10px] text-zinc-500 font-medium tracking-wider">CORESYS CRM</span>
        </div>
        
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-16 md:w-20 border-r border-zinc-900 bg-[#050505] flex flex-col gap-6 py-6 items-center z-10">
            <div className="w-8 h-8 rounded bg-zinc-800 mb-2" />
            <div className="w-5 h-5 rounded-sm bg-zinc-200 border border-zinc-400" />
            <div className="w-5 h-5 rounded-sm bg-zinc-800" />
            <div className="w-5 h-5 rounded-sm bg-zinc-800" />
            <div className="w-5 h-5 rounded-sm bg-zinc-800" />
          </div>
          
          {/* Main Content Dashboard */}
          <div className="flex-1 p-6 md:p-10 flex flex-col gap-8 bg-[#030303] transform group-hover:scale-[1.02] transition-transform duration-1000 ease-out">
            <div className="flex justify-between items-end">
              <div>
                <h4 className="text-xl md:text-2xl font-light text-zinc-100 mb-1">Dashboard</h4>
                <p className="text-xs text-zinc-500">Overview of your sales performance</p>
              </div>
              <div className="hidden md:flex h-8 px-4 bg-zinc-100 text-zinc-900 text-xs font-medium items-center rounded-sm">New Deal</div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-5 border border-zinc-900 bg-[#080808] rounded-sm">
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-3">Total Revenue</p>
                <p className="text-2xl font-light text-zinc-100">$124,500</p>
                <p className="text-[10px] text-zinc-400 mt-2">↑ 12% from last month</p>
              </div>
              <div className="p-5 border border-zinc-900 bg-[#080808] rounded-sm">
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-3">Active Deals</p>
                <p className="text-2xl font-light text-zinc-100">42</p>
                <p className="text-[10px] text-zinc-400 mt-2">↑ 4 new deals</p>
              </div>
              <div className="p-5 border border-zinc-900 bg-[#080808] rounded-sm hidden md:block">
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-3">Win Rate</p>
                <p className="text-2xl font-light text-zinc-100">68%</p>
                <p className="text-[10px] text-zinc-500 mt-2">↓ 2% from last month</p>
              </div>
            </div>
            
            <div className="flex-1 border border-zinc-900 bg-[#080808] rounded-sm p-5 relative overflow-hidden">
               <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-6">Revenue Growth</p>
               <div className="absolute bottom-0 left-5 right-5 h-32 md:h-40 flex items-end justify-between gap-2 pb-5">
                 {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                   <div key={i} className="w-full bg-zinc-900 rounded-t-sm relative transition-colors duration-500 group-hover:bg-zinc-800" style={{ height: `${h}%` }}>
                     {i === 5 && <div className="absolute inset-0 bg-zinc-200 border-t-2 border-white" />}
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "02",
    title: "MIKASA",
    subtitle: "LIFE MANAGEMENT SYSTEM",
    desc: "Plataforma unificada de organização pessoal. Em vez de isolar dados, a 'Camada de Vida' (uma engine analítica customizada) cruza informações financeiras, treinos e rotina para expor padrões comportamentais reais.",
    tech: ["NEXT.JS", "NODE.JS", "PRISMA", "TYPESCRIPT"],
    github: "https://github.com/Ryanluskas/mikasa",
    Visual: () => (
      <div className="w-full h-full bg-[#030303] flex items-center justify-center p-6 md:p-12 overflow-hidden relative group cursor-pointer" data-cursor="GITHUB">
        {/* Terminal / Code Window */}
        <div className="w-full max-w-2xl h-full border border-zinc-800/80 bg-[#050505] flex flex-col rounded-sm overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-1000 z-10">
          <div className="h-10 border-b border-zinc-900 flex items-center px-4 justify-between bg-[#0a0a0a]">
            <div className="flex gap-1.5 opacity-50">
               <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
               <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
               <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            </div>
            <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">mikasa.ts</span>
            <div className="w-10"></div>
          </div>
          <div className="flex-1 p-6 md:p-8 flex">
            {/* Line numbers */}
            <div className="flex flex-col text-[11px] md:text-xs text-zinc-800 font-mono pr-4 text-right select-none">
              <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
            </div>
            {/* Code */}
            <div className="flex flex-col text-[11px] md:text-xs font-mono text-zinc-400">
               <span><span className="text-zinc-600">import</span> {"{ "}MikasaCore{" }"} <span className="text-zinc-600">from</span> <span className="text-blue-500/70">'@mikasa/core'</span>;</span>
               <br/>
               <span><span className="text-zinc-600">const</span> bot = <span className="text-zinc-600">new</span> MikasaCore({"{"}</span>
               <span className="pl-4">mode: <span className="text-blue-500/70">'autonomous'</span>,</span>
               <span className="pl-4">sync: <span className="text-zinc-500">true</span></span>
               <span>{"});"}</span>
               <br/>
               <span>bot.<span className="text-zinc-300">initialize</span>().then(() <span className="text-zinc-600">{`=>`}</span> {"{"}</span>
               <span className="pl-4">console.<span className="text-zinc-300">log</span>(<span className="text-blue-500/70">'System is running...'</span>);</span>
               <span>{"});"}</span>
            </div>
          </div>
        </div>
        
        {/* Subtle Mikasa watermark to preserve the original image essence */}
        <img src="/mikasa-new.jpg" className="absolute right-0 bottom-0 w-64 h-64 md:w-96 md:h-96 object-contain opacity-[0.02] mix-blend-screen grayscale pointer-events-none" alt="" />
      </div>
    )
  },
  {
    id: "03",
    title: "ALLANA BOT",
    subtitle: "WHATSAPP AUTOMATION",
    desc: "Automação inteligente focada em conversão e pré-atendimento. Um bot assíncrono que realiza simulações complexas e qualificação de leads usando LLMs, reduzindo drasticamente o tempo de resposta no funil comercial.",
    tech: ["PYTHON", "WHATSAPP API", "LLM / OLLAMA", "PYTEST"],
    github: "https://github.com/Ryanluskas/whatsapp-simulacoes-bot",
    Visual: () => (
      <div className="w-full h-full bg-[#030303] flex items-center justify-center p-6 md:p-12 overflow-hidden relative group cursor-pointer" data-cursor="EXPLORE">
        {/* Mobile Phone Mockup / WhatsApp Interface */}
        <div className="w-[280px] h-[450px] border border-zinc-800/80 bg-[#080808] rounded-[2rem] flex flex-col overflow-hidden relative transform group-hover:scale-[1.02] transition-transform duration-1000 shadow-2xl z-10">
          {/* Header */}
          <div className="h-16 border-b border-zinc-900 bg-[#0a0a0a] flex items-center px-5 gap-3 z-10">
            <div className="w-10 h-10 rounded-full border border-zinc-800 overflow-hidden bg-zinc-900">
               <img src="/allana-new.jpg" className="w-full h-full object-cover" alt="Allana" />
            </div>
            <div className="flex flex-col">
               <span className="text-sm font-medium text-zinc-200">Allana</span>
               <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Online</span>
            </div>
          </div>
          
          {/* Chat Body */}
          <div className="flex-1 bg-[#050505] p-5 flex flex-col gap-4 relative">
             <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[size:16px_16px]" />
             
             {/* User Message */}
             <div className="self-end bg-zinc-800/60 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%] border border-zinc-700/30">
               <span className="text-xs text-zinc-300 font-light">Gostaria de uma simulação.</span>
             </div>
             
             {/* Bot Message */}
             <div className="self-start bg-[#0a0a0a] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] border border-zinc-800/80 flex flex-col gap-2">
               <span className="text-xs text-zinc-300 font-light">Olá! Eu sou a Allana.</span>
               <span className="text-xs text-zinc-400 font-light leading-relaxed">Vou analisar os dados e preparar a automação para você. Qual é o seu segmento?</span>
             </div>
             
             {/* Typing Indicator */}
             <div className="self-start bg-[#0a0a0a] rounded-full px-4 py-3 border border-zinc-800/80 flex gap-1 mt-auto items-center h-8">
               <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 animate-pulse" />
               <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 animate-pulse delay-75" />
               <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 animate-pulse delay-150" />
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "04",
    title: "VÉRTICE",
    subtitle: "WEB DESIGN & PRODUCTS",
    desc: "Produto focado na criação de interfaces de alta conversão. Entrega design brutalista, performance extrema e integração com WhatsApp para maximizar a captação de clientes para negócios digitais.",
    tech: ["REACT", "TAILWIND CSS", "FRAMER MOTION", "UX/UI"],
    github: null,
    Visual: () => (
      <div className="w-full h-full bg-[#000000] flex items-center justify-center overflow-hidden relative group cursor-pointer" data-cursor="EXPLORE">
         <img src="/vertice-clean.jpg" alt="Vértice Logo" className="w-full h-full object-contain p-12 md:p-24 opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
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
