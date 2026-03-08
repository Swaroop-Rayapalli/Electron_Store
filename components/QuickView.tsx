"use client";

import React from "react";
import Image from "next/image";
import { X, Check, Info, MessageCircle, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
    id: string;
    name: string;
    price: string;
    category: string;
    image: string;
    description?: string;
    specs?: Record<string, string>;
}

interface QuickViewProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function QuickView({ product, isOpen, onClose }: QuickViewProps) {
    if (!product) return null;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}.`)}`;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl bg-white dark:bg-black rounded-apple-lg shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 glass-effect rounded-full hover:bg-red-500 hover:text-white transition-all"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Image Section */}
                        <div className="md:w-1/2 bg-accent/30 relative aspect-square md:aspect-auto">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-12"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                                {product.category}
                            </span>
                            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                            <p className="text-2xl font-bold mb-6 italic text-primary">₹{product.price}</p>

                            <div className="space-y-6 mb-8">
                                <div>
                                    <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                                        <Info className="w-4 h-4 text-primary" />
                                        Product Highlights
                                    </h4>
                                    <ul className="text-sm text-secondary space-y-2">
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" />
                                            Original Manufacturer Warranty
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" />
                                            Free Premium Delivery
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" />
                                            Easy 14-Day Exchange
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 bg-[#25D366] text-white rounded-apple font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Enquire via WhatsApp
                                </a>
                                <button className="w-full py-4 bg-primary text-white rounded-apple font-bold flex items-center justify-center gap-2 hover:shadow-apple-hover transition-all">
                                    <ShoppingCart className="w-5 h-5" />
                                    Request Callback
                                </button>
                            </div>

                            <p className="mt-6 text-xs text-center text-secondary">
                                Standard delivery within 24-48 hours.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
