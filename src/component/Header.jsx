import React, { useState, useEffect } from "react";

const NavLink = ({ text, active }) => {
  return (
    <a
      href="#"
      className={`text-gray-600 hover:text-orange-500 transition-colors ${
        active ? "text-orange-500" : ""
      }`}
    >
      {text}
    </a>
  );
};

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-24"></div>
      <header
        className={`fixed top-0 left-0 right-0 bg-white py-0 px-20 shadow-sm transition-all duration-300 z-50 ${
          isScrolled ? "py-4 shadow-md" : "py-6 shadow-sm"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-32 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
              <defs>
                <linearGradient
                  id="metallicGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#94A3B8" stopOpacity="1" />
                  <stop offset="50%" stopColor="#E2E8F0" stopOpacity="1" />
                  <stop offset="100%" stopColor="#94A3B8" stopOpacity="1" />
                </linearGradient>

                <linearGradient
                  id="accentGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
                </linearGradient>

                <clipPath id="geoClip">
                  <path d="M50,20 L350,20 L320,180 L20,180 Z" />
                </clipPath>
              </defs>

              <pattern
                id="gridPattern"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>

              <g clipPath="url(#geoClip)">
                <rect width="400" height="200" fill="url(#metallicGradient)" />
                <rect width="400" height="200" fill="url(#gridPattern)" />

                <circle
                  cx="200"
                  cy="100"
                  r="120"
                  fill="url(#accentGradient)"
                  opacity="0.1"
                />
                <circle
                  cx="200"
                  cy="100"
                  r="80"
                  fill="url(#accentGradient)"
                  opacity="0.1"
                />
              </g>

              <g transform="translate(200, 100)">
                <text
                  textAnchor="middle"
                  fontSize="72"
                  fontFamily="Arial, sans-serif"
                  fontWeight="900"
                  fill="#1E293B"
                  letterSpacing="8"
                  y="-10"
                >
                  C E I L
                </text>

                <text
                  textAnchor="middle"
                  fontSize="24"
                  fontFamily="Arial, sans-serif"
                  fontWeight="300"
                  fill="#3B82F6"
                  letterSpacing="16"
                  y="30"
                >
                  B E L U
                </text>

                <line
                  x1="-100"
                  y1="45"
                  x2="100"
                  y2="45"
                  stroke="url(#accentGradient)"
                  strokeWidth="2"
                  strokeDasharray="1 6"
                />
              </g>

              <path
                d="M330,40 L350,40 L350,60"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="4"
              />
            </svg>
          </div>
          <div className="flex space-x-2">
            <nav className="hidden md:flex space-x-6">
              <NavLink text="UV Products" active={true} />
              <NavLink text="UV Research & Studies" />
              <NavLink text="In The News" />
              <NavLink text="UV Updates" />
              <NavLink text="Aerapy" />
            </nav>
            <div className="bg-orange-500 text-white px-1 py-1 rounded text-xs">
              ANIMALS
            </div>
          </div>
          <button className="border-2 border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
            CONTACT
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
