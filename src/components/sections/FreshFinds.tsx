"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export function FreshFinds() {
    const [activeFilter, setActiveFilter] = useState("ALL");

    const filters = ["ALL", "SHIRTS", "OUTERWEAR", "DENIM & BOTTOMS", "SWEATS"];

    const filteredArrivals = products
        .filter((p) => p.isNew)
        .filter((p) => {
            if (activeFilter === "ALL") return true;
            if (activeFilter === "SHIRTS") return p.category === "Shirts";
            if (activeFilter === "OUTERWEAR") return p.category === "Jackets";
            if (activeFilter === "DENIM & BOTTOMS") return p.category === "Pants";
            if (activeFilter === "SWEATS") return p.category === "Hoodies" || p.category === "Sweatshirts";
            return true;
        })
        .slice(0, 8);

    return (
        <section id="fresh-finds" className="bg-theme-base py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between border-b border-theme-dark/10 pb-6">
                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-theme-accent mb-4">Just Landed</h2>
                        <h3 className="font-serif text-4xl font-bold tracking-tight text-theme-dark sm:text-5xl lg:text-6xl">
                            Fresh Finds
                        </h3>
                    </div>
                    <Link
                        href="#"
                        className="inline-flex h-12 sm:h-auto items-center justify-center border-b border-theme-dark text-[10px] font-bold uppercase tracking-widest text-theme-dark transition hover:text-theme-accent hover:border-theme-accent active:scale-95"
                    >
                        View All Series
                    </Link>
                </div>

                <div className="mb-8 w-full overflow-x-auto hide-scrollbar -mx-4 sm:mx-0 px-4 sm:px-0">
                    <div className="flex gap-3 pb-2 sm:flex-wrap">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`whitespace-nowrap rounded-sm border px-6 py-2.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest transition-colors ${activeFilter === filter
                                    ? "border-theme-dark bg-theme-dark text-theme-base"
                                    : "border-theme-dark/20 text-theme-dark/60 hover:border-theme-dark/40"
                                    } active:scale-95`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-4">
                    <AnimatePresence mode="popLayout">
                        {filteredArrivals.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={product.id}
                                className="group flex flex-col active:scale-[0.98] transition-transform"
                            >
                                <Link href={`/product/${product.id}`} className="absolute inset-0 z-10">
                                    <span className="sr-only">View {product.name}</span>
                                </Link>

                                <div className="relative aspect-[3/4] w-full overflow-hidden bg-theme-dark/5">
                                    <div className="absolute right-3 top-3 z-30 opacity-70 hover:opacity-100 transition-opacity">
                                        <button aria-label="Add to wishlist" className="p-1">
                                            <Heart className="w-5 h-5 text-theme-text" strokeWidth={1.5} />
                                        </button>
                                    </div>
                                    {product.isNew && (
                                        <div className="absolute left-3 top-3 z-20 bg-theme-base/90 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-theme-dark">
                                            New
                                        </div>
                                    )}
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                    />
                                </div>

                                <div className="mt-4 flex flex-col items-start text-left">
                                    <h4 className="text-xs sm:text-sm font-bold text-theme-text group-hover:text-theme-accent transition-colors line-clamp-1 mb-1">
                                        {product.name}
                                    </h4>
                                    <div className="text-[11px] sm:text-xs text-theme-text/80">
                                        ₹{product.price}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
