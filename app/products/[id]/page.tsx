"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Check, MessageCircle, ShoppingCart, Share2, Heart, ArrowLeft, Info, Shield, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import ProductCard from "@/components/ProductCard";

import { getProduct, products } from "@/lib/data";

const getRelatedProducts = (categoryId: string, currentId: string) => {
    return products.filter(p => p.category === categoryId && p.id !== currentId).slice(0, 4);
};

export default function ProductDetails() {
    const { id } = useParams();
    const product = getProduct(id as string);
    const [activeTab, setActiveTab] = useState("specs");

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I'm interested in the ${product.name}. Is it available?`)}`;

    return (
        <div className="bg-white dark:bg-black pb-24">
            {/* Breadcrumb / Back */}
            <div className="container mx-auto px-4 md:px-6 pt-8 pb-4">
                <Link href="/products" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Products
                </Link>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <div className="aspect-square relative bg-accent/30 rounded-apple-lg overflow-hidden border">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-12"
                            />
                            <button className="absolute top-6 right-6 p-3 glass-effect rounded-full shadow-apple hover:bg-white transition-all">
                                <Heart className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            {product.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">{product.name}</h1>

                        <div className="flex items-center gap-6 mb-8">
                            <div className="px-4 py-2 bg-primary/10 rounded-apple text-primary font-bold text-2xl">
                                ₹{product.price}
                            </div>
                            <div className="text-xs text-secondary font-medium italic">
                                EMI starts at ₹{parseInt(product.price.replace(/,/g, "")) / 12}/month*
                            </div>
                        </div>

                        <p className="text-secondary leading-relaxed mb-8 max-w-lg">
                            {product.description}
                        </p>

                        {/* Availability */}
                        <div className="flex items-center gap-3 mb-10 p-4 bg-green-500/5 rounded-apple border border-green-500/10 max-w-xs">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-bold text-green-600">In Stock - Ready for Delivery</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-4 bg-[#25D366] text-white rounded-apple font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Enquire via WhatsApp
                            </a>
                            <button className="flex-1 py-4 bg-primary text-white rounded-apple font-bold flex items-center justify-center gap-2 hover:shadow-apple-hover transition-all">
                                <ShoppingCart className="w-5 h-5" />
                                Buy Now
                            </button>
                        </div>

                        {/* Trusted UI Elements */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t">
                            <div className="flex flex-col items-center text-center gap-2">
                                <Shield className="w-6 h-6 text-primary" />
                                <span className="text-xs font-bold uppercase tracking-widest">Genuine Product</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2">
                                <Truck className="w-6 h-6 text-primary" />
                                <span className="text-xs font-bold uppercase tracking-widest">Fast Delivery</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2">
                                <Share2 className="w-6 h-6 text-primary" />
                                <span className="text-xs font-bold uppercase tracking-widest">Share Product</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Tabs / Specs */}
                <div className="mt-24">
                    <div className="flex gap-12 border-b mb-12">
                        <button
                            onClick={() => setActiveTab("specs")}
                            className={cn("pb-4 text-sm font-bold uppercase tracking-[0.2em] relative transition-all", activeTab === "specs" ? "text-primary border-b-2 border-primary" : "text-secondary opacity-50")}
                        >
                            Specifications
                        </button>
                        <button
                            onClick={() => setActiveTab("emi")}
                            className={cn("pb-4 text-sm font-bold uppercase tracking-[0.2em] relative transition-all", activeTab === "emi" ? "text-primary border-b-2 border-primary" : "text-secondary opacity-50")}
                        >
                            EMI Information
                        </button>
                    </div>

                    {activeTab === "specs" && (
                        <div className="max-w-2xl">
                            <div className="grid grid-cols-1 divide-y border rounded-apple-lg overflow-hidden">
                                {Object.entries(product.specs).map(([key, value]) => (
                                    <div key={key} className="grid grid-cols-2 p-4 text-sm">
                                        <span className="font-bold text-secondary uppercase tracking-widest text-[10px]">{key}</span>
                                        <span className="font-medium">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "emi" && (
                        <div className="p-8 glass-effect rounded-apple-lg border max-w-xl">
                            <h4 className="font-bold mb-4">Flexible Financing Options</h4>
                            <p className="text-sm text-secondary mb-6 italic">We partner with leading banks to provide you zero-cost EMI options for up to 12 months. Visit our store or contact us to know more.</p>
                            <ul className="space-y-3 text-sm">
                                <li className="flex justify-between border-b pb-2"><span>3 Months</span> <span className="font-bold">0% Interest</span></li>
                                <li className="flex justify-between border-b pb-2"><span>6 Months</span> <span className="font-bold">0% Interest</span></li>
                                <li className="flex justify-between"><span>12 Months</span> <span className="font-bold">Low interest starting 9.9%</span></li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Related Products */}
                <div className="mt-24">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-3xl font-bold tracking-tight">You May Also Like</h2>
                        <Link href="/products" className="text-sm font-bold text-primary underline">View All</Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {getRelatedProducts(product.category, product.id).map(p => <ProductCard key={p.id} {...p} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}
