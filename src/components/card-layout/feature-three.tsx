export default function FeatureThree() {
  return (
    <div>
      <section className="container bg-white mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="w-full md:w-1/2">
            <div className="inline-block bg-blue-500 rounded-full px-4 py-2 mb-6">
              <span className="font-semibold font-bm text-white">
                FAST SUMMARY
              </span>
            </div>

            <h1 className="text-4xl font-bold font-bm tracking-tight text-black mb-6 leading-tight">
              Fast as the Blink of an Eye
            </h1>

            <p className="text-base text-gray-800 mb-8 leading-relaxed">
              Get lightning-fast summaries instantly, so you can grasp key
              insights without waiting. Our cutting-edge AI processes
              information at incredible speeds — saving you time while
              delivering accuracy and clarity, no matter how complex the
              content. Whether you're rushing through dense reports, lengthy
              articles, or critical documents, our tool ensures you never miss
              the essential points. Experience smooth, efficient reading that
              boosts your productivity and helps you make informed decisions
              faster than ever before.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative flex items-center justify-center ">
            <img src="/01.svg" alt="" className="w-1/2 h-1/2" />
          </div>
        </div>
      </section>
    </div>
  );
}
