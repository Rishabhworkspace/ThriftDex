"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";

export function CategorySpotlight() {
    const denimItems = products.filter(p => p.category === "Jackets" || p.tags?.includes("denim")).slice(0, 4);

    if (denimItems.length < 1) return null;

    const showcaseItem = denimItems[0];
    const gridItems = denimItems.slice(1);

    return (
        <section className="bg-theme-base py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Section Header / Lead Image */}
                    <div className="lg:w-1/3 flex flex-col justify-between">
                        <div>
                            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-theme-accent mb-4">Category Spotlight</h2>
                            <h3 className="font-serif text-5xl font-bold tracking-tighter text-theme-text mb-6">The Denim Archive</h3>
                            <p className="text-sm tracking-wide leading-relaxed text-theme-text/70 mb-10">
                                Faded, distressed, and perfectly broken in. Explore our curated selection of vintage denim jackets and bottoms spanning the last three decades.
                            </p>
                            <Link
                                href="/shop?category=denim"
                                className="inline-block border-b border-theme-text pb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-theme-text transition hover:text-theme-accent hover:border-theme-accent"
                            >
                                View All Denim
                            </Link>
                        </div>

                        <div className="mt-12 lg:mt-16 relative aspect-square sm:aspect-[4/5] w-full block overflow-hidden group">
                            <Link href={`/product/${showcaseItem.id}`} className="absolute inset-0 z-10" />
                            <Image
                                src={showcaseItem.image}
                                alt={showcaseItem.name}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                sizes="(min-width: 1024px) 40vw, 100vw"
                            />
                            <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 z-20 bg-theme-base/90 backdrop-blur-sm p-4 border border-theme-dark/10 shadow-lg">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-theme-text/60 mb-1">{showcaseItem.brand}</p>
                                <p className="font-serif font-bold text-lg text-theme-text">{showcaseItem.name}</p>
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="lg:w-2/3 grid grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
                        {gridItems.map((item) => (
                            <div key={item.id} className="group flex flex-col relative">
                                <Link href={`/product/${item.id}`} className="absolute inset-0 z-10" />
                                <div className="relative aspect-[3/4] w-full overflow-hidden bg-theme-dark/5">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                                        sizes="(min-width: 1024px) 30vw, 50vw"
                                    />
                                </div>
                                <div className="mt-4 sm:mt-6">
                                    <h4 className="font-serif text-sm sm:text-xl font-bold text-theme-text line-clamp-2">{item.name}</h4>
                                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-theme-text/60">₹{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
