import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ExternalLink, Award, Calendar, Building2 } from "lucide-react";

interface CertificateCardProps {
  title: string;
  platform: string;
  date: string;
  url: string;
  index?: number;
}

export const CertificateCard: FC<CertificateCardProps> = ({
  title,
  platform,
  date,
  url,
  index = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-50px",
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      <Card
        className="h-full relative overflow-hidden backdrop-blur-xl border transition-all duration-500 shadow-xl hover:shadow-2xl group-hover:shadow-primary/10"
        style={{
          background: "hsl(var(--glass-bg))",
          borderColor: "hsl(var(--glass-border))",
        }}
      >
        <div className="p-6 flex flex-col h-full relative z-10">
          <div className="mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold font-nasalization text-primary mb-2 line-clamp-2">
              {title}
            </h3>
          </div>

          <div className="space-y-3 mb-6 flex-grow">
            <div className="flex items-center text-muted-foreground text-sm">
              <Building2 className="w-4 h-4 mr-2 text-secondary" />
              <span>{platform}</span>
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar className="w-4 h-4 mr-2 text-secondary" />
              <span>{date}</span>
            </div>
          </div>

          <Button
            asChild
            variant="outline"
            className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-primary/20"
          >
            <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              View Certificate
              <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl" />
      </Card>
    </motion.div>
  );
};
