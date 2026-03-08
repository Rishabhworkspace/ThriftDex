"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-theme-dark text-theme-base pt-24 pb-12 selection:bg-theme-accent selection:text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-12 lg:gap-24">

                    <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <Link href="/" className="font-serif text-5xl font-bold tracking-tighter sm:text-7xl lg:text-8xl">
                                THRIFTDEX.
                            </Link>
                            <p className="mt-8 max-w-sm text-sm font-light leading-relaxed text-theme-base/60">
                                Curating the rarest vintage artifacts from around the world. Restoring the past for the future.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-6 lg:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-12 font-medium">
                        <div>
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-theme-base/40 mb-6">Archive</h3>
                            <ul className="space-y-4 text-sm tracking-wide text-theme-base/80">
                                <li><Link href="/" className="hover:text-theme-accent transition">Shop All</Link></li>
                                <li><Link href="#rare-finds" className="hover:text-theme-accent transition">Rare Finds</Link></li>
                                <li><Link href="#fresh-finds" className="hover:text-theme-accent transition">Latest Drops</Link></li>
                                <li><Link href="#" className="hover:text-theme-accent transition">Staff Picks</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-theme-base/40 mb-6">Service</h3>
                            <ul className="space-y-4 text-sm tracking-wide text-theme-base/80">
                                <li><Link href="#" className="hover:text-theme-accent transition">Shipping</Link></li>
                                <li><Link href="#" className="hover:text-theme-accent transition">Returns</Link></li>
                                <li><Link href="#" className="hover:text-theme-accent transition">Authenticity Guarantee</Link></li>
                                <li><Link href="#" className="hover:text-theme-accent transition">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-span-2 lg:col-span-1">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-theme-base/40 mb-6">Socials</h3>
                            <ul className="space-y-4 text-sm tracking-wide text-theme-base/80">
                                <li>
                                    <a href="https://www.instagram.com/shop.thriftdex/" target="_blank" rel="noreferrer" className="group flex items-center gap-1 hover:text-theme-accent transition">
                                        Instagram <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group flex items-center gap-1 hover:text-theme-accent transition">
                                        TikTok <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-32 pt-8 border-t border-theme-base/10 flex flex-col items-center justify-between gap-6 md:flex-row text-[10px] font-bold uppercase tracking-[0.1em] text-theme-base/40">
                    <p>
                        &copy; {new Date().getFullYear()} THRIFTDEX. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-6 sm:gap-8 items-center">
                        <Link href="#" className="hover:text-theme-base transition">Privacy</Link>
                        <Link href="#" className="hover:text-theme-base transition">Terms</Link>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="hidden sm:flex hover:text-theme-base transition items-center gap-1 group"
                        >
                            Back To Top <ArrowUpRight className="h-3 w-3 -rotate-45 transition-transform group-hover:-translate-y-0.5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
