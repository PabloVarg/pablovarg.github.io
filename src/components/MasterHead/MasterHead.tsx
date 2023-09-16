import "./MasterHead.css";
import { CgAttachment, CgChevronDown } from "react-icons/cg";
import AttachmentLink from "../Base/AttachmentLink";

function MasterHead() {
  return (
    <div
      id="MasterHead"
      className="image-background min-h-screen bg-fixed bg-no-repeat bg-cover bg-center"
    >
      <div className="image-cover w-auto min-h-screen flex flex-col justify-center items-center gap-7">
        <div className="flex-grow"></div>

        <Avatar />

        <AttachmentLink type="primary" toFile="/pdfs/cv.pdf">
          Resume <CgAttachment color="white" />
        </AttachmentLink>

        <div className="flex-grow flex items-end">
          <CgChevronDown
            className="animate-bounce text-yellow-light"
            size="2rem"
          />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <>
      <div className="main-avatar bg-cover w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-center-top border border-yellow-medium" />
      <div className="text-center">
        <h1 className="text-yellow-medium sm:hidden">
          <span>Pablo Vargas</span>
        </h1>
        <h1 className="text-yellow-medium hidden sm:inline">
          <span>Pablo Vargas Bermúdez</span>
        </h1>
        <h2 className="text-yellow-light text-lg">
          Backend - Software Engineer - AI/ML
        </h2>
      </div>
    </>
  );
}

export default MasterHead;
