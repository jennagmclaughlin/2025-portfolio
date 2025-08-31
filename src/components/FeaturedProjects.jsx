import projects from "@/data/projects.json";
import { motion, useTransform } from "motion/react";

export const FeaturedProjects = () => {
  // only showing projects which have favorite: true
  const favorites = projects.filter((project) => project.favorite === true);
  const projectVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="container m-auto">
      <div className="flex flex-col gap-3 md:flex-row md:gap-y-0 md:gap-x-7">
        <div className="projects-sidebar basis-1/3">
          <div className="md:sticky md:top-[80px] md:text-left">
            <h2 className="font-accent text-4xl lg:text-[44px]">
              Featured Projects
            </h2>
            <p className="text-foreground/75">
              A list of my favorite projects.
            </p>
          </div>
        </div>
        <div className="basis-2/3">
          <ul className="flex flex-col gap-y-6">
            {favorites.map((project, index) => {
              return (
                <motion.li
                  key={project.id}
                  custom={index}
                  variants={projectVariants}
                  initial="initial"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="project-container bg-card lightMode-box-shadow py-[16px] px-[24px] rounded-xl text-left gap-3 lg:flex lg:items-stretch">
                    <div className="project-thumbnail lg:basis-1/3">
                      <img
                        src={project.thumbnail}
                        alt="image"
                        loading="lazy"
                        className="rounded-md"
                      />
                    </div>
                    <div className="project-details lg:basis-2/3">
                      <div className="project-title flex flex-col-reverse">
                        <h3 className="font-accent text-2xl">{project.name}</h3>
                        <p className="text-foreground/75">{project.source}</p>
                      </div>
                      <ul className="flex flex-wrap gap-2">
                        {project.skills.map((skill, skillIndex) => {
                          return (
                            <li
                              key={skillIndex}
                              className="border-main/85 border-1 rounded-md block px-3 py-1 text-sm"
                            >
                              {skill}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
