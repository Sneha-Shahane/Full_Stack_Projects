const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image collage */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
        <div className="relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80" alt="Makeup artistry" className="w-full h-full object-cover" />
        </div>
        <div className="relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80" alt="Beauty studio" className="w-full h-full object-cover" />
        </div>
        <div className="relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80" alt="Bridal makeup" className="w-full h-full object-cover" />
        </div>
        <div className="relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80" alt="Professional look" className="w-full h-full object-cover" />
        </div>
        <div className="relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1503236823255-94609f598e71?w=800&q=80" alt="Party glam" className="w-full h-full object-cover" />
        </div>
        <div className="relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80" alt="Editorial fashion" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p
          className="font-body text-xs md:text-sm uppercase tracking-[0.4em] text-accent mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Professional Makeup Artist
        </p>
        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          Where Beauty
          <br />
          <span className="italic text-accent">Meets Art</span>
        </h1>
        <p
          className="font-body text-sm md:text-base text-muted-foreground max-w-md mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          Cinematic glam, bridal elegance & editorial looks — crafted by Makeupist.
        </p>
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "1.1s" }}>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-gradient text-foreground font-body text-sm font-medium px-8 py-4 rounded-[20px] hover:scale-105 transition-all duration-300 shadow-md"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
