"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/ScrollAnimation/useScrollAnimation";

export default function PrivacyPolicyPage() {
  const [isClient, setIsClient] = useState(false);

  const {
    sectionVariants,
    titleVariants,
    descriptionVariants,
    cardVariants,
    viewportOptions,
  } = useScrollAnimation({
    animationType: "fade",
    threshold: 0.1,
    duration: 0.6,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-light">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Header Section */}
      <motion.section
        className="py-20 px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <motion.div className="mb-8" variants={cardVariants}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300"
            >
              <Icon icon="mdi:arrow-left" className="text-xl" />
              Back to Home
            </Link>
          </motion.div>

          {/* Page Header */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-light"
              variants={titleVariants}
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              className="text-lg text-secondary max-w-2xl mx-auto"
              variants={descriptionVariants}
            >
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Privacy Policy Content */}
      <motion.section
        className="px-6 pb-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="bg-light rounded-lg p-8 md:p-12 space-y-8"
            variants={cardVariants}
          >
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">
                Introduction
              </h2>
              <p className="text-secondary leading-relaxed">
                Welcome to nullscollection.art (&quot;we,&quot; &quot;our,&quot;
                or &quot;us&quot;). This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our
                website. Please read this privacy policy carefully. If you do
                not agree with the terms of this privacy policy, please do not
                access the site.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-dark">
                    Personal Information
                  </h3>
                  <p className="text-secondary leading-relaxed mb-2">
                    We may collect personal information that you voluntarily
                    provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-secondary space-y-1 ml-4">
                    <li>Contact us through our contact form</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Download our CV or portfolio materials</li>
                    <li>
                      Communicate with us via email, WhatsApp, or Telegram
                    </li>
                  </ul>
                  <p className="text-secondary leading-relaxed mt-2">
                    This information may include your name, email address, phone
                    number, and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-dark">
                    Automatically Collected Information
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    When you visit our website, we may automatically collect
                    certain information about your device, including information
                    about your web browser, IP address, time zone, and some of
                    the cookies that are installed on your device. Additionally,
                    we may collect information about the individual web pages
                    you view, what websites or search terms referred you to the
                    site, and information about how you interact with the site.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">
                How We Use Your Information
              </h2>
              <p className="text-secondary leading-relaxed mb-2">
                We use the information we collect or receive to:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-1 ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates about our services and portfolio</li>
                <li>Improve our website and user experience</li>
                <li>Analyze usage patterns and trends</li>
                <li>
                  Communicate with you about potential projects or
                  collaborations
                </li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-secondary leading-relaxed">
                We may use cookies and similar tracking technologies to track
                activity on our website and store certain information. Cookies
                are files with a small amount of data which may include an
                anonymous unique identifier. You can instruct your browser to
                refuse all cookies or to indicate when a cookie is being sent.
                However, if you do not accept cookies, you may not be able to
                use some portions of our website.
              </p>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">
                Third-Party Services
              </h2>
              <p className="text-secondary leading-relaxed mb-2">
                Our website may contain links to third-party websites and
                services, including:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-1 ml-4">
                <li>GitHub (for code repositories)</li>
                <li>LinkedIn (for professional networking)</li>
                <li>WhatsApp and Telegram (for communication)</li>
                <li>Email services</li>
              </ul>
              <p className="text-secondary leading-relaxed mt-2">
                We are not responsible for the privacy practices of these
                third-party services. We encourage you to review their privacy
                policies before providing any personal information.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">
                Data Security
              </h2>
              <p className="text-secondary leading-relaxed">
                We implement appropriate technical and organizational security
                measures to protect your personal information. However, please
                note that no method of transmission over the Internet or method
                of electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your personal
                information, we cannot guarantee its absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">
                Data Retention
              </h2>
              <p className="text-secondary leading-relaxed">
                We will retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this Privacy
                Policy, unless a longer retention period is required or
                permitted by law. When we no longer need your personal
                information, we will securely delete or anonymize it.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">Your Rights</h2>
              <p className="text-secondary leading-relaxed mb-2">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-1 ml-4">
                <li>The right to access your personal information</li>
                <li>The right to rectify inaccurate personal information</li>
                <li>
                  The right to request deletion of your personal information
                </li>
                <li>
                  The right to restrict or object to processing of your personal
                  information
                </li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent at any time</li>
              </ul>
              <p className="text-secondary leading-relaxed mt-2">
                To exercise any of these rights, please contact us using the
                contact information provided below.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">
                Children&apos;s Privacy
              </h2>
              <p className="text-secondary leading-relaxed">
                Our website is not intended for children under the age of 13. We
                do not knowingly collect personal information from children
                under 13. If you are a parent or guardian and believe that your
                child has provided us with personal information, please contact
                us so that we can delete such information.
              </p>
            </div>

            {/* International Data Transfers */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">
                International Data Transfers
              </h2>
              <p className="text-secondary leading-relaxed">
                As we work remotely and with international clients, your
                information may be transferred to and processed in countries
                other than your country of residence. These countries may have
                data protection laws that are different from the laws of your
                country. By using our website, you consent to the transfer of
                your information to these countries.
              </p>
            </div>

            {/* Changes to This Privacy Policy */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">
                Changes to This Privacy Policy
              </h2>
              <p className="text-secondary leading-relaxed">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date at the
                top of this Privacy Policy. You are advised to review this
                Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">Contact Us</h2>
              <p className="text-secondary leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us:
              </p>
              <div className="space-y-2 text-secondary">
                <p className="flex items-center gap-2">
                  <Icon icon="mdi:email" className="text-primary" />
                  <a
                    href="mailto:raffy7792@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    raffy7792@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Icon icon="mdi:whatsapp" className="text-primary" />
                  <a
                    href="https://wa.me/+639600723886"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    +63 960 072 3886 (WhatsApp)
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Icon icon="mdi:send" className="text-primary" />
                  <span>Telegram: +63 960 072 3886</span>
                </p>
                <p className="flex items-center gap-2">
                  <Icon icon="mdi:web" className="text-primary" />
                  <span>Website: nullscollection.art</span>
                </p>
              </div>
            </div>

            {/* Consent */}
            <div
              className="border-t pt-6 mt-6"
              style={{ borderColor: "var(--border-color)" }}
            >
              <p className="text-secondary leading-relaxed">
                By using our website, you hereby consent to our Privacy Policy
                and agree to its terms.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
