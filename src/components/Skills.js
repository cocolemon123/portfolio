import React from 'react';
import { 
  FaHtml5, FaJs, FaReact, FaPhp, FaNodeJs, FaJava, 
  FaDatabase, FaAws, FaMobile, FaGitAlt, FaGithub, FaFigma,
  FaPalette, FaMicrosoft
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiFirebase,
  SiFlutter, SiCanva, SiBlender, SiAdobephotoshop,
  SiAdobeillustrator
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      icon: <FaPalette className="text-4xl mb-2 text-[#B7990D]" />,
      skills: [
        { name: "HTML/CSS", icon: <FaHtml5 />, level: "Basic", description: "Building and styling responsive web pages" },
        { name: "JavaScript", icon: <FaJs />, level: "Basic", description: "Creating dynamic web applications" },
        { name: "React.js", icon: <FaReact />, level: "Basic", description: "Building user interfaces with components" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Basic", description: "Utility-first styling" },
        { name: "Responsive Design", icon: <FaMobile />, level: "Basic", description: "Cross-device compatibility" }
      ]
    },
    {
      title: "Back-End Development",
      icon: <FaNodeJs className="text-4xl mb-2 text-[#B7990D]" />,
      skills: [
        { name: "PHP", icon: <FaPhp />, level: "Basic", description: "Server-side scripting" },
        { name: "Node.js", icon: <FaNodeJs />, level: "Basic", description: "Back-end services" },
        { name: "Java", icon: <FaJava />, level: "Basic", description: "Desktop and web applications" },
        { name: "REST APIs", icon: <FaDatabase />, level: "Basic", description: "API development and integration" }
      ]
    },
    {
      title: "Database Management",
      icon: <FaDatabase className="text-4xl mb-2 text-[#B7990D]" />,
      skills: [
        { name: "MySQL", icon: <FaDatabase />, level: "Basic", description: "Relational database management" },
        { name: "SQL Server", icon: <FaDatabase />, level: "Basic", description: "SQL queries and data management" },
        { name: "MongoDB", icon: <SiMongodb />, level: "Basic", description: "NoSQL database operations" },
        { name: "Firebase", icon: <SiFirebase />, level: "Basic", description: "Real-time data and authentication" }
      ]
    },
    {      title: "Cloud & Deployment",
      icon: <FaAws className="text-4xl mb-2 text-[#B7990D]" />,
      skills: [
        { name: "Amazon S3", icon: <FaAws />, level: "Basic", description: "Cloud storage solutions" }
      ]
    },
    {
      title: "Mobile Development",
      icon: <FaMobile className="text-4xl mb-2 text-[#B7990D]" />,
      skills: [
        { name: "Flutter", icon: <SiFlutter />, level: "Basic", description: "Cross-platform mobile development" }
      ]
    },
    {
      title: "Version Control",
      icon: <FaGitAlt className="text-4xl mb-2 text-[#B7990D]" />,
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: "Basic", description: "Version control" },
        { name: "GitHub", icon: <FaGithub />, level: "Basic", description: "Collaborative development" }
      ]
    },
    {
      title: "Design & UX/UI",
      icon: <FaPalette className="text-4xl mb-2 text-[#B7990D]" />,
      skills: [
        { name: "Canva", icon: <SiCanva />, level: "Basic", description: "Digital design and social media" },
        { name: "Figma", icon: <FaFigma />, level: "Basic", description: "UI/UX design and prototyping" },
        { name: "Blender", icon: <SiBlender />, level: "Basic", description: "3D modeling and animation" },
        { name: "Photoshop", icon: <SiAdobephotoshop />, level: "Basic", description: "Image editing" },
        { name: "Illustrator", icon: <SiAdobeillustrator />, level: "Basic", description: "Vector graphics" }
      ]
    },
    {
      title: "Office Tools",
      icon: <FaMicrosoft className="text-4xl mb-2 text-[#B7990D]" />,
      skills: [
        { name: "Word", icon: <FaMicrosoft />, level: "Proficient", description: "Document creation" },
        { name: "Excel", icon: <FaMicrosoft />, level: "Basic", description: "Data analysis and organization" },
        { name: "Publisher", icon: <FaMicrosoft />, level: "Basic", description: "Print material design" },
        { name: "PowerPoint", icon: <FaMicrosoft />, level: "Basic", description: "Presentation creation" }
      ]
    }
  ];

  return (
    <section id="skills" className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24">
      <div className="max-w-4xl w-full">
        <h2 className="text-[#F2F4CB] text-5xl font-light mb-12">
          my <span className="font-bold">skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#110B11]/50 rounded-xl p-6 border border-[#B7990D]/20">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-[#F2F4CB] text-2xl font-bold ml-3">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center group">
                    <div className="text-[#B7990D] text-xl mr-3 transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <div>
                      <div className="text-[#F2F4CB]">{skill.name}</div>
                      <div className="text-gray-400 text-sm">{skill.description}</div>
                    </div>
                    <div className="ml-auto">
                      <span className="text-[#B7990D] text-sm">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-8 bg-[#110B11]/50 rounded-xl p-6 border border-[#B7990D]/20">
          <h3 className="text-[#F2F4CB] text-2xl font-bold mb-6">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { skill: "Problem-Solving", description: "Strong ability to troubleshoot issues and find solutions" },
              { skill: "Communication", description: "Explaining technical concepts effectively" },
              { skill: "Collaboration", description: "Working effectively in team environments" },
              { skill: "Adaptability", description: "Quick to learn new tools and technologies" }
            ].map((skill, index) => (
              <div key={index} className="bg-[#B7990D]/10 rounded-lg p-4">
                <h4 className="text-[#F2F4CB] font-semibold mb-2">{skill.skill}</h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
