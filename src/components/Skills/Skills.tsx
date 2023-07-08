import { Skill, SkillProps } from "./types";

let skills: Array<Skill> = [
  {
    title: "Java",
    imgSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    description:
      "Used Java SE in school projects applying concepts from OOP and functional paradigms, used project management tools such as Maven, and currently learning Spring Boot, Java EE, Spring Data JPA and Lombok.",
  },
  {
    title: "Python",
    imgSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    description:
      "Used for projects with Numpy, Matplotlib, Seaborn among other libraries. And frameworks such as Django with tools like GraphQL, JWT and REST",
  },
  {
    title: "C++",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
    description:
      "Used for competitive programming contests with experience with the algorithm library.",
  },
  {
    title: "SQL (SQL Server, MySQL, PostgreSQL)",
    imgSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    description:
      "Used in school projects from designing relational databases to implementing them and manipulating their data, also used professionally mainly through ORM’s.",
  },
  {
    title: "PHP",
    imgSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    description:
      " Used for school projects and social service to fix already built projects as well as building new ones. Experience with frameworks like Laravel and CodeIgniter.",
  },
  {
    title: "Javascript",
    imgSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    description:
      "Used for professional development using frameworks such as React and Next.js.",
  },
  {
    title: "Git",
    imgSrc: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    description:
      "Used in all my projects with GitHub to host my projects, as well as professionally, accumulating a total of 5 years of experience.",
  },
  {
    title: "Linux",
    imgSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    description:
      "Experience using it as daily os as well as setting up services like ssh, mariadb, samba among others. Used as well professionally to manage servers using mainly Debian and Ubuntu.",
  },
  {
    title: "Docker",
    imgSrc: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
    description:
      "Experience in school projects to set up services like mariadb, php. Making use of some docker compose concepts to manage these services.",
  },
  {
    title: "Design patterns",
    imgSrc:
      "https://www.lapa.ninja//assets/blog/the-best-free-svg-patterns.jpg",
    description:
      "Ability to understand and apply different design patterns such as: Factory, Singleton, Builder, Strategy, among others",
  },
  {
    title: "REST",
    imgSrc: "https://www.svgrepo.com/show/374111/swagger.svg",
    description:
      "Experience developing web services with REST api’s in Laravel and Django using representations such as JSON and HTTP response codes.",
  },
  {
    title: "Software Development Methodologies",
    imgSrc: "https://www.svgrepo.com/download/228370/process.svg",
    description:
      "Professional experience using agile methodologies such as SCRUM and eXtreme Programming, as well as the use of methods such as KANBAN. UML: Ability to model software through UML diagrams, such as: Class Diagrams, Use Case Diagrams, Activity Diagrams, among others.",
  },
];

function Skills() {
  return (
    <div className="p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 polygon-background bg-cover">
      {skills.map((skill) => (
        <Skill key={skill.title} {...skill} />
      ))}
    </div>
  );
}

function Skill({ title, imgSrc, description }: SkillProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={imgSrc} className="w-52" />
      <h2 className="text-yellow-light text-xl mb-5 text-center">{title}</h2>
      <p className="text-justify">{description}</p>
    </div>
  );
}

export default Skills;
