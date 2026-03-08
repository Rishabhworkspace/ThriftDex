export function Categories() {
    const categories = [
        { title: "Outerwear", filter: "Jackets" },
        { title: "Knits & Sweats", filter: "Sweatshirts" },
        { title: "Graphic Tees", filter: "Shirts" },
        { title: "Heavy Vintage", filter: "Hoodies" }
    ];

    return (
        <section className="bg-theme-base py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="mb-10 font-serif text-3xl font-bold text-theme-text text-center">Shop By Category</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
                    {categories.map((cat, idx) => (
                        <a
                            key={idx}
                            href={`/shop?category=${cat.filter}`}
                            className="group flex h-32 flex-col items-center justify-center border border-theme-dark/10 bg-white transition hover:border-theme-accent hover:bg-theme-base sm:h-48"
                        >
                            <h3 className="font-serif text-lg font-bold text-theme-text sm:text-2xl">{cat.title}</h3>
                            <span className="mt-2 text-xs uppercase tracking-widest text-theme-text/50 transition group-hover:text-theme-accent">Explore</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
