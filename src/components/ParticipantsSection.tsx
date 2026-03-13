import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Users, Star, DollarSign, Handshake, Camera, ChevronDown } from "lucide-react";

const clubs = [
  "ISSATSO", "ISITCOM", "FMS", "EPI", "ESSTHS", "ISMAIK",
  "ISIMM", "EDUCATORS", "UPSAT", "ISA-CM", "ENIT", "ISIGK", "ISTMT",
];

interface Prize {
  icon: typeof Trophy;
  title: string;
}

const prizes: Prize[] = [
  {
    icon: Trophy,
    title: "Best Club",
  },
  {
    icon: Users,
    title: "Best Community Management",
  },
  {
    icon: Star,
    title: "Best Event",
  },
  {
    icon: DollarSign,
    title: "Best Financial Stability",
  },
  {
    icon: Handshake,
    title: "Best Collab",
  },
  {
    icon: Camera,
    title: "Best Project of the Year",
  },
];

const ParticipantsSection = () => {
  const [openPrize, setOpenPrize] = useState<string | null>(null);

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-duo-gradient opacity-20" />
      <div className="container px-6 max-w-5xl">
        {/* Participating Clubs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-8 mb-20"
        >
          <div className="space-y-4">
            <p className="text-primary text-xs tracking-[0.3em] uppercase font-medium">Representing Tunisia</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              Participating <span className="text-gradient-duo">Clubs</span>
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {clubs.map((club) => (
              <motion.div
                key={club}
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-5 py-2.5 border border-border rounded-sm bg-background font-display font-semibold text-foreground text-sm tracking-wide hover:border-primary/40 transition-colors cursor-default"
              >
                {club}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* SSS Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-medium">Recognition & Awards</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              The SSS <span className="text-gradient-red">Prize</span>
            </h2>
            <p className="text-muted-foreground text-sm">Click a prize to learn more</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {prizes.map((prize) => {
              const isOpen = openPrize === prize.title;
              return (
                <motion.div
                  key={prize.title}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                  onClick={() => setOpenPrize(isOpen ? null : prize.title)}
                  className="p-5 border border-border rounded-sm bg-background text-center hover:border-primary/30 transition-all duration-300 cursor-pointer group select-none"
                >
                  <prize.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-display text-sm font-semibold text-foreground uppercase tracking-wide mb-1">{prize.title}</p>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground mx-auto transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 pt-3 border-t border-border space-y-2 text-center pb-1">
                          <span className="text-muted-foreground text-xs italic">
                            information will be added here soon
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-duo-gradient opacity-20" />
    </section>
  );
};

export default ParticipantsSection;
