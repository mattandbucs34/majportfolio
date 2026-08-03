export interface ISkillGroup {
  category: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}
