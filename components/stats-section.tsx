"use client"

import { motion } from "framer-motion"

export function StatsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-16 leading-tight text-balance"
        >
          <span className="text-accent">Building brands</span>, elevating experiences, and{" "}
          <span className="text-accent">driving growth</span>. Let&apos;s build your success together.
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">50</span>
              <span className="text-accent text-5xl md:text-6xl font-serif font-bold">+</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Projects Delivered</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              We&apos;ve successfully completed over 50 world-class projects across web, video, and merch—and we&apos;re just getting started!
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">85</span>
              <span className="text-accent text-5xl md:text-6xl font-serif font-bold">%</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Revenue Growth</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Our creative strategies have helped brands achieve up to 85% revenue improvements in just one year!
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">30</span>
              <span className="text-accent text-5xl md:text-6xl font-serif font-bold">+</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Brand Partners</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              More than 30 ambitious brands trust us to deliver creative that drives real business growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
