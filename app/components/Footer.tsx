import React from 'react'

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-background px-6 sm:px-10 py-24 text-slate-500 overflow-hidden">
      
      {/* 💡 Ambient Thermal Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-[radial-gradient(circle_at_20%_100%,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-20 relative z-10">
        
        {/* Navigation Columns */}
        <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-12">
          <ul className="flex flex-col gap-4">
            <p className="text-white font-black text-[10px] tracking-[0.3em] uppercase mb-4 opacity-50 italic">// Projects</p>
            {['VOID_STACK', 'BIO_HARDWARE', 'GEO_REFACTOR', 'OS_OVERRIDE'].map((item) => (
              <li key={item} className="text-xs hover:text-violet-400 transition-colors cursor-pointer font-light tracking-widest uppercase">
                {item}
              </li>
            ))}
          </ul>
          
          <ul className="flex flex-col gap-4">
            <p className="text-white font-black text-[10px] tracking-[0.3em] uppercase mb-4 opacity-50 italic">// Network</p>
            {['ENCRYPTED_COMMS', 'NODE_LOCATOR', 'DIRECT_ACCESS'].map((item) => (
              <li key={item} className="text-xs hover:text-violet-400 transition-colors cursor-pointer font-light tracking-widest uppercase">
                {item}
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-4">
            <p className="text-white font-black text-[10px] tracking-[0.3em] uppercase mb-4 opacity-50 italic">// Intel</p>
            {['READING_LOGS', 'TAX_REFAC', 'CLEAN_INPUTS'].map((item) => (
              <li key={item} className="text-xs hover:text-violet-400 transition-colors cursor-pointer font-light tracking-widest uppercase">
                {item}
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-4">
            <p className="text-white font-black text-[10px] tracking-[0.3em] uppercase mb-4 opacity-50 italic">// System</p>
            {['PROTOCOLS', 'PRIVACY_MD5', 'SECURITY_AUDIT'].map((item) => (
              <li key={item} className="text-xs hover:text-violet-400 transition-colors cursor-pointer font-light tracking-widest uppercase">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* System Sync / Newsletter Section */}
        <div className="lg:col-span-2 flex flex-col space-y-6">
          <p className="text-white font-black text-[10px] tracking-[0.4em] uppercase italic">System_Sync</p>
          <p className="text-[11px] text-slate-600 leading-relaxed font-light italic">
            Synchronize your terminal with direct project broadcasts. No algorithmic noise.
          </p>
          <div className="flex flex-col gap-2">
            <input 
              type="text" 
              placeholder="CREDENTIALS@SYSTEM.COM" 
              className="bg-slate-950/50 border border-white/10 px-4 py-3 text-[10px] font-mono focus:outline-none focus:border-violet-500/50 w-full rounded-none tracking-widest text-violet-400"
            />
            <button className="bg-violet-600 text-white px-4 py-3 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-violet-500 transition-all">
              INITIALIZE_SYNC
            </button>
          </div>
        </div>

        {/* Bottom Bar: Metadata Finale */}
        <div className="lg:col-span-6 border-t border-white/5 mt-12 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-[9px] tracking-[0.4em] font-mono text-slate-700 uppercase">
                LOC: MIDRAND_ZA // TZ: GMT+2 // STATUS: ENCRYPTED
            </div>
            <div className="hidden md:block h-3 w-[1px] bg-white/5" />
            <p className="text-[9px] tracking-[0.4em] text-slate-700 uppercase font-bold">
              &copy; 2025 KULANI BALOYI // ARCHIVE_V6
            </p>
          </div>

          {/* Thermal Signature Status Squares */}
          <div className="flex gap-3">
             <div className="h-2 w-2 bg-violet-500/40 border border-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.3)]"></div>
             <div className="h-2 w-2 bg-white/5 border border-white/10"></div>
             <div className="h-2 w-2 bg-white/5 border border-white/10"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer