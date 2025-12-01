import { useState, useEffect } from "react";
import { socialMediaLinks, serviceLinks, contactInfo, workingHours } from "../assets/assets";

const Footer = () => {
  // State for managing tap animations on buttons and links.
  const [getQuoteTapped, setGetQuoteTapped] = useState(false);
  const [subscribeTapped, setSubscribeTapped] = useState(false);
  const [tappedSocialIndex, setTappedSocialIndex] = useState(null);
  const [tappedServiceIndex, setTappedServiceIndex] = useState(null);
  const [tappedContactIndex, setTappedContactIndex] = useState(null);
  // State to detect if the current device is touch-enabled.
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Timers to reset tap animation states after a short delay.
  useEffect(() => { if (!getQuoteTapped) return; const timer = setTimeout(() => setGetQuoteTapped(false), 1000); return () => clearTimeout(timer); }, [getQuoteTapped]);
  useEffect(() => { if (!subscribeTapped) return; const timer = setTimeout(() => setSubscribeTapped(false), 1000); return () => clearTimeout(timer); }, [subscribeTapped]);
  useEffect(() => { if (tappedSocialIndex === null) return; const timer = setTimeout(() => setTappedSocialIndex(null), 600); return () => clearTimeout(timer); }, [tappedSocialIndex]);
  useEffect(() => { if (tappedServiceIndex === null) return; const timer = setTimeout(() => setTappedServiceIndex(null), 500); return () => clearTimeout(timer); }, [tappedServiceIndex]);
  useEffect(() => { if (tappedContactIndex === null) return; const timer = setTimeout(() => setTappedContactIndex(null), 500); return () => clearTimeout(timer); }, [tappedContactIndex]);
  // Checks for touch capabilities on component mount.
  useEffect(() => { if (typeof window !== "undefined") { setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0); } }, []);

  // Handlers to trigger tap animations on touch devices.
  const handleSocialTap = (index) => { if (isTouchDevice) setTappedSocialIndex(index); };
  const handleServiceTap = (index) => { if (isTouchDevice) setTappedServiceIndex(index); };
  const handleContactTap = (index) => { if (isTouchDevice) setTappedContactIndex(index); };
  // Factory function to create tap handlers for buttons.
  const createTapHandler = (setter) => () => { if (isTouchDevice) setter(true); };
  const handleGetQuoteClick = createTapHandler(setGetQuoteTapped);
  const handleSubscribeClick = createTapHandler(setSubscribeTapped);

  // Utility to split an array into multiple columns for layout.
  const itemsPerColumn = 4;
  const createColumns = (data) => { const columns = []; for (let i = 0; i < data.length; i += itemsPerColumn) { columns.push(data.slice(i, i + itemsPerColumn)); } return columns; };
  const serviceColumns = createColumns(serviceLinks);
  const contactColumns = createColumns(contactInfo);
  const workingHoursColumns = createColumns(workingHours);

  return (
    <footer
      id="footer"
      className="w-full flex flex-col bg-secondary-light px-[12%] pt-10 2xl:pt-16 pb-0 font-parkinsans text-black text-base 2xl:text-lg"
    >
      {/* CTA & Newsletter Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 2xl:gap-12">
        <div className="w-full flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
          <h2 className="text-2xl sm:text-4xl 2xl:text-5xl font-medium pb-3 md:pb-6 2xl:pb-8">
            A Wow-Worthy Clean, Every Single Time.
          </h2>
          <div className="group relative h-[38px] sm:h-[44px] 2xl:h-[50px] w-[150px] sm:w-[180px] 2xl:w-[200px] overflow-hidden rounded-full">
            <button
              onClick={handleGetQuoteClick}
              className="bg-primary text-black text-sm sm:text-base 2xl:text-lg font-medium h-full w-full rounded-full relative cursor-pointer"
            >
              <span
                className={`h-full flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(.23,1,0.32,1)] ${
                  getQuoteTapped ? "-translate-y-full" : "group-hover:-translate-y-full"
                }`}
              >
                Get a Free Quote
              </span>
              <span
                className={`absolute top-0 left-0 h-full w-full flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(.23,1,0.32,1)] ${
                  getQuoteTapped ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"
                }`}
              >
                Get a Free Quote
              </span>
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center lg:items-end">
          <form className="w-full lg:w-auto" onSubmit={(e) => e.preventDefault()}>
            <h6 className="text-base sm:text-lg font-medium pb-2.5 text-center lg:text-left 2xl:pb-3">
              Subscribe to Our Newsletter
            </h6>
            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full justify-center lg:justify-start">
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-[38px] sm:h-[44px] 2xl:h-[50px] w-full sm:w-[250px] 2xl:w-[300px] rounded-full border-none bg-white pl-4 text-sm sm:text-base 2xl:text-lg outline-none"
              />
              <div className="group relative h-[38px] sm:h-[44px] 2xl:h-[50px] w-[120px] sm:w-[140px] 2xl:w-[160px] overflow-hidden rounded-full">
                <button
                  type="button"
                  onClick={handleSubscribeClick}
                  className="bg-primary text-black text-sm sm:text-base 2xl:text-lg font-medium h-full w-full rounded-full relative cursor-pointer"
                >
                  <span
                    className={`h-full flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(.23,1,0.32,1)] ${
                      subscribeTapped ? "-translate-y-full" : "group-hover:-translate-y-full"
                    }`}
                  >
                    Subscribe
                  </span>
                  <span
                    className={`absolute top-0 left-0 h-full w-full flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(.23,1,0.32,1)] ${
                      subscribeTapped ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"
                    }`}
                  >
                    Subscribe
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Links & Info Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-start py-12 gap-x-8 gap-y-10">
        {/* Mobile Layout */}
        <div className="w-full contents md:hidden">
          <div className="w-full flex flex-col items-start">
            <h6 className="text-base font-medium uppercase">Services</h6>
            <ul className="mt-4 space-y-4">
              {serviceLinks.map((service, index) => (
                <li key={index} className="text-sm font-light">
                  <button
                    type="button"
                    onClick={() => handleServiceTap(index)}
                    className={`bg-transparent p-0 text-left transition-colors duration-300 hover:text-secondary ${
                      tappedServiceIndex === index
                        ? "text-secondary"
                        : "text-black"
                    }`}
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex flex-col items-start">
            <h6 className="text-base font-medium uppercase">Contact Info</h6>
            <address className="not-italic font-light mt-4 space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 font-light">{item.icon}</div>
                  <div className="flex flex-col">
                    {item.href ? (
                      <a
                        href={item.href}
                        onClick={() => handleContactTap(index)}
                        className={`text-sm hover:text-secondary transition-colors ${
                          tappedContactIndex === index
                            ? "text-secondary"
                            : "text-black"
                        }`}
                      >
                        {item.content.map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </a>
                    ) : (
                      <span className="text-sm">
                        {item.content.map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </address>
          </div>
          <div className="w-full flex flex-col items-start">
            <h6 className="text-base font-medium uppercase">Working Hours</h6>
            <div className="mt-4 w-full space-y-4">
              {workingHours.map((item, index) => (
                <div key={index} className="flex font-light text-sm">
                  <span className="w-24">{item.day}</span>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:contents">
          {serviceColumns.map((column, colIndex) => (
            <div key={`service-col-${colIndex}`} className="w-full flex flex-col items-start">
              <h6 className="text-base sm:text-lg 2xl:text-xl font-medium uppercase">
                {colIndex === 0 ? "Services" : <span className="opacity-0 select-none">Services</span>}
              </h6>
              <ul className="mt-4 space-y-4 2xl:mt-6 2xl:space-y-5">
                {column.map((service, itemIndex) => {
                  const originalIndex = colIndex * itemsPerColumn + itemIndex;
                  return (
                    <li key={itemIndex} className="text-sm sm:text-base 2xl:text-lg font-light">
                      <button
                        type="button"
                        onClick={() => handleServiceTap(originalIndex)}
                        className={`bg-transparent p-0 text-left transition-colors duration-300 hover:text-secondary ${
                          tappedServiceIndex === originalIndex ? "text-secondary" : "text-black"
                        }`}
                      >
                        {service.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          {contactColumns.map((column, colIndex) => (
            <div key={`contact-col-${colIndex}`} className="w-full flex flex-col items-start">
              <h6 className="text-base sm:text-lg 2xl:text-xl font-medium uppercase">
                {colIndex === 0 ? "Contact Info" : <span className="opacity-0 select-none">Contact Info</span>}
              </h6>
              <address className="not-italic font-light mt-4 space-y-4 2xl:mt-6 2xl:space-y-5">
                {column.map((item, itemIndex) => {
                  const originalIndex = colIndex * itemsPerColumn + itemIndex;
                  return (
                    <div key={itemIndex} className="flex items-start gap-4 2xl:gap-5">
                      <div className="mt-1">{item.icon}</div>
                      <div className="flex flex-col">
                        {item.href ? (
                          <a
                            href={item.href}
                            onClick={() => handleContactTap(originalIndex)}
                            className={`text-sm sm:text-base 2xl:text-lg hover:text-secondary transition-colors ${
                              tappedContactIndex === originalIndex ? "text-secondary" : "text-black"
                            }`}
                          >
                            {item.content.map((line, i) => (
                              <span key={i} className="block">{line}</span>
                            ))}
                          </a>
                        ) : (
                          <span className="text-sm sm:text-base 2xl:text-lg">
                            {item.content.map((line, i) => <span key={i} className="block">{line}</span>)}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </address>
            </div>
          ))}
          {workingHoursColumns.map((column, colIndex) => (
            <div key={`hours-col-${colIndex}`} className="w-full flex flex-col items-start">
              <h6 className="text-base sm:text-lg 2xl:text-xl font-medium uppercase">
                {colIndex === 0 ? "Working Hours" : <span className="opacity-0 select-none">Working Hours</span>}
              </h6>
              <div className="mt-4 w-full space-y-4 2xl:mt-6 2xl:space-y-5">
                {column.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex font-light text-sm sm:text-base 2xl:text-lg">
                    <span className="w-24 2xl:w-28">{item.day}</span>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright & Socials */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 2xl:gap-6 py-8 border-t border-black/10">
        <p className="text-base sm:text-lg 2xl:text-xl whitespace-nowrap">
          © {new Date().getFullYear()} EcoSpark Theme. All Rights Reserved.
        </p>
        <div className="flex gap-5 2xl:gap-6">
          {socialMediaLinks.map(({ id, label, icon, url }, index) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleSocialTap(index)}
              aria-label={label}
              className={`text-lg sm:text-xl 2xl:text-2xl transition-colors duration-500 hover:text-secondary ${
                tappedSocialIndex === index ? "text-secondary" : "text-black"
              }`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;