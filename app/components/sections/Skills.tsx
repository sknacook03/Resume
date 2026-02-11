"use client";

import { SectionTitle } from "../ui";
import { skills } from "@/app/data/skills";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid gap-8">
          {skills.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    custom={i}
                    variants={fadeUp}
                  >
                    {skill.icon && (
                      <span className="text-xl flex items-center">
                        {skill.icon}
                      </span>
                    )}
                    <span className="text-zinc-700 dark:text-zinc-300">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="ml-2 text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-700 rounded-full text-zinc-500 dark:text-zinc-400">
                        {skill.level}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
