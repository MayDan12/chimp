import Image from "next/image";

export function ClientLogos() {
  const logos = [
    { name: "Partner 1", src: "/logos/logoipsum-254.svg" },
    { name: "Partner 2", src: "/logos/logoipsum-257.svg" },
    { name: "Partner 3", src: "/logos/logoipsum-251.svg" },
    { name: "Partner 4", src: "/logos/logoipsum-242.svg" },
    { name: "Partner 5", src: "/logos/logoipsum-258.svg" },
  ];

  return (
    <section className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-8 text-foreground/60">
          Trusted By Industry Leaders
        </h2>
        <div className="flex items-center justify-center gap-12 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center h-10 w-36 relative">
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
