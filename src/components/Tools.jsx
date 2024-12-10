import css3 from "../assets/tools/CSS3.svg";
import css3Hover from "../assets/tools/CSS3-1.svg";
import express from "../assets/tools/Express Js.svg";
import expressHover from "../assets/tools/Express Js-1.svg";
import figma from "../assets/tools/Figma.svg";
import figmaHover from "../assets/tools/Figma-1.svg";
import html5 from "../assets/tools/Html 5.svg";
import html5Hover from "../assets/tools/Html 5-1.svg";
import java from "../assets/tools/Java.svg";
import javaHover from "../assets/tools/Java-1.svg";
import javascript from "../assets/tools/JavaScript.svg";
import javascriptHover from "../assets/tools/JavaScript-1.svg";
import nextjs from "../assets/tools/Next.js.svg";
import nextjsHover from "../assets/tools/Next.js-1.svg";
import postgresql from "../assets/tools/PostgreSQL.svg";
import postgresqlHover from "../assets/tools/PostgreSQL-1.svg";
import react from "../assets/tools/React Native.svg";
import reactHover from "../assets/tools/React Native-1.svg";
import redux from "../assets/tools/Redux.svg";
import reduxHover from "../assets/tools/Redux-1.svg";
import tailwindHover from "../assets/tools/Tailwind CSS.svg";
import tailwind from "../assets/tools/Tailwind CSS-1.svg";
import typescript from "../assets/tools/TypeScript.svg";
import typescriptHover from "../assets/tools/TypeScript-1.svg";


export default function Tools() {

    const icons = [
        { name: "CSS3", default: css3, hover: css3Hover },
        { name: "Express", default: express, hover: expressHover },
        { name: "Figma", default: figma, hover: figmaHover },
        { name: "HTML5", default: html5, hover: html5Hover },
        { name: "Java", default: java, hover: javaHover },
        { name: "JavaScript", default: javascript, hover: javascriptHover },
        { name: "Next.js", default: nextjs, hover: nextjsHover },
        { name: "PostgreSQL", default: postgresql, hover: postgresqlHover },
        { name: "React", default: react, hover: reactHover },
        { name: "Redux", default: redux, hover: reduxHover },
        { name: "Tailwind", default: tailwind, hover: tailwindHover },
        { name: "TypeScript", default: typescript, hover: typescriptHover },
      ];

      return (
        <div className=" m-3 p-6 max-w-[80vw] flex justify-center flex-wrap gap-4 sm:max-w-[60vw]">

            

          {icons.map((icon, index) => (
            <div key={index} className="group relative w-10 h-10">
              <img
                src={icon.default}
                alt={`${icon.name} Icon`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={icon.hover}
                alt={`${icon.name} Hover Icon`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      );
}

