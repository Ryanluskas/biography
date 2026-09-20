"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 p-6 md:p-12 mix-blend-difference pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-start justify-between">
        <a href="#" className="font-medium text-white tracking-tight text-sm pointer-events-auto" data-cursor="HOME">R. LUKAS</a>
        <div className="hidden md:flex flex-col items-end gap-2 text-[10px] font-mono tracking-widest uppercase text-white pointer-events-auto text-right">
          <a href="#about" className="hover:opacity-50 transition-opacity" data-cursor="SCROLL">Index</a>
          <a href="#projects" className="hover:opacity-50 transition-opacity" data-cursor="SCROLL">Work</a>
          <a href="#contact" className="hover:opacity-50 transition-opacity" data-cursor="SCROLL">Contact</a>
        </div>
      </div>
    </nav>
  );
}
