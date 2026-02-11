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

interface ContactCardProps {
  icon: ReactNode;
  label: string;
  value?: string;
  href?: string;
  custom?: number;
}

export default function ContactCard({ icon, label, value, href, custom = 0 }: ContactCardProps) {
  const content = (
    <motion.div
      custom={custom}
      variants={fadeUp}
      whileHover={{ scale: 1.02, x: 4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-row items-center gap-4 bg-zinc-200 dark:bg-zinc-800/90 p-4 rounded-lg w-full cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-900 transition-colors"
    >
      <div className="pl-2 pt-2 pr-2 pb-1 bg-zinc-700 rounded-lg dark:bg-zinc-200">
        {icon}
      </div>
      <div>
        <h1>{label}</h1>
        <h1 className="font-bold">{value ?? ""}</h1>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="w-full">
        {content}
      </a>
    );
  }

  return content;
}
