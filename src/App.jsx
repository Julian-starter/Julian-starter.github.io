import { motion } from "framer-motion";
import { Terminal, ExternalLink, Code2, Database, LayoutGrid } from "lucide-react";

// 🌟 AQUÍ AGREGAS TUS PROYECTOS FÁCILMENTE
const PROJECTS = [
  {
    id: 1,
    title: "CryptoVision",
    description: "Terminal institucional de inteligencia cripto y simulación HFT.",
    tags: ["React 19", "Tailwind", "APIs"],
    link: "https://cryptovisionanahuacproyecto.netlify.app/",
    icon: Terminal,
    glow: "group-hover:bg-cyan-500/10",
    border: "hover:border-cyan-500/50",
    iconColor: "text-cyan-400"
  },
];

export default function PortfolioHub() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-mono p-6 sm:p-12 flex flex-col items-center selection:bg-slate-500/30">
      
      {/* Fondo con textura sutil */}
      <div className="fixed inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-4xl w-full relative z-10 flex flex-col items-center">
        
        {/* CABECERA MINIMALISTA */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 mt-8"
        >
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">Julian E. Caña</h1>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
            Ingeniero en Sistemas & Negocios Digitales
          </p>
        </motion.div>

        {/* GRID DE PROYECTOS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <a 
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={`group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 ${project.border} shadow-lg hover:shadow-2xl hover:-translate-y-1 cursor-pointer`}
              >
                {/* Brillo de fondo al hacer hover */}
                <div className={`absolute inset-0 transition-colors duration-500 ${project.glow} opacity-0 group-hover:opacity-100 pointer-events-none`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#111] transition-colors">
                      <Icon size={24} className={project.iconColor} />
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-white/10 group-hover:bg-white group-hover:border-white transition-all text-slate-500 group-hover:text-black">
                      <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-black text-white mb-2">{project.title}</h2>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-white/5 text-[10px] text-slate-400 border border-white/10 font-bold tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </motion.div>

        {/* FOOTER DISCRETO */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 text-[10px] text-slate-600 uppercase tracking-widest"
        >
          Portafolio de Proyectos • 2026
        </motion.div>

      </div>
    </div>
  );
}