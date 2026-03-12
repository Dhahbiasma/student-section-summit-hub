import atastLogo from "@/assets/atast-logo.png";

const SiteFooter = () => (
  <footer className="py-12 border-t border-border">
    <div className="container px-6 max-w-6xl text-center space-y-6">
      <img src={atastLogo} alt="ATAST" className="h-14 mx-auto object-contain" />
      <p className="font-display text-2xl font-bold text-foreground">
        <span className="text-gradient-red">Student Section</span> Summit
      </p>
      <p className="text-muted-foreground text-sm italic">Think Again, Be Different</p>
      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} ATAST — Tunisian Association for the Future of Sciences and Technology. All rights reserved.
      </p>
      <div className="flex justify-center gap-6 text-muted-foreground text-xs tracking-wider uppercase">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#whatwedo" className="hover:text-primary transition-colors">Activities</a>
        <a href="#speakers" className="hover:text-primary transition-colors">Speakers</a>
        <a href="#schedule" className="hover:text-primary transition-colors">Schedule</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
