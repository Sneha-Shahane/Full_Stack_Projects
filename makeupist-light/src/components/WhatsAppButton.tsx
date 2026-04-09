import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform duration-300"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} className="text-white" />
  </a>
);

export default WhatsAppButton;
