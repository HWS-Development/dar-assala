import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/Overview"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <img
        src="/images/Screenshot_2025-12-02_185728-removebg-preview.png"     // <-- YOUR LOGO HERE
        alt="Dar Assala Logo"
        className="h-10 w-auto md:h-12 object-contain"
      />
    </Link>
  );
}
