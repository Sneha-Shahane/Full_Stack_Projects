import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Victoria Ashworth",
    role: "Property Investor",
    text: "Aurum Estates made finding our dream villa effortless. Their attention to detail and market knowledge is truly unmatched in the luxury segment.",
  },
  {
    name: "James Harrington",
    role: "CEO, Harrington Group",
    text: "The team guided us through every step of acquiring our Manhattan penthouse. Professional, discreet, and incredibly well-connected.",
  },
  {
    name: "Sofia Castellano",
    role: "Interior Designer",
    text: "I've worked with many agencies, but Aurum's curated portfolio and personalized approach set them apart. They understand true luxury.",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="section-padding bg-charcoal">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <p className="text-gold text-sm tracking-[0.3em] uppercase font-semibold mb-3">Testimonials</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
          What Our Clients Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-foreground/5 border border-primary-foreground/10 rounded-lg p-8 relative"
          >
            <Quote className="text-gold/30 absolute top-4 right-4" size={40} />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 italic">"{t.text}"</p>
            <div>
              <p className="font-display font-semibold text-primary-foreground">{t.name}</p>
              <p className="text-gold text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
