import React from "react";
import { useTranslation } from "react-i18next";

import { BiLinkExternal } from "react-icons/bi";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section
      id='experience'
      className='container mx-auto flex flex-row flex-wrap justify-center'
    >
      <article className='lg:1/2 container w-3/4 text-center'>
        <h2 className='font-sans text-xl font-bold text-sky-600'>
          {t("exp.text.part1")}
        </h2>
        <h3 className='text-4xl font-bold'>{t("exp.text.part2")}</h3>
        <p className='font-semibold'>{t("exp.text.part3")}</p>
      </article>
      <article className='lg:1/2 container w-3/4'>
        <ul className=' mt-12 lg:flex lg:flex-row lg:flex-wrap'>
          <li className='lg:after relative flex flex-col space-y-1 border-l-2 border-solid px-6 pt-7 lg:w-1/2 lg:items-end lg:border-r-0 lg:border-l-0 lg:after:absolute lg:after:-right-[2px] lg:after:-z-10 lg:after:h-full lg:after:w-[2px] lg:after:bg-[#e5e7eb] lg:after:content-[""]'>
            <h4 className='text-xl font-extrabold italic text-gray-700'>
              {t("exp.text.text1.part1")},{" "}
              <span className='font-semibold text-gray-500'>Freelance</span>
            </h4>
            <h5 className=' text-lg text-gray-400'>
              <a
                href='https://fixedbsas.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center underline'
              >
                {t("exp.text.text1.part2")}
                <BiLinkExternal className='ml-1' />
              </a>
            </h5>
            <span className='w-fit rounded-full bg-sky-700 px-2 font-semibold text-gray-100 '>
              2022
            </span>
            <ul>
              <li className='list-disc text-base font-semibold text-gray-400'>
                {t("exp.text.text1.part3")}
              </li>
              <li className='list-disc text-base font-semibold text-gray-400'>
                {t("exp.text.text1.part4")}
              </li>
              <li className='list-disc text-base font-semibold text-gray-400'>
                {t("exp.text.text1.part5")}
              </li>
              <li className='list-disc text-base font-semibold text-gray-400'>
                {t("exp.text.text1.part6")}
              </li>
            </ul>
            <div className='absolute top-7 -left-3 h-5 w-5 rounded-full border-4 border-solid border-sky-700 bg-white lg:left-[98%] xl:left-[98.5%]'></div>
          </li>
          <li className='hidden lg:block lg:h-[260px] lg:w-1/2'></li>
          <li className='hidden lg:block lg:h-[260px] lg:w-1/2'></li>
          <li className='relative flex flex-col space-y-1 border-l-2 border-solid px-6 pt-7 lg:w-1/2 lg:border-l-2'>
            <h4 className='text-xl font-extrabold italic text-gray-700'>
              {t("exp.text.text2.part1")},{" "}
              <span className='font-semibold text-gray-500'>Freelance</span>
            </h4>
            <h5 className='text-lg text-gray-400'>
              <a
                href='https://www.tuespaciolimpio.com.ar/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center underline'
              >
                {t("exp.text.text2.part2")}
                <BiLinkExternal className='ml-1' />
              </a>
            </h5>
            <span className='w-fit rounded-full bg-sky-700 px-2 font-semibold text-gray-100'>
              2022
            </span>
            <ul>
              <li className='list-disc text-base font-semibold text-gray-400'>
                {t("exp.text.text2.part3")}
              </li>
              <li className='list-disc text-base font-semibold text-gray-400'>
                {t("exp.text.text2.part4")}
              </li>
              <li className='list-disc text-base font-semibold text-gray-400'>
                {t("exp.text.text2.part5")}
              </li>
              <li className='list-disc text-base font-semibold text-gray-400'>
                {t("exp.text.text2.part6")}
              </li>
            </ul>
            <div className='absolute top-7 -left-3 h-5 w-5 rounded-full border-4 border-solid border-sky-700 bg-white'></div>
          </li>

          <li className='lg:after relative flex flex-col space-y-1 border-l-2 border-solid px-6 pt-7 lg:w-1/2 lg:items-end lg:border-r-0 lg:border-l-0 lg:after:absolute lg:after:-right-[2px] lg:after:top-0 lg:after:-z-10 lg:after:h-full lg:after:w-[2px] lg:after:bg-[#e5e7eb] lg:after:content-[""]'>
            <h4 className='text-xl font-extrabold italic text-gray-700'>
              {t("exp.text.text3.part1")}
            </h4>
            <span className='w-fit rounded-full bg-sky-700 px-2 font-semibold text-gray-100'>
              2021 - 2022
            </span>
            <ul>
              <li className='list-disc text-base font-semibold text-gray-400'>
                {t("exp.text.text3.part2")}
              </li>
              <li className='list-disc text-base font-semibold text-gray-400'>
                {t("exp.text.text3.part3")}
              </li>
              <li className='list-disc text-base font-semibold text-gray-400'>
                {t("exp.text.text3.part4")}
              </li>
            </ul>

            <div className='absolute top-7 -left-3 h-5 w-5 rounded-full border-4 border-solid border-sky-700 bg-white lg:left-[98%] xl:left-[98.5%]'></div>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Experience;
