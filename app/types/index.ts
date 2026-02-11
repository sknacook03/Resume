export interface PersonalInfo {
  name: string;
  title: string;
  shortBio: string;
  bio: string;
  email: string;
  location: string;
  experience: string;
  availability: string;
  avatar?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
    gmail?: string;
  };
  linkSocial?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
    gmail?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  topicFirst?: string;
  descriptionTopicFirst?: string;
  topicSecond?: string;
  descriptionTopicSecond?: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon?: React.ReactNode;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}
