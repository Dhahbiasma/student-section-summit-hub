import { motion } from "framer-motion";
import SiteNav from "@/components/SiteNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ParticipantsSection from "@/components/ParticipantsSection";
import SpeakersSection from "@/components/SpeakersSection";
import ScheduleSection from "@/components/ScheduleSection";
import ArchivesSection from "@/components/ArchivesSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const sectionReveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const Index = () => (
  <div className="min-h-screen bg-background">
    <SiteNav />
    <HeroSection />
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={sectionReveal}>
      <AboutSection />
    </motion.div>
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={sectionReveal}>
      <WhatWeDoSection />
    </motion.div>
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={sectionReveal}>
      <ParticipantsSection />
    </motion.div>
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={sectionReveal}>
      <SpeakersSection />
    </motion.div>
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={sectionReveal}>
      <ScheduleSection />
    </motion.div>
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={sectionReveal}>
      <ArchivesSection />
    </motion.div>
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={sectionReveal}>
      <ContactSection />
    </motion.div>
    <SiteFooter />
  </div>
);

export default Index;
