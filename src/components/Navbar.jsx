import { useState, useEffect, useCallback } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { RiPhoneLine } from "react-icons/ri";
import { navLinks } from "../assets/assets";

const Navbar = () => {
  // Manages the visibility of the mobile menu.
  const [menuOpen, setMenuOpen] = useState(false);

  // Handles smooth scrolling to section IDs and closes the mobile menu.
  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId.substring(1));
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  // Prevents body scrolling when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed top-[90px] left-0 w-full h-full bg-black/10 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav className="fixed top-0 left-0 w-full h-[90px] 2xl:h-[110px] bg-white shadow-md z-50 px-6 sm:px-12 2xl:px-[8%] flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl 2xl:text-3xl font-semibold font-winky">
          <a href="#home">
            Eco<span className="text-secondary">Spark</span>
          </a>
        </div>

        {/* Navigation Links */}
        <ul
          aria-hidden={!menuOpen}
          className={`xl:flex flex-col xl:flex-row items-center text-base 2xl:text-lg font-medium text-black bg-white xl:static absolute left-0 top-[90px] xl:top-0 w-full xl:w-auto px-6 xl:px-0 xl:py-0 xl:space-x-8 shadow-md xl:shadow-none z-40 transition-all duration-500 ease-in-out
            ${
              menuOpen
                ? "max-h-screen py-10 opacity-100 space-y-6"
                : "max-h-0 opacity-0"
            } 
            xl:max-h-none xl:opacity-100 xl:space-y-0 overflow-hidden xl:overflow-visible`}
        >
          {navLinks.map((link) => (
            <li key={link.href} className="w-full text-center xl:w-auto">
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-secondary focus:text-secondary active:text-secondary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-5">
          <div className="hidden xl:flex items-center gap-5">
            <a
              href="tel:+919845612345"
              className="group flex items-center h-[40px] sm:h-[44px] 2xl:h-[50px] border border-gray-300 px-4 2xl:px-5 rounded-full text-sm sm:text-base 2xl:text-lg gap-2"
            >
              <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] 2xl:w-[36px] 2xl:h-[36px] bg-primary rounded-full flex items-center justify-center">
                <RiPhoneLine className="text-base sm:text-lg 2xl:text-xl text-black" />
              </div>
              <div className="relative h-[18px] sm:h-[20px] 2xl:h-[22px] w-[110px] sm:w-[130px] 2xl:w-[150px] overflow-hidden">
                <span className="block transition-transform duration-300 translate-y-0 group-hover:-translate-y-full">
                  +91 98456 12345
                </span>
                <span className="absolute left-0 top-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                  +91 98456 12345
                </span>
              </div>
            </a>

            <button
              aria-label="Search"
              className="text-lg sm:text-xl 2xl:text-2xl text-gray-700"
            >
              <FaSearch />
            </button>

            <div className="group relative h-[40px] sm:h-[44px] 2xl:h-[50px] w-[130px] sm:w-[150px] 2xl:w-[170px] overflow-hidden rounded-full">
              <button className="bg-primary text-black rounded-full text-sm sm:text-base 2xl:text-lg font-medium h-full w-full relative cursor-pointer">
                <span className="h-full flex items-center justify-center transition-transform duration-300 translate-y-0 group-hover:-translate-y-full">
                  Let's Go
                </span>
                <span className="absolute top-0 left-0 h-full w-full flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                  Let's Go
                </span>
              </button>
            </div>
          </div>

          <button
            className="xl:hidden text-xl sm:text-2xl 2xl:text-3xl cursor-pointer z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;