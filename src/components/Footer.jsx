import React from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className=' flex justify-center gap-x-1 bg-sky-700 py-6 font-semibold text-gray-200'>
      <h5>{t("footer.text.part1")}</h5>
      <a
        href='https://www.linkedin.com/in/kevinnahuelf/'
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center justify-center gap-x-1 underline'
      >
        Kevin Flores
        <FaLinkedin />
      </a>
    </footer>
  );
};

export default Footer;
