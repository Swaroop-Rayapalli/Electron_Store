"use client";

import React, { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import QuickView from "@/components/QuickView";
import { Search, SlidersHorizontal, ArrowUpDown, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { products } from "@/lib/data";

const categories = ["All", "Mobiles", "Laptops", "TVs", "Audio", "Accessories"];

export default function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [quickViewProduct, setQuickViewProduct] = useState<any>(null);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <div className="min-h-screen bg-white dark:bg-black pb-24">
            {/* Header */}
            <div className="bg-accent/20 py-16 border-b">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Products</h1>
                    <p className="text-secondary max-w-xl italic">
                        Discover our curated selection of high-performance gadgets and premium electronics.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar (Desktop) */}
                    <aside className="hidden lg:block w-64 space-y-8">
                        <div>
                            <h3 className="font-bold text-sm uppercase tracking-widest mb-6 border-b pb-2">Categories</h3>
                            <div className="flex flex-col gap-3">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`text-left text-sm font-medium transition-colors hover:text-primary ${selectedCategory === cat ? "text-primary font-bold" : "text-secondary"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 bg-primary/5 rounded-apple-lg border border-primary/10">
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Need Help?</p>
                            <p className="text-xs text-secondary mb-4 italic">Not sure which tech suits your needs? Our experts are here to help.</p>
                            <button className="text-xs font-bold text-primary underline">Chat with us</button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
                            <div className="relative w-full md:w-96 group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-accent/50 rounded-apple border border-transparent focus:border-primary/30 outline-none transition-all"
                                />
                            </div>

                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <div className="lg:hidden flex-1">
                                    <select
                                        className="w-full bg-accent/50 p-3 rounded-apple text-sm font-medium border-transparent outline-none"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                    </select>
                                </div>
                                <button className="p-3 bg-accent/50 rounded-apple border border-transparent hover:border-primary/20 transition-all flex items-center gap-2 text-sm font-medium">
                                    <ArrowUpDown className="w-4 h-4" />
                                    Sort
                                </button>
                            </div>
                        </div>

                        {/* Grid */}
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.length > 0 ? (
                                <motion.div
                                    layout
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                                >
                                    {filteredProducts.map((product) => (
                                        <div onClick={() => setQuickViewProduct(product)} key={product.id}>
                                            <ProductCard {...product} />
                                        </div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="py-24 text-center"
                                >
                                    <p className="text-xl font-medium text-secondary italic">No products found matching your search.</p>
                                    <button
                                        onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                                        className="mt-4 text-primary font-bold underline"
                                    >
                                        Clear all filters
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <QuickView
                product={quickViewProduct}
                isOpen={!!quickViewProduct}
                onClose={() => setQuickViewProduct(null)}
            />
        </div>
    );
}
