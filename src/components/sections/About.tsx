"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { nasalization } from "@/app/fonts";
import { selfData } from "@/constant";
import Link from "next/link";
import { LuMapPinned } from "react-icons/lu";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-60px",
    amount: 0.2,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-x-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              className="relative group w-full"
              whileHover={{
                scale: 1.02,
                y: -4,
                transition: {
                  duration: 0.3,
                  type: "spring" as const,
                  stiffness: 400,
                  damping: 25,
                },
              }}
            >
              <div
                className="w-full max-w-md h-80 rounded-2xl overflow-hidden relative  border-2 group/image"
                style={{ borderColor: "hsl(var(--glass-border))" }}
              >
                <motion.div
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/Mohd.jpg"
                    alt="Profile Picture"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover transition-all duration-700 ease-in-out filter grayscale group-hover/image:grayscale-0 group-hover/image:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover/image:opacity-100 transition-opacity duration-700" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut",
              }}
            >
              <h2
                className={`${nasalization.className} text-4xl md:text-5xl font-bold relative text-white`}
              >
                About Me
              </h2>
            </motion.div>

            <div className="space-y-6">
              {selfData.about.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-white italic leading-relaxed font-mono"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                ease: "easeOut",
              }}
            >
              <div className="flex items-center space-x-3 group cursor-default">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <LuMapPinned className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className={`text-xs text-muted-foreground uppercase tracking-wider ${nasalization.className}`}>
                    Location
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {selfData.current_location.city}, {selfData.current_location.state}, {selfData.current_location.country}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
