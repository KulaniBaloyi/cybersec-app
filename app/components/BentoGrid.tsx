"use client"

const ProjectsGrid = () => {
  const projects = [
    { 
      id: "LOG_01",
      title: "THE VOID STACK", 
      category: "FINANCE", 
      size: "w-full md:w-[calc(50%-12px)]", 
      color: "from-violet-500/20", 
      border: "border-violet-500/40",
      text: "text-violet-400",
      desc: "An impartial look at wealth in SA. Building a system that ignores the noise and focuses on automated capital growth.",
      screenshot: "/projects/zar-stack-dashboard.png" 
    },
    { 
      id: "LOG_02",
      title: "HUMAN_BATTERY", 
      category: "BIOLOGY", 
      size: "w-full md:w-[calc(50%-12px)]", 
      color: "from-cyan-500/20", 
      border: "border-cyan-500/40",
      text: "text-cyan-400",
      desc: "Stop running on empty. A deep dive into why your social circle is your real charger and why isolation is a system bug.",
      screenshot: "/projects/human-battery-node.png" 
    },
    { 
      id: "LOG_03",
      title: "DE-PLATFORM", 
      category: "COGNITION", 
      size: "w-full md:w-[calc(33.33%-16px)]", 
      color: "from-rose-500/20", 
      border: "border-rose-500/40",
      text: "text-rose-400",
      desc: "Exit the simulation. Why I killed Instagram to save my focus and started reading books again.",
      screenshot: "/projects/mind-override-v1.png" 
    },
    { 
      id: "LOG_04",
      title: "GEO_REFAC", 
      category: "GEISTICS", 
      size: "w-full md:w-[calc(33.33%-16px)]", 
      color: "from-orange-500/20", 
      border: "border-orange-500/40",
      text: "text-orange-400",
      desc: "Travel isn't a vacation; it's a software update for your brain. Refactoring reality through new coordinates.",
      screenshot: "/projects/travel-logic.png" 
    },
    { 
      id: "LOG_05",
      title: "LEGAL_CHEATS", 
      category: "TAX", 
      size: "w-full md:w-[calc(33.33%-16px)]", 
      color: "from-emerald-500/20", 
      border: "border-emerald-500/40",
      text: "text-emerald-400",
      desc: "Understanding the South African tax code as a set of rules you can actually use to your advantage.",
      screenshot: "/projects/tax-optimization.png" 
    }
  ];

  return (
    <section className="max-w-7xl mx-auto py-32 px-6 bg-background">
      
      <div className="flex flex-col mb-20 space-y-4">
        <h2 className="text-6xl font-black text-white tracking-tighter italic uppercase">
          Sector_Archive
        </h2>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-500 via-transparent to-transparent opacity-30" />
      </div>

      <div className="flex flex-wrap gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`group relative flex flex-col h-[520px] bg-slate-950/40 transition-all duration-500 hover:-translate-y-2 ${project.size}`}
          >
            {/* 💡 Dossier Tab Notch */}
            <div className={`absolute -top-4 left-0 h-4 w-32 ${project.border} border-t border-l border-r bg-slate-950/40 clip-path-tab flex items-center justify-center`}>
               <span className={`text-[8px] font-mono font-bold tracking-[0.3em] ${project.text}`}>
                 {project.id}
               </span>
            </div>

            {/* Main Card Body */}
            <div className={`relative flex-1 border ${project.border} p-8 flex flex-col justify-between overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
              
              {/* Permanent Screenshot Background with Color Wash */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.screenshot} 
                  className="w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" 
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-background/90`} />
              </div>

              {/* Content Layer */}
              <div className="relative z-10">
                <p className={`text-[9px] font-mono tracking-[0.4em] mb-4 ${project.text}`}>
                  // TYPE: {project.category}
                </p>
                <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none mb-6">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light italic max-w-xs">
                  {project.desc}
                </p>
              </div>

              {/* Interaction Footer */}
              <div className="relative z-10 flex flex-col gap-4">
                <div className={`h-[2px] w-12 ${project.text.replace('text-', 'bg-')} opacity-50 group-hover:w-full transition-all duration-500`} />
                <button className={`w-full py-3 border ${project.border} ${project.text} text-[10px] font-black tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all`}>
                  Execute_Entry
                </button>
              </div>
              
              {/* Corner Glitch Decor */}
              <div className={`absolute bottom-0 right-0 w-8 h-8 opacity-20 ${project.text.replace('text-', 'bg-')} clip-path-corner`} />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .clip-path-tab {
          clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
        }
        .clip-path-corner {
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </section>
  )
}

export default ProjectsGrid