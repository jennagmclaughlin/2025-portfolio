import projects from "@/data/projects.json";
import ProjectCard from "./ProjectCard";

export const FeaturedProjects = () => {
  // only showing projects which have favorite: true
  const favorites = projects.filter((project) => project.favorite === true);

  return (
    <div className="container m-auto">
      <div className="flex flex-col gap-3 md:flex-row md:gap-y-0 md:gap-x-7">
        <div className="projects-sidebar basis-1/3">
          <div className="md:sticky md:top-[80px] md:text-left">
            <h2 className="font-accent text-4xl lg:text-[44px]">
              Featured Projects
            </h2>
            <p className="text-foreground/75 pt-1">
              A list of some of my favorite projects.
            </p>
            <p className="pt-3 md:text-left">
              <a
                href="/projects"
                title="Projects"
                className="ctaButton w-[fit-content] border-2 border-foreground/5 m-auto md:m-0"
              >
                See all projects
              </a>
            </p>
          </div>
        </div>
        <div className="basis-2/3">
          <ul className="flex flex-col gap-y-6">
            {favorites.map((project, index) => {
              return (
                <ProjectCard key={project.id} project={project} index={index} />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
