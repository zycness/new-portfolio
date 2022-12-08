import React from "react";

import { FaGithub } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

import { v4 as uuid } from "uuid";

const SingleProject = ({ img, title, desc, tech, order, links }) => {
  return order == 1 ? (
    <li className='relative md:flex md:flex-row md:items-center md:space-x-3'>
      <img
        src={img}
        alt={title}
        className='absolute top-0 -z-10 h-full w-full rounded-lg bg-cover object-cover md:relative md:aspect-square md:w-[40%] '
      />
      <div className='rounded-lg bg-gray-50 bg-opacity-90 p-6 md:w-1/2 md:bg-transparent'>
        <h5 className='text-sm font-bold text-sky-700'>Featured Project</h5>
        <h4 className='text-2xl font-bold'>{title}</h4>
        <p className='font-semibold text-gray-500 '>{desc}</p>
        <div className='flex flex-row flex-wrap space-x-4 font-semibold text-gray-400'>
          {tech?.map((singleTech) => (
            <span key={uuid()}>{singleTech}</span>
          ))}
        </div>
        <span className='my-2 flex space-x-2'>
          <a
            href={`${links ? links.github : null}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={"1.5rem"} className='cursor-pointer' />
          </a>
          <a
            href={`${links ? links.deploy : null}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <MdComputer size={"1.5rem"} className='cursor-pointer' />
          </a>
        </span>
      </div>
    </li>
  ) : order == 2 ? (
    <li className='relative md:flex md:flex-row md:items-center md:space-x-3'>
      <div className='rounded-lg bg-gray-50 bg-opacity-90 p-6 md:w-1/2 md:bg-transparent md:text-right'>
        <h5 className='text-sm font-bold text-sky-700'>Featured Project</h5>
        <h4 className='text-2xl font-bold'>{title}</h4>
        <p className='font-semibold text-gray-500 '>{desc}</p>
        <div className='flex flex-row flex-wrap space-x-4 font-semibold text-gray-400 md:justify-end'>
          {tech?.map((singleTech) => (
            <span key={uuid()}>{singleTech}</span>
          ))}
        </div>
        <span className='my-2 flex space-x-2 md:justify-end'>
          <a
            href={`${links ? links.github : null}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={"1.5rem"} className='cursor-pointer' />
          </a>
          <a
            href={`${links ? links.deploy : null}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <MdComputer size={"1.5rem"} className='cursor-pointer' />
          </a>
        </span>
      </div>
      <img
        src={img}
        alt={title}
        className='absolute top-0 -z-10 h-full w-full rounded-lg bg-cover bg-top object-cover md:relative md:aspect-square md:w-[40%]'
      />
    </li>
  ) : null;
};

export default SingleProject;
