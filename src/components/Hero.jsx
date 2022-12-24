import React from "react";

import kevin from "../assets/kevin.png";
import bg from "../assets/background.svg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className='mb-12 min-h-[90vh] px-2 pt-12' id='home'>
      <div className='flex-row flex-wrap justify-center'>
        <article className='container mx-auto flex w-3/4 flex-row flex-wrap-reverse items-center justify-center lg:w-1/2'>
          <div className='flex flex-col space-y-2  lg:w-1/2 '>
            <h3 className='text-sm font-bold text-sky-500'>
              {t("hero.text.part1")}
            </h3>
            <h1 className='text-5xl font-extrabold text-gray-800'>
              {t("hero.text.part2")}
            </h1>
            <h3
              className='text-lg text-gray-500'
              data-i18n='[html]hero.text.part3'
            >
              {t("hero.text.part3")}
            </h3>
            <h1 className='text-lg text-gray-500'>{t("hero.text.part4")}</h1>
            <a
              href='#contact'
              className='w-30 flex h-12 items-center self-start rounded-lg bg-sky-600 px-4 font-bold text-white active:bg-sky-800'
            >
              {t("hero.text.part5")}
            </a>
          </div>
          <div className='mb-6 flex  justify-center lg:w-1/2'>
            <img src={kevin} alt='Kevin Flores' className='w-2/4 lg:w-full' />
            <img
              src={bg}
              alt='Background image'
              className='absolute -z-50 w-2/4 lg:w-1/3'
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
