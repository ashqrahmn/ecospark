import { useState } from "react";
import { faqContent } from "../assets/assets";
import { RiPhoneLine } from "react-icons/ri";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faqs = () => {
  // Tracks the index of the currently open FAQ item.
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Toggles the visibility of an FAQ item.
  const handleToggle = (index) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      id="faq"
      className="container mx-auto px-4 py-16 md:py-24 font-parkinsans scroll-mt-[115px] 2xl:scroll-mt-[70px] 2xl:py-45"
    >
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 2xl:gap-32">
        {/* Title & Contact Section */}
        <div className="w-full lg:w-2/5 2xl:scale-110 2xl:origin-top-left">
          <h6 className="text-sm font-normal text-gray-500 tracking-wide uppercase 2xl:text-base">
            Faqs
          </h6>
          <h2 className="text-4xl md:text-5xl font-medium mt-2 text-gray-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="bg-secondary-light p-8 md:p-12 rounded-3xl mt-8 md:mt-12">
            <h4 className="text-xl md:text-2xl 2xl:text-3xl font-medium text-gray-800 leading-snug">
              Need the best cleaning service in India? Book your spot now!
            </h4>

            <a
              href="tel:+91 98456 12345"
              className="group inline-flex items-center gap-3 bg-secondary-light border border-black/10 rounded-full py-2 px-4 mt-4 md:mt-6 text-left"
            >
              <div className="text-xl text-gray-800 rounded-full bg-primary p-2">
                <RiPhoneLine />
              </div>
              <div className="relative h-6 overflow-hidden">
                <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2">
                  <span className="font-normal">+91 98456 12345</span>
                  <span className="font-normal">+91 98456 12345</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="w-full lg:w-3/5 flex flex-col gap-5 2xl:gap-8 2xl:scale-110 2xl:origin-top-left">
          {faqContent.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={item.id}
                className="w-full bg-primary-light rounded-xl p-5 md:p-6 2xl:p-8 2xl:rounded-2xl transition-all duration-300"
              >
                <div
                  role="button"
                  tabIndex="0"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex justify-between items-center cursor-pointer gap-4 md:gap-5"
                  onClick={() => handleToggle(index)}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") && handleToggle(index)
                  }
                >
                  <span className="text-base md:text-lg font-medium text-gray-800 2xl:text-xl">
                    {item.question}
                  </span>
                  <div className="text-gray-600" aria-hidden="true">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className="grid transition-[grid-template-rows] duration-500 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 pt-4 mt-4 border-t border-gray-300 font-light text-sm md:text-base 2xl:text-lg 2xl:pt-6 2xl:mt-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;