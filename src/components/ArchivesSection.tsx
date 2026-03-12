import { motion } from "framer-motion";
import { Play } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const archives = [
  {
    year: "2025",
    theme: "Tourism",
    trailer: "https://www.facebook.com/share/v/1K8NW3Ubto/",
    recap: "https://www.facebook.com/reel/1243548077370428", // Add the real link here
  },
  {
    year: "2024",
    theme: "Sports",
    trailer: "https://www.facebook.com/reel/342609311773465",
    recap: "https://www.facebook.com/share/v/1GaqWSaZYJ/", // Add the real link here
  },
  {
    year: "2023",
    theme: "Education",
    trailer: "https://www.youtube.com/watch?v=TRAILER_2023",
    recap: "#", // Add the real link here
  },
];

const ArchivesSection = () => {
  return (
    <section id="archives" className="py-24 relative bg-background">
      <div className="container px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4 mb-16 text-center"
        >
          <motion.p variants={fadeUp} className="text-primary text-xs tracking-[0.3em] uppercase font-medium">
            Past Editions
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Summit <span className="text-gradient-red">Archives</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto text-lg pt-4">
            Take a look back at our previous editions. Watch the trailers and recap videos to relive the summit experience.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {archives.map((edition, idx) => (
            <motion.div
              key={edition.year}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1, duration: 0.5 } },
              }}
              className="group border border-border px-6 py-8 rounded-sm bg-card hover:border-primary/40 transition-colors duration-300 flex flex-col items-center justify-center text-center space-y-4"
            >
              <h3 className="font-display text-3xl font-bold text-foreground">{edition.year}</h3>
              <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">{edition.theme}</p>

              <div className="flex gap-4">
                <a
                  href={edition.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-accent/40 text-accent px-4 py-2 font-body text-xs font-semibold tracking-wider uppercase rounded-sm hover:bg-accent/10 hover:border-accent transition-all w-[120px]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Trailer
                </a>

                {edition.recap ? (
                  <a
                    href={edition.recap}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary/10 border border-primary/40 text-primary px-4 py-2 font-body text-xs font-semibold tracking-wider uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-all w-[120px]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Recap
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center justify-center gap-2 border border-border text-muted-foreground/50 px-4 py-2 font-body text-xs font-semibold tracking-wider uppercase rounded-sm cursor-help w-[120px] text-center"
                    title="Will come soon"
                  >
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchivesSection;
