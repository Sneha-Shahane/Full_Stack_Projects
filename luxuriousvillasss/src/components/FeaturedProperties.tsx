import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const featured = [
  { image: property1, title: "Modern Villa Serenity", price: "$4,500,000", location: "Marbella, Spain", beds: 5, baths: 4, sqft: "6,200" },
  { image: property2, title: "Sky Penthouse", price: "$8,200,000", location: "Manhattan, New York", beds: 4, baths: 3, sqft: "4,800" },
  { image: property3, title: "Countryside Manor", price: "$3,900,000", location: "Hampshire, England", beds: 7, baths: 5, sqft: "9,500" },
];

const FeaturedProperties = () => (
  <section className="section-padding bg-cream">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <p className="text-gold text-sm tracking-[0.3em] uppercase font-semibold mb-3">Curated Selection</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Featured Properties
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((p, i) => (
          <div
            key={i}
            className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500"
          >
            <div className="relative overflow-hidden h-64">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 gold-gradient text-primary-foreground text-sm font-bold px-4 py-1 rounded-sm">
                {p.price}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                <MapPin size={14} className="text-gold" /> {p.location}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
                <span className="flex items-center gap-1"><Bed size={14} /> {p.beds} Beds</span>
                <span className="flex items-center gap-1"><Bath size={14} /> {p.baths} Baths</span>
                <span className="flex items-center gap-1"><Maximize size={14} /> {p.sqft} sqft</span>
              </div>
              <button className="mt-4 w-full border border-gold text-gold py-2 rounded-sm text-sm font-semibold tracking-wider uppercase hover:bg-gold hover:text-primary-foreground transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProperties;
