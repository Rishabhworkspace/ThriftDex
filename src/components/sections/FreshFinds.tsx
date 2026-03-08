"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { motion } from "framer-motion";

export function FreshFinds() {
    const newArrivals = products.filter((p) => p.isNew).slice(0, 8);

    return (
        <section id="fresh-finds" className="bg-theme-base py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between border-b border-theme-dark/10 pb-6">
                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-theme-accent mb-4">Just Landed</h2>
                        <h3 className="font-serif text-4xl font-bold tracking-tight text-theme-text sm:text-5xl lg:text-6xl">
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

                <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-4">
                    {newArrivals.map((product, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            key={product.id}
                            className="group flex flex-col pt-4 sm:pt-6 border-t border-theme-dark/10 active:scale-[0.98] transition-transform"
                        >
                            <Link href={`/product/${product.id}`} className="absolute inset-0 z-10">
                                <span className="sr-only">View {product.name}</span>
                            </Link>

                            <div className="relative aspect-[3/4] w-full overflow-hidden bg-theme-dark/5">
                                <div className="absolute left-3 top-3 z-20 bg-theme-base/90 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-theme-accent">
                                    Only 1 Available
                                </div>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                />
                            </div>

                            <div className="mt-6 flex flex-1 flex-col justify-between">
                                <div>
                                    <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-theme-text/50 mb-1 line-clamp-1">{product.brand}</p>
                                    <h4 className="font-serif text-sm sm:text-lg font-bold leading-tight text-theme-text group-hover:text-theme-accent transition-colors line-clamp-2">
                                        {product.name}
                                    </h4>
                                </div>

                                <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center justify-between border-t border-theme-dark/10 pt-3 sm:pt-4 gap-1 sm:gap-0">
                                    <div className="text-[10px] sm:text-xs font-bold tracking-widest text-theme-text/70 uppercase">
                                        Size {product.size}
                                    </div>
                                    <div className="text-xs sm:text-sm font-bold text-theme-text">
                                        ₹{product.price}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
