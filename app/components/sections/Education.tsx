"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui";
import EducationCard from "../ui/EducationCard";

const educationData = [
  {
    degree: "Bachelor of Engineering",
    department: "Computer Engineering",
    institution: "Rajamangala University of Technology Isan, Nakhon Ratchasima",
    grade: "3.71 GPA",
    durationStart: "2021",
    durationEnd: "2025",
  },
  {
    degree: "Vocational Certificate",
    department: "Computer Technology",
    institution: "Ubon Ratchathani Technical College",
    grade: "3.81 GPA",
    durationStart: "2019",
    durationEnd: "2021",
  },
  
];

export default function Education() {
  return (
    <section id="education" className="py-20 mt-16 sm:mt-0 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="EDUCATION JOURNEY" />
        <div className="relative mt-16">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-zinc-600 to-transparent dark:via-zinc-300 hidden md:block" />

          <div className="flex flex-col gap-5">
            {educationData.map((edu, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center md:gap-8">
                  <div className="hidden md:block w-1/2">
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <EducationCard {...edu} />
                      </motion.div>
                    )}
                  </div>

                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-400 dark:border-zinc-500 items-center justify-center">
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                      {index + 1}
                    </span>
                  </div>

                  <div className="hidden md:block w-1/2">
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <EducationCard {...edu} />
                      </motion.div>
                    )}
                  </div>


                  <div className="md:hidden w-full">
                    <EducationCard custom={index} {...edu} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
