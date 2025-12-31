import React from 'react'

const Newsletter = () => {
  return (
    <section className="relative overflow-hidden border-y border-violet-500/20 bg-background py-24 px-6">
      
      {/* 💡 The Archive Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      
      {/* 💡 Thermal Energy Bleed (Permanent Violet Glow) */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Status Badge: Switched to Violet Protocol */}
        <div className="flex items-center gap-3 mb-8 border border-violet-500/30 bg-violet-500/5 px-4 py-1">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500"></span>
          </span>
          <p className="text-[9px] font-mono tracking-[0.5em] text-violet-400 uppercase font-black">
            System_Update: Direct_Broadcast
          </p>
        </div>

        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic mb-6 leading-[0.8]">
          SECURE_SYNC
        </h2>

        <p className="max-w-lg text-slate-500 font-light text-sm sm:text-base leading-relaxed mb-12 italic">
          Bypass the algorithmic noise. Receive raw project data, financial refactor logs, and coordinate shift manifests directly to your terminal.
        </p>

        {/* 💡 Spectrum Terminal Input */}
        <form className="w-full max-w-md flex flex-col sm:flex-row gap-0 border border-violet-500/40 p-1 bg-slate-950/80 backdrop-blur-md shadow-[0_0_30px_rgba(139,92,246,0.05)]">
          <input 
            type="email" 
            placeholder="NODE@SYSTEM.COM" 
            className="flex-1 bg-transparent px-6 py-4 text-xs font-mono text-violet-400 placeholder:text-violet-900/50 outline-none uppercase tracking-widest"
            required
          />
          <button 
            type="submit"
            className="bg-violet-600 hover:bg-violet-400 text-white px-10 py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all"
          >
            INITIALIZE
          </button>
        </form>

        {/* Footer Metadata */}
        <div className="mt-12 flex items-center gap-10">
            <div className="flex flex-col items-center gap-1">
                <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">Protocol</span>
                <span className="text-[10px] text-violet-400 font-bold tracking-widest uppercase">Bi-Weekly_Burst</span>
            </div>
            <div className="w-[1px] h-6 bg-white/5" />
            <div className="flex flex-col items-center gap-1">
                <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">Encryption</span>
                <span className="text-[10px] text-violet-400 font-bold tracking-widest uppercase">End-to-End</span>
            </div>
        </div>
      </div>

      {/* 💡 Side Decorative Tag */}
      <div className="absolute right-6 top-1/2 -rotate-90 translate-y-[-50%] hidden xl:block">
        <p className="text-[10px] font-mono text-white/5 tracking-[1.5em] uppercase">Archive_Maintenance_2025</p>
      </div>
    </section>
  )
}

export default Newsletter