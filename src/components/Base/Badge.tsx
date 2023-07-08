import { BadgeProps } from "./types";

function Badge({ icon, to }: BadgeProps) {
  return (
    <a href={to} target="_blank">
      {icon}
    </a>
  );
}

export default Badge;
