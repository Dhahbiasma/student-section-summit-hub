import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, MapPin, Clock, Coffee, Sparkles, PartyPopper } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format, isSameDay } from "date-fns";

interface EventData {
  title: string;
  time: string;
  description: string;
  tag?: string;
}

const eventDays: { date: Date; label: string; events: EventData[] }[] = [
  {
    date: new Date(2026, 2, 26),
    label: "Day 1 — Got Talent & CTF",
    events: [
      { title: "Check in Hotel", time: "14:00", description: "Arrival and hotel registration for all participants.", tag: "Logistics" },
      { title: "Opening Got Talent", time: "15:00", description: "The Student Talent Show kicks off — first edition showcasing Tunisian creativity.", tag: "Entertainment" },
      { title: "Got Talent Winners", time: "18:30", description: "Announcement of the Got Talent winners on stage.", tag: "Awards" },
      { title: "Dinner", time: "19:00", description: "Dinner for all participants.", tag: "Break" },
      { title: "Check in CTF", time: "20:00", description: "Registration and team setup for the Capture The Flag competition.", tag: "Hackathon" },
      { title: "Conference", time: "21:00", description: "Evening conference session on the 2026 theme: AI & sustainable transportation.", tag: "Conference" },
      { title: "CTF Start", time: "22:00", description: "The CTF cybersecurity competition officially begins.", tag: "Hackathon" },
      { title: "Coffee Break", time: "01:00", description: "Late-night coffee break for CTF participants.", tag: "Break" },
      { title: "Winners and Closing CTF", time: "06:30", description: "CTF results announced and closing ceremony.", tag: "Awards" },
    ],
  },
  {
    date: new Date(2026, 2, 27),
    label: "Day 2 — Student Section Summit",
    events: [
      { title: "Check In", time: "08:00", description: "Morning check-in for Day 2 activities.", tag: "Logistics" },
      { title: "Opening Ceremony", time: "09:00", description: "Official SSS opening ceremony with keynote speakers.", tag: "Conference" },
      { title: "Round Table", time: "09:30", description: "Expert-led round table discussions on technology and sustainable development.", tag: "Conference" },
      { title: "Talks", time: "10:15", description: "Inspiring talks from industry leaders and innovators.", tag: "Conference" },
      { title: "Lunch and Check In", time: "12:30", description: "Lunch break and afternoon check-in.", tag: "Break" },
      { title: "Clubs National Annual Presentation", time: "14:00", description: "All ATAST clubs present their annual achievements: Project of the Year, Event of the Year, and Collaborations.", tag: "Competition" },
      { title: "Workshops", time: "17:00", description: "Hands-on workshops on AI, design thinking, cybersecurity, and entrepreneurship.", tag: "Workshop" },
      { title: "Dinner", time: "19:00", description: "Dinner for all participants.", tag: "Break" },
      { title: "Elections", time: "20:30", description: "The Student Section election — vote for the next generation of ATAST leaders.", tag: "Election" },
      { title: "SSS Gala", time: "22:00", description: "The SSS gala evening — celebration, networking, and unforgettable memories.", tag: "Gala" },
    ],
  },
  {
    date: new Date(2026, 2, 28),
    label: "Day 3 — B-TECH",
    events: [
      { title: "Breakfast", time: "07:00", description: "Morning breakfast for all participants.", tag: "Break" },
      { title: "Junior Check In", time: "08:00", description: "B-TECH Junior participants (ages 12–18) check in.", tag: "Logistics" },
      { title: "B-TECH Junior", time: "08:30 – 11:00", description: "School club participants showcase their innovative tech projects.", tag: "Competition" },
      { title: "B-TECH Part 1", time: "11:00 – 12:30", description: "First round of the B-TECH competition — clubs present to judges.", tag: "Competition" },
      { title: "Lunch and Check Out", time: "12:30", description: "Lunch break and hotel check-out.", tag: "Break" },
      { title: "B-TECH Part 2", time: "14:00 – 15:30", description: "Second round of B-TECH — finalists present to the grand jury.", tag: "Competition" },
      { title: "Free Time", time: "15:30 – 17:00", description: "Free time to explore, relax, and network.", tag: "Break" },
      { title: "Award Ceremony", time: "17:00", description: "B-TECH winners, hackathon champions, and outstanding participants are celebrated.", tag: "Awards" },
    ],
  },
];

const restDayMessages = [
  { text: "Nothing on the agenda today — a perfect day to recharge! ☀️", icon: Coffee },
  { text: "Rest day! Even summit heroes need a break. 😴", icon: Coffee },
  { text: "No events today. Grab a coffee and dream big! ☕", icon: Coffee },
  { text: "The summit is taking a breather today. See you soon! 🌟", icon: Sparkles },
  { text: "Free day! Explore, relax, and come back energized. 🎉", icon: PartyPopper },
];

function getRestMessage(date: Date) {
  const seed = date.getDate() + date.getMonth();
  return restDayMessages[seed % restDayMessages.length];
}

const tagColors: Record<string, string> = {
  Conference: "bg-accent/20 text-accent",
  Competition: "bg-primary/20 text-primary",
  Workshop: "bg-accent/20 text-accent",
  Hackathon: "bg-primary/20 text-primary",
  Entertainment: "bg-accent/20 text-accent",
  Election: "bg-primary/20 text-primary",
  Awards: "bg-primary/20 text-primary",
  Gala: "bg-accent/20 text-accent",
  Logistics: "bg-muted text-muted-foreground",
  Break: "bg-muted text-muted-foreground",
};

const ScheduleSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date(2026, 2, 26));

  const summitStart = new Date(2026, 2, 1);
  const summitEnd = new Date(2026, 2, 31);

  const selectedDayData = selectedDate
    ? eventDays.find((d) => isSameDay(d.date, selectedDate))
    : null;

  const restMsg = selectedDate && !selectedDayData ? getRestMessage(selectedDate) : null;
  const RestIcon = restMsg?.icon || Coffee;

  return (
    <section id="schedule" className="py-24 relative">
      <div className="container px-6 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="space-y-4 mb-16">
          <p className="text-primary text-xs tracking-[0.3em] uppercase font-medium">Event Schedule</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Dates & <span className="text-gradient-duo">Program</span>
          </h2>
          <div className="flex flex-wrap gap-6 text-muted-foreground text-sm pt-2">
            <span className="flex items-center gap-2"><CalendarIcon className="w-4 h-4 text-primary" /> March 26–28, 2026</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Medina Congress Center, Hammamet</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="border border-border rounded-sm bg-card p-2 self-start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              defaultMonth={new Date(2026, 2)}
              fromDate={summitStart}
              toDate={summitEnd}
              className="p-3 pointer-events-auto"
              modifiers={{ event: eventDays.map((d) => d.date) }}
              modifiersClassNames={{ event: "!bg-primary/20 !text-primary font-bold ring-1 ring-primary/40" }}
            />
            <div className="flex items-center gap-4 px-4 pb-3 pt-1 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary/30 ring-1 ring-primary/40" /> Event day</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary" /> Selected</span>
            </div>
          </motion.div>

          <div className="min-h-[320px]">
            <AnimatePresence mode="wait">
              {selectedDate && (
                <motion.div key={selectedDate.toISOString()} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                    {format(selectedDate, "EEEE, MMMM d")}
                  </h3>
                  {selectedDayData && (
                    <p className="text-primary text-sm font-medium mb-6">{selectedDayData.label}</p>
                  )}

                  {selectedDayData ? (
                    <div className="space-y-3">
                      {selectedDayData.events.map((ev, i) => (
                        <motion.div key={ev.title} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06, duration: 0.4 }}
                          whileHover={{ x: 4 }}
                          className="p-4 border border-border rounded-sm bg-card hover:border-primary/30 transition-colors">
                          <div className="flex items-center gap-3 mb-1.5">
                            <div className="flex items-center gap-2 text-primary text-xs tracking-wider uppercase font-medium">
                              <Clock className="w-3.5 h-3.5" />
                              {ev.time}
                            </div>
                            {ev.tag && (
                              <span className={`text-[10px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded-full ${tagColors[ev.tag] || "bg-muted text-muted-foreground"}`}>
                                {ev.tag}
                              </span>
                            )}
                          </div>
                          <h4 className="font-display text-base font-semibold text-foreground mb-0.5">{ev.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{ev.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
                      className="flex flex-col items-center justify-center text-center p-12 border border-border rounded-sm bg-card/50 mt-5">
                      <RestIcon className="w-10 h-10 text-primary/60 mb-4" />
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-md">{restMsg?.text}</p>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
