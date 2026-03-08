"use client";

import Link from "next/link";
import { ShoppingBag, Search } from "lucide-react";

export function Navbar() {

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-theme-dark/5 bg-theme-base/90 backdrop-blur-xl">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <div className="flex-1 md:flex-initial">
                            <Link href="/" className="font-serif text-3xl font-bold tracking-tighter text-theme-text transition hover:opacity-80">
                                THRIFTDEX.
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex flex-1 justify-center">
                            <ul className="flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.15em] text-theme-text/80">
                                <li><Link href="#" className="transition hover:text-theme-dark hover:underline underline-offset-4">Shop All</Link></li>
                                <li><Link href="#fresh-finds" className="transition hover:text-theme-dark hover:underline underline-offset-4">New Arrivals</Link></li>
                                <li><Link href="#rare-finds" className="transition text-theme-accent hover:underline underline-offset-4">The Archive</Link></li>
                                <li><Link href="#about" className="transition hover:text-theme-dark hover:underline underline-offset-4">Editorial</Link></li>
                            </ul>
                        </nav>

                        {/* Icons */}
                        <div className="hidden md:flex items-center gap-6">
                            <button className="text-theme-text/80 hover:text-theme-dark transition">
                                <span className="sr-only">Search</span>
                                <Search strokeWidth={1.5} className="h-5 w-5" />
                            </button>
                            <button className="text-theme-text/80 hover:text-theme-dark transition relative group">
                                <span className="sr-only">Cart</span>
                                <ShoppingBag strokeWidth={1.5} className="h-5 w-5" />
                                <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-theme-accent text-[9px] font-bold text-theme-base">
                                    0
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
