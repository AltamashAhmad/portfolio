import { 
  FaReact, FaNodeJs, FaJava, FaServer, FaGithub, FaDocker, FaAws, FaJs, FaPython
} from 'react-icons/fa';
import { 
  SiSpringboot, SiMysql, SiMongodb, SiRedis, 
  SiTailwindcss, SiExpress, SiCplusplus, SiTypescript,
  SiMantine, SiSwagger, SiNestjs, SiPostgresql, 
  SiFirebase, SiPrisma, SiJest
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BsGearFill } from 'react-icons/bs';

export const categories = [
  { id: 'all', name: 'All Skills' },
  { id: 'languages', name: 'Languages' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'database', name: 'Database' },
  { id: 'devops', name: 'DevOps & Tools' }
];

export const coreSkillNames = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "NestJS", 
  "PostgreSQL", "MongoDB", "Tailwind CSS", "AWS"
];

export const skillsData = [
  { name: "JavaScript", level: 90, category: "languages", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", level: 85, category: "languages", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Python", level: 80, category: "languages", icon: <FaPython className="text-blue-500" /> },
  { name: "Java", level: 85, category: "languages", icon: <FaJava className="text-red-500" /> },
  { name: "C++", level: 80, category: "languages", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "React", level: 90, category: "frontend", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", level: 85, category: "frontend", icon: <TbBrandNextjs className="text-black" /> },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Mantine UI", level: 85, category: "frontend", icon: <SiMantine className="text-blue-600" /> },
  { name: "Node.js", level: 90, category: "backend", icon: <FaNodeJs className="text-green-600" /> },
  { name: "NestJS", level: 85, category: "backend", icon: <SiNestjs className="text-red-600" /> },
  { name: "Express.js", level: 85, category: "backend", icon: <SiExpress className="text-gray-600" /> },
  { name: "Spring Boot", level: 75, category: "backend", icon: <SiSpringboot className="text-green-500" /> },
  { name: "REST APIs", level: 90, category: "backend", icon: <FaServer className="text-gray-600" /> },
  { name: "PostgreSQL", level: 85, category: "database", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "MongoDB", level: 85, category: "database", icon: <SiMongodb className="text-green-500" /> },
  { name: "Redis", level: 80, category: "database", icon: <SiRedis className="text-red-600" /> },
  { name: "MySQL", level: 80, category: "database", icon: <SiMysql className="text-blue-800" /> },
  { name: "Prisma ORM", level: 85, category: "database", icon: <SiPrisma className="text-blue-800" /> },
  { name: "Git & GitHub", level: 90, category: "devops", icon: <FaGithub className="text-gray-800" /> },
  { name: "Docker", level: 75, category: "devops", icon: <FaDocker className="text-blue-500" /> },
  { name: "AWS", level: 75, category: "devops", icon: <FaAws className="text-orange-500" /> },
  { name: "CI/CD", level: 80, category: "devops", icon: <BsGearFill className="text-blue-500" /> },
  { name: "Firebase", level: 80, category: "devops", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Jest", level: 75, category: "devops", icon: <SiJest className="text-red-700" /> },
  { name: "Swagger", level: 80, category: "devops", icon: <SiSwagger className="text-green-600" /> }
];
