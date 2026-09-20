"use client";

const areas = [
  { 
    title: "Desenvolvimento Full Stack", 
    desc: "Criação de aplicações completas. Da modelagem do banco de dados (PostgreSQL/Prisma) até a interface do usuário (React/Next.js), garantindo performance e escalabilidade." 
  },
  { 
    title: "Sistemas Financeiros", 
    desc: "Desenvolvimento de ferramentas para operações e consultoria financeira, gerindo regras de negócio complexas, cálculos de comissões e gestão de clientes, como feito no CapitalCred." 
  },
  { 
    title: "Automação", 
    desc: "Criação de bots, parsers, processamento em filas (jobs) e integrações assíncronas, principalmente focadas na API do WhatsApp, com tratamento avançado de erros." 
  },
  { 
    title: "Inteligência Artificial", 
    desc: "Integração prática de LLMs, Ollama e Groq em fluxos de negócios reais para automatizar respostas e processos." 
  },
  { 
    title: "Web Design & Produtos", 
    desc: "Arquitetura visual, UX/UI, criação de sites e landing pages de alta conversão sob a iniciativa Vértice." 
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 md:px-12 bg-black text-white border-t border-zinc-900">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-wider sticky top-24">Experiência Prática</h2>
        </div>
        <div className="md:col-span-8 flex flex-col gap-12">
          {areas.map((area, i) => (
            <div key={i} className="group relative pl-8 border-l border-zinc-800 hover:border-emerald-500 transition-colors duration-500">
              <div className="absolute w-3 h-3 bg-black border border-zinc-600 rounded-full -left-[6.5px] top-1.5 group-hover:border-emerald-500 group-hover:bg-emerald-500 transition-colors duration-500" />
              <h3 className="text-xl font-medium mb-3 text-zinc-200 group-hover:text-white transition-colors">{area.title}</h3>
              <p className="text-zinc-400 font-light leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
