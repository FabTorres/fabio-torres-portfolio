export interface Project {
  title: string;
  desc: string;
  image: string;
  techs: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  fileName: string;
}

export interface TechItem {
  name: string;
  iconClass: string;
}