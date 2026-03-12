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
    people: [],
  },
  {
    id: "roundtable",
    label: "Round Table Speakers",
    icon: Presentation,
    people: [],
  },
  {
    id: "trainers",
    label: "Workshop Trainers",
    icon: Wrench,
    people: [],
  },
  {
    id: "organizers",
    label: "Organizers",
    icon: Users,
    people: [],
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
            {activeCategory.people.length > 0 ? (
              activeCategory.people.map((s) => (
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
              ))
            ) : (
              <motion.div variants={item} className="col-span-full py-12 text-center">
                <p className="text-2xl font-display text-muted-foreground">speakers comming soon</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SpeakersSection;
