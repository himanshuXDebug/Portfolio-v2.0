export interface SkillCategory {
  title: string;
  skills: { name: string; level: 'Advanced' | 'Intermediate' | 'Foundational' }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "C", level: "Foundational" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Spring", level: "Advanced" },
      { name: "Spring Boot", level: "Advanced" },
      { name: "Spring MVC", level: "Intermediate" },
      { name: "Hibernate / JPA", level: "Advanced" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "FastAPI", level: "Intermediate" }
    ]
  },
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Intermediate" },
      { name: "HTML5 & CSS3", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "DOM Manipulation", level: "Advanced" }
    ]
  },
  {
    title: "Databases & ORM",
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Drizzle ORM", level: "Intermediate" },
      { name: "SQLite", level: "Intermediate" }
    ]
  },
  {
    title: "Testing & Build Tools",
    skills: [
      { name: "JUnit", level: "Intermediate" },
      { name: "Mockito", level: "Intermediate" },
      { name: "Maven", level: "Advanced" }
    ]
  },
  {
    title: "Tools & Methodologies",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Postman", level: "Advanced" },
      { name: "Jira / Agile", level: "Intermediate" },
      { name: "Vercel / Railway", level: "Intermediate" }
    ]
  }
];