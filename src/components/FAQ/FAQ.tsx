"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useExitAnimation } from "@/hooks/ScrollAnimation/useExitAnimation";
import { BorderBeam } from "@/components/magicui/border-beam";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What technologies do you specialize in?",
    answer: "I specialize in React, Next.js, TypeScript, Node.js, and modern web technologies. I'm also proficient in UI/UX design tools like Figma and Adobe Creative Suite.",
    category: "Technical"
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. A simple landing page might take 1-2 weeks, while a full-stack application could take 2-3 months. I provide detailed timelines after understanding your requirements.",
    category: "Process"
  },
  {
    id: 3,
    question: "Do you work with international clients?",
    answer: "Yes! I work with clients worldwide. I'm comfortable with remote collaboration and can adapt to different time zones for meetings and communication.",
    category: "General"
  },
  {
    id: 4,
    question: "What's your development process like?",
    answer: "I follow an agile approach with regular check-ins, prototyping, iterative development, and thorough testing. You'll be involved throughout the process with regular updates and feedback sessions.",
    category: "Process"
  },
  {
    id: 5,
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, I offer maintenance and support packages. This includes bug fixes, updates, and minor enhancements to keep your project running smoothly.",
    category: "Support"
  },
  {
    id: 6,
    question: "What's your pricing structure?",
    answer: "I offer both project-based and hourly pricing depending on the scope. After discussing your requirements, I'll provide a detailed quote with transparent pricing and no hidden fees.",
    category: "Pricing"
  },
  {
    id: 7,
    question: "Can you help with both design and development?",
    answer: "Absolutely! I'm a full-stack developer with strong design skills. I can handle everything from UI/UX design to front-end and back-end development.",
    category: "Technical"
  },
  {
    id: 8,
    question: "Do you work on mobile applications?",
    answer: "Yes, I develop responsive web applications that work perfectly on mobile devices. I also have experience with React Native for native mobile app development.",
    category: "Technical"
  }
];

const categories = ["All", "Technical", "Process", "General", "Support", "Pricing"];

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const {
    sectionVariants,
    titleVariants,
    descriptionVariants,
    cardVariants,
    viewportOptions,
  } = useExitAnimation({ exitDuration: 0.5, threshold: 0.1, playOnce: false });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);

  return (
    <motion.section
      id="faq"
      className="py-20 px-6 bg-light"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={viewportOptions}
    >
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-dark"
            variants={titleVariants}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-lg text-secondary max-w-2xl mx-auto"
            variants={descriptionVariants}
          >
            Find answers to common questions about my services, process, and approach
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={cardVariants}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-dark"
                  : "bg-dark text-light hover:bg-primary hover:text-dark"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div className="space-y-4" variants={cardVariants}>
          <AnimatePresence mode="wait">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="bg-dark rounded-lg overflow-hidden relative"
                variants={cardVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(faq.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {hoveredCard === faq.id && (
                  <BorderBeam
                    size={80}
                    duration={3}
                    colorFrom="#3b82f6"
                    colorTo="#8b5cf6"
                    delay={0}
                  />
                )}
                
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-light-bg-color transition-colors duration-300 relative z-10"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-primary p-2 rounded-full">
                      <Icon icon="mdi:help" className="text-dark" />
                    </div>
                    <div>
                      <h3 className="text-light font-semibold text-lg">
                        {faq.question}
                      </h3>
                      <span className="text-primary text-sm font-medium">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      icon="mdi:chevron-down"
                      className="text-2xl text-secondary"
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden relative z-10"
                    >
                      <div className="px-6 pb-6 pl-16">
                        <p className="text-secondary leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Still Have Questions CTA */}
        <motion.div
          className="text-center mt-16"
          variants={cardVariants}
        >
          <div className="bg-dark p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-light mb-4">
              Still Have Questions?
            </h3>
            <p className="text-secondary mb-6">
              Can't find the answer you're looking for? Feel free to reach out!
            </p>
            <motion.button
              className="inline-flex items-center gap-2 bg-primary text-dark font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
              <Icon icon="mdi:arrow-right" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}