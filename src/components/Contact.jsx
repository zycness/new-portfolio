import React from "react";
import { useTranslation } from "react-i18next";
import { BiLinkExternal } from "react-icons/bi";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id='contact' className='my-32 mx-auto w-3/4 text-center lg:w-1/2'>
      <h3 className='font-sans text-xl font-bold text-sky-600'>
        {t("contact.text.part1")}{" "}
      </h3>
      <h4 className=' text-2xl font-bold md:text-4xl'>
        {t("contact.text.part2")}
      </h4>
      <div className='mt-6 flex justify-center space-x-4 text-gray-400 underline'>
        <span>
          <a
            href='https://www.linkedin.com/in/kevinnahuelf/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center hover:text-gray-500'
          >
            Linkedin
            <BiLinkExternal className='ml-1' />
          </a>
        </span>
        <span>
          <a
            href='https://twitter.com/Codelearner13'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center hover:text-gray-500'
          >
            Twitter
            <BiLinkExternal className='ml-1' />
          </a>
        </span>
        <span>
          <a
            href='https://wa.me/1138084961'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center hover:text-gray-500'
          >
            Whatsapp
            <BiLinkExternal className='ml-1' />
          </a>
        </span>
        <span>
          <a
            href='mailto:kevinflores2322002@gmail.com'
            className='flex items-center hover:text-gray-500'
          >
            Gmail
            <BiLinkExternal className='ml-1' />
          </a>
        </span>
      </div>
    </section>
  );
};

export default Contact;
