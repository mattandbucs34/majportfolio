export interface IProjectType {
  projectName: string;
  imagePath: string;
  alt: string;
  href: string;
  githubUrl?: string;
  description?: string;
  tags?: string[];
  featured?: boolean;
  featuredOrder?: number;
}
