import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "HR & DOC Management System",
    description:
      "Developed a comprehensive digital transformation suite for municipal operations.",
    topicFirst: "Human Resource Management",
    descriptionTopicFirst: "1.Dashboard & Analytics: Developed real-time dashboards to visualize municipal statistics and overall personnel overview. 2.Employee Self-Service (ESS): Built features for employees to manage personal profiles, family data, and educational backgrounds with full CRUD (Create, Read, Update, Delete) capabilities. 3.Leave Management System: Implemented an interactive work calendar for leave requests, real-time tracking of remaining leave entitlements, and automated status updates. 4.Welfare & Benefits: Created a module for employees to submit and track welfare reimbursement requests based on their specific entitlements. 5.Payroll & Org Structure: Engineered back-end logic for payroll processing and organizational hierarchy management. ",
    topicSecond: "Document Management",
    descriptionTopicSecond: "1.Task Inbox & Monitoring: Developed a centralized interface for users to manage pending actions, including document signing, reviews, and acknowledgments. 2.Automated Routing & Workflows: Built an intelligent system for document circulation (routing) and official endorsements to ensure efficient correspondence. 3.Status Tracking: Implemented real-time tracking of document history and copies to ensure transparency in official workflows.",
    image: "/hr.jpg",
    technologies: ["Next.js","NestJS", "TypeScript", "Tailwind", "Sequelize", "PostgreSQL", "Ant Design", "Redux Toolkit"],
    featured: true,
  },
  {
    id: "2",
    title: "Qualification Verification System",
    description:
      "A secure full-stack web application for RMUTI Nakhon Ratchasima to digitize and verify student and alumni qualifications.",
    topicFirst: "Key Features",
    descriptionTopicFirst: "1.Secure Authentication: Implemented a multi-role (Admin, Officer, Agency) JWT-based authentication system with secure cookie management and password recovery via Nodemailer. 2.Verification Engine: Developed an efficient search and filtering engine to verify graduate status from academic year 2010 onwards, utilizing Prisma ORM for optimized database queries. 3.Data Analytics Dashboard: Engineered an interactive dashboard using Chart.js to visualize verification trends and agency activities. 4.Reporting & Exports: Built features for bulk student data import via Excel and automated PDF/Excel report generation with Thai font (Sarabun) support. 5.Responsive Design: Ensured a seamless user experience across devices with Tailwind CSS.",
    image: "/rmuti.jpg",
    technologies: ["React", "Node.js", "Prisma", "Express","JWT", "Chart.js"],
    githubUrl: "https://github.com/sknacook03/Qualification-Verification-System",
    liveUrl: "https://cpermuti.com/eduverify/",
    featured: true,
  },
];
