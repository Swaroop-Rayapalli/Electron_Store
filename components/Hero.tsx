"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-accent/20">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl opacity-50" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            <Sparkles className="w-3 h-3" />
                            <span>Latest Arrivals 2026</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
                            Next-Gen Tech <br />
                            <span className="text-primary italic font-serif">Unleashed.</span>
                        </h1>
                        <p className="text-lg text-secondary mb-8 max-w-md">
                            Experience the pinnacle of innovation with our curated collection of premium electronics. Designed for the future, available today.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/products"
                                className="px-8 py-4 bg-primary text-white rounded-apple font-bold hover:shadow-apple-hover transition-all duration-300 flex items-center gap-2 group"
                            >
                                Shop Now
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/about"
                                className="px-8 py-4 glass-effect rounded-apple font-bold hover:bg-accent transition-all duration-300"
                            >
                                Learn More
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center gap-8 border-t border-border pt-8">
                            <div>
                                <p className="text-3xl font-bold">50k+</p>
                                <p className="text-xs text-secondary uppercase tracking-widest">Happy Clients</p>
                            </div>
                            <div className="w-px h-10 bg-border" />
                            <div>
                                <p className="text-3xl font-bold">15+</p>
                                <p className="text-xs text-secondary uppercase tracking-widest">Store Locations</p>
                            </div>
                            <div className="w-px h-10 bg-border" />
                            <div>
                                <p className="text-3xl font-bold">24/7</p>
                                <p className="text-xs text-secondary uppercase tracking-widest">Premium Support</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-square w-full max-w-lg mx-auto">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                            <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                                <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-apple-lg border border-white/20 shadow-apple flex items-center justify-center overflow-hidden group relative">
                                    <Image src="/17pro.webp" alt="iPhone 17 Pro" fill className="object-contain transition-opacity z-0" />
                                    <div className="text-center p-12 relative z-10">
                                        <p className="text-sm font-bold text-primary mb-2 uppercase tracking-widest text-shadow-sm">Featured</p>
                                        <h2 className="text-4xl font-bold mb-4 drop-shadow-md text-white">iPhone 17 Pro</h2>
                                        <p className="text-white mb-6 italic text-sm font-medium drop-shadow-md">Titanium. Beyond Imagination.</p>
                                        <p className="text-white/60 text-xs font-medium tracking-widest uppercase">Available Now</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Element */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 -right-10 p-4 glass-effect rounded-apple shadow-apple hidden md:block"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-secondary">Best Seller</p>
                                        <p className="text-sm font-bold">MacBook M4 Pro</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
