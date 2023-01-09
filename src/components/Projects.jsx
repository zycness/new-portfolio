import React from "react";

import project_taskdev from "../assets/projects/project_taskdev.png";
import project_todoMern from "../assets/projects/todolist.png";
import project_devthereum from "../assets/projects/devthereum_ts.png";
import project_movieDisplayer from "../assets/projects/movieDisplayer.png";
import test from "../assets/project_test.jpg";
import SingleProject from "./SingleProject";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      className='container mx-auto my-20 w-3/4 space-y-10 lg:w-1/2'
      id='projects'
    >
      <article className='flex flex-col items-center justify-center'>
        <h3 className='font-sans text-xl font-bold text-sky-600'>
          {t("projects.text.part1")}
        </h3>
        <h2 className='text-center text-4xl font-bold'>
          {t("projects.text.part2")}
        </h2>
      </article>
      <article>
        <ul className='space-y-6'>
          <SingleProject
            img={project_taskdev}
            title={"TASK.DEV"}
            subtitle={t("projects.text.text1.part1")}
            desc={t("projects.text.text1.part2")}
            tech={["TYPESCRIPT", "REACT.JS", "TAILWIND", "VITE"]}
            order={2}
            links={{
              github: "https://github.com/zycness/typescript-todo.dev",
              deploy: "https://typescript-task-dev.vercel.app/",
            }}
          />
          <SingleProject
            img={project_todoMern}
            title={"TODO LIST MERN"}
            subtitle={t("projects.text.text2.part1")}
            desc={t("projects.text.text2.part2")}
            tech={["NODEJS", "EXPRESSJS", "MONGODB", "REACT"]}
            order={1}
            links={{
              github: "https://github.com/zycness/mern-todolist",
              deploy: "https://todo-list-uhej.onrender.com/",
            }}
          />
          <SingleProject
            img={project_devthereum}
            title={"DEVTHEREUM"}
            subtitle={t("projects.text.text3.part1")}
            desc={t("projects.text.text3.part2")}
            tech={["TYPESCRIPT", "NEXTJS", "TAILWIND", "API"]}
            order={2}
            links={{
              github: "https://github.com/zycness/devthereum",
              deploy: "https://devthereum.vercel.app/",
            }}
          />
          <SingleProject
            img={project_movieDisplayer}
            title={"MOVIE DISPLAYER"}
            subtitle={t("projects.text.text4.part1")}
            desc={t("projects.text.text4.part2")}
            tech={["REACTJS", "ROUTERV6", "REDUX@TOOLKIT", "MANTINEUI"]}
            order={1}
            links={{
              github: "https://github.com/zycness/movie-searcher",
              deploy: "https://movie-searcher-mu.vercel.app/",
            }}
          />
        </ul>
      </article>
    </section>
  );
};

export default Projects;
