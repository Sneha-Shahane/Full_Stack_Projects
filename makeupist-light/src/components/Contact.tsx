import { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi Makeupist! I'm ${form.name}. ${form.message}`);
    window.open(`https://wa.me/1234567890?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-6 section-gradient">
      <div className="container mx-auto max-w-lg">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-accent text-center mb-3">Contact</p>
        <h2 className="font-heading text-4xl md:text-5xl text-center text-foreground mb-12">
          Get in <span className="italic text-accent">Touch</span>
        </h2>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 space-y-5 shadow-sm border border-border/30">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-secondary border border-border/50 rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-secondary border border-border/50 rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
          />
          <textarea
            placeholder="Tell me about your dream look..."
            rows={4}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-secondary border border-border/50 rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full btn-gradient text-foreground font-body text-sm font-medium px-6 py-4 rounded-[20px] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
          >
            <Send size={16} /> Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
