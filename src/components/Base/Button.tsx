import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./types";

function Button(props: ButtonProps) {
  return (
    <button
      className={twMerge(
        "border flex items-center justify-between gap-x-3 border-black hover:border-yellow-light text-yellow-light hover:text-yellow-light bg-black p-3 rounded-xl mt-7 text-xl",
        props.type === "secondary" && "bg-yellow-dark text-black",
        props.className
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
