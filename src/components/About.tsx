import { Code, Server, Database, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function About() {
  const highlights = [
    {
      icon: <Server size={20} className="text-[#C2410C] dark:text-[#F97316]" />,
      title: "Backend Focus",
      desc: "Robust Java, Spring Boot & RESTful APIs"
    },
    {
      icon: <Code size={20} className="text-[#C2410C] dark:text-[#F97316]" />,
      title: "Frontend Development",
      desc: "Clean JavaScript, React.js, Next.js & Tailwind CSS UIs"
    },
    {
      icon: <Database size={20} className="text-[#C2410C] dark:text-[#F97316]" />,
      title: "Data & ORM",
      desc: "MySQL, PostgreSQL, Drizzle & Hibernate"
    },
    {
      icon: <Sparkles size={20} className="text-[#C2410C] dark:text-[#F97316]" />,
      title: "AI Integration",
      desc: "Connecting Gemini API for intelligent tools"
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-[#E5E0D8] dark:border-[#262626]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Engineering enterprise backend services and AI-driven web apps"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4 text-base text-stone-600 dark:text-stone-400 leading-relaxed">
            <p>
              I am a software developer with a Bachelor of Computer Applications (BCA) degree from Graphic Era Hill University and hands-on experience building enterprise Java backends and interactive web applications.
            </p>
            <p>
              Currently working as an Analyst Trainee at Cognizant in Gurugram (after completing initial engineering training in Coimbatore), I specialize in building scalable REST APIs, relational database models, and modern frontend tools.
            </p>
            <p>
              Outside of enterprise work, I build open-source tools like node visual editors, AI cold email generators, and smart interview simulators.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl border border-[#E5E0D8] dark:border-[#262626] bg-[#F2EFE9] dark:bg-[#161616] flex flex-col gap-2"
              >
                <div>{item.icon}</div>
                <h3 className="font-semibold text-sm text-[#1C1917] dark:text-[#EDEDED]">{item.title}</h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}