import { useReducer } from "react";
import Button from "../Base/Button";
import { Skill, SkillProps } from "./types";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TbBrandCpp } from "react-icons/tb";
import { RiFlowChart } from "react-icons/ri";
import { SiSwagger } from "react-icons/si";
import { GiClockwork } from "react-icons/gi";
import {
  DiDocker,
  DiGit,
  DiJava,
  DiJavascript1,
  DiLinux,
  DiMysql,
  DiPhp,
  DiPython,
} from "react-icons/di";

let skills: Array<Skill> = [
  {
    title: "Java",
    imageIcon: <DiJava size="13rem" className="text-yellow-light" />,
    description:
      "Used Java SE in school projects applying concepts from OOP and functional paradigms, used project management tools such as Maven, and currently learning Spring Boot, Java EE, Spring Data JPA and Lombok.",
  },
  {
    title: "Python",
    imageIcon: <DiPython size="13rem" className="text-yellow-light" />,
    description:
      "Used for projects with Numpy, Matplotlib, Seaborn among other libraries. And frameworks such as Django with tools like GraphQL, JWT and REST",
  },
  {
    title: "C++",
    imageIcon: <TbBrandCpp size="13rem" className="text-yellow-light" />,
    description:
      "Used for competitive programming contests with experience with the algorithm library.",
  },
  {
    title: "SQL (SQL Server, MySQL, PostgreSQL)",
    imageIcon: <DiMysql size="13rem" className="text-yellow-light" />,
    description:
      "Used in school projects from designing relational databases to implementing them and manipulating their data, also used professionally mainly through ORM’s.",
  },
  {
    title: "PHP",
    imageIcon: <DiPhp size="13rem" className="text-yellow-light" />,
    description:
      " Used for school projects and social service to fix already built projects as well as building new ones. Experience with frameworks like Laravel and CodeIgniter.",
  },
  {
    title: "Javascript",
    imageIcon: <DiJavascript1 size="13rem" className="text-yellow-light" />,
    description:
      "Used for professional development using frameworks such as React and Next.js.",
  },
  {
    title: "Git",
    imageIcon: <DiGit size="13rem" className="text-yellow-light" />,
    description:
      "Used in all my projects with GitHub to host my projects, as well as professionally, accumulating a total of 5 years of experience.",
  },
  {
    title: "Linux",
    imageIcon: <DiLinux size="13rem" className="text-yellow-light" />,
    description:
      "Experience using it as daily os as well as setting up services like ssh, mariadb, samba among others. Used as well professionally to manage servers using mainly Debian and Ubuntu.",
  },
  {
    title: "Docker",
    imageIcon: <DiDocker size="13rem" className="text-yellow-light" />,
    description:
      "Experience in school projects to set up services like mariadb, php. Making use of some docker compose concepts to manage these services.",
  },
  {
    title: "Design patterns",
    imageIcon: <RiFlowChart size="13rem" className="text-yellow-light" />,
    description:
      "Ability to understand and apply different design patterns such as: Factory, Singleton, Builder, Strategy, among others",
  },
  {
    title: "REST",
    imageIcon: <SiSwagger size="13rem" className="text-yellow-light" />,
    description:
      "Experience developing web services with REST api’s in Laravel and Django using representations such as JSON and HTTP response codes.",
  },
  {
    title: "Software Development Methodologies",
    imageIcon: <GiClockwork size="13rem" className="text-yellow-light" />,
    description:
      "Professional experience using agile methodologies such as SCRUM and eXtreme Programming, as well as the use of methods such as KANBAN. UML: Ability to model software through UML diagrams, such as: Class Diagrams, Use Case Diagrams, Activity Diagrams, among others.",
  },
];

function Skills() {
  const itemsInShortView = 9;
  const [showAll, toggleShowAll] = useReducer((state) => !state, false);

  return (
    <div className="p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 polygon-background bg-cover">
      {skills
        .slice(0, showAll ? skills.length : itemsInShortView - 1)
        .map((skill) => (
          <Skill key={skill.title} {...skill} />
        ))}

      <div className="flex flex-col items-center justify-center">
        <Button
          type="primary"
          onClick={toggleShowAll}
          className="rounded-full h-52 w-52 justify-center"
        >
          {showAll ? (
            <AiOutlineMinus className="w-52 h-52 hover:-rotate-180 transition" />
          ) : (
            <AiOutlinePlus className="w-52 h-52 hover:rotate-90 transition" />
          )}
        </Button>
      </div>
    </div>
  );
}

function Skill({ title, imageIcon, description }: SkillProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      {imageIcon}
      <h2 className="text-yellow-light text-xl mb-5 text-center">{title}</h2>
      <p className="text-justify">{description}</p>
    </div>
  );
}

export default Skills;
