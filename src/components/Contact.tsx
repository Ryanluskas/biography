"use client";

export default function Contact() {
  return (
    <footer id="contact" className="relative py-32 md:py-48 px-4 md:px-12 bg-[#0a0a0a] text-white overflow-hidden border-t border-zinc-900">
      
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10">
        <h2 className="text-[10px] font-mono tracking-widest uppercase text-zinc-600 mb-16">
          [ 03 — Contact ]
        </h2>

        <div className="text-center mb-32">
          <a href="mailto:contato@exemplo.com" className="group block" data-cursor="EMAIL">
            <span className="text-5xl md:text-7xl lg:text-[10vw] leading-[0.9] font-medium tracking-tighter text-zinc-200 group-hover:text-white transition-colors duration-500 block">
              LET'S BUILD
            </span>
            <span className="text-5xl md:text-7xl lg:text-[10vw] leading-[0.9] font-serif italic text-zinc-600 group-hover:text-zinc-400 transition-colors duration-500 block">
              SOMETHING.
            </span>
          </a>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-900 font-mono text-[10px] tracking-widest uppercase text-zinc-500 gap-8">
          <div className="flex gap-8">
            <a href="https://github.com/Ryanluskas" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" data-cursor="OPEN">Github</a>
            <a href="#" className="hover:text-white transition-colors" data-cursor="OPEN">Instagram</a>
            <a href="#" className="hover:text-white transition-colors" data-cursor="OPEN">WhatsApp</a>
          </div>
          <div className="text-zinc-600">
            SYS.OFFLINE // © {new Date().getFullYear()} RYAN LUKAS.
          </div>
        </div>
      </div>
    </footer>
  );
}
