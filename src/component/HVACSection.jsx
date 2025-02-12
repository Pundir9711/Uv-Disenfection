import React from "react";
import Image1 from "../assets/img1.png";
import Image2 from "../assets/img2.png";

const HVACSection = () => {
  return (
    <section className="w-full bg-[#f5f3ed] py-16 mt-52 pt-20 ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 px-8">
          {/* Image Column */}
          <div className="flex flex-col items-center md:items-end w-full md:w-1/3 space-y-4">
            {/* Top image container */}
            <div className="relative w-full max-w-[400px]">
              <img
                src={Image1}
                alt="UV Light Unit Top View"
                className="w-full h-60"
              />
            </div>

            {/* Bottom image container */}
            <div className="relative w-full max-w-[400px] mt-4">
              <img
                src={Image2}
                alt="UV Light Unit Extended View"
                className="w-full h-60"
              />
            </div>
          </div>

          {/* Text Content Column */}
          <div className="w-full md:w-1/2 space-y-6 ">
            <h2 className="text-4xl font-semibold text-[#4a4a4a]">
              UV-C Disinfection Upper Air Wall Mounted{" "}
            </h2>

            <p className="text-gray-600 leading-loose">
              As part of the Philips UV-C disinfection upper air device series,
              this wall-mounted solution is designed to be installed on walls
              for the disinfection of air in a wide range of applications.
              Optimized for low ceiling heights, the UV-C rays are distributed
              at device level and above. The beam of UV-C rays is controlled by
              specific reflectors and the louvre design, allowing for effective
              air disinfection while ensuring day-to-day business activities can
              continue underneath the area where the device is active.
            </p>
            <button className="mt-4 px-8 py-3 border border-orange-500 text-orange-500 bg-white  border rounded-full hover:bg-blue-400 hover:text-white transition-colors duration-300 cursor-pointer">
              SEE UV LIGHTS FOR HVAC
            </button>
          </div>
        </div>
        <section className="w-full py-12 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-black text-xl leading-relaxed">
              Aerapy UV products are constructed of stainless steel and
              non-corrosive aluminum and made in the USA. We'll work with you to
              determine the right equipment, and proper sizing using our
              proprietary sizing method, to help maximize your infection control
              strategy.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HVACSection;
