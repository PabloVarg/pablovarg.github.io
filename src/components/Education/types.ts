export interface Degree {
  institution: string;
  cursedDates: string;
  degree: string;
  gpa: number;
  score: number;
  remarks: string;
  image: string;
}

export interface EducationBadgeProps extends Degree {
  isSelected: boolean;
  selectBadge(): void;
}
