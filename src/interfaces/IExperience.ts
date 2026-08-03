export interface IExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  skills?: string[];
  type: 'work' | 'leadership' | 'education';
}
