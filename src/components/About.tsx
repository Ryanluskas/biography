"use client";

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-48 px-4 md:px-12 bg-[#0a0a0a] text-white">
      {/* Continuing the line */}
      <div className="absolute top-0 left-4 md:left-12 w-[1px] h-full bg-zinc-800 -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 md:pl-16">
        <div className="md:w-1/3">
           <h2 className="text-[10px] font-mono tracking-widest uppercase text-zinc-600 mb-12">
             [ 01 — Index ]
           </h2>
           <p className="font-serif italic text-2xl md:text-4xl text-zinc-400 mb-12 leading-tight">
             "I build systems."
           </p>
           
           <div className="w-full aspect-[3/4] relative overflow-hidden bg-zinc-900 filter grayscale contrast-125 mb-8 group" data-cursor="RYAN">
            <img 
              src="/profile.jpg" 
              alt="Ryan Lukas" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
            />
          </div>
        </div>

        <div className="md:w-2/3 flex flex-col md:pt-32">
           <div className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-20 text-zinc-100">
             Transforming complex ideas into <span className="font-serif italic text-zinc-500">scalable, high-performance</span> digital products.
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 font-mono text-xs tracking-wide text-zinc-400 leading-loose">
             <div className="border-t border-zinc-800 pt-6">
               <div className="text-white mb-4">01 / FULL STACK</div>
               Da modelagem de dados (PostgreSQL/Prisma) à interface do usuário (React/Next.js). Arquitetura robusta e escalável.
             </div>
             <div className="border-t border-zinc-800 pt-6">
               <div className="text-white mb-4">02 / AUTOMATION & AI</div>
               Ecossistemas autônomos. Integração prática de LLMs, processamento de filas e automação complexa no WhatsApp.
             </div>
             <div className="border-t border-zinc-800 pt-6">
               <div className="text-white mb-4">03 / WEB DESIGN</div>
               Arquitetura visual, landing pages de alta conversão e UX/UI sob a marca Vértice.
             </div>
             <div className="border-t border-zinc-800 pt-6">
               <div className="text-white mb-4">04 / FINANCE SYSTEMS</div>
               Ferramentas operacionais e dashboards gerenciais, gerindo regras de negócio complexas (CapitalCred).
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
