"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, LayoutGrid, ShoppingBag, User } from "lucide-react";

export function BottomNav() {
    const pathname = usePathname();

    const navItems = [
        { icon: Home, label: "Home", href: "/" },
        { icon: Search, label: "Search", href: "#" },
        { icon: LayoutGrid, label: "Archive", href: "#rare-finds" },
        { icon: ShoppingBag, label: "Cart", href: "#" },
        { icon: User, label: "Profile", href: "#" },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 w-full border-t border-theme-dark/10 bg-theme-base/90 backdrop-blur-xl pb-safe">
            <div className="flex h-16 items-center justify-around px-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || (pathname === "/" && item.href === "/");
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex flex-col items-center justify-center w-full h-full gap-1 active:scale-95 transition-transform ${isActive ? "text-theme-dark" : "text-theme-text/50"}`}
                        >
                            <div className="relative">
                                <Icon strokeWidth={1.5} fill={isActive ? "currentColor" : "none"} className="h-[22px] w-[22px]" />
                                {item.label === "Cart" && (
                                    <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-theme-accent text-[9px] font-bold text-theme-base">
                                        0
                                    </span>
                                )}
                            </div>
                            <span className="text-[9px] font-semibold tracking-wider uppercase">{item.label}</span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    );
}
