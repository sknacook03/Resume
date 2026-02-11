"use client";

import { Button } from "antd";
import Image from "next/image";
import { personalInfo } from "@/app/data/personal";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import ContactCard from "@/app/components/ui/ContactCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-25 sm:pt-2 m-2"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 w-full 
        bg-gradient-to-br from-white/80 to-white/60 
        dark:from-zinc-800/80 dark:to-zinc-900/60
        backdrop-blur-xl 
        border border-white/30 dark:border-zinc-700/50
        rounded-3xl
        shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.4)]
        dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.05)]
        sm:px-6 lg:px-8 p-5
        hover:shadow-[0_12px_48px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.4)]
        dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.5),0_4px_12px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.08)]
        transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row items-start justify-start gap-10">
          {/* Avatar + Info */}
          <motion.div
            custom={0}
            variants={fadeUp}
            className="flex flex-col items-start justify-start gap-8 w-full md:w-1/2"
          >
            <div className="flex flex-row gap-8 w-full">
              <motion.div
                className="relative min-w-24 min-h-30 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.08, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {personalInfo.avatar ? (
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl bg-zinc-200 dark:bg-zinc-700">
                    👨‍💻
                  </div>
                )}
              </motion.div>
              {/* CTA Buttons */}
              <div className="flex flex-col items-start justify-center w-full">
                <div>
                  <motion.h1
                    custom={1}
                    variants={fadeUp}
                    className="text-md sm:text-lg uppercase text-zinc-900 dark:text-white"
                  >
                    🟢 AVAILABLE FOR HIRE
                  </motion.h1>
                  <motion.h1
                    custom={2}
                    variants={fadeUp}
                    className="text-lg sm:text-2xl uppercase font-bold text-zinc-900 dark:text-white"
                  >
                    {personalInfo.name}
                  </motion.h1>
                </div>
                <motion.div
                  custom={3}
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row gap-4 mt-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  > 
                    <a href="/Resume_Phongwit.pdf" download>
                      <Button
                        type="default"
                        icon={<DownloadOutlined />}
                        className="!bg-transparent !border-zinc-300 dark:!border-zinc-600 !text-zinc-900 dark:!text-white hover:!bg-zinc-100 dark:hover:!bg-zinc-700/50 !backdrop-blur-sm"
                      >
                        Resume
                      </Button>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-10">
              <motion.div
                custom={4}
                variants={fadeUp}
                className="flex flex-col gap-4 w-full"
              >
                <h1 className="font-black uppercase">About Me</h1>
                <h1>{personalInfo.bio}</h1>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            custom={5}
            variants={fadeUp}
            className="flex flex-col gap-4 w-full md:w-1/2"
          >
            <h1 className="font-black uppercase">Contact Information</h1>
            <div className="flex flex-col items-start gap-4">
              <ContactCard
                custom={6}
                icon={
                  <GithubOutlined className="text-2xl !text-white dark:!text-black" />
                }
                label="Github"
                value={personalInfo.social.github}
                href={personalInfo.linkSocial?.github}
              />
              <ContactCard
                custom={7}
                icon={
                  <LinkedinOutlined className="text-2xl !text-white dark:!text-black" />
                }
                label="LinkedIn"
                value={personalInfo.social.linkedin}
                href={personalInfo.linkSocial?.linkedin}
              />
              <ContactCard
                custom={8}
                icon={
                  <MailOutlined className="text-2xl !text-white dark:!text-black" />
                }
                label="Gmail"
                value={personalInfo.social.gmail}
                href={personalInfo.linkSocial?.gmail}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
