import { ShieldCheck, Lock, Truck } from "lucide-react";

export function TrustSection() {
    const guarantees = [
        {
            title: "Authentic Vintage",
            icon: <ShieldCheck className="h-6 w-6 text-theme-accent" />
        },
        {
            title: "Secure Checkout",
            icon: <Lock className="h-6 w-6 text-theme-accent" />
        },
        {
            title: "Tracked Shipping",
            icon: <Truck className="h-6 w-6 text-theme-accent" />
        }
    ];

    return (
        <section className="border-y border-theme-dark/10 bg-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:justify-around">
                    {guarantees.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            {item.icon}
                            <span className="text-sm font-bold uppercase tracking-widest text-theme-text">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
