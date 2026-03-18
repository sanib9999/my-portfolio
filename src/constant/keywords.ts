const names = [
  "Mohd Sanib",
  "Mohd Sanib Portfolio",
  "sanib9999",
  "Mohd Sanib LPU",
  "Mohd Sanib Phagwara",
];

const roles = [
  "Software Developer",
  "Full Stack Developer",
  "React.js Developer",
  "Frontend Engineer",
  "Backend Developer",
  "C++ Developer",
  "Student Developer",
  "Problem Solver",
];

const skills = [
  "C",
  "C++",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Kali Linux",
  "VMware",
  "Ubuntu",
  "Oracle",
  "Wireshark",
  "MySQL",
  "OOPs",
  "DSA",
];

const projects = [
  "Online Education Website for Nomadic Community",
  "E-Learning Platform",
];

const locations = [
  "India",
  "Phagwara",
  "Punjab",
  "LPU",
  "Remote",
  "Worldwide",
];

const longTail = [
  "Hire Next.js Developer in India",
  "Best Full Stack Developer Portfolio",
  "React Developer for startup",
  "Software Engineer Intern opportunities",
  "Next.js 15 Portfolio Template",
  "Generative AI Projects Showcase",
  "Frontend Developer with AI skills",
  "Freelance Web Developer India",
  "Collaborate on Open Source",
  "Technical Writer and Developer",
  "Hackathon Winner Portfolio"
];

export const Keywords = [
  ...names,
  ...roles,
  ...skills,
  ...projects,
  ...locations,
  ...longTail,

  ...roles.flatMap((role) => locations.map((loc) => `${role} in ${loc}`)),
  ...skills.map((skill) => `${skill} Developer`),
  ...skills.map((skill) => `${skill} Expert`),
  ...skills.map((skill) => `Hire ${skill} Developer`),
];
