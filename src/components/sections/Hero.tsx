"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/data";

export function Hero() {
    const heroImages = products.slice(0, 3).map((p) => p.image);

    return (
        <section className="relative w-full bg-theme-base pt-10 pb-20 md:pt-16 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row relative">

                    {/* Main Title overlay */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="z-20 lg:w-1/2 flex flex-col justify-center pt-4 lg:pt-32"
                    >
                        <h1 className="font-serif text-6xl font-bold leading-[0.9] tracking-tighter text-theme-text sm:text-8xl lg:text-[10rem] uppercase lg:mix-blend-difference z-30">
                            The <br /> Archive.
                        </h1>
                        <p className="mt-8 max-w-sm text-sm font-medium uppercase tracking-[0.2em] text-theme-text/80 leading-relaxed pl-2 border-l border-theme-accent">
                            Curated Vintage Garments. <br />
                            Sourced globally. <br />
                            Restored for the future.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 px-6 md:px-0">
                            <Link
                                href="#fresh-finds"
                                className="group relative inline-flex w-full sm:w-auto h-14 items-center justify-center overflow-hidden bg-theme-text px-8 font-bold uppercase tracking-widest text-theme-base text-xs transition-all hover:bg-theme-accent active:scale-95"
                            >
                                <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-12">Shop Latest</span>
                                <span className="absolute inset-0 z-10 flex items-center justify-center transition-transform duration-500 translate-y-12 group-hover:translate-y-0">Shop Latest</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Asymmetrical Image Layout */}
                    <div className="relative mt-8 w-full lg:mt-0 lg:w-1/2 min-h-[400px] sm:min-h-[500px] lg:min-h-[800px] z-10">
                        {/* Primary Large Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute right-0 top-0 h-[80%] w-[75%] lg:h-[85%] lg:w-[70%] z-20 shadow-2xl"
                        >
                            <div className="relative h-full w-full overflow-hidden bg-theme-dark/5">
                                <Image
                                    src={heroImages[0]}
                                    alt="Editorial Hero Image"
                                    fill
                                    className="object-cover transition-transform duration-[2000ms] hover:scale-105"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Secondary Off-axis Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute bottom-0 left-0 h-[50%] w-[50%] lg:h-[45%] lg:w-[45%] z-30 shadow-xl border-4 border-theme-base"
                        >
                            <div className="relative h-full w-full overflow-hidden bg-theme-dark/5">
                                <Image
                                    src={heroImages[1]}
                                    alt="Editorial Detail"
                                    fill
                                    className="object-cover transition-transform duration-[2000ms] hover:scale-105"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Tertiary Background Image */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                            className="absolute top-20 -left-20 h-[40%] w-[40%] z-0"
                        >
                            <div className="relative h-full w-full overflow-hidden mix-blend-multiply grayscale">
                                <Image
                                    src={heroImages[2]}
                                    alt="Background Texture"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
