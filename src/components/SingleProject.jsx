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
        className='absolute h-full w-full top-0 -z-10 object-cover rounded-lg md:relative md:w-1/2 '
      />
      <div className='p-6 bg-gray-50 bg-opacity-90 rounded-lg md:w-1/2 md:bg-transparent'>
        <h5 className='text-sky-700 font-bold text-sm'>Featured Project</h5>
        <h4 className='font-bold text-2xl'>{title}</h4>
        <p className='font-semibold text-gray-500 '>{desc}</p>
        <div className='flex flex-row flex-wrap space-x-4 font-semibold text-gray-400'>
          {tech?.map((singleTech) => (
            <span key={uuid()}>{singleTech}</span>
          ))}
        </div>
        <span className='flex space-x-2 my-2'>
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
      <div className='p-6 bg-gray-50 bg-opacity-90 rounded-lg md:w-1/2 md:bg-transparent md:text-right'>
        <h5 className='text-sky-700 font-bold text-sm'>Featured Project</h5>
        <h4 className='font-bold text-2xl'>{title}</h4>
        <p className='font-semibold text-gray-500 '>{desc}</p>
        <div className='flex flex-row flex-wrap space-x-4 font-semibold text-gray-400 md:justify-end'>
          {tech?.map((singleTech) => (
            <span key={uuid()}>{singleTech}</span>
          ))}
        </div>
        <span className='flex space-x-2 my-2 md:justify-end'>
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
        className='absolute h-full w-full top-0 -z-10 object-cover rounded-lg md:relative md:w-1/2'
      />
    </li>
  ) : null;
};

export default SingleProject;
