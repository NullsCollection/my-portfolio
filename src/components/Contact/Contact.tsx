"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useScrollAnimation } from "@/hooks/ScrollAnimation/useScrollAnimation";
import { contactMethods } from "@/hooks/MockData/Projects/useContact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const {
    sectionVariants,
    titleVariants,
    descriptionVariants,
    cardVariants,
    viewportOptions,
  } = useScrollAnimation({
    animationType: "slide",
    exitDuration: 0.5,
    threshold: 0.1,
    playOnce: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-images fade-image-bg"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={viewportOptions}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-light"
            variants={titleVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg text-secondary max-w-2xl mx-auto"
            variants={descriptionVariants}
          >
            Have a project in mind? Let's work together to bring your ideas to
            life
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={cardVariants}>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary font-bold mb-4">
              Let's
              <span className="block mt-1 sm:mt-2 text-light">Connect</span>
            </h3>

            {/* Contact Info */}
            <div className="mb-6 space-y-2">
              <p className="text-secondary text-sm">
                Telegram: +63 960 072 3886
              </p>
              <p className="text-secondary text-sm">
                Email:{" "}
                <a
                  href="mailto:raffy7792@gmail.com"
                  className="text-primary hover:underline"
                >
                  raffy7792@gmail.com
                </a>
              </p>
            </div>

            <h4 className="text-light font-semibold mb-4">Social :</h4>

            {/* Social Media Icons */}
            <div className="flex flex-wrap justify-start mb-6 gap-3">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="bg-blue p-2 rounded-full cursor-pointer hover:bg-opacity-90 transition-all duration-300"
                  variants={cardVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={method.action}
                >
                  <Icon icon={method.icon} className="text-2xl text-dark" />
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              className="bg-light-bg-color p-6 rounded-lg"
              variants={cardVariants}
            >
              <h4 className="text-light font-semibold mb-4">
                <Icon icon="mdi:clock" className="inline mr-2" />
                Response Time
              </h4>
              <p className="text-secondary text-sm">
                I typically respond to emails within 24 hours. For urgent
                matters, please include "URGENT" in your subject line.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={cardVariants}>
            <div className="backdrop-blur-md bg-white/2 border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-light mb-8">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-light font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-light-bg-color border border-secondary border-opacity-20 rounded-lg text-light text-sm placeholder-secondary focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-light font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-light-bg-color border border-secondary border-opacity-20 rounded-lg text-light text-sm placeholder-secondary focus:outline-none focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-light font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-light-bg-color border border-secondary border-opacity-20 rounded-lg text-light text-sm placeholder-secondary focus:outline-none focus:border-primary transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-light font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-light-bg-color border border-secondary border-opacity-20 rounded-lg text-light text-sm placeholder-secondary focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg text-center ${
                      submitStatus.type === "success"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Icon
                        icon={
                          submitStatus.type === "success"
                            ? "mdi:check-circle"
                            : "mdi:alert-circle"
                        }
                        className="text-lg"
                      />
                      <span className="text-sm font-medium">
                        {submitStatus.message}
                      </span>
                    </div>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-dark font-medium py-4 px-8 rounded-lg hover:opacity-90 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Icon icon="mdi:loading" className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Icon icon="mdi:send" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
