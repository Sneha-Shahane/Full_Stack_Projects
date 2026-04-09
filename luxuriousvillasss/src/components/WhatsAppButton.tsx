import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/15551234567?text=Hi%2C%20I%27m%20interested%20in%20a%20property"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Contact on WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
