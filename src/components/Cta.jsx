import React from "react";
import { useTranslation } from "react-i18next";
import { BiLinkExternal } from "react-icons/bi";

const Cta = () => {
  const { t } = useTranslation();

  return (
    <section
      className='container mx-auto  mt-20 flex w-3/4 flex-col items-center justify-center rounded-lg bg-sky-700 p-6 text-center'
      id='cta'
    >
      <h2 className='text-lg font-bold text-gray-50 md:text-2xl '>
        {t("cta.text.part1")}
      </h2>
      <h3 className='mb-6 font-semibold text-gray-300 md:text-lg '>
        {t("cta.text.part2")}
      </h3>
      <button className='cursor-pointer rounded-lg bg-gray-100 px-4 py-1 font-semibold text-sky-500'>
        <a
          href='https://www.linkedin.com/in/kevinnahuelf/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center'
        >
          {t("cta.text.part3")} <BiLinkExternal className='ml-1' />
        </a>
      </button>
    </section>
  );
};

export default Cta;
