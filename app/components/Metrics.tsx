import React from 'react'

const SystemMetrics = () => {
  // Mapping the metrics to your specific life-overhaul goals
  const stats = [
    { value: "04", label: "INTEL_INGEST", unit: "LIT_LOG" },
    { value: "12%", label: "CAPITAL_FLOW", unit: "NODE_VELOCITY" },
    { value: "08", label: "ACTIVE_NODES", unit: "PROJECT_TOTAL" },
    { value: "00", label: "OS_INTERRUPT", unit: "SOCIAL_DORMANT" }
  ];

  return (
    <section className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-0 max-w-5xl mx-auto border border-white/5 bg-background/80 backdrop-blur-xl">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="relative flex flex-col items-center justify-center p-8 border-r border-white/5 last:border-r-0 group overflow-hidden"
        >
          {/* Subtle Hover Glow */}
          <div className="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/5 transition-colors duration-500" />
          
          {/* Metric Value: Compact and sharp */}
          <p className="relative z-10 font-black text-4xl md:text-5xl text-white tracking-tighter group-hover:text-violet-400 transition-colors duration-300">
            {stat.value}
          </p>
          
          {/* Metadata Labels */}
          <div className="relative z-10 mt-4 flex flex-col items-center">
            <p className="text-[9px] font-bold tracking-[0.3em] text-slate-500 uppercase group-hover:text-slate-300 transition-colors">
              {stat.label}
            </p>
            <p className="text-[7px] font-mono text-violet-500/40 tracking-[0.4em] uppercase mt-1">
              // {stat.unit}
            </p>
          </div>

          {/* Industrial Accent: Vertical bar instead of a horizontal line */}
          <div className="absolute right-0 top-0 h-0 w-[2px] bg-violet-500 group-hover:h-full transition-all duration-700 ease-in-out" />
        </div>
      ))}
    </section>
  )
}

export default SystemMetrics