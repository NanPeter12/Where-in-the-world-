"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="w-full shadow-sm bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Title */}
        <Link href={"/"}>
          <h1 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Where in the world?
          </h1>
        </Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex items-center gap-2 text-gray-900 dark:text-white font-medium px-4 py-2 rounded-md shadow hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
        >
          {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </nav>
  );
}
