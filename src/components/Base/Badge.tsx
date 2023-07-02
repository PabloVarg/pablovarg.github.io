import { ReactNode } from "react";

interface BadgeProps {
  icon: ReactNode;
  to: string;
}

function Badge({ icon, to }: BadgeProps) {
  return (
    <a href={to} target="_blank">
      {icon}
    </a>
  );
}

export default Badge;
