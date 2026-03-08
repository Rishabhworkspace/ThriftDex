"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function TodaysDrop() {
    return (
        <section className="bg-theme-dark text-theme-base py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto flex max-w-3xl flex-col items-center text-center"
                >
                    <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-theme-accent">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-theme-accent"></span>
                        </span>
                        Live Now
                    </span>
                    <h2 className="mt-6 font-serif text-5xl font-bold uppercase md:text-7xl">
                        Today&apos;s Drop
                    </h2>
                    <p className="mt-6 text-xl text-theme-base/80">
                        12 ITEMS RELEASED. SHOP BEFORE THEY&apos;RE GONE.
                    </p>
                    <div className="mt-10">
                        <Link
                            href="#fresh-finds"
                            className="inline-flex h-14 w-full sm:w-auto items-center justify-center bg-white px-8 text-sm font-semibold uppercase tracking-widest text-theme-dark transition hover:bg-theme-accent hover:text-white active:scale-95"
                        >
                            Shop The Drop
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
