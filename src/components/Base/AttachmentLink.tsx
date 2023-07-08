import { twMerge } from "tailwind-merge";
import { AttachmentLinkProps } from "./types";

function AttachmentLink(props: AttachmentLinkProps) {
  return (
    <a
      className={twMerge(
        "border flex items-center justify-between gap-x-3 border-black hover:border-yellow-light text-yellow-light hover:text-yellow-light bg-black p-3 rounded-xl mt-7 text-xl",
        props.type === "secondary" && "bg-yellow-dark text-black",
        props.className
      )}
      href={props.toFile}
      target={props.target ?? "_blank"}
    >
      {props.children}
    </a>
  );
}

export default AttachmentLink;
