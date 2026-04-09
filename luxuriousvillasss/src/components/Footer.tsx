import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal section-padding pb-8">
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-4">
            <span className="gold-text">AURUM</span> ESTATES
          </h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Redefining luxury real estate with an unwavering commitment to excellence and sophistication.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Properties", "About Us", "Testimonials", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(" ", "")}`} className="text-primary-foreground/60 hover:text-gold transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>Property Sales</li>
            <li>Property Management</li>
            <li>Investment Advisory</li>
            <li>Interior Design</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-gold hover:text-gold transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/40 text-sm">
        © {new Date().getFullYear()} Aurum Estates. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
