import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { HiOutlineChevronDown } from "react-icons/hi";
import "./Education.css";
import { Degree, EducationBadgeProps } from "./types";

let degrees: Array<Degree> = [
  {
    cursedDates: "2018-2022",
    degree: "Bachelor of Computer Systems Engineering",
    institution: "Tecnológico Nacional de México (TecNM)",
    gpa: 4.0,
    score: 98,
    remarks: "Graduated with honors as best of my generation",
    image:
      "https://itesainvestigacion.weebly.com/uploads/6/5/9/7/65970875/logo-tecnm-2018_orig.png",
  },
  {
    cursedDates: "2015 - 2018",
    degree: "Programming Technician",
    institution: "CBTis 225",
    gpa: 4.0,
    score: 96,
    remarks: "Graduated with honors as best of my class",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/DGETI_logo.svg/1200px-DGETI_logo.svg.png",
  },
];

function Education() {
  const [selectedBadge, setSelectedBadge] = useState("");

  const toggleSelectedBadge = (degree: string) => () => {
    if (selectedBadge === degree) {
      setSelectedBadge("");
      return;
    }

    setSelectedBadge(degree);
  };

  return (
    <div className="education-background min-h-screen md:h-screen bg-fixed bg-no-repeat bg-right-top">
      <div className="image-cover-left w-auto min-h-screen md:h-screen grid grid-cols-1 lg:grid-cols-3">
        <div className="bg-blue-dark flex flex-col drop-shadow-xl col-span-2 p-16 md:mx-24 md:my-10 lg:m-24 md:p-20 md:pb-0 lg:mr-0 overflow-hidden">
          <div>
            <h2 className="text-yellow-light text-xl text-center">
              Pablo Vargas Bermúdez
            </h2>
            <h3 className="mb-4 text-yellow-light text-center">
              Academic career
            </h3>
            <p className="my-2 text-justify">
              I take pride in my academic achievements and the knowledge gained
              from these esteemed institutions. My educational background
              demonstrates my commitment to excellence and my continual pursuit
              of personal and professional growth.
            </p>
          </div>

          <div className="flex flex-col gap-2 flex-wrap flex-auto justify-center items-center">
            {degrees.map((degree: Degree) => (
              <EducationBadge
                key={degree.degree}
                {...degree}
                isSelected={degree.degree === selectedBadge}
                selectBadge={toggleSelectedBadge(degree.degree)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationBadge({
  institution,
  cursedDates,
  degree,
  gpa,
  score,
  remarks,
  image,
  isSelected,
  selectBadge,
}: EducationBadgeProps) {
  return (
    <button
      onClick={selectBadge}
      className="bg-black text-yellow-light border border-yellow-light p-4 w-full rounded-none"
    >
      <h2 className="text-yellow-light text-xl text-center">{degree}</h2>
      <h3 className="text-center">{institution}</h3>
      <div
        className={twMerge(
          "flex items-center justify-center mt-3 transform rotate-0 duration-150 transition-transform",
          isSelected && "rotate-180"
        )}
      >
        <HiOutlineChevronDown className="w-5 h-5 inline" />
      </div>

      <div
        className={twMerge(
          "grid grid-cols-3 gap-3 mt-3 max-h-0 transition-[max-height] ease-in-out duration-150 overflow-hidden",
          isSelected && "max-h-40"
        )}
      >
        <div className="col-span-2">
          <span className="text-center block">{cursedDates}</span>
          <span className="flex flex-col my-2 sm:flex-row justify-between items-center">
            <span>Translated GPA: {gpa.toFixed(1)}</span>{" "}
            <span>{score}/100</span>
          </span>
          <span className="block text-center underline">{remarks}</span>
        </div>
        <div className="flex items-center justify-center">
          <img className="max-w-full h-24" src={image} />
        </div>
      </div>
    </button>
  );
}

export default Education;
