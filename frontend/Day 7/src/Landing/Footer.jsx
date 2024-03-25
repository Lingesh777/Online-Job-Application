// import React from 'react';
import './Footer.css'
export const Footer = () => {
  return (
    <div >
      <footer className="bg-white rounded-lg shadow m-4w-[128%] ml-[-300px]">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className=" footerdown text-sm text-black-600 sm:text-center dark:text-gray-400 font-semibold">© 2024 CareerCraft™. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm  text-gray-500 dark:text-gray-400 sm:mt-0 font-semibold">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
