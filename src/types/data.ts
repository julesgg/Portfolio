export interface NavbarLink {
  label: string;
  path: string;
}

export interface Navbar {
  links: NavbarLink[];
}

export interface HomeSections {
  banner: boolean;
  experience: boolean;
  project: boolean;
  education: boolean;
  testimonial: boolean;
}

export interface Home {
  sections: HomeSections;
}

type Visual = {
  navbar: Navbar;
  home: Home;
};

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  bio: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  twitter: string;
  github: string;
  website: string;
}


export interface Project {
  title: string;
  description: string;
  technologies: string[];
  live_url: string;
  code_repo_url: string;
  cover: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  companyWebsite: string;
  role: string;
  startDate: string;
  endDate: string;
  keyResponsibilities: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  description: string;
  startDate: string;
  endDate: string;
}


export interface Data {
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  projects: Project[];
  workExperience: WorkExperience[];
  education: Education[];
  visual: Visual;
}
