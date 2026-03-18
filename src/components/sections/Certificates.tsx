"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { certificatesData } from "@/constant";
import { CertificateCard } from "../Cards";
import { nasalization } from "@/app/fonts";

export function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-80px",
    amount: 0.1,
  });

  return (
    <section
      ref={ref}
      id="certificates"
      className="py-24 max-w-7xl mx-auto relative overflow-hidden"
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
            Certificates
          </motion.h2>
          <motion.p
            className="text-sm text-muted-foreground max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Professional certifications and recognitions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificatesData.map((cert, index) => (
            <CertificateCard
              key={`${cert.title}-${index}`}
              title={cert.title}
              platform={cert.platform}
              date={cert.date}
              url={cert.url}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
