import { ReactNode } from "react";

export interface AttachmentLinkProps {
  type: "primary" | "secondary";
  children: ReactNode;
  toFile: string;

  className?: string;
  target?: string;
}

export interface BadgeProps {
  icon: ReactNode;
  to: string;
}

export interface ButtonProps {
  type: "primary" | "secondary";
  children: ReactNode;

  onClick?(): void;
  className?: string;
}
