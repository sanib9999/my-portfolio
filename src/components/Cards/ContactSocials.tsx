import Link from "next/link";
import { IconType } from "react-icons";
import { motion } from "motion/react";

import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa6";

import { selfData } from "@/constant";

export const ContactSocials = () => {
  const socialLinks = [
    {
      Icon: FaGithub,
      link: `https://github.com/${selfData.socials_username.github}`,
      initial: -10,
    },
    {
      Icon: FaLinkedinIn,
      link: `https://www.linkedin.com/in/${selfData.socials_username.linkedin}`,
      initial: 10,
    },
    {
      Icon: FaEnvelope,
      link: `mailto:${selfData.email}`,
      initial: -10,
    },
    {
      Icon: FaPhone,
      link: `tel:${selfData.mobile}`,
      initial: 10,
    },
  ];

  return (
    <ul className="flex mt-12 space-x-4">
      {socialLinks.map((social, index) => (
        <ContactSocialItem
          key={index}
          Icon={social.Icon}
          link={social.link}
          initial={social.initial}
        />
      ))}
    </ul>
  );
};

const ContactSocialItem = ({
  Icon,
  link,
  initial,
}: {
  Icon: IconType;
  link: string;
  initial: number;
}) => {
  return (
    <motion.li
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: initial }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      whileHover={{
        scale: 1.1,
      }}
      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground h-12 w-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-lg hover:shadow-primary/20"
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <Icon className="w-6 h-6" />
      </Link>
    </motion.li>
  );
};
