"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { nasalization } from "@/app/fonts";
import { Card } from "../ui/card";
import { Trophy, Star } from "lucide-react";

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-80px",
    amount: 0.1,
  });

  const achievements = [
    {
      title: "HackerRank Python Bronze",
      detail: "2 Stars",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    },
  ];

  return (
    <section
      ref={ref}
      id="achievements"
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.h2
            className={`${nasalization.className} text-4xl md:text-5xl font-bold text-primary`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Achievements
          </motion.h2>
        </motion.div>

        <div className="flex justify-center">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -5 }}
              className="max-w-md w-full"
            >
              <Card
                className="p-8 backdrop-blur-xl border transition-all duration-500 shadow-xl hover:shadow-2xl flex items-center space-x-6"
                style={{
                  background: "hsl(var(--glass-bg))",
                  borderColor: "hsl(var(--glass-border))",
                }}
              >
                <div className="p-4 rounded-full bg-primary/10">
                  {ach.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-nasalization text-primary">
                    {ach.title}
                  </h3>
                  <div className="flex items-center mt-1 text-muted-foreground">
                    <Star className="w-4 h-4 mr-1 fill-yellow-500 text-yellow-500" />
                    <span>{ach.detail}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
