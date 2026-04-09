import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const listings = [
  { image: property1, title: "Villa Aurora", price: "$4,500,000", location: "Marbella, Spain", beds: 5, baths: 4, sqft: "6,200", tag: "For Sale" },
  { image: property2, title: "The Pinnacle Tower", price: "$8,200,000", location: "Manhattan, NY", beds: 4, baths: 3, sqft: "4,800", tag: "For Sale" },
  { image: property3, title: "Greenfield Estate", price: "$3,900,000", location: "Hampshire, UK", beds: 7, baths: 5, sqft: "9,500", tag: "New Listing" },
  { image: property4, title: "Cedar Row Townhouse", price: "$2,100,000", location: "Portland, OR", beds: 3, baths: 2, sqft: "3,200", tag: "For Sale" },
  { image: property5, title: "Waterfront Retreat", price: "$6,750,000", location: "Miami, FL", beds: 6, baths: 5, sqft: "7,400", tag: "Exclusive" },
  { image: property6, title: "Skyline Penthouse", price: "$12,000,000", location: "New York, NY", beds: 4, baths: 4, sqft: "5,100", tag: "Premium" },
];

const PropertyListings = () => (
  <section id="properties" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <p className="text-gold text-sm tracking-[0.3em] uppercase font-semibold mb-3">Our Portfolio</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Property Listings
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((p, i) => (
          <div
            key={i}
            className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
          >
            <div className="relative overflow-hidden h-56">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-charcoal/80 text-primary-foreground text-xs font-bold px-3 py-1 rounded-sm tracking-wider uppercase">
                {p.tag}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                <span className="gold-text font-bold text-lg">{p.price}</span>
              </div>
              <p className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                <MapPin size={14} className="text-gold" /> {p.location}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-3">
                <span className="flex items-center gap-1"><Bed size={14} /> {p.beds}</span>
                <span className="flex items-center gap-1"><Bath size={14} /> {p.baths}</span>
                <span className="flex items-center gap-1"><Maximize size={14} /> {p.sqft} ft²</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PropertyListings;
