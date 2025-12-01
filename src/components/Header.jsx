import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { assets } from "../assets/assets";

const features = ["Professional", "Friendly", "Convenient"];

const Header = () => {
  // Manages the animation state for tapped buttons on touch devices.
  const [tappedButton, setTappedButton] = useState(null);
  // Detects if the current device has touch capabilities.
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Checks for touch screen support on component mount.
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    }
  }, []);

  // Resets the button tap animation state after a 1-second delay.
  useEffect(() => {
    if (tappedButton) {
      const timer = setTimeout(() => {
        setTappedButton(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [tappedButton]);

  // Triggers button tap animation on touch devices.
  const handleTap = (buttonIdentifier) => {
    if (isTouchDevice) {
      setTappedButton(buttonIdentifier);
    }
    console.log(`${buttonIdentifier} button action placeholder.`);
  };

  return (
    <div
      id="home"
      className="w-full pt-[125px] px-6 md:px-12 flex justify-center"
    >
      <div
        className="relative w-full max-w-[1200px] 2xl:max-w-[1600px] 
        rounded-[40px] flex flex-col md:flex-row items-center justify-start 
        bg-white px-0 md:px-[60px] py-0 h-auto md:h-[550px] 2xl:h-[780px]"
      >
        {/* Background & Decorative Images */}
        <img
          src={assets.hero}
          alt="Bright, clean living room after a professional cleaning"
          className="absolute inset-0 w-full h-full object-cover rounded-[40px] z-0 hidden md:block"
        />
        <div className="md:hidden w-full">
          <img
            src={assets.hero}
            alt="Bright, clean living room after a professional cleaning"
            className="w-full h-auto object-cover rounded-t-[40px]"
          />
        </div>
        <img
          src={assets.growth_close_img2}
          alt=""
          role="presentation"
          className="absolute w-[40px] 2xl:w-[60px] 
          top-[70px] left-[520px] 2xl:top-[100px]  2xl:left-[700px] 
          z-30 hidden md:block"
        />
        <img
          src={assets.growth_close_img1}
          alt=""
          role="presentation"
          className="absolute w-[100px] 2xl:w-[140px] 
          top-[120px] left-[500px] 2xl:top-[180px] 2xl:left-[680px] 
          z-30 hidden md:block"
        />
        <img
          src={assets.growth_close_img3}
          alt=""
          role="presentation"
          className="absolute w-[50px] 2xl:w-[70px] 
          top-[220px] left-[550px] 2xl:top-[320px] 2xl:left-[740px] 
          z-30 hidden md:block"
        />

        {/* Hero Content Card */}
        <div className="bg-white w-full md:w-auto max-w-[500px] 2xl:max-w-[700px] rounded-[20px] p-6 md:p-10 flex flex-col gap-4 shadow-lg mx-auto md:mx-0 -mt-4 md:mt-16 z-20">
          <h1 className="text-2xl md:text-3xl 2xl:text-5xl font-winky font-semibold leading-snug text-black">
            Professional Cleaning for Homes, Offices, and More
          </h1>
          <p className="text-sm md:text-base 2xl:text-lg text-black/80 leading-[1.6] font-parkinsans">
            Reclaim your valuable time. Let our trusted professionals handle the
            cleaning while you relax.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-2 2xl:mt-6">
            <div className="group relative h-[36px] w-[140px] sm:h-[40px] sm:w-[130px] 2xl:h-[50px] 2xl:w-[170px] overflow-hidden rounded-full">
              <button
                aria-label="Get a free quote"
                className="bg-primary text-black text-sm 2xl:text-lg font-medium h-full w-full rounded-full relative cursor-pointer"
                onClick={() => handleTap("quote")}
              >
                <span
                  className={`h-full w-full flex items-center justify-center transition-transform duration-300 ${
                    tappedButton === "quote"
                      ? "-translate-y-full"
                      : "group-hover:-translate-y-full"
                  }`}
                >
                  Get Started
                </span>
                <span
                  className={`absolute top-0 left-0 h-full w-full flex items-center justify-center transition-transform duration-300 ${
                    tappedButton === "quote"
                      ? "translate-y-0"
                      : "translate-y-full group-hover:translate-y-0"
                  }`}
                >
                  Get Started
                </span>
              </button>
            </div>
            <div className="group relative h-[36px] w-[140px] sm:h-[40px] sm:w-[130px] 2xl:h-[50px] 2xl:w-[170px] overflow-hidden rounded-full border border-secondary bg-secondary-light">
              <button
                aria-label="Book a cleaning service"
                className="text-black text-sm 2xl:text-lg font-medium h-full w-full rounded-full relative cursor-pointer"
                onClick={() => handleTap("service")}
              >
                <span
                  className={`h-full w-full flex items-center justify-center transition-transform duration-300 ${
                    tappedButton === "service"
                      ? "-translate-y-full"
                      : "group-hover:-translate-y-full"
                  }`}
                >
                  Book Now
                </span>
                <span
                  className={`absolute top-0 left-0 h-full w-full flex items-center justify-center transition-transform duration-300 ${
                    tappedButton === "service"
                      ? "translate-y-0"
                      : "translate-y-full group-hover:translate-y-0"
                  }`}
                >
                  Book Now
                </span>
              </button>
            </div>
          </div>
          <ul
            className="mt-4 text-sm md:text-base 2xl:text-lg font-medium text-black grid grid-cols-2 gap-y-3 md:flex md:flex-wrap md:gap-x-6"
          >
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheck className="bg-secondary text-white rounded-full text-base p-[3px]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;