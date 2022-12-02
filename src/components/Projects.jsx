import React from "react";

import test from "../assets/project_test.jpg";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <section className='container w-3/4 lg:w-1/2 mx-auto py-20 space-y-10'>
      <article className='flex flex-col justify-center items-center'>
        <h3 className='text-sky-600 font-bold text-xl font-sans'>
          Some things i've built
        </h3>
        <h2 className='font-bold text-4xl text-center'>
          These are my main projects
        </h2>
      </article>
      <article>
        <ul className='space-y-6'>
          <SingleProject
            img={test}
            title={"Project #1"}
            desc={`Lorem ipsum dolor sit amet consectetur,
               adipisicing elit. Id, eos repudiandae, aspernatur
                pariatur minima dolore hic earum molestiae quae, sed
                 odio doloremque nihil necessitatibus nobis ducimus
                  reiciendis iure repellendus enim.`}
            tech={["tech", "tech1", "tech2", "tech3"]}
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
          />
        </ul>
      </article>
    </section>
  );
};

export default Projects;
