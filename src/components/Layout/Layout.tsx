import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface Layoutprops {
  children: React.ReactNode;
}

interface NavLinkProps {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  onClick?(): void;
  href?: string;
}

interface NavButtonProps {
  open: boolean;
  onClick(): void;
}

function Layout(props: Layoutprops) {
  return (
    <>
      <NavBar />
      <div>{props.children}</div>
    </>
  );
}

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col py-2 backdrop-blur-md px-14 fixed bg-black/30 w-full">
      <div className="flex items-center justify-between">
        <NavLink type="primary" onClick={() => window.scrollTo(0, 0)}>
          Pablo Vargas
        </NavLink>

        <div className="flex flex-col gap-x-4">
          <NavButton
            open={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex justify-center flex-col items-center mt-8 gap-4">
          <NavLink>About</NavLink>
          <NavLink>Experience</NavLink>
          <NavLink>Skills</NavLink>
          <NavLink>Projects</NavLink>
          <NavLink>Contact</NavLink>
        </div>
      )}
    </nav>
  );
}

function NavButton(props: NavButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="m-1 text-white hover:text-yellow-light hover:border-none border-none bg-transparent"
    >
      {props.open ? (
        <AiOutlineClose size={"1.5rem"} />
      ) : (
        <AiOutlineMenu size={"1.5rem"} />
      )}
    </button>
  );
}

function NavLink(props: NavLinkProps) {
  let className =
    props.type == "primary"
      ? "text-yellow-medium hover:text-white text-xl"
      : "text-white hover:text-yellow-light text-lg";
  return (
    <a
      className={`hover:cursor-pointer transition-all ${className}`}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  );
}

export default Layout;
