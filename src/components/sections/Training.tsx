"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { trainingData } from "@/constant";
import { ExperienceCard } from "../Cards";
import { nasalization } from "@/app/fonts";

export function Training() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-80px",
    amount: 0.1,
  });

  return (
    <section
      ref={ref}
      id="training"
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl px-4">
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
            Training
          </motion.h2>
          <motion.p
            className="text-sm text-muted-foreground max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Specialized training and skill development programs
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-6 top-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent"
            style={{ height: `${trainingData.length * 200}px` }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <div className="space-y-12">
            {trainingData.map((training, index) => (
              <ExperienceCard
                key={`${training.title}-${index}`}
                role={training.title}
                year={training.date}
                description={training.description}
                company={training.platform}
                technologies={[]}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
