"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ServicesSection() {
  const services = [
    {
      title: "Website Development",
      image: "/image1.png",
      overlayImage: "/image2.png",
    },
    {
      title: "Agency Solutions",
      image: "/image2.png",
      overlayImage: "/image1.png",
    },
    {
      title: "Shopify E-commerce",
      image: "/image3.png",
      overlayImage: "/image4.png",
    },
    {
      title: "Merch Design",
      image: "/flyer1.jpg",
      overlayImage: "/flyer2.jpg",
    },
    {
      title: "Videography",
      image: "/image4.png",
      overlayImage: "/flyer2.jpg",
    },
    {
      title: "Rebranding",
      image: "/flyer2.jpg",
      overlayImage: "/flyer1.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 w-full bg-background" id="services">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground mb-4 tracking-tight"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-muted-foreground"
          >
            Everything your brand needs to stand out and scale.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary/30 rounded-3xl p-8 flex flex-col h-[320px] transition-all duration-300 hover:bg-secondary/50"
            >
              {/* Image Container */}
              <div className="relative flex-grow flex items-center justify-center mb-6">
                {/* Back Image */}
                <div className="absolute w-44 aspect-[4/3] rounded-lg shadow-md overflow-hidden transform -rotate-6 transition-all duration-300 ease-in-out group-hover:rotate-[-10deg] group-hover:scale-105">
                  <Image
                    src={service.image}
                    alt={`${service.title} showcase`}
                    fill
                    sizes="(max-width: 768px) 176px, 176px"
                    className="object-cover"
                  />
                </div>
                {/* Front Image */}
                <div className="absolute w-44 aspect-[4/3] rounded-lg shadow-lg overflow-hidden transform rotate-3 transition-all duration-300 ease-in-out group-hover:rotate-[5deg] group-hover:scale-105">
                  <Image
                    src={service.overlayImage}
                    alt={`${service.title} preview`}
                    fill
                    sizes="(max-width: 768px) 176px, 176px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Service Title */}
              <h3 className="font-sans text-left text-lg font-medium text-foreground mt-auto">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
