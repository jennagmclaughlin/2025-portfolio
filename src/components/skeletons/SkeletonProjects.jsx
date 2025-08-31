import Skeleton from "./Skeleton";
import React from "react";

const SkeletonProjects = () => {
  const lines = [...Array(10).keys()].map((i) => {
    return (
      <li
        key={i}
        className="project-container bg-card lightMode-box-shadow py-[16px] px-[16px] md:px-[24px] rounded-xl text-left gap-4"
      >
        <Skeleton classes="title w-50" />
        <Skeleton classes="text w-100" />
        <Skeleton classes="text w-100" />
        <Skeleton classes="text w-100" />
      </li>
    );
  });

  return (
    <>
      <main className="pt-[6rem] pb-[36px]">
        <section>
          <div className="container m-auto">
            <div className="flex flex-col gap-3 md:flex-row md:gap-y-0 md:gap-x-7">
              <div className="projects-sidebar basis-1/3">
                <div className="md:sticky md:top-[80px] md:text-left">
                  <Skeleton classes="title w-50" />
                  <Skeleton classes="text w-full" />
                  <Skeleton classes="title w-50" />
                  <Skeleton classes="text w-full" />
                  <Skeleton classes="text w-full" />
                  <Skeleton classes="text w-full" />
                  <Skeleton classes="button" />
                </div>
              </div>
              <div className="basis-2/3">
                <ul className="flex flex-col gap-y-6">{lines}</ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SkeletonProjects;
