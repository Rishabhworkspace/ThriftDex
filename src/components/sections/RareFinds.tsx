"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function RareFinds() {
    const rareItems = products.filter((p) => p.isRare).slice(0, 4);

    return (
        <section id="rare-finds" className="bg-theme-base py-24 border-t border-theme-dark/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="mb-16 flex flex-col items-center justify-center text-center">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-theme-accent mb-4">Grails Only</h2>
                    <h3 className="font-serif text-4xl font-bold tracking-tight text-theme-dark sm:text-5xl lg:text-7xl">
                        The Rare Archive
                    </h3>
                    <p className="mt-6 max-w-2xl text-sm font-medium leading-relaxed text-theme-text/60">
                        Highly sought after, virtually impossible to find twice. These are the grails that define the ThriftDex collection.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-12">
                    {rareItems.map((product, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            key={product.id}
                            className="group relative flex flex-col sm:even:mt-24"
                        >
                            <Link href={`/product/${product.id}`} className="absolute inset-0 z-10">
                                <span className="sr-only">View {product.name}</span>
                            </Link>

                            <div className="relative aspect-[4/5] w-full overflow-hidden bg-theme-dark/5">
                                <div className="absolute right-3 top-3 z-30 opacity-70 hover:opacity-100 transition-opacity">
                                    <button aria-label="Add to wishlist" className="p-1">
                                        <Heart className="w-5 h-5 text-theme-text" strokeWidth={1.5} />
                                    </button>
                                </div>
                                <div className="absolute left-3 top-3 z-20 flex items-center gap-2 bg-theme-base/90 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-theme-dark">
                                    <div className="h-1.5 w-1.5 rounded-full bg-theme-accent animate-pulse" />
                                    Grail Status
                                </div>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                                    sizes="(min-width: 640px) 50vw, 100vw"
                                />
                            </div>

                            <div className="mt-4 flex flex-col items-start text-left">
                                <h4 className="font-serif text-sm sm:text-lg font-bold text-theme-text group-hover:text-theme-accent transition-colors line-clamp-1 mb-1">
                                    {product.name}
                                </h4>
                                <div className="text-[11px] sm:text-xs text-theme-text/80">
                                    ₹{product.price}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 flex justify-center">
                    <Link
                        href="/shop?filter=rare"
                        className="group relative inline-flex h-16 items-center justify-center overflow-hidden border border-theme-text bg-transparent px-12 font-bold uppercase tracking-[0.2em] text-theme-text text-xs transition-colors hover:bg-theme-text hover:text-theme-base"
                    >
                        <span>Explore The Full Archive</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
