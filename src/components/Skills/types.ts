import { ReactNode } from "react";

export interface Skill {
  title: string;
  imageIcon: ReactNode;
  description: string;
}

export interface SkillProps extends Skill {}
