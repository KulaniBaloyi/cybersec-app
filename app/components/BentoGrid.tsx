import React from 'react'

const BentoGrid = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col space-y-5 items-center py-20">
      
      {/* Top Text Content */}
      <p className=" rounded-full h-6 px-3 grid place-content-center text-xs shadow-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm font-semibold">Learning Coverage</p>
      <h2 className="max-w-3xl mx-auto text-4xl font-bold text-center">Complete Coverage of Cyber Security Domains</h2>
      <p className="max-w-3xl mx-auto text-base leading-relaxed text-center">Boost your knowledge in every aspect of cybersecurity with our comprehensive course categories covering general IT fundamentals, offensive security, defensive security and strategic security management.</p>
      
      {/* Parent Container: Flex, Wrap, Center */}
      <div className="flex flex-wrap justify-center gap-10 w-full mt-10">
        
        {/*
          // 💡 FLEXBOX FIX:
          // Use w-1/2 (50%) and w-1/3 (33.33%) for clean sizing.
          // Add flex-shrink-0 to prevent items from shrinking due to the gap.
        */}
        
        {/* Item 1: 50% width (col-span-3 equivalent) */}
        <div className="border border-[Rgba(255,255,255,.1)] rounded-xl py-6 shadow-sm h-80 sm:h-[380px] max-h-80 sm:max-h-[380px] bg-gradient-to-br from-[lab(98.26%_0_0)]/4 to-[lab(2.75381%_0_0)] w-full sm:w-[calc(50%-20px)] flex-shrink-0"></div>
        
        {/* Item 2: 50% width (col-span-3 equivalent) */}
        <div className="border border-[Rgba(255,255,255,.1)] rounded-xl py-6 shadow-sm h-80 sm:h-[380px] max-h-80 sm:max-h-[380px] bg-gradient-to-br from-[lab(98.26%_0_0)]/4 to-[lab(2.75381%_0_0)] w-full sm:w-[calc(50%-20px)] flex-shrink-0"></div>
        
        {/* Item 3: 33.33% width (col-span-2 equivalent) */}
        <div className="border border-[Rgba(255,255,255,.1)] rounded-xl py-6 shadow-sm h-80 sm:h-[380px] max-h-80 sm:max-h-[380px] bg-gradient-to-br from-[lab(98.26%_0_0)]/4 to-[lab(2.75381%_0_0)] w-full sm:w-[calc(33.33%-27px)] flex-shrink-0"></div>
        
        {/* Item 4: 33.33% width (col-span-2 equivalent) */}
        <div className="border border-[Rgba(255,255,255,.1)] rounded-xl py-6 shadow-sm h-80 sm:h-[380px] max-h-80 sm:max-h-[380px] bg-gradient-to-br from-[lab(98.26%_0_0)]/4 to-[lab(2.75381%_0_0)] w-full sm:w-[calc(33.33%-27px)] flex-shrink-0"></div>
        
        {/* Item 5: 33.33% width (col-span-2 equivalent) */}
        <div className="border border-[Rgba(255,255,255,.1)] rounded-xl py-6 shadow-sm h-80 sm:h-[380px] max-h-80 sm:max-h-[380px] bg-gradient-to-br from-[lab(98.26%_0_0)]/4 to-[lab(2.75381%_0_0)] w-full sm:w-[calc(33.33%-27px)] flex-shrink-0"></div>
        
        {/* Item 6: 50% width (col-span-3 equivalent) */}
        <div className="border border-[Rgba(255,255,255,.1)] rounded-xl py-6 shadow-sm h-80 sm:h-[380px] max-h-80 sm:max-h-[380px] bg-gradient-to-br from-[lab(98.26%_0_0)]/4 to-[lab(2.75381%_0_0)] w-full sm:w-[calc(50%-20px)] flex-shrink-0"></div>
        
        {/* Item 7: 50% width (col-span-3 equivalent) */}
        <div className="border border-[Rgba(255,255,255,.1)] rounded-xl py-6 shadow-sm h-80 sm:h-[380px] max-h-80 sm:max-h-[380px] bg-gradient-to-br from-[lab(98.26%_0_0)]/4 to-[lab(2.75381%_0_0)] w-full sm:w-[calc(50%-20px)] flex-shrink-0"></div>
        
        {/* Item 8: 50% width (col-span-3 equivalent) - This item will be centered! */}
       <div className="border border-[Rgba(255,255,255,.1)] rounded-xl py-6 shadow-sm h-80 sm:h-[380px] max-h-80 sm:max-h-[380px] bg-gradient-to-br from-[lab(98.26%_0_0)]/4 to-[lab(2.75381%_0_0)] w-full sm:w-[calc(50%-20px)] flex-shrink-0"></div>
        
        
      </div>
    </section>
  )
}

export default BentoGrid