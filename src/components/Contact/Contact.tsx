"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useExitAnimation } from "@/hooks/ScrollAnimation/useExitAnimation";
import { BorderBeam } from "@/components/magicui/border-beam";

interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  action: () => void;
}

const contactMethods: ContactMethod[] = [
  {
    icon: "mdi:email",
    title: "Email",
    description: "raffy7792@gmail.com",
    action: () => window.open("mailto:raffy7792@gmail.com", "_blank"),
  },
  {
    icon: "mdi:linkedin",
    title: "LinkedIn",
    description: "Connect with me",
    action: () => window.open("https://linkedin.com/in/yourprofile", "_blank"),
  },
  {
    icon: "mdi:github",
    title: "GitHub",
    description: "Check out my code",
    action: () => window.open("https://github.com/yourusername", "_blank"),
  },
  {
    icon: "mdi:phone",
    title: "Phone",
    description: "Available on request",
    action: () => window.open("mailto:raffy7792@gmail.com?subject=Phone Number Request", "_blank"),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const {
    sectionVariants,
    titleVariants,
    descriptionVariants,
    cardVariants,
    viewportOptions,
  } = useExitAnimation({ exitDuration: 0.5, threshold: 0.1, playOnce: false });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-dark"
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
            Have a project in mind? Let's work together to bring your ideas to life
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={cardVariants}>
            <h3 className="text-2xl font-bold text-light mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-light-bg-color rounded-lg cursor-pointer hover:bg-opacity-80 transition-all duration-300 relative overflow-hidden"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  onClick={method.action}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  {hoveredCard === index && (
                    <BorderBeam
                      size={60}
                      duration={3}
                      colorFrom="#ffaa40"
                      colorTo="#9c40ff"
                      delay={0}
                    />
                  )}
                  <div className="bg-primary p-3 rounded-full relative z-10">
                    <Icon icon={method.icon} className="text-2xl text-dark" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-light font-semibold">{method.title}</h4>
                    <p className="text-secondary text-sm">{method.description}</p>
                  </div>
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
                I typically respond to emails within 24 hours. For urgent matters, 
                please include "URGENT" in your subject line.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={cardVariants}>
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
                    className="w-full px-4 py-3 bg-light-bg-color border border-secondary border-opacity-20 rounded-lg text-light placeholder-secondary focus:outline-none focus:border-primary transition-colors"
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
                    className="w-full px-4 py-3 bg-light-bg-color border border-secondary border-opacity-20 rounded-lg text-light placeholder-secondary focus:outline-none focus:border-primary transition-colors"
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
                  className="w-full px-4 py-3 bg-light-bg-color border border-secondary border-opacity-20 rounded-lg text-light placeholder-secondary focus:outline-none focus:border-primary transition-colors"
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
                  className="w-full px-4 py-3 bg-light-bg-color border border-secondary border-opacity-20 rounded-lg text-light placeholder-secondary focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}