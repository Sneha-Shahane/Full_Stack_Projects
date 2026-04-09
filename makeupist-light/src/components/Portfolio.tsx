const images = [
  { src: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80", alt: "Bridal Glam", category: "Bridal" },
  { src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80", alt: "Wedding Guest", category: "Wedding" },
  { src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80", alt: "Mehndi Ceremony", category: "Traditional" },
  { src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80", alt: "Professional Look", category: "Corporate" },
  { src: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=600&q=80", alt: "Party Glam", category: "Party" },
  { src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80", alt: "Beauty Tools", category: "Behind the Scenes" },
  { src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80", alt: "Editorial Fashion", category: "Editorial" },
  { src: "https://images.unsplash.com/photo-1588006173527-b31e5cee4bf4?w=600&q=80", alt: "Soft Glam", category: "Everyday" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80", alt: "Engagement Shoot", category: "Engagement" },
  { src: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=600&q=80", alt: "Luxury Cosmetics", category: "Products" },
  { src: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=600&q=80", alt: "Evening Smokey", category: "Evening" },
];

const Portfolio = () => (
  <section id="portfolio" className="py-24 px-6">
    <div className="container mx-auto">
      <p className="font-body text-xs uppercase tracking-[0.3em] text-accent text-center mb-3">Portfolio</p>
      <h2 className="font-heading text-4xl md:text-5xl text-center text-foreground mb-16">
        My <span className="italic text-accent">Work</span>
      </h2>

      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-2xl break-inside-avoid shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <div className="flex flex-col gap-1">
                <span className="font-body text-[10px] text-accent tracking-wider uppercase">{img.category}</span>
                <span className="font-body text-xs text-foreground tracking-wider bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  {img.alt}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
