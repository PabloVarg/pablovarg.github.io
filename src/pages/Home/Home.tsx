import About from "../../components/About/About";
import Companies from "../../components/Companies/Companies";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import MasterHead from "../../components/MasterHead/MasterHead";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

function Home() {
  return (
    <>
      <MasterHead />
      <Companies />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
    </>
  );
}

export default Home;
