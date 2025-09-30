"use client";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 shadow-inner mt-12 transition-colors duration-300">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* حقوق الملكية والمطور */}
        <p className="text-gray-700 dark:text-gray-300 text-center md:text-left text-sm md:text-base">
          © {new Date().getFullYear()} Where in the World. All rights reserved. <br />
          Created by <span className="font-semibold">Peter Nan</span>
        </p>

        {/* روابط التواصل الاجتماعي */}
        <div className="flex gap-3 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-pink-500 hover:text-white transition-colors duration-200"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors duration-200"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
