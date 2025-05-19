export default function QueriesPage() {
  return (
    <div className="min-h-screen">


      {/* Queries Section */}
      <section className="container bg-white h-screen mx-auto px-4 py-12 md:py-24 relative overflow-hidden">

        <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-24 items-start">
          {/* Left Column - Heading */}
          <div className="w-full md:w-5/12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-black leading-none">
              NOT JUST A
              <br />
              WRAPPER
            </h1>
          </div>

          {/* Right Column - Features */}
          <div className="w-full md:w-7/12 pt-12">
            <div className="space-y-8">
              <div className="pb-6 border-b border-gray-300">
                <p className="text-xl text-black font-normal">
                  Custom model for insights + creativity data (Effies + Cannes + more)
                </p>
              </div>

              <div className="pb-6 border-b border-gray-300">
                <p className="text-xl text-black font-normal">
                  BYOD + Category + Consumer Data (open source + syndicated)
                </p>
              </div>

              <div className="pb-6 border-b border-gray-300">
                <p className="text-xl text-black font-normal">Our proprietary algorithm that creates new recipes</p>
              </div>

              <div className="pb-6 border-b border-gray-300">
                <p className="text-xl text-black font-normal">
                  Nuanced refinement by experts (think Harvey AI for Marketing)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
