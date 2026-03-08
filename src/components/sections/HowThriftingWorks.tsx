"use client";

import { motion } from "framer-motion";

export function HowThriftingWorks() {
    const steps = [
        {
            title: "Sourcing",
            desc: "We handpick rare vintage pieces from curated archives worldwide.",
            step: "01"
        },
        {
            title: "Curation",
            desc: "Each item is thoroughly cleaned, inspected, and authenticated.",
            step: "02"
        },
        {
            title: "The Drop",
            desc: "Once a piece is sold, it's gone forever. No restocks, just 1-of-1 finds.",
            step: "03"
        }
    ];

    return (
        <section className="bg-theme-base py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="font-serif text-3xl font-bold text-theme-text md:text-4xl">How The Archive Works</h2>
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            key={idx}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className="mb-6 text-6xl font-serif text-theme-dark/5">{step.step}</div>
                            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-theme-text">{step.title}</h3>
                            <p className="text-sm text-theme-text/70 max-w-xs">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
