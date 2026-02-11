"use client";

import { useState } from "react";
import { SectionTitle, Card } from "../ui";
import { projects } from "@/app/data/projects";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Projects"
          subtitle="Some of my recent work"
        />

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              topicFirst={project.topicFirst}
              descriptionTopicFirst={project.descriptionTopicFirst}
              topicSecond={project.topicSecond}
              descriptionTopicSecond={project.descriptionTopicSecond}
              image={project.image}
              tags={project.technologies}
              href={project.liveUrl}
              githubUrl={project.githubUrl}
              expanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
