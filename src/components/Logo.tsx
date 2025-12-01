import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("w-full h-full", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cupcake Wrapper */}
      <path
        d="M25 60L32 85C33 88 35 90 38 90H62C65 90 67 88 68 85L75 60"
        fill="url(#wrapper-gradient)"
        stroke="#be185d"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Vertical lines on wrapper */}
      <path d="M38 90L35 60" stroke="#be185d" strokeWidth="2" strokeOpacity="0.3" />
      <path d="M50 90L50 60" stroke="#be185d" strokeWidth="2" strokeOpacity="0.3" />
      <path d="M62 90L65 60" stroke="#be185d" strokeWidth="2" strokeOpacity="0.3" />

      {/* Frosting Layers */}
      {/* Bottom layer */}
      <path
        d="M20 60C20 52 30 52 35 55C40 52 50 52 50 55C50 52 60 52 65 55C70 52 80 52 80 60"
        fill="#fbcfe8"
        stroke="#f472b6"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Middle/Top Main Cloud */}
      <path
        d="M25 55C22 40 35 35 40 38C40 25 60 25 60 38C65 35 78 40 75 55"
        fill="#fce7f3"
        stroke="#f472b6"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Cherry */}
      <g transform="rotate(15, 50, 25)">
        <path d="M50 25Q55 15 62 12" stroke="#065f46" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="28" r="8" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
        <circle cx="53" cy="25" r="2" fill="white" fillOpacity="0.5" />
      </g>

      {/* Sprinkles */}
      <circle cx="40" cy="45" r="2" fill="#a855f7" />
      <circle cx="60" cy="45" r="2" fill="#ec4899" />
      <rect x="48" y="48" width="4" height="2" rx="1" transform="rotate(45 48 48)" fill="#fbbf24" />
      
      {/* Definitions */}
      <defs>
        <linearGradient id="wrapper-gradient" x1="25" y1="60" x2="75" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#db2777" />
          <stop offset="100%" stopColor="#be185d" />
        </linearGradient>
      </defs>
    </svg>
  );
};
