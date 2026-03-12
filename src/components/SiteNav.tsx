import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import atastLogo from "@/assets/atast-logo.png";

const links = ["About", "What We Do", "Speakers", "Schedule", "Contact"];

const SiteNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between px-6 py-3 max-w-6xl">
        <a href="#" className="flex items-center gap-3">
          <img src={atastLogo} alt="ATAST" className="h-10 object-contain" />
          <span className="font-display text-lg font-bold text-foreground tracking-tight hidden sm:inline">
            <span className="text-primary">SSS</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/\s+/g, '')}`}
              className="text-muted-foreground text-sm hover:text-primary transition-colors tracking-wide"
            >
              {label}
            </a>
          ))}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScKuGG5gf47sT/viewform" target="_blank" rel="noopener noreferrer"
            className="bg-red-gradient text-primary-foreground px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity">
            Register
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((label) => (
                <a key={label} href={`#${label.toLowerCase().replace(/\s+/g, '')}`}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors tracking-wide">
                  {label}
                </a>
              ))}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScKuGG5gf47sT/viewform" target="_blank" rel="noopener noreferrer"
                className="bg-red-gradient text-primary-foreground px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-sm text-center hover:opacity-90 transition-opacity">
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default SiteNav;
