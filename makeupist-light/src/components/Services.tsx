import { Sparkles, Heart, Crown, Palette } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Bridal Glam",
    desc: "Timeless elegance for your special day with long-lasting, photo-ready makeup.",
    price: "From $250",
    img: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=400&q=80",
  },
  {
    icon: Sparkles,
    title: "Party & Events",
    desc: "Stand out at every occasion with a glamorous, head-turning look.",
    price: "From $120",
    img: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=400&q=80",
  },
  {
    icon: Palette,
    title: "Editorial & Creative",
    desc: "High-fashion, avant-garde looks for shoots, campaigns & magazine features.",
    price: "From $300",
    img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80",
  },
  {
    icon: Heart,
    title: "Everyday Glam",
    desc: "Effortless, natural beauty enhanced with soft tones and flawless skin.",
    price: "From $80",
    img: "https://images.unsplash.com/photo-1588006173527-b31e5cee4bf4?w=400&q=80",
  },
];

const Services = () => (
  <section id="services" className="py-24 px-6 section-gradient">
    <div className="container mx-auto">
      <p className="font-body text-xs uppercase tracking-[0.3em] text-accent text-center mb-3">Services</p>
      <h2 className="font-heading text-4xl md:text-5xl text-center text-foreground mb-16">
        What I <span className="italic text-accent">Offer</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border border-border/30"
          >
            <div className="h-48 overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            </div>
            <div className="p-6">
              <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center mb-4">
                <s.icon size={18} className="text-accent" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
              <span className="font-body text-xs text-accent tracking-wider uppercase font-medium">{s.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
