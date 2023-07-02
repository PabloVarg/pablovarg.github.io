import { MdEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import Badge from "../Base/Badge";

function About() {
  return (
    <div className="bg-blue-dark py-5 md:p-20 flex flex-col md:flex-row items-center justify-center gap-x-16 gap-y-8">
      <PresentingImage />
      <AboutText />
    </div>
  );
}

function PresentingImage() {
  return (
    <img
      src="/images/about-avatar.jpeg"
      className="w-1/2 md:w-1/3 border-2 border-black rounded-xl bg-left-bottom"
    />
  );
}

function AboutText() {
  return (
    <div className="flex flex-col items-center justify-start w-2/3 md:w-1/2">
      <h2 className="text-yellow-light text-xl text-center">
        Pablo Vargas Bermúdez
      </h2>
      <h3 className="mb-4 text-yellow-light text-center">Software Engineer</h3>
      <p className="my-2 text-justify">
        I'm a software engineer with experience mainly in backend development.
        My primary interests include Java and Python, and I'm always looking to
        learn and grow in my career.
      </p>
      <p className="my-2 text-justify">
        I graduated with honors from Tecnológico Nacional de México (TecNM) with
        a Bachelor's degree in Computer Systems Engineering.
      </p>

      <Badges />
    </div>
  );
}

function Badges() {
  return (
    <div className="flex flex-row flex-wrap gap-8 mt-5">
      <LinkedinBadge />
      <EmailBadge />
    </div>
  );
}

function EmailBadge() {
  return (
    <Badge
      icon={<MdEmail className="text-yellow-light w-16 h-16" />}
      to="emailto:pvarber@outlook.es"
    />
  );
}

function LinkedinBadge() {
  return (
    <Badge
      icon={<AiOutlineLinkedin className="text-yellow-light w-16 h-16" />}
      to="https://www.linkedin.com/in/pablo-vargas-3215a2224/"
    />
  );
}

export default About;
