export interface AcademicModule {
  category: string;
  topics: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  score: string;
  description: string;
  coursework: AcademicModule[];
  achievements: string[];
}

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Graphic Era Hill University",
    duration: "2022 – 2025",
    location: "Haldwani, Uttarakhand, India",
    score: "Graduated with High Academic Standing",
    description: "In-depth computer science degree covering core software engineering, mathematical foundations, object-oriented design, relational database systems, and web technology stacks.",
    coursework: [
      {
        category: "Software & Languages",
        topics: ["Java Programming", "Object-Oriented Design (OOP)", "C / C++ Foundations", "Data Structures & Algorithms"]
      },
      {
        category: "Databases & Systems",
        topics: ["Database Management Systems (DBMS)", "Relational SQL Schema Design", "Operating Systems", "Computer Networks"]
      },
      {
        category: "Web & Engineering",
        topics: ["Full-Stack Web Development", "Software Engineering Principles", "Agile Software Life Cycle", "System Architecture"]
      }
    ],
    achievements: [
      "Specialized in Enterprise Backend & Relational Database Management Systems",
      "Built full-stack capstone projects focusing on modular architecture and clean code",
      "Actively represented university in coding competitions, workshops, and peer hackathons"
    ]
  }
];