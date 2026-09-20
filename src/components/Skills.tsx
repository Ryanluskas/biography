"use client";

const categories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vite", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Prisma", "PostgreSQL"]
  },
  {
    title: "Cloud & Infra",
    skills: ["Supabase", "Vercel", "Linux", "Docker", "Git/GitHub"]
  },
  {
    title: "IA & Integrações",
    skills: ["Ollama", "Groq", "REST APIs", "WhatsApp API", "JWT", "Socket.io", "Axios"]
  }
];

export default function Skills() {
  return (
    <section id="stack" className="py-24 px-4 md:px-12 bg-black text-white border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-12">Stack & Ferramentas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-medium mb-6 text-white">{category.title}</h3>
              <ul className="flex flex-col gap-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-zinc-400 flex items-center gap-3 font-light">
                    <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
