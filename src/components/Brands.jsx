import { brandLogos } from "../assets/assets";

const Brands = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden 
      [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]
      pb-14 md:pb-16 2xl:pb-20"
    >
      {/* Infinite Scrolling Logo Ticker */}
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 md:[&_li]:mx-10 2xl:[&_li]:mx-12 [&_img]:max-w-none animate-manual-scroll">
        {brandLogos.map((logo, index) => (
          <li key={index}>
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-10 md:h-12 2xl:h-14 w-auto"
            />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 md:[&_li]:mx-10 2xl:[&_li]:mx-12 [&_img]:max-w-none animate-manual-scroll"
        aria-hidden="true"
      >
        {brandLogos.map((logo, index) => (
          <li key={index}>
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-10 md:h-12 2xl:h-14 w-auto"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brands;