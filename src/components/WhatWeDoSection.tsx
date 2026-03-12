import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Wrench, Trophy, Cpu, Palette, Users, Star, PartyPopper, Vote, Presentation, GraduationCap } from "lucide-react";

const activities = [
  { icon: Mic, title: "Inspiring Conferences", description: "Expert speakers share insights on AI, sustainability, transportation, and cutting-edge technologies.", color: "text-primary" },
  { icon: Wrench, title: "Interactive Workshops", description: "Hands-on sessions covering practical skills in tech, design thinking, leadership, and entrepreneurship.", color: "text-accent" },
  { icon: Trophy, title: "B-Tech Competition", description: "The flagship competition where 24 ATAST clubs compete to showcase innovative tech projects aligned with a specific theme.", color: "text-primary" },
  { icon: GraduationCap, title: "B-Tech Junior", description: "For school club participants aged 12–18. Same concept as B-Tech, tailored to younger innovators.", color: "text-accent" },
  { icon: Cpu, title: "Hackathon Challenge", description: "An intense hackathon pushing teams to build creative solutions to real-world problems in limited time.", color: "text-primary" },
  { icon: Palette, title: "Student Talent Show", description: "The first edition — a celebration of Tunisian creativity, passion and diversity of talent. Music, dance, theater, spoken word and more.", color: "text-accent" },
  { icon: Presentation, title: "Round Table Discussions", description: "Engage in deep discussions with experts on the future of technology and its societal impact.", color: "text-primary" },
  { icon: Users, title: "Networking Opportunities", description: "Connect with 300+ students, professionals, and leaders from diverse fields across Tunisia.", color: "text-accent" },
  { icon: PartyPopper, title: "Gala Night", description: "An unforgettable evening celebration with awards, entertainment, and lasting memories.", color: "text-primary" },
  { icon: Vote, title: "SS Election", description: "The Student Section election — shaping the future leadership of ATAST's student community.", color: "text-accent" },
  { icon: Star, title: "Trophies & Prizes", description: "Valuable prizes, trophies, and the ATAST Labo prize for the B-Tech winner to compete worldwide.", color: "text-primary" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhatWeDoSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="whatwedo" className="py-24 bg-card relative">
      <div className="absolute top-0 left-0 w-full h-px bg-duo-gradient opacity-20" />
      <div className="container px-6 max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="space-y-4 mb-16">
          <p className="text-primary text-xs tracking-[0.3em] uppercase font-medium">What's Waiting For You</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            What We <span className="text-gradient-duo">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            3 exceptional days filled with innovation, learning, competition, and unforgettable experiences — 
            for 300+ students from 24 ATAST clubs across Tunisia.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {activities.map((a, i) => (
            <motion.div key={a.title} variants={item}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-6 border border-border rounded-sm bg-background hover:border-primary/40 transition-all duration-300 cursor-default overflow-hidden"
            >
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                  />
                )}
              </AnimatePresence>
              <div className="relative z-10">
                <a.icon className={`w-7 h-7 ${a.color} mb-4`} strokeWidth={1.5} />
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-xs">{a.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-duo-gradient opacity-20" />
    </section>
  );
};

export default WhatWeDoSection;
