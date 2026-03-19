import React from "react";

import {
  FaCss3,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
  FaSquareJs,
  FaNodeJs,
  FaUbuntu,
  FaUserGroup,
  FaLightbulb,
  FaShieldHalved,
} from "react-icons/fa6";

import {
  SiMysql,
  SiKalilinux,
  SiVmware,
  SiWireshark,
  SiCplusplus,
  SiC,
} from "react-icons/si";

import { GiBrain } from "react-icons/gi";
import { GrOracle } from "react-icons/gr";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Languages",
    data: [
      { title: "C", logoComponent: SiC, color: "#A8B9CC" },
      { title: "C++", logoComponent: SiCplusplus, color: "#00599C" },
      { title: "Java", logoComponent: FaJava, color: "#007396" },
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
      { title: "HTML5", logoComponent: FaHtml5, color: "#E34F26" },
      { title: "CSS3", logoComponent: FaCss3, color: "#1572B6" },
      { title: "JavaScript", logoComponent: FaSquareJs, color: "#F7DF1E" },
      { title: "React.js", logoComponent: FaReact, color: "#61DAFB" },
      { title: "Node.js", logoComponent: FaNodeJs, color: "#339933" },
    ],
  },
  {
    title: "Tools & Platforms",
    data: [
      { title: "Kali Linux", logoComponent: SiKalilinux, color: "#557C94" },
      { title: "VMware", logoComponent: SiVmware, color: "#607078" },
      { title: "Ubuntu", logoComponent: FaUbuntu, color: "#E95420" },
      { title: "Oracle", logoComponent: GrOracle, color: "#F80000" },
      { title: "Wireshark", logoComponent: SiWireshark, color: "#1679A7" },
      { title: "MySQL", logoComponent: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Soft Skills",
    data: [
      { title: "Problem-Solving", logoComponent: GiBrain, color: "#FFD700" },
      { title: "Team Player", logoComponent: FaUserGroup, color: "#1E90FF" },
      { title: "Discipline", logoComponent: FaShieldHalved, color: "#32CD32" },
      { title: "Adaptability", logoComponent: FaLightbulb, color: "#FFA500" },
    ],
  },
];
