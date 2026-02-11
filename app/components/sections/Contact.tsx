"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionTitle } from "../ui";
import { personalInfo } from "@/app/data/personal";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow, FaGithub, FaLinkedin } from "react-icons/fa6";
import { message, Button } from "antd";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    console.log("EmailJS config:", { serviceId, templateId, publicKey: publicKey ? "exists" : "missing" });

    if (!serviceId || !templateId || !publicKey) {
      message.error("EmailJS configuration is missing.");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setFormData({ name: "", email: "", message: "" });
      message.success("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS error:", error);
      message.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a question or want to work together?"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                  <MdEmail className="text-2xl text-zinc-600 dark:text-zinc-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-zinc-900 dark:text-white hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                  <FaLocationArrow className="text-2xl text-zinc-600 dark:text-zinc-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Location
                  </p>
                  <p className="text-zinc-900 dark:text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {personalInfo.social.github && (
                  <a
                    href={personalInfo.linkSocial?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <FaGithub />
                  </a>
                )}
                {personalInfo.social.linkedin && (
                  <a
                    href={personalInfo.linkSocial?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all text-zinc-900 dark:text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all text-zinc-900 dark:text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all resize-none text-zinc-900 dark:text-white"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-zinc-400 disabled:to-zinc-500 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
