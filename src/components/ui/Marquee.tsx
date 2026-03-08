"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
    text: string;
}

export function Marquee({ text }: MarqueeProps) {
    return (
        <div className="flex w-full overflow-hidden border-b border-theme-dark/10 bg-theme-text py-2 text-theme-base">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 25,
                }}
            >
                <span className="mx-4 text-xs font-bold uppercase tracking-[0.2em]">{text}</span>
                <span className="mx-4 text-xs font-bold uppercase tracking-[0.2em]">{text}</span>
                <span className="mx-4 text-xs font-bold uppercase tracking-[0.2em]">{text}</span>
                <span className="mx-4 text-xs font-bold uppercase tracking-[0.2em]">{text}</span>
                <span className="mx-4 text-xs font-bold uppercase tracking-[0.2em]">{text}</span>
                <span className="mx-4 text-xs font-bold uppercase tracking-[0.2em]">{text}</span>
                <span className="mx-4 text-xs font-bold uppercase tracking-[0.2em]">{text}</span>
                <span className="mx-4 text-xs font-bold uppercase tracking-[0.2em]">{text}</span>
            </motion.div>
        </div>
    );
}
