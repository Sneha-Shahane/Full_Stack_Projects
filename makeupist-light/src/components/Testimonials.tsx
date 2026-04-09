import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Bride",
    text: "Makeupist made me feel like a queen on my wedding day. Absolutely flawless work that lasted all night!",
    stars: 5,
  },
  {
    name: "Jessica L.",
    role: "Model",
    text: "The most talented MUA I've ever worked with. Her editorial looks are next level — pure artistry.",
    stars: 5,
  },
  {
    name: "Priya K.",
    role: "Event Client",
    text: "I've never felt more beautiful. She understood exactly what I wanted and elevated it even further.",
    stars: 5,
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24 px-6">
    <div className="container mx-auto">
      <p className="font-body text-xs uppercase tracking-[0.3em] text-accent text-center mb-3">Testimonials</p>
      <h2 className="font-heading text-4xl md:text-5xl text-center text-foreground mb-16">
        Client <span className="italic text-accent">Love</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-md border border-border/30 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-primary/30 mx-auto mb-4 flex items-center justify-center text-accent font-heading text-xl">
              {t.name[0]}
            </div>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} size={14} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
              "{t.text}"
            </p>
            <p className="font-body text-sm text-foreground font-medium">{t.name}</p>
            <p className="font-body text-xs text-muted-foreground">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
