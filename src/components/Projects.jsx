import React from "react";

import project_taskdev from "../assets/projects/project_taskdev.png";
import test from "../assets/project_test.jpg";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <section
      className='container mx-auto my-20 w-3/4 space-y-10 lg:w-1/2'
      id='projects'
    >
      <article className='flex flex-col items-center justify-center'>
        <h3 className='font-sans text-xl font-bold text-sky-600'>
          Some things i've built
        </h3>
        <h2 className='text-center text-4xl font-bold'>
          These are my main projects
        </h2>
      </article>
      <article>
        <ul className='space-y-6'>
          <SingleProject
            img={project_taskdev}
            title={"TASK.DEV"}
            desc={`REACT.JS project maded with TYPESCRIPT, looked for apply almost every kind of type and functionality + used hooks from REACT.JS`}
            tech={["TYPESCRIPT", "REACT.JS", "TAILWIND", "VITE"]}
            order={2}
            links={{
              github: "https://github.com/zycness/typescript-todo.dev",
              deploy: "https://typescript-task-dev.vercel.app/",
            }}
          />
          <SingleProject
            img={test}
            title={"Project #1"}
            desc={`Lorem ipsum dolor sit amet consectetur,
               adipisicing elit. Id, eos repudiandae, aspernatur
                pariatur minima dolore hic earum molestiae quae, sed
                 odio doloremque nihil necessitatibus nobis ducimus
                  reiciendis iure repellendus enim.`}
            tech={["tech", "tech1", "tech2", "tech3"]}
            order={1}
            links={{
              github: "https://github.com/zycness",
              deploy: "https://portfolio-nuevo-zyc.vercel.app/",
            }}
          />
          <SingleProject
            img={test}
            title={"Project #1"}
            desc={`Lorem ipsum dolor sit amet consectetur,
               adipisicing elit. Id, eos repudiandae, aspernatur
                pariatur minima dolore hic earum molestiae quae, sed
                 odio doloremque nihil necessitatibus nobis ducimus
                  reiciendis iure repellendus enim.`}
            tech={["tech", "tech1", "tech2", "tech3"]}
            order={2}
            links={{
              github: "https://github.com/zycness",
              deploy: "https://portfolio-nuevo-zyc.vercel.app/",
            }}
          />
          <SingleProject
            img={test}
            title={"Project #1"}
            desc={`Lorem ipsum dolor sit amet consectetur,
               adipisicing elit. Id, eos repudiandae, aspernatur
                pariatur minima dolore hic earum molestiae quae, sed
                 odio doloremque nihil necessitatibus nobis ducimus
                  reiciendis iure repellendus enim.`}
            tech={["tech", "tech1", "tech2", "tech3"]}
            order={1}
            links={{
              github: "https://github.com/zycness",
              deploy: "https://portfolio-nuevo-zyc.vercel.app/",
            }}
          />
        </ul>
      </article>
    </section>
  );
};

export default Projects;
