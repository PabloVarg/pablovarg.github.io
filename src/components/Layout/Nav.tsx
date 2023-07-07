import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface NavLinkProps {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  className?: string;
  onClick?(): void;
  href?: string;
}

interface NavButtonProps {
  open: boolean;
  onClick(): void;
}

interface NavMenuItemsProps {
  isMenuOpen: boolean;
  closeMenu(): void;
}

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col py-2 backdrop-blur-md px-2 sm:px-6 fixed bg-black/30 w-full z-50">
      <div className="flex items-center justify-between">
        <HomeNavLink />
        <NavMenuButton
          open={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      <NavMenuItems
        isMenuOpen={isMenuOpen}
        closeMenu={() => setIsMenuOpen(false)}
      />
    </nav>
  );
}

function HomeNavLink() {
  return (
    <>
      <NavLink
        type="primary"
        className="hidden sm:block"
        onClick={() => window.scrollTo(0, 0)}
      >
        <span>Pablo Vargas Bermúdez</span>
      </NavLink>
      <NavLink
        type="primary"
        className="sm:hidden"
        onClick={() => window.scrollTo(0, 0)}
      >
        <span>Pablo Vargas</span>
      </NavLink>
    </>
  );
}

function NavMenuItems({ isMenuOpen, closeMenu }: NavMenuItemsProps) {
  if (!isMenuOpen) {
    return <></>;
  }

  const className = "hover:text-xl transition";

  return (
    <>
      <div className="flex justify-center flex-col items-center p-4 pt-8 gap-4 z-10">
        <NavLink className={className}>About</NavLink>
        <NavLink className={className}>Experience</NavLink>
        <NavLink className={className}>Skills</NavLink>
        <NavLink className={className}>Projects</NavLink>
        <NavLink className={className}>Contact</NavLink>
      </div>

      <div
        onClick={closeMenu}
        className="absolute w-screen h-screen top-0 left-0 -z-10"
      ></div>
    </>
  );
}

function NavMenuButton(props: NavButtonProps) {
  return (
    <div className="flex flex-col gap-x-4">
      <button
        onClick={props.onClick}
        className={`p-3 text-white hover:text-yellow-light hover:border-none border-none bg-transparent relative ${
          props.open ? "transform rotate-180" : ""
        } transition-transform duration-300`}
      >
        <AiOutlineClose
          className={props.open ? "inline" : "hidden"}
          size={"1.5rem"}
        />
        <AiOutlineMenu
          className={props.open ? "hidden" : "inline"}
          size={"1.5rem"}
        />
      </button>
    </div>
  );
}

function NavLink(props: NavLinkProps) {
  let className =
    props.type == "primary"
      ? "text-yellow-medium hover:text-white text-xl overflow-clip"
      : "text-white hover:text-yellow-light text-lg";

  return (
    <a
      className={`hover:cursor-pointer transition-all ${className} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  );
}

export default Nav;
