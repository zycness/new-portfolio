import React from "react";

const SingleProject = ({ img, title, desc, tech }) => {
  return (
    <li className='relative md:flex md:flex-row md:items-center md:space-x-3'>
      <img
        src={img}
        alt={title}
        className='absolute h-full w-full top-0 -z-10 object-cover rounded-lg md:relative md:w-1/2'
      />
      <div className='p-6 bg-gray-50 bg-opacity-90 rounded-lg md:w-1/2 md:bg-transparent'>
        <h5 className='text-sky-700 font-bold text-sm'>Featured Project</h5>
        <h4 className='font-bold text-2xl'>{title}</h4>
        <p className='font-semibold text-gray-500 '>{desc}</p>
        <div className='flex flex-row flex-wrap space-x-4 font-semibold text-gray-400'>
          {tech?.map((singleTech) => (
            <span>{singleTech}</span>
          ))}
        </div>
      </div>
    </li>
  );
};

export default SingleProject;
