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
           <div className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] mb-20 text-zinc-100 max-w-2xl">
             Engenharia de software focada na construção de produtos reais, escaláveis e com design intencional.
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16 font-mono text-xs tracking-wide text-zinc-400 leading-relaxed">
             <div className="border-t border-zinc-800 pt-6">
               <div className="text-white mb-4">01 / ENGENHARIA FULL STACK</div>
               Da arquitetura do banco de dados (PostgreSQL/Prisma) ao frontend (React/Next.js). Foco em performance, código limpo e sistemas robustos.
             </div>
             <div className="border-t border-zinc-800 pt-6">
               <div className="text-white mb-4">02 / AUTOMAÇÃO & IA</div>
               Integração de LLMs (Ollama, Groq) em fluxos de negócios. Construção de ecossistemas autônomos, processamento em filas e bots complexos no WhatsApp.
             </div>
             <div className="border-t border-zinc-800 pt-6">
               <div className="text-white mb-4">03 / PRODUCT DESIGN</div>
               Arquitetura visual brutalista e minimalista. Foco em interfaces que resolvem problemas reais (UX/UI), sem complexidade visual desnecessária.
             </div>
             <div className="border-t border-zinc-800 pt-6">
               <div className="text-white mb-4">04 / LIFE MANAGEMENT</div>
               Desenvolvimento de engines analíticas e plataformas de organização pessoal (Mikasa), processando grandes volumes de eventos para encontrar padrões.
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
