import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaLinux, FaFigma, FaPhp, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiExpress, SiGraphql, SiPostgresql, SiMongodb, SiMysql, SiRedis, SiPrisma, SiVercel, SiNestjs, SiSequelize, SiPostman, SiDbeaver, SiAntdesign  } from "react-icons/si";
import { TbApi, TbWorldWww, TbBrandCSharp } from "react-icons/tb";
import { SkillCategory } from "../types";

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact />, level: "Advanced" },
      { name: "Next.js", icon: <SiNextdotjs />, level: "Advanced" },
      { name: "TypeScript", icon: <SiTypescript />, level: "Advanced" },
      { name: "JavaScript", icon: <SiJavascript />, level: "Expert" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Advanced" },
      { name: "HTML/CSS", icon: <TbWorldWww />, level: "Expert" },
      { name: "Ant Design", icon: <SiAntdesign />, level: "Intermediate" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs />, level: "Advanced" },
      { name: "NestJS", icon: <SiNestjs />, level: "Advanced" },
      { name: "Express", icon: <SiExpress />, level: "Advanced" },
      { name: "PHP", icon: <FaPhp />, level: "Intermediate" },
      { name: "C#", icon: <TbBrandCSharp />, level: "Beginner" },
      { name: "Java", icon: <FaJava />, level: "Beginner" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql />, level: "Advanced" },
      { name: "MongoDB", icon: <SiMongodb />, level: "Beginner" },
      { name: "MySQL", icon: <SiMysql />, level: "Intermediate" },
      { name: "Prisma", icon: <SiPrisma />, level: "Advanced" },
      { name: "Sequelize", icon: <SiSequelize  />, level: "Intermediate" },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: <FaGitAlt />, level: "Advanced" },
      { name: "Docker", icon: <FaDocker />, level: "Intermediate" },
      { name: "AWS", icon: <FaAws />, level: "Beginner" },
      { name: "Vercel", icon: <SiVercel />, level: "Beginner" },
      { name: "Figma", icon: <FaFigma />, level: "Intermediate" },
      { name: "Postman", icon: <SiPostman />, level: "Intermediate" },
      { name: "DBeaver", icon: <SiDbeaver />, level: "Intermediate" },
    ],
  },
];
