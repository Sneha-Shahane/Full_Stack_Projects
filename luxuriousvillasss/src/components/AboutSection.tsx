import { Shield, Award, Users, Globe } from "lucide-react";

const stats = [
  { icon: Shield, label: "Years of Excellence", value: "25+" },
  { icon: Award, label: "Properties Sold", value: "3,200+" },
  { icon: Users, label: "Happy Clients", value: "5,000+" },
  { icon: Globe, label: "Countries", value: "15" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-cream">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-semibold mb-3">About Us</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Defining Luxury Real Estate Since 1999
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Aurum Estates has redefined the luxury property market with an unwavering commitment to 
            excellence. We curate only the most exceptional residences across the globe, ensuring our 
            discerning clientele experience the pinnacle of sophisticated living.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our team of seasoned professionals brings decades of expertise, providing bespoke services 
            tailored to each client's unique vision. From oceanfront villas to urban penthouses, we 
            transform aspirations into addresses.
          </p>
          <a
            href="#contact"
            className="inline-block gold-gradient text-primary-foreground px-8 py-3 rounded-sm text-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-card p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <s.icon className="mx-auto text-gold mb-3" size={32} />
              <p className="font-display text-3xl font-bold text-foreground">{s.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
