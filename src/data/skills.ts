export interface SkillType {
  name: string;
  level: number;
}

export interface SkillCategoryType {
  title: string;
  icon: string;
  skills: SkillType[];
}
export const skillsData: SkillCategoryType[] = [
  {
    title: 'Frontend Development',
    icon: '🎨',
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 90 },
      { name: 'Angular',level:75}
    ],
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB',level: 75}
    ],
  }
];