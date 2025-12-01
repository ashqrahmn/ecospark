import { useState, useEffect, useRef, useCallback } from "react";
import { FaChevronRight } from "react-icons/fa";
import { services } from "../assets/assets";

const KEYBOARD_SCROLL_SPEED = 8;
const SCROLL_SPEED_FACTOR = 2;

const Service = () => {
  // References the slider element for direct DOM manipulation.
  const sliderRef = useRef(null);
  // Refs to manage drag and scroll states without re-renders.
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const tapTimeoutRef = useRef({});
  const animationFrameId = useRef(null);
  const keyboardScrollDirection = useRef(null);

  // Tracks mouse drag state for cursor styling and scroll logic.
  const [isDragging, setIsDragging] = useState(false);
  // Detects if the device uses touch for conditional event handling.
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  // Manages the animation state for tapped cards on touch devices.
  const [tapped, setTapped] = useState({});

  // Continuously scrolls the slider when a keyboard arrow key is held down.
  const animateScroll = useCallback(() => {
    if (!sliderRef.current || !keyboardScrollDirection.current) return;
    const scrollAmount =
      keyboardScrollDirection.current === "left"
        ? -KEYBOARD_SCROLL_SPEED
        : KEYBOARD_SCROLL_SPEED;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "auto" });
    animationFrameId.current = requestAnimationFrame(animateScroll);
  }, []);

  // Initiates the scroll animation when an arrow key is pressed.
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        keyboardScrollDirection.current = e.key === "ArrowRight" ? "right" : "left";
        animationFrameId.current = requestAnimationFrame(animateScroll);
      }
    },
    [animateScroll]
  );

  // Stops the scroll animation when an arrow key is released.
  const handleKeyUp = useCallback((e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      keyboardScrollDirection.current = null;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    }
  }, []);

  // Initializes dragging state for desktop mouse events.
  const handleDragStart = useCallback((e) => {
    const slider = sliderRef.current;
    if (!slider) return;
    setIsDragging(true);
    startX.current = e.pageX - slider.offsetLeft;
    scrollLeft.current = slider.scrollLeft;
  }, []);

  // Resets the dragging state when mouse interaction ends.
  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Handles slider scrolling based on mouse movement.
  const handleDragMove = useCallback(
    (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const slider = sliderRef.current;
      if (!slider) return;
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * SCROLL_SPEED_FACTOR;
      slider.scrollLeft = scrollLeft.current - walk;
    },
    [isDragging]
  );

  // Triggers the tap animation for a service card on touch devices.
  const handleTap = (id) => {
    if (!isTouchDevice) return;
    if (tapTimeoutRef.current[id]) clearTimeout(tapTimeoutRef.current[id]);
    
    setTapped((prev) => ({ ...prev, [id]: true }));
    
    tapTimeoutRef.current[id] = setTimeout(() => {
      setTapped((prev) => ({ ...prev, [id]: false }));
    }, 1000);
  };
  
  // Detects touch device support and sets up cleanup for timers on unmount.
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    }
    const timeouts = tapTimeoutRef.current;
    const animId = animationFrameId.current;
    return () => {
      Object.values(timeouts).forEach(clearTimeout);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  // Conditionally applies mouse drag event handlers for non-touch devices.
  const desktopDragProps = !isTouchDevice ? {
    onMouseDown: handleDragStart,
    onMouseLeave: handleDragEnd,
    onMouseUp: handleDragEnd,
    onMouseMove: handleDragMove,
  } : {};

  return (
    <div
      id="service"
      role="region"
      aria-labelledby="service-heading"
      className="scroll-mt-[90px] py-18 2xl:py-28 flex flex-col font-parkinsans"
    >
      <div className="w-full max-w-7xl 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 xl:px-12 2xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-6 2xl:mb-12">
          <h6 className="text-base md:text-lg 2xl:text-xl uppercase">
            Our Service
          </h6>
          <h2 id="service-heading" className="text-2xl md:text-4xl 2xl:text-5xl font-medium">
            Here's What We Can Do For You
          </h2>
        </div>
      </div>

      {/* Service Slider */}
      <div
        ref={sliderRef}
        {...desktopDragProps}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        tabIndex={0}
        className={`w-full flex overflow-x-auto gap-8 xl:gap-10 2xl:gap-14 px-4 sm:px-6 xl:px-12 2xl:px-24 py-4 custom-scrollbar-hide select-none outline-none
          ${isDragging ? "cursor-grabbing" : "cursor-grab"}
        `}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-[47%] lg:w-[31%] xl:w-[23.5%] 2xl:max-w-[420px]"
          >
            <div className="h-full flex flex-col items-start p-2 rounded-3xl bg-gradient-to-br from-primary via-secondary-light to-secondary-light shadow-md">
              <div className="w-full slope-bottom rounded-3xl overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 2xl:h-72 object-cover pointer-events-none"
                />
              </div>
              <h4 className="text-xl 2xl:text-2xl font-normal text-gray-900 mb-3 2xl:mb-5">
                {service.title}
              </h4>
              <button
                className="group relative w-full flex overflow-hidden rounded-full mt-auto focus:outline-none"
                onClick={() => handleTap(service.id)}
              >
                <div className="relative w-full flex items-center bg-white px-5 py-1.5 2xl:px-7 2xl:py-2.5 rounded-full text-sm 2xl:text-base font-normal cursor-pointer overflow-hidden">
                  <span
                    className={`absolute left-5 top-0 h-full flex items-center transition-transform duration-300 ease-in-out ${
                      tapped[service.id]
                        ? "-translate-y-full"
                        : "group-hover:-translate-y-full"
                    }`}
                  >
                    {service.buttonText}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`absolute left-5 top-0 h-full flex items-center transition-transform duration-300 ease-in-out ${
                      tapped[service.id]
                        ? "translate-y-0"
                        : "translate-y-full group-hover:translate-y-0"
                    }`}
                  >
                    {service.buttonHoverText}
                  </span>
                  <span className="ml-auto flex items-center justify-center w-8 h-8 2xl:w-11 2xl:h-11 rounded-full bg-secondary-light relative z-10 left-2">
                    <FaChevronRight className="text-secondary text-sm 2xl:text-base" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;