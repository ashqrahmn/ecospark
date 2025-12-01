import { useState, useEffect, useRef, useCallback } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../assets/assets";

const DESKTOP_BREAKPOINT = 768;
const AUTOPLAY_DELAY = 4000;
const DRAG_THRESHOLD_DIVISOR = 4;

const Testimonials = () => {
  // Manages the currently active slide index.
  const [currentIndex, setCurrentIndex] = useState(0);
  // Tracks if the viewport is desktop-sized for responsiveness.
  const [isDesktop, setIsDesktop] = useState(false);
  // Tracks if the user is currently dragging the slider.
  const [isDragging, setIsDragging] = useState(false);
  // Stores the initial horizontal position at the start of a drag.
  const [startX, setStartX] = useState(0);
  // Stores the current translation value during a drag.
  const [dragTranslate, setDragTranslate] = useState(0);

  // Holds the timeout ID for the autoplay functionality.
  const timeoutRef = useRef(null);
  // References the main slider DOM element.
  const sliderRef = useRef(null);

  const slidesPerView = isDesktop ? 2 : 1;
  const maxIndex =
    testimonials.length > slidesPerView
      ? testimonials.length - slidesPerView
      : 0;

  // Sets the initial viewport size and adds a resize event listener.
  useEffect(() => {
    const handleResize = () =>
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Manages the autoplay timer, pausing it during drag.
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!isDragging) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
      }, AUTOPLAY_DELAY);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, isDragging, maxIndex]);

  // Gets the horizontal position from a mouse or touch event.
  const getPositionX = (e) =>
    e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;

  // Initiates the drag sequence on mouse down or touch start.
  const handleDragStart = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(getPositionX(e));
    setDragTranslate(0);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  // Updates the slider's position during a drag.
  const handleDragMove = useCallback(
    (e) => {
      if (!isDragging) return;
      const currentX = getPositionX(e);
      setDragTranslate(currentX - startX);
    },
    [isDragging, startX]
  );

  // Concludes the drag sequence and snaps to the nearest slide.
  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;

    const dragThreshold =
      sliderRef.current.offsetWidth / slidesPerView / DRAG_THRESHOLD_DIVISOR;

    if (dragTranslate < -dragThreshold && currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    } else if (dragTranslate > dragThreshold && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }

    setDragTranslate(0);
    setIsDragging(false);
  }, [isDragging, dragTranslate, currentIndex, maxIndex, slidesPerView]);

  // Attaches and cleans up global event listeners for dragging.
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDragMove);
      window.addEventListener("touchmove", handleDragMove);
      window.addEventListener("mouseup", handleDragEnd);
      window.addEventListener("touchend", handleDragEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  // Manages the start of a drag, setting the touch listener to non-passive.
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("mousedown", handleDragStart);
    slider.addEventListener("touchstart", handleDragStart, { passive: false });

    return () => {
      slider.removeEventListener("mousedown", handleDragStart);
      slider.removeEventListener("touchstart", handleDragStart, {
        passive: false,
      });
    };
  }, [handleDragStart]);

  const baseTranslate = -currentIndex * (100 / slidesPerView);

  return (
    <div
      id="testimonials"
      className="scroll-mt-[70px] w-full flex justify-center items-center px-6 font-parkinsans py-14 2xl:py-18"
    >
      <div className="w-full max-w-7xl bg-primary-light rounded-3xl flex flex-col items-center p-8 md:p-16 2xl:p-20 2xl:scale-[1.05] 2xl:origin-top">
        {/* Section Header */}
        <div className="text-center mb-10 2xl:mb-12">
          <h6 className="text-base md:text-lg mb-2 uppercase 2xl:text-xl">
            Testimonial
          </h6>
          <h2 className="text-2xl md:text-4xl font-medium">
            Empowering Thousands Of Users And Enterprises
          </h2>
        </div>

        {/* Slider Container */}
        <div ref={sliderRef} className="w-full overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(calc(${baseTranslate}% + ${dragTranslate}px))`,
              transition: isDragging ? "none" : "transform 0.5s ease-in-out",
              cursor: isDragging ? "grabbing" : "grab",
            }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full md:w-1/2 p-3 2xl:p-4"
              >
                <div className="bg-white rounded-2xl py-12 px-8 md:p-8 shadow-md flex flex-col h-full w-full 2xl:py-15 2xl:px-10">
                  <FaQuoteLeft className="text-3xl text-gray-800 mb-6 2xl:text-4xl" />
                  <p className="text-sm text-gray-700 leading-relaxed flex-grow font-light text-justify 2xl:text-base 2xl:leading-relaxed">
                    {item.text}
                  </p>
                  <div className="flex items-center gap-5 mt-8 2xl:gap-6">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover 2xl:w-20 2xl:h-20"
                    />
                    <div>
                      <h4 className="uppercase text-base font-semibold text-gray-900 2xl:text-lg">
                        {item.name}
                      </h4>
                      <span className="text-sm text-gray-500 2xl:text-base">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;