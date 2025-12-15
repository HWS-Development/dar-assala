import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <img
        src="/images/Screenshot_2025-12-02_185728-removebg-preview.png"
        alt="Riad Alassala Logo"
        className="h-11 w-auto md:h-20 object-contain"
      />
    </Link>
  );
}
