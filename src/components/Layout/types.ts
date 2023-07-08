export interface Layoutprops {
  children: React.ReactNode;
}

export interface NavLinkProps {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  className?: string;
  onClick?(): void;
  href?: string;
}

export interface NavButtonProps {
  open: boolean;
  onClick(): void;
}

export interface NavMenuItemsProps {
  isMenuOpen: boolean;
  closeMenu(): void;
}

export interface HomeNavLinkProps {
  closeMenu(): void;
}
