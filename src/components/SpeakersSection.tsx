import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Twitter, Mic, Presentation, Wrench, Users } from "lucide-react";

interface Person {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

const categories = [
  {
    id: "conference",
    label: "Conference Speakers",
    icon: Mic,
    people: [
      {
        name: "Dr. Amira Ben Salah",
        title: "AI & Data Science Researcher",
        bio: "Leading researcher in machine learning with 15+ years of experience. Published over 50 papers in top-tier journals.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
        linkedin: "#",
        twitter: "#",
      },
      {
        name: "Prof. Karim Trabelsi",
        title: "Renewable Energy Expert",
        bio: "Pioneer in solar energy research across North Africa. Advisor to multiple international sustainability initiatives.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
        linkedin: "#",
      },
    ],
  },
  {
    id: "roundtable",
    label: "Round Table Speakers",
    icon: Presentation,
    people: [
      {
        name: "Dr. Fatma Gharbi",
        title: "Biotech Entrepreneur",
        bio: "Founded two biotech startups and advocates for women in STEM. Mentor to over 100 young scientists.",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop&crop=face",
        linkedin: "#",
        twitter: "#",
      },
      {
        name: "Nabil Marzougui",
        title: "Sustainable Transport Expert",
        bio: "Advisor on smart mobility and sustainable transportation policy across the MENA region.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
        linkedin: "#",
      },
    ],
  },
  {
    id: "trainers",
    label: "Workshop Trainers",
    icon: Wrench,
    people: [
      {
        name: "Yasmine Chaabane",
        title: "UX Design Director",
        bio: "Award-winning designer who has shaped digital products used by millions. Passionate about design education.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
        linkedin: "#",
        twitter: "#",
      },
      {
        name: "Amine Bouaziz",
        title: "Cybersecurity Specialist",
        bio: "Ethical hacker and security consultant. Trains organizations and students on modern threat prevention.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
        linkedin: "#",
      },
    ],
  },
  {
    id: "organizers",
    label: "Organizers",
    icon: Users,
    people: [
      {
        name: "Mohamed Amine Jlassi",
        title: "ATAST SSS President",
        bio: "Visionary student leader driving the summit's mission to connect academia with industry across Tunisia.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
        linkedin: "#",
      },
      {
        name: "Salma Riahi",
        title: "SSS Event Coordinator",
        bio: "Master organizer ensuring every detail of the 3-day summit runs smoothly and memorably.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
        linkedin: "#",
      },
      {
        name: "Yassine Khelifi",
        title: "B-Tech Competition Lead",
        bio: "Coordinates the B-Tech competition and manages jury selection for fair, impactful judging.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
        linkedin: "#",
      },
    ],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const SpeakersSection = () => {
  const [activeTab, setActiveTab] = useState("conference");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="speakers" className="py-24 relative">
      <div className="container px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4 mb-12"
        >
          <motion.p variants={item} className="text-primary text-xs tracking-[0.3em] uppercase font-medium">
            Meet The Team
          </motion.p>
          <motion.h2 variants={item} className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Speakers & <span className="text-gradient-red">Organizers</span>
          </motion.h2>
          <motion.p variants={item} className="text-muted-foreground max-w-2xl text-lg">
            Learn from accomplished professionals and connect with the passionate team behind the summit.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-medium tracking-wide transition-all duration-300 border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40 bg-card"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={container}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -12 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeCategory.people.map((s) => (
              <motion.div
                key={s.name}
                variants={item}
                whileHover={{ y: -6 }}
                className="group border border-border rounded-sm bg-card overflow-hidden hover:border-primary/40 transition-colors duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-1">{s.name}</h3>
                    <p className="text-muted-foreground text-sm">{s.title}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.bio}</p>
                  <div className="flex gap-3 pt-1">
                    {s.linkedin && (
                      <a href={s.linkedin} className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${s.name} LinkedIn`}>
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {s.twitter && (
                      <a href={s.twitter} className="text-muted-foreground hover:text-accent transition-colors" aria-label={`${s.name} Twitter`}>
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SpeakersSection;
