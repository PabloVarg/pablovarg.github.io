import "./MasterHead.css";
import { CgAttachment } from "react-icons/cg";

function MasterHead() {
  return (
    <div className="image-background h-screen bg-fixed bg-no-repeat bg-cover bg-center">
      <div className="image-cover w-auto h-screen bg-fixed flex flex-col justify-center items-center gap-7">
        <Avatar />

        <div className="text-center">
          <h1 className="text-yellow-medium">Pablo Vargas</h1>
          <h2 className="text-yellow-light text-lg">
            Software Engineer - Backend - AI/ML
          </h2>
        </div>

        <a
          className="flex items-center justify-between gap-x-3 border-black hover:border-yellow-light text-yellow-light hover:text-white bg-black border border-1 p-3 rounded-xl"
          href="/pdf/cv.pdf"
          target="_blank"
        >
          Resume <CgAttachment color="white" />
        </a>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="main-avatar bg-cover w-80 h-80 rounded-full bg-center-top border border-yellow-medium" />
  );
}

export default MasterHead;
