import { Project, ProjectProps } from "./types";
import "./Projects.css";
import Badge from "../Base/Badge";
import { AiOutlineGithub } from "react-icons/ai";

let projects: Array<Project> = [
  {
    title: "Gradient Descent",
    description:
      "Implementation of gradient descent to find the maximum or minimum of a function",
    imageURL: "/images/projects/gradient-descent.webp",
    repoURL: "https://github.com/Pabloitl/ai-gradient-descent",
  },
  {
    title: "Automata Operations",
    description:
      "Implementation for equivalence and minimization of automatons",
    imageURL: "/images/projects/automaton.webp",
    repoURL: "https://github.com/Pabloitl/automatons-automata",
  },
  {
    title: "Compiler / Transpiler",
    description:
      "Parses and compiles a custom programming language into an ASM dialect",
    imageURL: "/images/projects/syntax-tree.webp",
    repoURL: "https://github.com/Pabloitl/automatons-compiler",
  },
  {
    title: "Weather Classifier",
    description:
      "This CLI application made with the curses library allows to classify different regions in the planet into certain climates with help of prolog and some predefined rules",
    imageURL: "/images/projects/weather.webp",
    repoURL: "https://github.com/Pabloitl/prolog-project",
  },
  {
    title: "TODO Manager",
    description:
      "Implementation of TODO task manager with functional programming, using Haskell",
    imageURL: "/images/projects/lambda-calculus.webp",
    repoURL: "https://github.com/Pabloitl/functional-programming-project",
  },
  {
    title: "Medical Records Manager",
    description:
      "Laravel web app to manage medical records of patients, allowing to manage inventory of medicines in stock",
    imageURL: "/images/projects/medicine.webp",
    repoURL: "https://github.com/Pabloitl/se-historiales",
  },
];

function Projects() {
  return (
    <div id="Projects">
      <div className="px-5 py-20 md:p-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 polygon-background bg-cover">
        {projects.map((project: Project) => (
          <Project key={project.repoURL} {...project} />
        ))}
      </div>

      <div className="flex flex-col gap-5 items-center justify-center">
        <h2 className="text-3xl text-center">To see more of my projects ...</h2>
        <GithubBadge />
      </div>
    </div>
  );
}

function Project({ title, description, imageURL, repoURL }: ProjectProps) {
  return (
    <a
      href={repoURL}
      target="_blank"
      className="relative aspect-[4/3] sepia hover:sepia-0 cursor-pointer overflow-hidden"
    >
      <img
        src={imageURL}
        className="absolute object-cover aspect-[4/3] w-full"
      />

      <div className="absolute project-cover flex flex-col items-center justify-center px-2 md:p-12 gap-5 w-full h-full">
        <h2 className="text-yellow-light text-xl">{title}</h2>
        <p className="text-white">{description}</p>
      </div>
    </a>
  );
}

function GithubBadge() {
  return (
    <Badge
      icon={<AiOutlineGithub className="text-yellow-light w-16 h-16" />}
      to="https://github.com/PabloVarg"
    />
  );
}

export default Projects;
