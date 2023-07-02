import About from "../../components/About/About";
import Companies from "../../components/Companies/Companies";
import MasterHead from "../../components/MasterHead/MasterHead";
import Skills from "../../components/Skills/Skills";

function Home() {
  return (
    <>
      <MasterHead />
      <Companies />
      <About />
      <Skills />
    </>
  );
}

export default Home;
