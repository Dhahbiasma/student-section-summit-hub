import { motion } from "framer-motion";
import { GraduationCap, Globe2, Trophy, Users } from "lucide-react";
import atastLogo from "@/assets/atast-logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stats = [
  { icon: GraduationCap, value: "24", label: "ATAST Clubs" },
  { icon: Users, value: "300+", label: "Students" },
  { icon: Trophy, value: "7th", label: "SSS Edition" },
  { icon: Globe2, value: "2007", label: "Founded" },
];

const sections = [
  {
    title: "ATAST",
    paragraphs: [
      "Association Tunisienne pour l'Avenir des Sciences et Technologies abrégé ATAST was founded in 2007 by Hatem Slimane as a school club before being announced in the JORT in 2012.",
      "Since its first appearance, ATAST has tried to advance the field of science and technology in Tunisia, and these efforts have paid off on a national and international scale.",
      "Among the events organized by ATAST are B-Tech and B-Tech Junior, Science And Technology Camp which is organized every summer, and I²-FEST, an international event that welcomes participants from over 20 countries.",
    ],
  },
  {
    title: "Student Section",
    paragraphs: [
      "The ATAST Student Section is the section of ATAST that deals with the student category and universities, which encompasses 24 ATAST clubs in different universities across various disciplines.",
      "The goal of the ATAST Student Section is to foster the talents of students in the field of science and technology while developing an entrepreneurial spirit.",
      "It is also the main responsible for organising Camps, Events such as ATAST Student Section Academy & the SSS, and also Competitions like the B-Tech competition.",
    ],
  },
  {
    title: "Student Section Summit",
    paragraphs: [
      "The ATAST Student Section Summit SSS is the annual meeting for the ATAST Clubs. During this event, there will be an annual awards that will be given in an award ceremony to recognize ATAST clubs achievements.",
      "Conferences and trainings will take place throughout the SSS, providing Atastians with the opportunity to learn about innovative topics from industry leaders.",
      "Additionally, elections for the student section leadership will take place. The SSS will feature participation from 24 clubs with up to 300 Students from different universities, providing a diverse group of students to share ideas and collaborate.",
    ],
  },
  {
    title: "B-Tech",
    paragraphs: [
      "The B-Tech competition, a premier showcase of business and technology innovation, takes place during the I-FEST², the International Festival of Engineering Science and Technology in Tunisia.",
      "This festival, organized by ATAST, offers a dynamic platform for the 24 participating ATAST clubs to present their projects that align with a specific theme.",
      "B-Tech day is an event that includes a variety of activities, workshops, and conferences. The event aims to provide a platform for participants to learn new skills, exchange ideas, and gain knowledge in the field of science and technology. The winner of the competition will be announced at a later time, and will be granted the opportunity to compete in a worldwide competition with a substantial monetary prize.",
    ],
  },
  {
    title: "B-Tech Junior",
    paragraphs: [
      "B-Tech Junior is a program aimed at school clubs participants aged between 12–18 years old. It follows the same concept as the original B-Tech program, but without the debate session.",
      "The program has a separate theme than the one used in BTech, and it is tailored to the age group of the participants.",
      "BTech Junior is an excellent opportunity for young students to showcase their skills and creativity, and to gain experience in the field of science and technology.",
    ],
  },
  {
    title: "Student Talent Show",
    paragraphs: [
      "The Student Talent Show marks an exciting new challenge organized by ATAST. This first edition is more than just a performance night — it's a celebration of Tunisian creativity, passion and the incredible diversity of talent.",
      "Students will take the stage to share their artistic gifts, whether through music, dance, theater, spoken word or any form of creative expression.",
    ],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Watermark logo */}
      <img
        src={atastLogo}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] opacity-[0.02] pointer-events-none select-none"
      />

      <div className="container px-6 max-w-5xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="space-y-16">
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center space-y-4">
            <p className="text-primary text-xs tracking-[0.3em] uppercase font-medium">Who We Are</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              About <span className="text-gradient-red">ATAST</span>
            </h2>
          </motion.div>

          {/* Content cards - stacked, centered like reference screenshots */}
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative"
              >
                <div className="p-8 sm:p-10 border border-border rounded-sm bg-card/60 backdrop-blur-sm text-center space-y-5">
                  {/* Decorative top line */}
                  <div className={`w-16 h-0.5 mx-auto ${idx % 2 === 0 ? 'bg-red-gradient' : 'bg-blue-gradient'}`} />

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground italic">
                    {section.title}
                  </h3>

                  <div className="space-y-4 max-w-2xl mx-auto">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ scale: 1.05, y: -4 }}
                className="text-center p-6 border border-border rounded-sm bg-card hover:border-primary/30 transition-colors cursor-default"
              >
                <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="font-display text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
