"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { ChevronLeft, ShieldCheck, Truck, Lock } from "lucide-react";
import { useState } from "react";

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        notFound();
    }

    const [activeImage, setActiveImage] = useState(product.gallery[0]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollLeft, clientWidth } = e.currentTarget;
        const slideIndex = Math.round(scrollLeft / clientWidth);
        if (slideIndex !== currentSlide) {
            setCurrentSlide(slideIndex);
        }
    };

    return (
        <div className="bg-theme-base min-h-screen py-12 md:py-24 pb-48 md:pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">

                {/* Breadcrumb */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-theme-text/60 hover:text-theme-accent transition mb-12"
                >
                    <ChevronLeft className="h-4 w-4" />
                    Back to Archive
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Desktop Gallery */}
                    <div className="hidden lg:flex flex-col gap-6 sticky top-24">
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-theme-dark/5 border border-theme-dark/10">
                            {product.isRare && (
                                <div className="absolute top-4 left-4 z-20 bg-theme-base px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-theme-accent shadow-sm border border-theme-dark/10">
                                    Rare Archive
                                </div>
                            )}
                            <Image
                                src={activeImage}
                                alt={product.name}
                                fill
                                priority
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                            />
                        </div>

                        {product.gallery.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {product.gallery.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImage(img)}
                                        className={`relative aspect-[3/4] overflow-hidden border ${activeImage === img ? 'border-theme-text' : 'border-transparent opacity-60 hover:opacity-100'} transition bg-theme-dark/5`}
                                    >
                                        <Image src={img} alt={`${product.name} detail`} fill className="object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile Snap Carousel */}
                    <div className="lg:hidden w-full relative -mx-4 sm:-mx-6 px-4 sm:px-6 mb-8 flex flex-col gap-4">
                        <div
                            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-4"
                            onScroll={handleScroll}
                        >
                            {product.gallery.map((img, idx) => (
                                <div key={idx} className="w-[85vw] sm:w-[70vw] flex-none snap-center relative aspect-[3/4] overflow-hidden bg-theme-dark/5 border border-theme-dark/10">
                                    {product.isRare && idx === 0 && (
                                        <div className="absolute top-4 left-4 z-20 bg-theme-base px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-theme-accent shadow-sm border border-theme-dark/10">
                                            Rare Archive
                                        </div>
                                    )}
                                    <Image src={img} alt={`${product.name} - View ${idx + 1}`} fill priority={idx === 0} className="object-cover" sizes="85vw" />
                                </div>
                            ))}
                        </div>
                        {/* Pagination Dots */}
                        {product.gallery.length > 1 && (
                            <div className="flex justify-center items-center gap-2">
                                {product.gallery.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-theme-text' : 'w-1.5 bg-theme-text/20'}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Details */}
                    <div className="flex flex-col lg:py-10">
                        <div className="border-b border-theme-dark/10 pb-8 mb-8">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-theme-text/50 mb-4">{product.brand}</p>
                            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-theme-text mb-6">
                                {product.name}
                            </h1>
                            <div className="flex items-end justify-between">
                                <p className="text-2xl font-bold text-theme-text">₹{product.price}</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-theme-accent bg-theme-accent/10 px-3 py-1.5 rounded-sm">
                                    Only 1 Available
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6 mb-12">
                            <div className="grid grid-cols-3 border border-theme-dark/10 divide-x divide-theme-dark/10 text-center text-xs font-bold uppercase tracking-widest">
                                <div className="p-4 bg-white/50">
                                    <span className="block text-theme-text/50 text-[9px] mb-1 leading-none">Size</span>
                                    {product.size}
                                </div>
                                <div className="p-4 bg-white/50">
                                    <span className="block text-theme-text/50 text-[9px] mb-1 leading-none">Condition</span>
                                    {product.condition}
                                </div>
                                <div className="p-4 bg-white/50">
                                    <span className="block text-theme-text/50 text-[9px] mb-1 leading-none">Category</span>
                                    {product.category}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 mb-12">
                            <button className="w-full h-14 bg-theme-text text-theme-base text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-theme-accent flex items-center justify-center">
                                Add to Cart
                            </button>
                            <button className="w-full h-14 bg-transparent border border-theme-text text-theme-text text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-theme-dark/5 flex items-center justify-center">
                                Buy It Now
                            </button>
                        </div>

                        <div className="border-t border-theme-dark/10 pt-8 space-y-6">
                            <div className="flex items-start gap-4">
                                <ShieldCheck className="h-5 w-5 text-theme-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                                <div>
                                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-theme-text mb-1">Authenticity Guaranteed</h4>
                                    <p className="text-sm font-medium text-theme-text/60 leading-relaxed">Every item is heavily scrutinized by our vintage experts before listing. Guaranteed authentic.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Lock className="h-5 w-5 text-theme-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                                <div>
                                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-theme-text mb-1">Secure Checkout</h4>
                                    <p className="text-sm font-medium text-theme-text/60 leading-relaxed">Your payment information is processed securely. We do not store credit card details.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Truck className="h-5 w-5 text-theme-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                                <div>
                                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-theme-text mb-1">Fast Global Shipping</h4>
                                    <p className="text-sm font-medium text-theme-text/60 leading-relaxed">Ships within 24-48 hours. Tracking provided. Free shipping on orders over ₹5000.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Mobile Sticky Add to Cart Bar */}
            <div className="md:hidden fixed bottom-16 left-0 right-0 z-40 bg-theme-base border-t border-theme-dark/10 p-4 pb-safe flex items-center justify-between gap-6 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
                <div className="flex flex-col">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-theme-text/50">Total</span>
                    <span className="text-lg font-bold text-theme-text">₹{product.price}</span>
                </div>
                <button className="flex-1 h-12 bg-theme-text text-theme-base text-xs font-bold uppercase tracking-[0.2em] active:scale-95 transition-transform flex items-center justify-center">
                    Add to Cart
                </button>
            </div>

        </div>
    );
}
