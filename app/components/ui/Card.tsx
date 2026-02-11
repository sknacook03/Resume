"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

function parseNumberedList(text: string): string[] {
  return text
    .split(/\d+\./)
    .map((item) => item.trim())
    .filter(Boolean);
}

interface CardProps {
  title: string;
  description: string;
  topicFirst?: string;
  descriptionTopicFirst?: string;
  topicSecond?: string;
  descriptionTopicSecond?: string;
  image?: string;
  tags?: string[];
  href?: string;
  githubUrl?: string;
  expanded?: boolean;
  onToggle?: () => void;
  children?: ReactNode;
}

export default function Card({
  title,
  description,
  topicFirst,
  descriptionTopicFirst,
  topicSecond,
  descriptionTopicSecond,
  image,
  tags,
  href,
  githubUrl,
  expanded = false,
  onToggle,
  children,
}: CardProps) {
  const hasTopics = !!(topicFirst || topicSecond);

  const content = (
    <div
      className="group bg-gradient-to-br from-white/80 to-white/60 
        dark:from-zinc-800/80 dark:to-zinc-900/60
        backdrop-blur-xl
        border border-white/30 dark:border-zinc-700/50
        shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.4)]
        dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer"
      onClick={() => hasTopics && onToggle?.()}
    >
      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className={`text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2 ${expanded ? "line-clamp-none" : ""}`}>
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className={`flex flex-wrap gap-2 ${!expanded ? "max-h-10 overflow-hidden" : ""}`}>
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 mb-3 text-sm bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {hasTopics && (
          <div className="flex items-center justify-center mt-2">
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-zinc-400" />
            </motion.div>
          </div>
        )}

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {topicFirst && (
                <div>
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mt-4">
                    {topicFirst}
                  </h4>
                  {descriptionTopicFirst && (
                    <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 mb-4 space-y-1">
                      {parseNumberedList(descriptionTopicFirst).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              {topicSecond && (
                <div>
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mt-4">
                    {topicSecond}
                  </h4>
                  {descriptionTopicSecond && (
                    <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 mb-4 space-y-1">
                      {parseNumberedList(descriptionTopicSecond).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              {(href || githubUrl) && (
              <div className="flex gap-4 justify-end">
                {href && (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Live <FaExternalLinkAlt className="inline ml-1" /></a>
                )}
                {githubUrl && (
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">GitHub <FaExternalLinkAlt className="inline ml-1" /></a>
                )}
              </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {children}
      </div>
    </div>
  );

  // if (href) {
  //   return (
  //     <Link href={href} target="_blank" rel="noopener noreferrer">
  //       {content}
  //     </Link>
  //   );
  // }

  return content;
}
