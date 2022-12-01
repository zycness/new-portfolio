import React from "react";

import { FaReact, FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiCypress,
  SiJest,
  SiTypescript,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IconContext } from "react-icons/lib";
import { GrMysql } from "react-icons/gr";

const Technologies = () => {
  return (
    <section className=' my-11' id='technologies'>
      <div className='container mx-auto border-t py-6 flex flex-row flex-wrap items-center justify-center w-3/4 lg:w-1/2 space-y-6'>
        <article className='container flex flex-col lg:w-1/2 '>
          <h3 className="relative text-sky-600 font-bold text-xl font-sans after:content-[''] after:w-16 after:h-1 after:bg-sky-600 after:absolute after:top-1/2 after:ml-2">
            ABOUT ME
          </h3>
          <h2 className='font-bold text-4xl'>I know these technologies</h2>
        </article>
        <IconContext.Provider
          value={{
            size: "3rem",
            className: "transition group-hover:text-sky-700",
          }}
        >
          <article className='justify-start mx-auto flex flex-wrap gap-4 lg:w-1/2'>
            <div className='group flex flex-col items-center justify-center bg-gray-100 drop-shadow rounded-md p-1 select-none w-20 h-16 '>
              <FaReact />
              <p className='transition font-mono font-bold text-xs  group-hover:text-sky-700'>
                REACT
              </p>
            </div>
            <div className='group flex flex-col items-center justify-center bg-gray-100 drop-shadow rounded-md p-1 select-none w-20 h-16'>
              <FaCss3 />
              <p className='transition font-mono font-bold text-xs  group-hover:text-sky-700'>
                CSS3
              </p>
            </div>
            <div className='group flex flex-col items-center justify-center bg-gray-100 drop-shadow rounded-md p-1 select-none w-20 h-16'>
              <FaHtml5 />
              <p className='transition font-mono font-bold text-xs  group-hover:text-sky-700'>
                HTML5
              </p>
            </div>
            <div className='group flex flex-col items-center justify-center bg-gray-100 drop-shadow rounded-md p-1 select-none w-20 h-16'>
              <FaJs />
              <p className='transition font-mono font-bold text-xs  group-hover:text-sky-700'>
                JAVASCRIPT
              </p>
            </div>
            <div className='group flex flex-col items-center justify-center bg-gray-100 drop-shadow rounded-md p-1 select-none w-20 h-16'>
              <SiTailwindcss />
              <p className='transition font-mono font-bold text-xs  group-hover:text-sky-700'>
                TAILWIND
              </p>
            </div>
            <div className='group flex flex-col items-center justify-center bg-gray-100 drop-shadow rounded-md p-1 select-none w-20 h-16'>
              <TbBrandNextjs />
              <p className='transition font-mono font-bold text-xs  group-hover:text-sky-700'>
                NEXTJS
              </p>
            </div>
            <div className='group flex flex-col items-center justify-center bg-gray-100 drop-shadow rounded-md p-1 select-none w-20 h-16'>
              <SiCypress />
              <p className='transition font-mono font-bold text-xs  group-hover:text-sky-700'>
                CYPRESS
              </p>
            </div>{" "}
            <div className='group flex flex-col items-center justify-center bg-gray-100 drop-shadow rounded-md p-1 select-none w-20 h-16'>
              <SiJest />
              <p className='transition font-mono font-bold text-xs  group-hover:text-sky-700'>
                JEST
              </p>
            </div>{" "}
            <div className='group flex flex-col items-center justify-center bg-gray-100 drop-shadow rounded-md p-1 select-none w-20 h-16'>
              <SiTypescript />
              <p className='transition font-mono font-bold text-xs  group-hover:text-sky-700'>
                TYPESCRIPT
              </p>
            </div>{" "}
            <div className='group flex flex-col items-center justify-center bg-gray-100 drop-shadow rounded-md p-1 select-none w-20 h-16'>
              <GrMysql />
              <p className='transition font-mono font-bold text-xs  group-hover:text-sky-700'>
                MYSQL
              </p>
            </div>{" "}
            <div className='group flex flex-col items-center justify-center bg-gray-100 drop-shadow rounded-md p-1 select-none w-20 h-16'>
              <SiPostgresql />
              <p className='transition font-mono font-bold text-xs  group-hover:text-sky-700'>
                POSTGRESQL
              </p>
            </div>{" "}
            <div className='group flex flex-col items-center justify-center bg-gray-100 drop-shadow rounded-md p-1 select-none w-20 h-16'>
              <SiDocker />
              <p className='transition font-mono font-bold text-xs  group-hover:text-sky-700'>
                DOCKER
              </p>
            </div>
          </article>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Technologies;
