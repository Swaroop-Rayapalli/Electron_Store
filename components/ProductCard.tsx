"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import ProductImageSlider from "@/components/ProductImageSlider";

interface ProductCardProps {
    id: string;
    name: string;
    price: string;
    category: string;
    image: string;
    images?: string[];
    badge?: string;
    isNew?: boolean;
}

export default function ProductCard({ id, name, price, category, image, images, badge, isNew }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white dark:bg-accent/20 rounded-apple-lg overflow-hidden border border-border/50 hover:shadow-apple-hover transition-all duration-300"
        >
            {/* Badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {isNew && (
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                        New
                    </span>
                )}
                {badge && (
                    <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                        {badge}
                    </span>
                )}
            </div>

            {/* Image Slider Section */}
            <div className="relative">
                <Link href={`/products/${id}`} className="block">
                    <ProductImageSlider
                        images={images && images.length > 0 ? images : [image]}
                        name={name}
                    />
                </Link>

                {/* Hover Actions */}
                <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button className="w-10 h-10 rounded-full bg-white dark:bg-black text-black dark:text-white flex items-center justify-center shadow-apple hover:bg-primary hover:text-white transition-all duration-200 transform translate-y-4 group-hover:translate-y-0 delay-75">
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white dark:bg-black text-black dark:text-white flex items-center justify-center shadow-apple hover:bg-primary hover:text-white transition-all duration-200 transform translate-y-4 group-hover:translate-y-0 delay-100">
                        <Heart className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white dark:bg-black text-black dark:text-white flex items-center justify-center shadow-apple hover:bg-primary hover:text-white transition-all duration-200 transform translate-y-4 group-hover:translate-y-0 delay-150">
                        <Eye className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1 block">
                    {category}
                </span>
                <Link href={`/products/${id}`}>
                    <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors duration-200">
                        {name}
                    </h3>
                </Link>
                <div className="mt-3 flex items-center justify-between">
                    <p className="text-xl font-bold font-sans">
                        ₹{price}
                    </p>
                    <Link
                        href={`/products/${id}`}
                        className="text-xs font-bold text-primary flex items-center gap-1 hover:underline"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
