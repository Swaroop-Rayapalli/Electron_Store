"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Smartphone, Laptop, Tv, Headset, Watch, Camera } from "lucide-react";

const categories = [
    { name: "Mobiles", icon: Smartphone, color: "#0071e3", href: "/products?category=mobiles", count: 124 },
    { name: "Laptops", icon: Laptop, color: "#bf4800", href: "/products?category=laptops", count: 86 },
    { name: "TVs", icon: Tv, color: "#6e6e73", href: "/products?category=tvs", count: 42 },
    { name: "Audio", icon: Headset, color: "#af52de", href: "/products?category=audio", count: 95 },
    { name: "Waitches", icon: Watch, color: "#ff3b30", href: "/products?category=watches", count: 68 },
    { name: "Cameras", icon: Camera, color: "#34c759", href: "/products?category=cameras", count: 31 },
];

export default function FeaturedCategories() {
    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Browse Intelligence</h2>
                        <p className="text-4xl md:text-5xl font-bold tracking-tight">Featured Categories</p>
                    </div>
                    <Link
                        href="/products"
                        className="text-sm font-bold text-primary hover:underline flex items-center gap-2"
                    >
                        Explore All Products
                    </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link
                                href={cat.href}
                                className="group flex flex-col items-center p-8 bg-accent/30 rounded-apple-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                            >
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-apple"
                                    style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                                >
                                    <cat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-center group-hover:text-primary transition-colors">{cat.name}</h3>
                                <p className="text-[10px] uppercase font-bold text-secondary mt-1">{cat.count} Products</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
