import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Linkedin, Facebook, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 } as const,
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } as const,
};

const ContactSection = () => (
  <section id="contact" className="py-24 bg-card relative">
    <div className="absolute top-0 left-0 w-full h-px bg-duo-gradient opacity-20" />
    <div className="container px-6 max-w-4xl">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="space-y-12">
        <div className="space-y-4">
          <p className="text-primary text-xs tracking-[0.3em] uppercase font-medium">Get In Touch</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Contact <span className="text-gradient-duo">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Whether you're passionate about technology, business, creativity, or innovation — this summit is made for YOU!
          </p>
        </div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="p-8 border border-primary/30 rounded-sm bg-primary/5 text-center space-y-4">
          <h3 className="font-display text-2xl font-bold text-foreground">🎟️ Registrations are NOW OPEN!</h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Secure your spot and join us for 3 days of inspiration, challenge, and success. 
            SSS Student Section Summit — Where Students Become Leaders.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScKuGG5gf47sT/viewform" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-gradient text-primary-foreground px-8 py-3 font-body text-sm font-semibold tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity">
            Register Now <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-6">
          <a href="mailto:contact@atast-sss.org" className="flex items-center gap-4 p-6 border border-border rounded-sm bg-background hover:border-primary/40 transition-colors">
            <Mail className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <p className="text-foreground font-medium">Email Us</p>
              <p className="text-muted-foreground text-sm">contact@atast-sss.org</p>
            </div>
          </a>
          <a href="tel:+21600000000" className="flex items-center gap-4 p-6 border border-border rounded-sm bg-background hover:border-primary/40 transition-colors">
            <Phone className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <p className="text-foreground font-medium">Call Us</p>
              <p className="text-muted-foreground text-sm">+216 00 000 000</p>
            </div>
          </a>
          <a href="https://facebook.com/ATASTStudentSection" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 border border-border rounded-sm bg-background hover:border-accent/40 transition-colors">
            <Facebook className="w-6 h-6 text-accent flex-shrink-0" />
            <div>
              <p className="text-foreground font-medium">Facebook</p>
              <p className="text-muted-foreground text-sm">ATAST Student Section</p>
            </div>
          </a>
          <a href="https://instagram.com/atast_sss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 border border-border rounded-sm bg-background hover:border-accent/40 transition-colors">
            <Instagram className="w-6 h-6 text-accent flex-shrink-0" />
            <div>
              <p className="text-foreground font-medium">Instagram</p>
              <p className="text-muted-foreground text-sm">@atast_sss</p>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
