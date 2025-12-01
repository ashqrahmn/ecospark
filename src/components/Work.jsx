import { assets } from "../assets/assets";

const Work = () => {
  return (
    <div
      id="work"
      className="scroll-mt-[120px] 2xl:scroll-mt-[205px] w-full flex flex-col justify-start items-center pb-9 2xl:pb-16 px-4 overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-16 2xl:mb-20">
        <h6 className="text-base md:text-lg 2xl:text-xl font-parkinsans uppercase">
          How IT Works
        </h6>
        <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-medium font-parkinsans">
          Quick And Easy
        </h2>
      </div>

      {/* Process Steps Layout */}
      <div className="w-full max-w-7xl 2xl:max-w-[1680px] flex flex-col items-center gap-10 lg:relative lg:h-[420px] 2xl:h-[500px]">
        <img
          src={assets.green_arrow}
          alt="Arrow"
          className="hidden lg:block absolute top-[25px] right-1/2 mr-[60px] lg:mr-[200px] w-[130px] lg:w-[160px] 2xl:w-[190px]"
        />
        <img
          src={assets.green_arrow}
          alt="Arrow"
          className="hidden lg:block absolute top-[25px] left-1/2 ml-[60px] lg:ml-[200px] w-[130px] lg:w-[160px] 2xl:w-[190px]"
        />
        <img
          src={assets.green_arrow}
          alt="Arrow"
          className="hidden lg:block absolute bottom-[28%] left-1/2 -translate-x-1/2 w-[160px] lg:w-[160px] 2xl:w-[190px]"
        />

        {/* Step 1 */}
        <div className="lg:absolute lg:-top-8 lg:left-1/2 lg:-translate-x-1/2">
          <div className="flex flex-col items-center w-[220px] lg:w-[450px] 2xl:w-[520px]">
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <img src={assets.leaf1} alt="Leaf" className="w-8 lg:w-9 2xl:w-11" />
              </div>
              <div className="w-32 lg:w-36 2xl:w-40 h-32 lg:h-36 2xl:h-40 rounded-full bg-secondary-light border border-secondary flex items-center justify-center relative z-10">
                <img
                  src={assets.calender}
                  alt="Free Quote"
                  className="w-[70px] lg:w-[80px] 2xl:w-[95px]"
                />
              </div>
            </div>
            <div className="text-center mt-3 font-parkinsans">
              <h4 className="text-sm lg:text-base 2xl:text-lg font-semibold mb-1">
                Get a Quote
              </h4>
              <p className="text-xs sm:text-sm 2xl:text-base text-gray-light px-2 leading-5">
                Select your service and choose your preferred schedule.
              </p>
            </div>
            <div className="mt-8 lg:hidden">
              <img src={assets.green_arrow} alt="Arrow" className="w-[110px]" />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="lg:absolute lg:bottom-0 lg:left-0">
          <div className="flex flex-col items-center w-[220px] lg:w-[450px] 2xl:w-[520px]">
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <img
                  src={assets.leaf2}
                  alt="Leaf"
                  className="w-8 lg:w-9 2xl:w-11 translate-y-7"
                />
              </div>
              <div className="w-32 lg:w-36 2xl:w-40 h-32 lg:h-36 2xl:h-40 rounded-full bg-secondary-light border border-secondary flex items-center justify-center relative z-10">
                <img
                  src={assets.window}
                  alt="Clean"
                  className="w-[80px] lg:w-[90px] 2xl:w-[105px] translate-y-1"
                />
              </div>
            </div>
            <div className="text-center mt-3 font-parkinsans">
              <h4 className="text-sm lg:text-base 2xl:text-lg font-semibold mb-1">Magic</h4>
              <p className="text-xs sm:text-sm 2xl:text-base text-gray-light px-2 leading-5">
                Our expert team provides a top-quality clean.
              </p>
            </div>
            <div className="mt-8 lg:hidden">
              <img src={assets.green_arrow} alt="Arrow" className="w-[110px]" />
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="lg:absolute lg:bottom-0 lg:right-0">
          <div className="flex flex-col items-center w-[220px] lg:w-[450px] 2xl:w-[520px]">
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <img
                  src={assets.leaf3}
                  alt="Leaf"
                  className="w-8 lg:w-9 2xl:w-11 translate-y-9"
                />
              </div>
              <div className="w-32 lg:w-36 2xl:w-40 h-32 lg:h-36 2xl:h-40 rounded-full bg-secondary-light border border-secondary flex items-center justify-center relative z-10">
                <img
                  src={assets.green_face}
                  alt="Relax"
                  className="w-[50px] lg:w-[60px] 2xl:w-[72px] translate-y-4"
                />
              </div>
            </div>
            <div className="text-center mt-3 font-parkinsans">
              <h4 className="text-sm lg:text-base 2xl:text-lg font-semibold mb-1">Smile</h4>
              <p className="text-xs sm:text-sm 2xl:text-base text-gray-light px-2 leading-5">
                Come home to a spotless space and just relax.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;