"use client";

import Image from "next/image";
import { instagramFeed } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function InstagramSection() {
    return (
        <section className="bg-theme-dark py-24 text-theme-base selection:bg-theme-accent selection:text-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 mb-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-theme-base/10 pb-6">
                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-theme-accent mb-4">Community</h2>
                        <h3 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            @shop.thriftdex
                        </h3>
                    </div>
                    <a
                        href="https://www.instagram.com/shop.thriftdex/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 md:mt-0 group flex items-center gap-2 border-b border-theme-base pb-1 text-[11px] font-bold uppercase tracking-[0.2em] transition hover:text-theme-accent hover:border-theme-accent"
                    >
                        Follow Us <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>
            </div>

            {/* Horizontal scrolling feed */}
            <div className="relative w-full overflow-hidden flex hide-scrollbar">
                <motion.div
                    className="flex gap-4 px-6 lg:px-12"
                    animate={{ x: [0, -2000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40,
                    }}
                >
                    {[...instagramFeed, ...instagramFeed].map((imgSrc, idx) => (
                        <a
                            key={idx}
                            href="https://www.instagram.com/shop.thriftdex/"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative h-64 w-64 md:h-80 md:w-80 flex-none block overflow-hidden bg-theme-base/5 border border-theme-base/10"
                        >
                            <div className="absolute inset-0 z-10 bg-theme-dark/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-theme-base border border-theme-base px-4 py-2">View on IG</span>
                            </div>
                            <Image
                                src={imgSrc}
                                alt={`Instagram post ${idx + 1}`}
                                fill
                                className="object-cover grayscale transition-all duration-[1500ms] group-hover:scale-105 group-hover:grayscale-0"
                                sizes="(min-width: 768px) 320px, 256px"
                            />
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
