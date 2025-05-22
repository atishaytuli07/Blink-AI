export default function FeaturOne() {
  return (
    <div>
      <section className="container bg-white mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2">
            <div className="inline-block bg-yellow-400 rounded-full px-4 py-2 mb-6">
              <span className="font-semibold font-bm text-black">SMART SUMMARY</span>
            </div>

            <h1 className="text-4xl font-bold font-bm tracking-tight text-black mb-6 leading-tight">
              Smart, Beautiful, Clear,
              <br />
              and Easy-to-Read Summaries
            </h1>

            <p className="text-base text-gray-800 mb-8 leading-relaxed">
              Our AI-powered summaries deliver crisp, concise insights with a focus on clarity and elegance.
              Whether you want a quick overview or a detailed breakdown, our tool adapts to your needs,
              making complex information simple and enjoyable to read.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 relative flex items-center justify-center ">
            <img
              src="./02.svg"
              alt="Illustration of summary and clarity"
              className="w-1/2 h-1/2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
