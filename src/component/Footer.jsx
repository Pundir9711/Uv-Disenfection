import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#212934] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-100">
          {/* Left Column - Contact Info */}
          <div className="space-y-6 max-w-xs ">
            {/* Adjust the container div size */}
<div className="w-40"> {/* Reduced from w-52 */}
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
        fontSize="54" 
        fontFamily="Arial, sans-serif"
        fontWeight="900"
        fill="#1E293B"
        letterSpacing="6"
        y="-10"
      >
        C E I L
      </text>

      <text
        textAnchor="middle"
        fontSize="18" 
        fontFamily="Arial, sans-serif"
        fontWeight="300"
        fill="#3B82F6"
        letterSpacing="12" 
        y="20" 
      >
        B E L U
      </text>

      <line
        x1="-80" 
        y1="35" 
        x2="80" 
        y2="35" 
        stroke="url(#accentGradient)"
        strokeWidth="2"
        strokeDasharray="1 6"
      />
    </g>

    <path
      d="M330,40 L350,40 L350,60"
      fill="none"
      stroke="#3B82F6"
      strokeWidth="3" 
    />
  </svg>
</div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">
                We'd love to hear from you.
              </h2>
              <a
                href="tel:(866)994-2473"
                className="text-orange-400 text-xl hover:text-orange-300"
              >
                (866) 994-2473
              </a>
              <p className="text-gray-400 leading-relaxed">
                Give us a call or send us a message with all your questions on
                UV disinfecting technology, our UV products, pricing, test
                results, or a Free UV Consultation!
              </p>
            </div>

            <button className="px-6 py-2 border-2 border-orange-400 bg-white text-orange-400 rounded-full hover:bg-blue-400 hover:text-white transition-colors">
              CONTACT US
            </button>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {/* LinkedIn Icon */}
              <a
                href="#"
                className="p-2 bg-orange-400 rounded-full hover:bg-orange-500 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="#"
                className="p-2 bg-orange-400 rounded-full hover:bg-orange-500 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Twitter Icon */}
              <a
                href="#"
                className="p-2 bg-orange-400 rounded-full hover:bg-orange-500 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>

              {/* Email Icon */}
              <a
                href="#"
                className="p-2 bg-orange-400 rounded-full hover:bg-orange-500 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* Right Column - Memberships & Awards */}
          <div className="space-y-8 max-w-sm ">
            {/* Certification Logos */}
            <div className="flex space-x-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <g fill="#4A5568" opacity="0.7">
                  <path
                    d="M86.6 50L75 71.65L50 83.3L25 71.65L13.4 50L25 28.35L50 16.7L75 28.35L86.6 50Z"
                    stroke="#4A5568"
                    strokeWidth="2"
                    fill="none"
                  />

                  <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    fontFamily="Arial"
                    fontSize="14"
                    fontWeight="bold"
                    fill="#4A5568"
                  >
                    ASHRAE
                  </text>
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
                <g fill="#4A5568" opacity="0.7">
                  <text
                    x="100"
                    y="45"
                    textAnchor="middle"
                    fontFamily="Arial"
                    fontSize="24"
                    fontWeight="bold"
                    letterSpacing="2"
                  >
                    IUVA
                  </text>

                  <text
                    x="100"
                    y="65"
                    textAnchor="middle"
                    fontFamily="Arial"
                    fontSize="8"
                    letterSpacing="1"
                  >
                    ULTRAVIOLET ASSOCIATION
                  </text>

                  <path
                    d="M40,30 A60,60 0 0,1 160,30"
                    fill="none"
                    stroke="#4A5568"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <path
                    d="M45,25 A55,55 0 0,1 155,25"
                    fill="none"
                    stroke="#4A5568"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <g fill="#4A5568" opacity="0.7">
                  <path
                    d="M20,35 
         C30,30 35,40 45,35 
         C55,30 60,40 70,35 
         C80,30 85,40 95,35"
                    fill="none"
                    stroke="#4A5568"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20,45 
         C30,40 35,50 45,45 
         C55,40 60,50 70,45 
         C80,40 85,50 95,45"
                    fill="none"
                    stroke="#4A5568"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20,55 
         C30,50 35,60 45,55 
         C55,50 60,60 70,55 
         C80,50 85,60 95,55"
                    fill="none"
                    stroke="#4A5568"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  <text
                    x="57"
                    y="80"
                    textAnchor="middle"
                    fontFamily="Arial"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    IAQA
                  </text>
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <g fill="#4A5568" opacity="0.7">
                  <circle
                    cx="50"
                    cy="40"
                    r="25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <text
                    x="50"
                    y="45"
                    textAnchor="middle"
                    fontFamily="Arial"
                    fontSize="18"
                    fontWeight="bold"
                  >
                    ETL
                  </text>

                  <text x="30" y="35" fontFamily="Arial" fontSize="6">
                    c
                  </text>
                  <text x="70" y="35" fontFamily="Arial" fontSize="6">
                    us
                  </text>

                  <text
                    x="50"
                    y="80"
                    textAnchor="middle"
                    fontFamily="Arial"
                    fontSize="12"
                  >
                    Intertek
                  </text>
                </g>
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-1">
                CERTIFICATIONS
              </h3>
              <ul className="space-y-1">
                <li>ETL Certified, Control No. 5021513</li>
                <li>Woman-Owned Small Business (WOSB)</li>
                <li>Woman Business Enterprise (WBE)</li>
                <li>
                  Economically Disadvantaged Woman-Owned Small Business (EDWOSB)
                </li>
                <li>WBE – City of Chicago</li>
                <li>WBE, WOSB – SAM.gov</li>
                <li>WBE – State of Illinois</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-1">
                MEMBER OF
              </h3>
              <ul className="space-y-1">
                <li>
                  American Society of Heating, Refrigeration and Air
                  Conditioning Engineers (ASHRAE)
                </li>
                <li>
                  ASHRAE Technical Committee 2.9 – Ultraviolet Air and Surface
                  Treatment
                </li>
                <li>International Ultraviolet Association (IUVA)</li>
                <li>Indoor Air Quality Association (IAQA)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-1">
                AWARDS
              </h3>
              <ul className="space-y-1">
                <li>Intergovernmental Risk Management Agency (IRMA)</li>
                <li>Dealer Design Award for Indoor Air Quality</li>
                <li>Woman of Influence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
