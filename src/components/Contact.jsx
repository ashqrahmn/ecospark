import { useState, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { assets } from "../assets/assets";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  // Manages the submit button's tap animation state.
  const [quoteTapped, setQuoteTapped] = useState(false);
  // Detects if the current device has touch capabilities.
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  // Controls the visibility of the custom service dropdown.
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Stores the currently selected service from the dropdown.
  const [selectedService, setSelectedService] = useState("");
  // References the dropdown element to detect outside clicks.
  const dropdownRef = useRef(null);
  // Manages the state for the numeric-only phone input.
  const [phone, setPhone] = useState("");
  // Manages the state for the numeric-only area input.
  const [area, setArea] = useState("");
  // State to manage submission status for the button
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "House Cleaning",
    "Office Cleaning",
    "Apartment Cleaning",
    "Airbnb Cleaning",
    "Deep Cleaning",
    "Move In Out Cleaning",
    "Post Construction Cleaning",
    "Recurring Cleaning",
  ];

  const API_KEY = import.meta.env.VITE_WEB3FORM_API_KEY;

  // Checks for touch capabilities on component mount.
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Closes the custom dropdown if a click occurs outside of it.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  // Resets the button tap animation after a 1-second delay.
  useEffect(() => {
    if (!quoteTapped) return;
    const timerId = setTimeout(() => setQuoteTapped(false), 1000);
    return () => clearTimeout(timerId);
  }, [quoteTapped]);

  // Triggers the tap animation on touch devices.
  const handleQuoteClick = () => {
    if (isTouchDevice) setQuoteTapped(true);
  };

  // Updates the selected service and closes the dropdown.
  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setIsDropdownOpen(false);
  };

  // Enforces numeric-only input for form fields.
  const handleNumericChange = (setter) => (event) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    setter(value);
  };

  // Handles form submission, validation, and API request with toast notifications.
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    if (!selectedService && !form.service.value) {
      toast.error("Please select a service.");
      return;
    }

    setIsSubmitting(true);
    formData.append("access_key", API_KEY);
    const formJson = Object.fromEntries(formData.entries());

    const toastId = toast.loading("Sending your request...");

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formJson),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      toast.update(toastId, {
        render: data.message,
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });

      form.reset();
      setSelectedService("");
      setPhone("");
      setArea("");

    } catch (error) {
      console.error("Submission Error:", error);
      toast.update(toastId, {
        render: error.message,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        className="mt-20"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div
        id="contact"
        className="scroll-mt-[85px] flex justify-center items-center px-4 md:px-8 font-parkinsans py-8 2xl:py-18"
      >
        <div className="w-full max-w-7xl bg-white rounded-3xl flex flex-col md:flex-row gap-6 px-4 md:px-8 md:items-stretch 2xl:scale-[1.15] 2xl:origin-top">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 flex-grow p-8 rounded-[30px] bg-gradient-to-br from-primary via-secondary-light to-secondary-light flex flex-col 2xl:p-12">
            <form onSubmit={onSubmit} className="h-full flex flex-col">
              <div className="flex-grow">
                <div className="text-center md:text-left">
                  <h6 className="text-lg md:text-xs uppercase ">Get your free estimate</h6>
                  <h2 className="text-3xl md:text-4xl font-medium mt-2">Get a Quote</h2>
                </div>
                <div className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:gap-6">
                    <div className="flex flex-col items-start">
                      <label htmlFor="name" className="text-base font-normal mb-2">Your name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Cena"
                        className="w-full h-12 border-none px-3 text-base outline-none rounded-lg bg-white"
                        required
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <label htmlFor="email" className="text-base font-normal mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@gmail.com"
                        className="w-full h-12 border-none px-3 text-base outline-none rounded-lg bg-white"
                        required
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <label htmlFor="phone" className="text-base font-normal mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="9845612345"
                        className="w-full h-12 border-none px-3 text-base outline-none rounded-lg bg-white"
                        required
                        inputMode="numeric"
                        value={phone}
                        onChange={handleNumericChange(setPhone)}
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <label htmlFor="area" className="text-base font-normal mb-2">Area</label>
                      <input
                        type="text"
                        id="area"
                        name="Area"
                        placeholder="e.g. 1500"
                        className="w-full h-12 border-none px-3 text-base outline-none rounded-lg bg-white"
                        required
                        inputMode="numeric"
                        value={area}
                        onChange={handleNumericChange(setArea)}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="service" className="text-base font-normal mb-2 block">Choose a service</label>
                    {isTouchDevice ? (
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          className="w-full h-12 border-none pl-3 pr-10 text-base outline-none rounded-lg appearance-none bg-white"
                          required
                          defaultValue=""
                        >
                          <option value="" disabled>Select</option>
                          {services.map((service) => <option key={service}>{service}</option>)}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div className="relative" ref={dropdownRef}>
                        <input type="hidden" name="service" value={selectedService} />
                        <div
                          className="w-full h-12 flex items-center justify-between border-none pl-3 pr-4 text-base outline-none rounded-lg bg-white cursor-pointer"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                          <span className={selectedService ? "text-black" : "text-gray-400"}>{selectedService || "Select"}</span>
                          <svg
                            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                        {isDropdownOpen && (
                          <div className={`absolute top-full left-0 w-full mt-1 bg-white rounded-lg shadow-lg z-10 border border-gray-100 ${services.length > 5 && "max-h-60 overflow-y-auto"}`}>
                            {services.map((service) => (
                              <div key={service} className="px-3 py-2 text-base cursor-pointer hover:bg-gray-100" onClick={() => handleServiceSelect(service)}>
                                {service}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button type="submit" className="overflow-hidden mt-8 px-4 py-3 rounded-full bg-primary group cursor-pointer self-start" onClick={handleQuoteClick}>
                <div className="relative h-5 overflow-hidden">
                  <span className={`block transition-transform duration-400 ease-in-out ${quoteTapped ? "-translate-y-full" : "group-hover:-translate-y-full"}`}>
                    Request a Quote
                  </span>
                  <span className={`absolute top-0 left-0 h-full w-full flex items-center justify-center transition-transform duration-400 ease-in-out ${quoteTapped ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"}`}>
                    Request a Quote
                  </span>
                </div>
              </button>
            </form>
          </div>

          {/* Info & Image Section */}
          <div className="w-full md:w-1/2 h-full flex flex-col gap-5">
            <img
              src={assets.contaxt_image}
              alt="Cleaning professionals"
              className="w-full h-auto object-cover rounded-[20px]"
            />
            <div className="relative p-8 bg-primary-light rounded-[20px] overflow-hidden flex flex-col justify-center items-start w-full 2xl:p-12 2xl:rounded-[26px]">
              <img src={assets.contact_element} alt="" className="absolute top-3 right-2 w-18 h-18 md:w-25 md:h-25 object-contain 2xl:w-32 2xl:h-32" />
              <div className="contact_text flex items-center">
                <FaCheck className="bg-secondary text-white rounded-full p-1 text-xl mr-2" />
                <h4 className="text-base md:text-xl font-normal text-gray-800">The Perfect Clean Guaranteed</h4>
              </div>
              <p className="text-base font-normal mt-2 text-gray-700">
                We are so confident in our results, we back every single cleaning with our 100% satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;