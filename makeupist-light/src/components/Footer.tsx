import { Instagram, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 py-12 px-6 bg-card">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-heading text-xl text-accent">Makeupist</p>
      <div className="flex items-center gap-4">
        <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
          <Instagram size={20} />
        </a>
      </div>
      <p className="font-body text-xs text-muted-foreground flex items-center gap-1">
        Made with <Heart size={12} className="text-accent fill-accent" /> © 2026
      </p>
    </div>
  </footer>
);

export default Footer;
