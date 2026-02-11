"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

interface EducationCardProps {
  custom?: number;
  degree: string;
  department: string;
  institution: string;
  grade?: string;
  durationStart?: string;
  durationEnd?: string;
  description?: string;
}

export default function EducationCard({
  custom = 0,
  degree,
  department,
  institution,
  grade,
  durationStart,
  durationEnd,
  description,
}: EducationCardProps) {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        custom={custom}
        variants={fadeUp}
        className="p-10 bg-gradient-to-br from-white/80 to-white/60 
        dark:from-zinc-800/80 dark:to-zinc-900/60
        backdrop-blur-xl m-4
        border border-white/30 dark:border-zinc-700/50
        rounded-3xl
        shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.4)]
        dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.05)]
        sm:px-6 lg:px-8 p-5"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between mb-4 gap-2">
          <div>
            <h2 className="text-xl font-bold">{degree}</h2>
            <h2 className="text-lg font-bold">{department}</h2>
          </div>
          <div className="pl-2 pr-2 bg-zinc-300 rounded-3xl dark:bg-zinc-700 border border-zinc-400 dark:border-zinc-600">
            <p className="text-sm text-zinc-800 dark:text-zinc-400">
              {durationStart} - {durationEnd}
            </p>
          </div>
        </div>
        <h3 className="text-md font-semibold text-zinc-700 dark:text-zinc-300">
          {institution}
        </h3>
        {grade && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Grade: {grade}
          </p>
        )}
        {description && (
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            {description}
          </p>
        )}
      </motion.div>
    </>
  );
}
