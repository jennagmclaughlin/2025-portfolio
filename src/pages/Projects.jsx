import React, { useState } from "react";
import { Navbar } from "@/components/Nav/Navbar";
import projects from "@/data/projects.json";
import ProjectCard from "@/components/Projects/ProjectCard";
import { Footer } from "@/components/Footer";

export const Projects = () => {
  const tags = [
    ...new Map(
      // flatten tags, slug is key to prevent duplicates
      projects
        .map((project) => project.tags)
        .flat()
        .map((tag) => [tag.slug, tag]) // map slug to respective tag
    ).values(),
  ];

  const [filterTags, setFilterTags] = useState([]);

  const filteredProjects = projects.filter((node) => {
    // makes sure node.tags is array, defaults to empty erray if undefined
    const tags = node.tags || [];
    if (filterTags.length > 0) {
      return filterTags.some((filterTag) => {
        return tags.some((tag) => tag.slug === filterTag);
      });
    }
    return true;
  });

  // tag selection
  const filterHandler = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setFilterTags((prevTags) => [...prevTags, value]);
    } else {
      setFilterTags((prevTags) =>
        prevTags.filter((filterTag) => filterTag !== value)
      );
    }
  };
  return (
    <>
      <Navbar />
      <main className="pt-[6rem] pb-[36px]">
        <section>
          <div className="container m-auto">
            <div className="flex flex-col gap-3 md:flex-row md:gap-y-0 md:gap-x-7">
              <div className="projects-sidebar basis-1/3">
                <div className="md:sticky md:top-[80px] md:text-left">
                  <h2 className="font-accent text-4xl lg:text-[44px]">
                    Projects
                  </h2>
                  <p className="text-foreground/75 pt-1 pb-3">
                    A hand-picked selection of projects.
                  </p>
                  <h3 className="font-accent text-2xl">Filter</h3>
                  <form>
                    <div className="flex flex-wrap justify-center md:justify-start md:flex-col py-3 gap-3 md:gap-x-0">
                      {tags.map((tag, index) => (
                        <label
                          key={index}
                          htmlFor={tag.slug}
                          className="cursor-pointer w-[max-content]"
                        >
                          <input
                            type="checkbox"
                            onChange={filterHandler}
                            value={tag.slug}
                            id={tag.slug}
                          />
                          <span className="pl-2">{tag.title}</span>
                        </label>
                      ))}
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setFilterTags([]); // Prevent page reload on button click
                      }}
                      className="otherButton flex-1 basis-1 mt-2 mb-[24px] md:mb-0 mx-auto md:mx-0"
                    >
                      Clear Filters
                    </button>
                  </form>
                </div>
              </div>
              <div className="basis-2/3">
                <ul className="flex flex-col gap-y-6">
                  {filteredProjects.map((project, index) => {
                    return (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
