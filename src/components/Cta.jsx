import React from "react";

const Cta = () => {
  return (
    <section
      className='container w-3/4  bg-sky-700 flex flex-col items-center justify-center mx-auto text-center rounded-lg mt-20 p-6'
      id='cta'
    >
      <h2 className='text-gray-50 font-bold text-lg md:text-2xl '>
        Do you want me to make your website or get in touch?
      </h2>
      <h3 className='text-gray-300 font-semibold mb-6 md:text-lg '>
        Don't drop off and lets work together
      </h3>
      <button className='rounded-lg bg-gray-100 text-sky-500 font-semibold px-4 py-1 cursor-pointer'>
        <a
          href='https://www.linkedin.com/in/kevinnahuelf/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Contact me!
        </a>
      </button>
    </section>
  );
};

export default Cta;
