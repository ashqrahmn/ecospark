import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import { assets } from "../assets/assets";

const features = [
  "Vetted & Trusted Professionals",
  "100% Satisfaction Guarantee",
  "Eco-Friendly Supplies Included",
];

const About = () => {
  // Manages the button's tap animation state for touch devices.
  const [learnTapped, setLearnTapped] = useState(false);
  // Detects if the current device is touch-enabled.
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Checks for touch capabilities on component mount.
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Resets the button tap animation after 1 second.
  useEffect(() => {
    if (!learnTapped) return;
    const timerId = setTimeout(() => setLearnTapped(false), 1000);
    return () => clearTimeout(timerId);
  }, [learnTapped]);

  const handleLearnClick = () => {
    if (isTouchDevice) setLearnTapped(true);
    console.log("Learn More clicked!");
  };

  return (
    <div id="about" className="scroll-mt-[90px] bg-primary-light">
      <div className="max-w-7xl 2xl:max-w-[1620px] mx-auto px-6 md:px-12 py-20 md:py-24 lg:py-24 2xl:py-32 flex flex-col md:flex-row items-stretch justify-center gap-y-8 md:gap-y-0">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="rounded-3xl overflow-hidden max-w-full bg-secondary-light">
            <img
              src={assets.GettyImages}
              alt="GettyImages"
              className="w-full h-auto object-cover transition-transform duration-700 ease-in-out hover:scale-110 active:scale-110"
              draggable={false}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-12 2xl:pl-24">
          <h6 className="text-sm 2xl:text-lg uppercase tracking-wide text-gray-light">
            About EcoSpark
          </h6>
          <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl font-medium leading-snug mt-2">
            A Higher Standard of Clean for Your Space
          </h2>
          <p className="mt-4 text-base 2xl:text-lg text-gray-light text-justify">
            At EcoSpark, we believe a clean environment is a healthy one. Our
            mission is to deliver exceptional cleaning services for homes and
            businesses, using trusted professionals and eco-friendly products
            for a result you can see and feel.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 py-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm 2xl:text-lg">
                <FaCheck
                  className="bg-secondary text-white rounded-full mr-2 p-1 w-5 h-5 2xl:w-7 2xl:h-7 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="group relative h-9 w-36 sm:h-10 sm:w-36 2xl:h-12 2xl:w-44 overflow-hidden rounded-full">
            <button
              type="button"
              onClick={handleLearnClick}
              className="bg-primary text-black text-sm 2xl:text-lg font-medium h-full w-full rounded-full relative cursor-pointer"
            >
              <span
                className={`h-full flex items-center justify-center transition-transform duration-500 ${
                  learnTapped ? "-translate-y-full" : "group-hover:-translate-y-full"
                }`}
              >
                Learn More
              </span>
              <span
                className={`absolute top-0 left-0 h-full w-full flex items-center justify-center transition-transform duration-500 ${
                  learnTapped
                    ? "translate-y-0"
                    : "translate-y-full group-hover:translate-y-0"
                }`}
              >
                Learn More
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;