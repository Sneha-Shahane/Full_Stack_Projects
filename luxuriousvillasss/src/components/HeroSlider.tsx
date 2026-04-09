import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroVilla1 from "@/assets/hero-villa-1.jpg";
import heroVilla2 from "@/assets/hero-villa-2.jpg";
import heroVilla3 from "@/assets/hero-villa-3.jpg";

const slides = [
  { image: heroVilla1, title: "Oceanfront Paradise", subtitle: "Experience luxury living at its finest" },
  { image: heroVilla2, title: "Urban Sophistication", subtitle: "Penthouse living above the city skyline" },
  { image: heroVilla3, title: "Beachfront Elegance", subtitle: "Your private sanctuary awaits" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-charcoal/40" />
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="text-gold-light text-sm sm:text-base tracking-[0.3em] uppercase font-body mb-4 animate-slide-up">
          Luxury Real Estate
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-4 animate-slide-up-delay">
          {slides[current].title}
        </h1>
        <p className="text-primary-foreground/80 text-lg sm:text-xl max-w-2xl font-light animate-slide-up-delay-2">
          {slides[current].subtitle}
        </p>
        <a
          href="#properties"
          className="mt-8 gold-gradient text-primary-foreground px-8 py-3 rounded-sm text-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity animate-slide-up-delay-2"
        >
          Explore Properties
        </a>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-primary-foreground/70 hover:text-gold transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-primary-foreground/70 hover:text-gold transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={40} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-gold w-8" : "bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
