import React, { Suspense } from "react";

import logo from "../assets/logo1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useTranslation } from "react-i18next";
import usa from "../assets/usa.png";
import esp from "../assets/esp.png";
import { useState } from "react";

import cv from "../assets/files/Kevin_Frontend_Developer_Esp.pdf";
import resume from "../assets/files/Kevin_Frontend_Developer_English.pdf";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [lng, setLng] = useState(i18n.language == "es" ? true : false);
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <Suspense fallback={"loading..."}>
      <header>
        <nav className='container mx-auto flex flex-row items-center justify-between space-x-6 overflow-hidden bg-white px-2'>
          <img src={logo} alt='Portfolio logo' className='h-24' />
          <div className='container flex flex-row justify-end space-x-6'>
            <ul className='hidden flex-row items-center space-x-6 font-bold md:flex '>
              <li className='flex items-center justify-center'>
                <a href='#home'>{t("navbar.links.a")}</a>
              </li>
              <li className='flex items-center justify-center'>
                <a href='#technologies'>{t("navbar.links.b")}</a>
              </li>
              <li className='flex items-center justify-center'>
                <a href='#experience'>{t("navbar.links.c")}</a>
              </li>
              <li className='flex items-center justify-center'>
                <a href='#projects'>{t("navbar.links.d")}</a>
              </li>
              <li className='flex items-center justify-center'>
                <a href='#contact'>{t("navbar.links.e")}</a>
              </li>
            </ul>
            <button className='md:hidden' onClick={() => setToggleNav(true)}>
              <GiHamburgerMenu size={"2rem"} />
            </button>
            <a
              href={
                i18n.language == "es"
                  ? "https://portfolio-kf.vercel.app/assets/Kevin_Frontend_Developer_Esp.cf93129b.pdf"
                  : "https://portfolio-kf.vercel.app/assets/Kevin_Frontend_Developer_English.749bdeed.pdf"
              }
              className='w-30 hidden h-12 rounded-lg bg-sky-600 px-4 text-center font-bold text-white active:bg-sky-800 md:flex md:items-center md:justify-center'
              target='_blank'
              rel='noopener noreferrer'
            >
              {t("navbar.download")}
            </a>

            {lng ? (
              <button
                onClick={() => {
                  setLng(false);
                  i18n.changeLanguage("en");
                }}
                className='fixed right-1 bottom-1 hidden items-center justify-center rounded-sm bg-sky-600 p-1 px-3 font-semibold text-white md:flex'
              >
                English <img src={usa} alt='USA flag' className='ml-1' />
              </button>
            ) : (
              <button
                onClick={() => {
                  setLng(true);
                  i18n.changeLanguage("es");
                }}
                className='fixed right-1 bottom-1 hidden items-center justify-center rounded-sm bg-sky-600 p-1 px-3 font-semibold text-white md:flex'
              >
                Español <img src={esp} alt='USA flag' className='ml-1' />
              </button>
            )}
          </div>
        </nav>

        {toggleNav ? (
          <ul className='fixed top-0  z-50 flex  flex-row items-center text-lg  font-bold transition-[left] hover:left-0 md:hidden'>
            <div className='flex h-screen w-screen flex-col items-center justify-center space-y-8 bg-gray-800 p-6 text-white'>
              <button
                className='absolute top-10 right-10'
                onClick={() => setToggleNav(false)}
              >
                <MdClose size={"3rem"} />
              </button>
              <li className='flex w-16 items-center justify-center'>
                <a href='#home' onClick={() => setToggleNav(false)}>
                  {t("navbar.links.a")}
                </a>
              </li>
              <li className='flex w-16 items-center justify-center'>
                <a href='#technologies' onClick={() => setToggleNav(false)}>
                  {t("navbar.links.b")}{" "}
                </a>
              </li>
              <li className='flex w-16 items-center justify-center'>
                <a href='#experience' onClick={() => setToggleNav(false)}>
                  {t("navbar.links.c")}
                </a>
              </li>
              <li className='flex w-16 items-center justify-center'>
                <a href='#projects' onClick={() => setToggleNav(false)}>
                  {t("navbar.links.d")}
                </a>
              </li>
              <li className='flex w-16 items-center justify-center'>
                <a href='#contact' onClick={() => setToggleNav(false)}>
                  {t("navbar.links.e")}
                </a>
              </li>
              {lng ? (
                <li>
                  <button
                    onClick={() => {
                      setLng(false);
                      i18n.changeLanguage("en");
                      setToggleNav(false);
                    }}
                    className='flex items-center justify-center '
                  >
                    English <img src={usa} alt='USA flag' className='ml-1' />
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    onClick={() => {
                      setLng(true);
                      i18n.changeLanguage("es");
                      setToggleNav(false);
                    }}
                    className='flex items-center justify-center '
                  >
                    Español <img src={esp} alt='USA flag' className='ml-1' />
                  </button>
                </li>
              )}
              <li>
                <button className='w-30 h-12 rounded-lg bg-sky-600 px-4 font-bold text-white active:bg-sky-800'>
                  {t("navbar.download")}
                </button>
              </li>
            </div>
          </ul>
        ) : (
          ""
        )}
      </header>
    </Suspense>
  );
};

export default Navbar;
