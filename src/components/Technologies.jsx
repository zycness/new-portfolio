import React from "react";

import { FaReact, FaCss3, FaHtml5, FaJs, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiCypress,
  SiJest,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IconContext } from "react-icons/lib";
import { GrMysql } from "react-icons/gr";
import { useTranslation } from "react-i18next";

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <section id='technologies'>
      <div className='container mx-auto mb-20 flex w-3/4 flex-row flex-wrap items-center justify-center space-y-6 border-t py-6 lg:w-1/2'>
        <article className='container flex flex-col lg:w-1/2 '>
          <h3 className="relative font-sans text-xl font-bold text-sky-600 after:absolute after:top-1/2 after:ml-2 after:h-1 after:w-16 after:bg-sky-600 after:content-['']">
            {t("techs.text.part1")}
          </h3>
          <h2 className='text-4xl font-bold'>{t("techs.text.part2")}</h2>
        </article>
        <IconContext.Provider
          value={{
            size: "3rem",
            className: "transition group-hover:text-sky-700",
          }}
        >
          <article className='mx-auto flex flex-wrap justify-center gap-4 lg:w-1/2'>
            <div className='group flex h-16 w-20 select-none flex-col items-center justify-center rounded-md bg-gray-100 p-1 drop-shadow '>
              <FaReact />
              <p className='font-mono text-xs font-bold transition  group-hover:text-sky-700'>
                REACT
              </p>
            </div>
            <div className='group flex h-16 w-20 select-none flex-col items-center justify-center rounded-md bg-gray-100 p-1 drop-shadow'>
              <FaCss3 />
              <p className='font-mono text-xs font-bold transition  group-hover:text-sky-700'>
                CSS3
              </p>
            </div>
            <div className='group flex h-16 w-20 select-none flex-col items-center justify-center rounded-md bg-gray-100 p-1 drop-shadow'>
              <FaHtml5 />
              <p className='font-mono text-xs font-bold transition  group-hover:text-sky-700'>
                HTML5
              </p>
            </div>
            <div className='group flex h-16 w-20 select-none flex-col items-center justify-center rounded-md bg-gray-100 p-1 drop-shadow'>
              <FaJs />
              <p className='font-mono text-xs font-bold transition  group-hover:text-sky-700'>
                JAVASCRIPT
              </p>
            </div>
            <div className='group flex h-16 w-20 select-none flex-col items-center justify-center rounded-md bg-gray-100 p-1 drop-shadow'>
              <SiTailwindcss />
              <p className='font-mono text-xs font-bold transition  group-hover:text-sky-700'>
                TAILWIND
              </p>
            </div>
            <div className='group flex h-16 w-20 select-none flex-col items-center justify-center rounded-md bg-gray-100 p-1 drop-shadow'>
              <TbBrandNextjs />
              <p className='font-mono text-xs font-bold transition  group-hover:text-sky-700'>
                NEXTJS
              </p>
            </div>
            {/* <div className='group flex flex-col items-center justify-center bg-gray-100 drop-shadow rounded-md p-1 select-none w-20 h-16'>
              <SiCypress />
              <p className='transition font-mono font-bold text-xs  group-hover:text-sky-700'>
                CYPRESS
              </p>
            </div>{" "} */}
            {/* <div className='group flex flex-col items-center justify-center bg-gray-100 drop-shadow rounded-md p-1 select-none w-20 h-16'>
              <SiJest />
              <p className='transition font-mono font-bold text-xs  group-hover:text-sky-700'>
                JEST
              </p>
            </div>{" "} */}
            <div className='group flex h-16 w-20 select-none flex-col items-center justify-center rounded-md bg-gray-100 p-1 drop-shadow'>
              <SiTypescript />
              <p className='font-mono text-xs font-bold transition  group-hover:text-sky-700'>
                TYPESCRIPT
              </p>
            </div>{" "}
            <div className='group flex h-16 w-20 select-none flex-col items-center justify-center rounded-md bg-gray-100 p-1 drop-shadow'>
              <SiMongodb />
              <p className='font-mono text-xs font-bold transition  group-hover:text-sky-700'>
                MONGODB
              </p>
            </div>{" "}
            <div className='group flex h-16 w-20 select-none flex-col items-center justify-center rounded-md bg-gray-100 p-1 drop-shadow'>
              <FaNodeJs />
              <p className='font-mono text-xs font-bold transition  group-hover:text-sky-700'>
                NODEJS
              </p>
            </div>{" "}
            <div className='group flex h-16 w-20 select-none flex-col items-center justify-center rounded-md bg-gray-100 p-1 drop-shadow'>
              <SiExpress />
              <p className='font-mono text-xs font-bold transition  group-hover:text-sky-700'>
                EXPRESSJS
              </p>
            </div>{" "}
            {/* <div className='group flex flex-col items-center justify-center bg-gray-100 drop-shadow rounded-md p-1 select-none w-20 h-16'>
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
            </div>{" "} */}
            {/* <div className='group flex flex-col items-center justify-center bg-gray-100 drop-shadow rounded-md p-1 select-none w-20 h-16'>
              <SiDocker />
              <p className='transition font-mono font-bold text-xs  group-hover:text-sky-700'>
                DOCKER
              </p>
            </div> */}
          </article>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Technologies;
