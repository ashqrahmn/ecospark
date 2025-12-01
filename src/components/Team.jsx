import { assets, features, stats } from "../assets/assets";

// Parses a stat string to separate the number from an optional symbol (+ or %).
const parseStat = (statNumber) => {
  const statNumberStr = String(statNumber);
  const match = statNumberStr.match(/^(\d+)([+%])?$/);

  if (!match) {
    return { mainNumber: statNumberStr, symbol: "" };
  }

  return {
    mainNumber: match[1],
    symbol: match[2] || "",
  };
};

const Team = () => {
  return (
    <div
      id="team"
      className="scroll-mt-[93px] 2xl:scroll-mt-[112px] w-full bg-secondary text-white relative overflow-hidden flex flex-col items-center rounded-[40px] py-8 md:py-5 2xl:py-14"
    >
      <div className="max-w-7xl 2xl:max-w-[11900px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-18 relative z-10 w-full">
        {/* Decorative Images */}
        <img
          src={assets.team_leaf}
          alt="Decorative leaf"
          className="absolute top-12 left-4 w-20 h-auto
                      sm:left-16 sm:w-24
                      md:left-32
                      lg:left-48
                      xl:left-75 xl:w-35
                      2xl:top-15 2xl:left-130 2xl:w-40"
        />
        <img
          src={assets.team_leaf}
          alt="Decorative leaf"
          className="absolute -top-7 right-10 w-15 h-auto
                      sm:-top-5 sm:right-16 sm:w-20
                      md:right-32
                      lg:right-48
                      xl:right-70 xl:w-30
                      2xl:-top-5 2xl:right-130 2xl:w-35"
        />

        {/* Section Header */}
        <div className="text-center font-parkinsans">
          <p className="text-xs sm:text-sm 2xl:text-base uppercase tracking-wide font-light">
            Why Choose Us
          </p>
          <h2 className="text-2xl md:text-4xl mb-8 font-medium leading-snug">
            We Are Experienced & We
            <br />
            Have Expert Teams
          </h2>
        </div>

        <div className="mt-10 sm:mt-12 2xl:mt-20">
          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-6 mb-12 items-stretch justify-items-center font-parkinsans 2xl:max-w-7xl 2xl:mx-auto">
            {features.map((item) => (
              <div
                key={item.id || item.title}
                className="bg-[#84c55f] rounded-[24px] p-6  text-black shadow-lg hover:shadow-xl
  transition-all duration-300 w-full max-w-[320px] 2xl:max-w-[355px] min-h-[280px] 2xl:min-h-[323px]
  border border-[#6bb03a]/20 hover:scale-105 active:scale-105 touch-manipulation skew-y-2 translate-y-2"
              >
                <div className="-skew-y-2 flex flex-col items-start h-full">
                  <div className="bg-white p-4 2xl:p-5 rounded-[16px] mb-5 flex items-center justify-center shadow-sm border border-gray-100">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-9 h-9 2xl:w-10 2xl:h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-3 leading-tight text-black">
                    {item.title}
                  </h3>
                  <p className="text-xs font-light text-black leading-relaxed flex-1 text-justify">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 pt-4 2xl:pt-16 2xl:ml-42">
            {stats.map((stat, idx) => {
              const { mainNumber, symbol } = parseStat(stat.number);

              return (
                <div
                  key={stat.id || stat.label}
                  className={`text-center sm:text-left ${
                    idx !== 0 ? "sm:border-l border-white sm:pl-6 2xl:pl-7" : ""
                  }`}
                >
                  <p
                    className="text-4xl"
                    aria-label={`${stat.number} ${stat.label}`}
                  >
                    <span aria-hidden="true">{mainNumber}</span>
                    {symbol && (
                      <span
                        aria-hidden="true"
                        className="text-base 2xl:text-lg relative -top-4 ml-1"
                      >
                        {symbol}
                      </span>
                    )}
                  </p>
                  <p className="text-sm sm:text-base 2xl:text-base text-white">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;