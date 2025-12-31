"use client"

const StrategyCoverage = () => {
  const domains = [
    {
      title: "Capital",
      tag: "VOID_ASSETS",
      baseColor: "border-violet-500/30",
      glowColor: "bg-violet-500/20",
      accentText: "text-violet-400",
      description: "Engineering wealth through automated liquidity systems and high-leverage node acquisition."
    },
    {
      title: "Biology",
      tag: "BIO_HARDWARE",
      baseColor: "border-cyan-500/30",
      glowColor: "bg-cyan-500/20",
      accentText: "text-cyan-400",
      description: "Maintaining the physical shell required to sustain high-frequency cognitive output over cycles."
    },
    {
      title: "Geistics",
      tag: "COORDINATE_SHIFT",
      baseColor: "border-orange-500/30",
      glowColor: "bg-orange-500/20",
      accentText: "text-orange-400",
      description: "Refactoring perspective through geographic movement and strategic cultural node immersion."
    },
    {
      title: "Cognition",
      tag: "OS_OVERRIDE",
      baseColor: "border-rose-500/30",
      glowColor: "bg-rose-500/20",
      accentText: "text-rose-400",
      description: "Breaking algorithm loops via deep-intel ingest, social deactivation, and focus restoration."
    }
  ];

  return (
    <section className="relative flex flex-col gap-12 items-center mx-auto max-w-7xl py-32 px-6 bg-background text-foreground overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <div className="border border-white/5 bg-white/5 px-4 py-1 text-[10px] tracking-[0.5em] font-black uppercase text-slate-500">
          Domain_Analysis_v6.0
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-[0.8]">
          SYSTEM_NODES
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {domains.map((domain, index) => (
          <div 
            key={index} 
            className={`group relative border ${domain.baseColor} bg-slate-950/60 p-8 flex flex-col justify-between aspect-[4/5] transition-all duration-500 hover:scale-[1.02]`}
          >
            {/* 💡 THE HOVER: Vertical Scanline Sweep */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-0 left-0 w-full h-20 ${domain.glowColor} blur-3xl opacity-0 group-hover:animate-scanline group-hover:opacity-100 transition-opacity`} />
            </div>

            {/* Header Area */}
            <div className="relative z-10 space-y-4">
              <div className="flex flex-col gap-1">
                <span className={`text-[9px] font-mono font-bold tracking-widest ${domain.accentText}`}>
                  // {domain.tag}
                </span>
                <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic">
                  {domain.title}
                </h3>
              </div>
              
              <div className={`h-[1px] w-full bg-white/5 relative overflow-hidden`}>
                 <div className={`absolute inset-0 ${domain.glowColor.replace('/20', '/100')} opacity-40`} />
              </div>
              
              <p className="text-xs leading-relaxed text-slate-400 font-light italic group-hover:text-slate-200 transition-colors">
                {domain.description}
              </p>
            </div>

            {/* Interaction Button */}
            <button className={`relative z-10 w-full h-12 border ${domain.baseColor} bg-transparent text-[10px] tracking-[0.4em] uppercase font-black text-white hover:bg-white hover:text-black transition-all`}>
              Access_Projects
            </button>
            
            {/* Constant Corner Elements */}
            <div className={`absolute top-2 right-2 w-2 h-2 border-t border-r ${domain.baseColor}`} />
            <div className={`absolute bottom-2 left-2 w-2 h-2 border-b border-l ${domain.baseColor} opacity-50`} />
          </div>
        ))}
      </div>

      {/* Tailwind Custom Keyframes for the 'Scanline' Animation */}
      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-scanline {
          animation: scanline 2s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default StrategyCoverage