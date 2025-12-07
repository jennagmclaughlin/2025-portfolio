import Contact from "./Contact/Contact";
import { motion } from "motion/react";
import * as Icons from "react-icons/fa";
import socials from "@/data/socials.json";

export const Footer = () => {
  return (
    <footer className="bg-footer relative z-1">
      <div className="container py-[28px] md:py-[48px]">
        <div className="w-full md:flex items-center justify-between overflow-hidden relative md:rounded-[24px] 2xl:h-[635px]">
          <div className="hidden md:flex absolute w-full h-full -bottom-[5%] left-0 -z-1 opacity-25">
            <svg
              width="1293"
              height="601"
              viewBox="0 0 100% 100%"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full"
            >
              <path
                d="M0 554C0 570.802 0 579.202 3.2698 585.62C6.14601 591.265 10.7354 595.854 16.3803 598.73C22.7976 602 31.1984 602 48 602H1231.06C1259.14 602 1273.18 602 1281.13 596.119C1288.06 590.992 1292.45 583.131 1293.18 574.541C1294.02 564.687 1286.66 552.734 1271.93 528.827L1019.93 119.682C1015.37 112.278 1013.09 108.576 1010.03 105.764C1007.32 103.273 1004.18 101.302 1000.76 99.9489C996.895 98.4211 992.57 97.981 983.919 97.1009L52.8583 2.37762C34.5456 0.514587 25.3892 -0.416992 18.3101 2.57825C12.092 5.20917 6.94315 9.86078 3.69637 15.7806C0 22.5203 0 31.7239 0 50.1312V554Z"
                fill="#39556B"
              />
            </svg>
          </div>
          <div className="flex-1 text-center md:text-left md:px-[36px] md:pt-[48px]">
            <h2 className="font-accent text-4xl md:text-5xl lg:text-6xl pt-[24px] md:pt-0">
              Contact Me
            </h2>
            <p className="text-lg text-foreground/75 leading-[160%]">
              Feel free to send me a message and I'll respond ASAP. You can also
              follow me on my socials listed below!
            </p>
            <ul className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-[12px]">
              {socials.map((social) => {
                const IconComponent = Icons[social.icon];
                return (
                  <li
                    key={social.id}
                    className="bg-main hover:bg-primary/50 rounded-lg w-[max-content] p-2 text-3xl lg:text-4xl flex items-center justify-center transition-all duration-150 cursor-pointer"
                  >
                    <a href={social.url} target="_blank" title={social.name}>
                      {IconComponent && <IconComponent />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <motion.div
            className="flex-1 flex justify-center md:justify-end pt-[36px] md:pt-[12px] md:pb-[60px] md:pr-[12px]"
            initial={{ x: 75, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Contact />
          </motion.div>
        </div>
        <p className="pt-[52px] text-center text-sm">
          © {new Date().getFullYear()} Jenna McLaughlin.
        </p>
      </div>
    </footer>
  );
};
