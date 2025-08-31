import React from "react";
import { motion } from "motion/react";

const ProjectCard = ({ project, index }) => {
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
    <motion.li
      key={project.id}
      custom={index}
      variants={projectVariants}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="project-container bg-card lightMode-box-shadow py-[16px] px-[16px] md:px-[24px] rounded-xl text-left gap-4 lg:flex lg:items-stretch">
        <div className="project-thumbnail lg:basis-1/3">
          <img
            src={project.thumbnail}
            alt={project.name}
            loading="lazy"
            className="rounded-md w-full object-cover h-[200px] md:h-[100%]"
          />
        </div>
        <div className="project-details lg:basis-2/3">
          <div className="project-title flex flex-col-reverse">
            <h3 className="font-accent text-2xl">{project.name}</h3>
            <p>{project.source}</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {project.skills.map((skill, skillIndex) => {
              return (
                <li
                  key={skillIndex}
                  className="bg-main/85 rounded-md block px-3 py-1 text-sm"
                >
                  {skill}
                </li>
              );
            })}
          </ul>
          <p className="text-foreground/75 py-1 text-sm">
            {project.quickDetails}
          </p>
          <p className="flex flex-wrap gap-3">
            {project.url && (
              <a
                href={project.url}
                title="View Project"
                className="ctaButton rounded-lg bg-primary/10 flex-1 hover:bg-main border-2 border-foreground/5 m-auto md:m-0"
                target="_blank"
              >
                View Project
              </a>
            )}
            <a
              href={project.learnMoreURL}
              title="Learn More"
              className="otherButton rounded-lg flex-1 m-auto md:m-0 max-w-[50%]"
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
    </motion.li>
  );
};

export default ProjectCard;
