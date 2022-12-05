import React from "react";

import kevin from "../assets/kevin.png";
import bg from "../assets/background.svg";

const Hero = () => {
  return (
    <section className='px-2 pt-12 min-h-[90vh]' id='home'>
      <div className='flex-row flex-wrap justify-center'>
        <article className='container flex flex-row flex-wrap-reverse justify-center items-center w-3/4 lg:w-1/2 mx-auto'>
          <div className='flex flex-col space-y-2  lg:w-1/2 '>
            <h3 className='text-sm text-sky-500 font-bold'>
              Hey there &#128075; i am a
            </h3>
            <h1 className='text-5xl font-extrabold text-gray-800'>
              Web Developer
            </h1>
            <h3 className='text-lg text-gray-500'>
              and my name is <span className='font-bold'>Kevin Flores</span>
            </h3>
            <h1 className='text-gray-500 text-lg'>
              I make professional websites, if you need one or do you want to
              offer me a job opportunity, get in touch with me.
            </h1>
            <button className='rounded-lg bg-sky-600 w-30 h-12 px-4 font-bold text-white self-start active:bg-sky-800'>
              Contact me
            </button>
          </div>
          <div className='flex justify-center  lg:w-1/2 mb-6'>
            <img src={kevin} alt='Kevin Flores' className='w-2/4 lg:w-full' />
            <img
              src={bg}
              alt='Background image'
              className='absolute -z-50 lg:w-1/3 w-2/4'
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
