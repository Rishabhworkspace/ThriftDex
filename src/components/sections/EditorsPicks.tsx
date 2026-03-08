"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { motion } from "framer-motion";

export function EditorsPicks() {
    const staffPicks = products.filter((p) => p.isStaffPick).slice(0, 3);

    if (staffPicks.length === 0) return null;

    return (
        <section className="bg-theme-dark py-24 text-theme-base selection:bg-theme-accent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between border-b border-theme-base/10 pb-6">
                    <div className="max-w-xl">
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-theme-accent mb-4">Curriculum</h2>
                        <h3 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl tracking-tight">
                            Editor&apos;s Picks
                        </h3>
                    </div>
                    <p className="mt-6 md:mt-0 max-w-sm text-sm font-medium leading-relaxed tracking-wide text-theme-base/60">
                        Selected pieces from our latest sourcing trips. Items that transcend thrift and enter the realm of archive fashion.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
                    {staffPicks.map((product, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            key={product.id}
                            className="group relative flex flex-col"
                        >
                            <Link href={`/product/${product.id}`} className="absolute inset-0 z-10">
                                <span className="sr-only">View {product.name}</span>
                            </Link>

                            <div className="relative aspect-[3/4] w-full overflow-hidden bg-theme-dark border border-theme-base/10 shadow-2xl">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.03] group-hover:opacity-80"
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                />
                            </div>

                            <div className="mt-4 sm:mt-8 flex flex-col">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 sm:mb-2 gap-1 sm:gap-0">
                                    <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-theme-base/60 line-clamp-1">{product.brand}</p>
                                    <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-theme-accent">Staff Pick</p>
                                </div>
                                <h4 className="font-serif text-sm sm:text-2xl font-bold leading-tight text-theme-base group-hover:text-theme-accent transition-colors line-clamp-2">
                                    {product.name}
                                </h4>
                                <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-theme-base/80 border-t border-theme-base/10 pt-3 sm:pt-4">
                                    <span>Size {product.size}</span>
                                    <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-theme-base/40"></span>
                                    <span>₹{product.price}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
