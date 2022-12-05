import React from "react";

const Experience = () => {
  return (
    <section
      id='experience'
      className='container flex flex-row flex-wrap justify-center mx-auto'
    >
      <article className='container text-center w-3/4 lg:1/2'>
        <h2 className='text-sky-600 font-bold text-xl font-sans'>
          Education & Experience
        </h2>
        <h3 className='font-bold text-4xl'>My Resume</h3>
        <p className='font-semibold'>
          During my journy i always been a hard-working person, looking for
          lasting and outstanding results.
        </p>
      </article>
      <article className='container w-3/4 lg:1/2'>
        <ul className=' mt-12 lg:flex lg:flex-row lg:flex-wrap'>
          <li className='relative flex flex-col space-y-1 px-6 pt-7 border-solid border-l-2 lg:w-1/2 lg:items-end lg:border-r-0 lg:border-l-0 lg:after:content-[""] lg:after:w-[2px] lg:after:h-full lg:after:-right-[2px] lg:after:-z-10 lg:after:absolute lg:after lg:after:bg-[#e5e7eb]'>
            <h4 className='font-extrabold italic text-xl text-gray-700'>
              Front-end Developer,{" "}
              <span className='text-gray-500 font-semibold'>Freelance</span>
            </h4>
            <h5 className='text-lg text-gray-400'>Fixedbsas, Buenos Aires</h5>
            <span className='bg-sky-700 w-fit px-2 rounded-full font-semibold text-gray-100 '>
              2022
            </span>
            <ul>
              <li className='list-disc text-gray-400 text-base font-semibold'>
                Builded code reuseable and maintainable in React and Javascript.
              </li>
              <li className='list-disc text-gray-400 text-base font-semibold'>
                Builded a responsive and usable website.
              </li>
              <li className='list-disc text-gray-400 text-base font-semibold'>
                Worked between design and developement for making sure that all
                was like the customer wanted.
              </li>
              <li className='list-disc text-gray-400 text-base font-semibold'>
                Established meetings with customer to ensure all was in order.
              </li>
            </ul>
            <div className='absolute rounded-full bg-white border-solid border-4 border-sky-700 w-5 h-5 top-7 -left-3 lg:left-[98%] xl:left-[98.5%]'></div>
          </li>
          <li className='hidden lg:block lg:w-1/2 lg:h-[260px]'></li>
          <li className='hidden lg:block lg:w-1/2 lg:h-[260px]'></li>
          <li className='relative flex flex-col space-y-1 px-6 pt-7 border-solid border-l-2 lg:w-1/2 lg:border-l-2'>
            <h4 className='font-extrabold italic text-xl text-gray-700'>
              Front-end Developer,{" "}
              <span className='text-gray-500 font-semibold'>Freelance</span>
            </h4>
            <h5 className='text-lg text-gray-400'>
              Tu espacio limpio, Buenos Aires
            </h5>
            <span className='bg-sky-700 w-fit px-2 rounded-full text-gray-100 font-semibold'>
              2021 - 2022
            </span>
            <ul>
              <li className='list-disc text-gray-400 text-base font-semibold'>
                Several meetings with customer talking about design and
                functionalities.
              </li>
              <li className='list-disc text-gray-400 text-base font-semibold'>
                Took care of design, oriented on user experience.
              </li>
              <li className='list-disc text-gray-400 text-base font-semibold'>
                Builded reuseable and maintainable code with responsive and
                usable design.
              </li>
              <li className='list-disc text-gray-400 text-base font-semibold'>
                Maded email system for company's consults incoming from clients;
                and email design for confirm status.
              </li>
            </ul>
            <div className='absolute rounded-full bg-white border-solid border-4 border-sky-700 w-5 h-5 top-7 -left-3'></div>
          </li>

          <li className='relative flex flex-col space-y-1 px-6 pt-7 border-solid border-l-2 lg:w-1/2 lg:items-end lg:border-r-0 lg:border-l-0 lg:after:content-[""] lg:after:w-[2px] lg:after:h-full lg:after:-right-[2px] lg:after:top-0 lg:after:-z-10 lg:after:absolute lg:after lg:after:bg-[#e5e7eb]'>
            <h4 className='font-extrabold italic text-xl text-gray-700'>
              Self-taught Web Developer
            </h4>
            <span className='bg-sky-700 w-fit px-2 rounded-full text-gray-100 font-semibold'>
              2021 - 2022
            </span>
            <ul>
              <li className='list-disc text-gray-400 text-base font-semibold'>
                I managed to set an hourly basis of 6 to 8 hours per day.
              </li>
              <li className='list-disc text-gray-400 text-base font-semibold'>
                I did some projects as i went through a lot of official
                documentation from different technologies.
              </li>
              <li className='list-disc text-gray-400 text-base font-semibold'>
                I got deep into Front-end but i have knowledge of basic Back-end{" "}
                {"(Nodejs - Expressjs - MongoDB)"}
              </li>
            </ul>

            <div className='absolute rounded-full bg-white border-solid border-4 border-sky-700 w-5 h-5 top-7 -left-3 lg:left-[98%] xl:left-[98.5%]'></div>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Experience;
