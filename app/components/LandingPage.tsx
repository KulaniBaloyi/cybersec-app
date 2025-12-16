import React from 'react'

const LandingPage = () => {
  return (
    // 💡 MODIFIED: Changed 'grid place-items-center' to 'flex flex-col items-center justify-start'
    // This pushes the content block to the top of the min-h-screen container.
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-gray-900 ">
      
      {/* 1. BACKGROUND LAYERS (Unchanged, z-0 and z-1) */}
      <div 
        className="absolute inset-0 z-0 bg-[lab(2.75381%_0_0)]" 
        aria-hidden="true" 
      >
        <div 
          className="absolute inset-0 
          bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
          bg-size-[36px_36px] 
          mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        ></div>
      </div>

      <div 
        className="absolute inset-0 z-1"
        aria-hidden="true"
      >
        <div 
          className="absolute inset-0 
          bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15)_0%,rgba(99,102,241,0)_75%)]"
        ></div>
      </div>

      {/* 2. MAIN CONTENT */}
      {/* 💡 MODIFIED: Reduced vertical padding from py-20 to py-12 to reduce space */}
      <div className="relative max-w-5xl items-center flex flex-col space-y-10 py-12 z-10">
        <div className='rounded-full flex items-center py-2 px-4 text-sm border border-blue-600/20 bg-linear-to-r from-blue-600/10 to-purple-600/10 '>
            <div className='bg-linear-to-r from-purple-600 to-blue-600
          bg-clip-text leading-tight text-transparent font-semibold'>Rebel Success</div>
            <p className='h-full w-4 bg-blue-500'></p>
            <p>Get a link to all the courses from only R99.99 p.m</p>
        </div>
        <h1 className="hidden md:block text-5xl text-center font-semibold tracking-tight
          sm:text-5xl md:text-7xl lg:text-8xl text-white"><a>Empower yourself to</a><br/><a className="hidden md:block bg-linear-to-r from-purple-600 to-blue-600
          bg-clip-text leading-tight text-transparent sm:text-5xl md:text-7xl lg:text-8xl
          font-semibold tracking-tight">Hack and Defend</a></h1>
          <p className='text-lg max-w-2xl leading-tight text-center'>Subvert the norms of cybersecurity education with our practical, hands-on training. Master penetration testing, SOC operations, defensive security and more with real-world challenges and skills pathways.</p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
            <a className='py-2 px-4 rounded-xl bg-linear-to-r from-purple-600 to-blue-600'>Sign up for free</a>
            <a className='py-2 px-4 rounded-xl bg-linear-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm'>Explore our courses</a>
          </div>
        
      </div>


    </section>
  )
}

export default LandingPage