

const LearningCoverage = () => {
  return (
    <section className="flex flex-col gap-5 items-center mx-auto max-w-6xl py-20 px-10 text-center">
        <p className=" rounded-full h-6 px-3 grid place-content-center text-xs shadow-sm bg-linear-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm font-semibold">Learning Coverage</p>
        <h2 className="max-w-3xl mx-automax-w-3xl mx-auto text-4xl font-bold">Complete Coverage of Cyber Decurity Domains</h2>
        <p className="max-w-3xl mx-auto text-base leading-relaxed">Boost your knowledge in every aspect of cybersecurity with our comprehensive course categories covering general IT fundamentals, offensive security, defensive security and strategic security management.</p>
        <div className="grid grid-cols-4 gap-5 w-full">
            <div className="border rounder-md border-[Rgba(255,255,255,.1)] w-full  rounded-xl shadow-sm bg-linear-to-br from-green-500/20 to-[lab(2.75381%_0_0)] flex flex-col space-y-2 p-6 justify-between">
                <h3 className="text-2xl text-center font-semibold line-clamp-1">General</h3>
                <p className="text-sm line-clamp-4">Foundational Information Technology, Networking and Cybersecurity concepts and skills that apply across all domains.</p>
                <p className="whitespace-nowrap rounded-md shadow-xs h-9 px-4 py-2 bg-white text-black">View Courses</p>
            </div>
            <div className="border rounder-md border-[Rgba(255,255,255,.1)] w-full aspect-square rounded-xl shadow-sm bg-linear-to-br from-red-500/20 to-[lab(2.75381%_0_0)] flex flex-col space-y-2 p-6 justify-between">
            <h3 className="text-2xl text-center font-semibold line-clamp-1">Offensive</h3>
                <p className="text-sm line-clamp-4">Foundational Information Technology, Networking and Cybersecurity concepts and skills that apply across all domains.</p>
                <p className="whitespace-nowrap rounded-md shadow-xs h-9 px-4 py-2 bg-white text-black">View Courses</p>
                
            </div>
            <div className="border rounder-md border-[Rgba(255,255,255,.1)] w-full aspect-square rounded-xl shadow-sm bg-linear-to-br from-blue-500/20 to-[lab(2.75381%_0_0)] flex flex-col space-y-2 p-6 justify-between">
                <h3 className="text-2xl text-center font-semibold line-clamp-1">Defensive</h3>
                <p className="text-sm line-clamp-4">Foundational Information Technology, Networking and Cybersecurity concepts and skills that apply across all domains.</p>
                <p className="whitespace-nowrap rounded-md shadow-xs h-9 px-4 py-2 bg-white text-black">View Courses</p>
            </div>
            <div className="border rounder-md border-[Rgba(255,255,255,.1)] w-full aspect-square rounded-xl shadow-sm bg-linear-to-br from-yellow-500/20 to-[lab(2.75381%_0_0)] flex flex-col space-y-2 p-6 justify-between">
                <h3 className="text-2xl text-center font-semibold line-clamp-1">Strategic</h3>
                <p className="text-sm line-clamp-4">Foundational Information Technology, Networking and Cybersecurity concepts and skills that apply across all domains.</p>
                <p className="whitespace-nowrap rounded-md shadow-xs h-9 px-4 py-2 bg-white text-black">View Courses</p>
            </div>
        </div>
    </section>
  )
}

export default LearningCoverage