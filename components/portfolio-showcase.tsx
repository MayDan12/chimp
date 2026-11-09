"use client";

import Image from "next/image";

export function PortfolioShowcase() {
  const portfolioItems = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-6laqPMa8FuLJLGY15UqGeDduXqPTnL.png",
      fallback: "/image1.png",
      title: "E-Commerce Experience",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-2SM27flFV2PAGevb0yGPlw5a1VO0Uc.png",
      fallback: "/image2.png",
      title: "Agency Brand Strategy",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-auovg1HaxuQFknmxHcpbfOBXQPjAWw.png",
      fallback: "/image3.png",
      title: "Mobile App Product Design",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-1SjePGsMFItZp8FKWs7dh9emmNImMD.png",
      fallback: "/image4.png",
      title: "Custom Merchandise Collection",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-mlczSZMqTq3CmnCXAs0oV6ITGeKdDV.png",
      fallback: "/flyer1.jpg",
      title: "Conversion-Focused Landing Page",
    },
  ];

  return (
    <section className="pt-4 pb-20 overflow-hidden" aria-label="Portfolio showcase">
      <div className="relative flex">
        {/* First set of images */}
        <div className="flex gap-6 animate-scroll-seamless">
          {portfolioItems.map((item, index) => (
            <div key={`set1-${index}`} className="flex-shrink-0 w-[480px] md:w-[600px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg bg-muted">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 480px, 600px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-6 animate-scroll-seamless ml-6" aria-hidden="true">
          {portfolioItems.map((item, index) => (
            <div key={`set2-${index}`} className="flex-shrink-0 w-[480px] md:w-[600px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg bg-muted">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 480px, 600px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
