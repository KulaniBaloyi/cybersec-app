import React from 'react'

const LandingPage = () => {
  return (
    // 💡 Logic: Using a rich Ultraviolet/Purple accent instead of green
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-hidden">
      
      {/* 💡 Background: Subtle grid with a soft purple radial glow */}
      <div className="absolute inset-0 z-0 bg-grid opacity-10" />
      <div className="absolute inset-0 z-1 [background:radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.08),transparent_60%)]" />

      {/* MAIN CONTAINER: Compact and focused */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center px-6 py-12">
        
        {/* System ID: Minimalist & Purple */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-[1px] w-8 bg-violet-500/50" />
          <span className="text-[10px] font-mono tracking-[0.5em] text-violet-400 uppercase">
            Protocol_0x114_Active
          </span>
          <div className="h-[1px] w-8 bg-violet-500/50" />
        </div>

        {/* Headline: Less 'big', more high-end industrial */}
        <h1 className="text-center font-bold tracking-tight text-white mb-6">
          <span className="block text-4xl sm:text-6xl uppercase tracking-tighter italic opacity-90">
            Override the
          </span>
          <span className="block text-5xl sm:text-7xl uppercase font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-violet-600">
            VOID_SYSTEM
          </span>
        </h1>

        {/* Subtext: Impartial, Cyber-Security framing */}
        <p className="max-w-lg text-center text-slate-500 text-sm sm:text-base font-light leading-relaxed mb-10">
          A forensic audit of the digital and physical self. We identify the breach points in your daily logic to secure a zero-legacy operating state.
        </p>

        {/* Action Buttons: Razor sharp, no green */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="group relative px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white text-[10px] font-black tracking-[0.3em] transition-all uppercase rounded-none">
            ACCESS_ARCHIVE
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-violet-300 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button className="px-8 py-3 border border-white/5 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-[10px] font-black tracking-[0.3em] transition-all uppercase rounded-none">
            DECRYPT_LOGS
          </button>
        </div>

        {/* Bottom Data Tape: Compact & Subtle */}
        <div className="mt-24 w-full max-w-2xl flex justify-between items-end border-t border-white/5 pt-6 opacity-40">
           <div className="flex flex-col gap-1">
              <span className="text-[8px] font-mono uppercase text-violet-400">Node_Origin</span>
              <span className="text-[10px] text-white">41.85.20.125</span>
           </div>
           <div className="flex flex-col gap-1 text-center">
              <span className="text-[8px] font-mono uppercase text-violet-400">Security_Level</span>
              <span className="text-[10px] text-white">Class_V_Encrypted</span>
           </div>
           <div className="flex flex-col gap-1 text-right">
              <span className="text-[8px] font-mono uppercase text-violet-400">Uptime</span>
              <span className="text-[10px] text-white">∞_Static</span>
           </div>
        </div>

      </div>

      {/* Decorative Corner Element */}
      <div className="absolute top-10 right-10 flex flex-col items-end opacity-20 hidden md:flex">
         <span className="text-[8px] font-mono text-violet-500">SYSTEM_TIME: {new Date().getFullYear()}</span>
         <span className="text-[8px] font-mono text-violet-500 uppercase">Archive_Ref: [X_09]</span>
      </div>

    </section>
  )
}

export default LandingPage