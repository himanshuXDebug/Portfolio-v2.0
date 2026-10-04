export interface JourneyMilestone {
  date: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
  milestones: JourneyMilestone[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Cognizant",
    role: "Analyst Trainee",
    duration: "Apr 2026 – Present",
    location: "Gurugram, Haryana, India",
    type: "Full-time",
    responsibilities: [
      "Engineered robust enterprise backend microservices using Java 17 and Spring Boot, leveraging Hibernate/JPA and MySQL for data persistence.",
      "Successfully progressed through intensive Cognizant domain training and interim evaluations, transitioning to production project delivery in Gurugram.",
      "Developed OpenAPI-compliant REST API endpoints with high test coverage using JUnit 5 and Mockito."
    ],
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "REST APIs", "JUnit", "Mockito", "Maven", "Git"],
    milestones: [
      {
        date: "28 Apr 2026",
        title: "Joined Cognizant",
        description: "Officially onboarded as Analyst Trainee in Coimbatore, Tamil Nadu."
      },
      {
        date: "05 May 2026",
        title: "Domain Allocated",
        description: "Assigned to the Enterprise Java & Backend Engineering domain."
      },
      {
        date: "30 Jun 2026",
        title: "First Interim Evaluation",
        description: "Successfully cleared the first milestone evaluation assessing core Java and backend capabilities."
      },
      {
        date: "19 Aug 2026",
        title: "Final Evaluation Cleared",
        description: "Graduated top-tier in final technical and architectural evaluation."
      },
      {
        date: "31 Aug 2026",
        title: "Relocated to Gurugram Project",
        description: "Onboarded onto active client operations and backend engineering in Gurugram, Haryana."
      }
    ]
  }
];