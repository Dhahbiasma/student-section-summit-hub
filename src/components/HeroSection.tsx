import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Ticket, Sparkles, Play } from "lucide-react";
import atastLogo from "@/assets/atast-logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const targetDate = new Date(2026, 2, 26, 9, 0, 0);

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const themes = [
  { 
    year: "2026", 
    theme: "Transportation", 
    trailer: "https://www.facebook.com/share/v/1FU1ybC79z/", 
    recap: null, // Indicates coming soon
    current: true 
  },
];

const summitLetters = "Summit".split("");

const HeroSection = () => {
  const countdown = useCountdown(targetDate);
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const id = setInterval(() => {
        setTypedCount((c) => {
          if (c >= summitLetters.length) { clearInterval(id); return c; }
          return c + 1;
        });
      }, 120);
      return () => clearInterval(id);
    }, 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background overflow-hidden preserve-3d">
        {/* Abstract animated background elements */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[100px] mix-blend-screen animate-pulse-glow" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[40%] bg-blue-500/10 rounded-full blur-[90px] mix-blend-screen animate-pulse-glow" style={{ animationDuration: '10s', animationDelay: '1s' }} />

        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-red/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-0 left-0 w-full h-px bg-duo-gradient opacity-40" />

      <div className="container relative z-10 text-center px-6 py-24">
        <motion.div initial="hidden" animate="visible" className="space-y-8">
          <motion.div variants={fadeUp} custom={0} className="flex justify-center">
            <img src={atastLogo} alt="ATAST Logo" className="h-20 sm:h-24 object-contain" />
          </motion.div>

          <motion.p variants={fadeUp} custom={1}
            className="text-primary font-body text-sm tracking-[0.35em] uppercase font-medium">
            7th Edition — Think Again, Be Different
          </motion.p>

          <motion.h1 variants={fadeUp} custom={2}
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            <span className="text-foreground">Student Section</span>
            <br />
            <span className="text-gradient-duo inline-flex">
              {summitLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={i < typedCount ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.1 }}
                  className={i >= typedCount ? "opacity-0" : ""}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.7, ease: "linear", repeatType: "reverse" }}
                className="text-primary ml-0.5"
              >
                |
              </motion.span>
            </span>
          </motion.h1>

          {/* Current theme */}
          <motion.div variants={fadeUp} custom={3} className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-accent">
              <Sparkles className="w-4 h-4" />
              <p className="text-sm sm:text-base font-medium tracking-wide">
                <span className="text-primary font-semibold">2026 Theme:</span>{" "}
                AI & cutting-edge technologies at the service of sustainable & developed transportation
              </p>
              <Sparkles className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Themes timeline */}
          <motion.div variants={fadeUp} custom={3.2}>
            <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
              {themes.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  className={`relative group px-5 py-3 rounded-sm border transition-all duration-300 ${t.current
                    ? "border-primary/50 bg-primary/10"
                    : "border-border bg-card/40 hover:border-primary/30"
                    }`}
                >
                  {t.current && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] tracking-widest uppercase font-bold text-primary bg-background px-2">
                      Current
                    </span>
                  )}
                  <p className="font-display text-lg font-bold text-foreground">{t.year}</p>
                  <p className="text-muted-foreground text-xs tracking-wider uppercase">{t.theme}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <a
                      href={t.trailer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent text-[10px] tracking-wider uppercase font-semibold hover:text-primary transition-colors"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      Trailer
                    </a>
                    {t.recap ? (
                      <a
                        href={t.recap}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary text-[10px] tracking-wider uppercase font-semibold hover:text-accent transition-colors"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        Recap
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-muted-foreground/50 text-[10px] tracking-wider uppercase font-semibold cursor-help" title="Will come soon">
                        <Play className="w-3 h-3" />
                        Recap (Coming soon)
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p variants={fadeUp} custom={3.5}
            className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            A 3-day immersive experience combining technology, creativity, and leadership —
            featuring B-Tech, Hackathon, Talent Show, Workshops, Conferences, and amazing prizes.
          </motion.p>

          {/* Countdown */}
          <motion.div variants={fadeUp} custom={4} className="flex justify-center gap-4 sm:gap-6">
            {[
              { val: countdown.days, label: "Days" },
              { val: countdown.hours, label: "Hours" },
              { val: countdown.minutes, label: "Min" },
              { val: countdown.seconds, label: "Sec" },
            ].map((unit) => (
              <div key={unit.label} className="text-center">
                <motion.div
                  key={unit.val}
                  initial={{ rotateX: -20, opacity: 0.7 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 border border-primary/30 rounded-sm bg-primary/5 flex items-center justify-center"
                >
                  <span className="font-display text-2xl sm:text-3xl font-bold text-foreground">{String(unit.val).padStart(2, '0')}</span>
                </motion.div>
                <p className="text-muted-foreground text-[10px] sm:text-xs tracking-widest uppercase mt-2 font-medium">{unit.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} custom={5} className="flex flex-wrap gap-5 justify-center pt-4">
            <div className="px-6 py-4 border border-primary/30 rounded-sm bg-primary/5 flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-primary text-xs tracking-widest uppercase font-medium">Date</p>
                <p className="text-foreground font-display text-lg font-semibold">March 26–28</p>
              </div>
            </div>
            <div className="px-6 py-4 border border-accent/30 rounded-sm bg-accent/5 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent" />
              <div className="text-left">
                <p className="text-accent text-xs tracking-widest uppercase font-medium">Location</p>
                <p className="text-foreground font-display text-lg font-semibold">Medina Congress Center, Hammamet</p>
              </div>
            </div>
            <div className="px-6 py-4 border border-primary/30 rounded-sm bg-primary/5 flex items-center gap-3">
              <Ticket className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-primary text-xs tracking-widest uppercase font-medium">Status</p>
                <p className="text-foreground font-display text-lg font-semibold">Registrations Open</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={6} className="flex flex-wrap gap-4 justify-center pt-4">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScKuGG5gf47sT4OZJ8HB7CjLfEPBQ_6NWlNc9hpsXnzDMxAYw/viewform?usp=dialog&fbclid=IwY2xjawQfuMpleHRuA2FlbQIxMABicmlkETFUUFI3UE1GeU42ck9aaWsyc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuzYgD-6LozAbPUj4YvWmnKL1Ts_kT1oIDE6coJEyEtt6AB9PAyYMeAv7nkI_aem_9rZ4tDTj7zTj5woDhatKZg" target="_blank" rel="noopener noreferrer"
              className="bg-red-gradient text-primary-foreground px-10 py-4 font-body text-sm font-semibold tracking-wider uppercase rounded-sm hover:opacity-100 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,0,0,0.6)]">
              Register Now
            </a>
            <a href="#about"
              className="border border-accent/40 text-accent px-10 py-4 font-body text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-accent/10 hover:scale-105 active:scale-95 transition-all">
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-duo-gradient opacity-20" />
    </section>
  );
};

export default HeroSection;
