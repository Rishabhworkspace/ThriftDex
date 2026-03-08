"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
    product: {
        name: string;
        isRare: boolean;
        gallery: string[];
    };
}

export function ProductGallery({ product }: ProductGalleryProps) {
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
        <>
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
        </>
    );
}
