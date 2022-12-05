import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=' bg-sky-700 py-6 font-semibold text-gray-200 flex gap-x-1 justify-center'>
      <h5>Made with &#128150; by </h5>
      <a
        href='https://www.linkedin.com/in/kevinnahuelf/'
        target='_blank'
        rel='noopener noreferrer'
        className='underline flex justify-center items-center gap-x-1'
      >
        Kevin Flores
        <FaLinkedin />
      </a>
    </footer>
  );
};

export default Footer;
