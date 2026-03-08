"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Tech Enthusiast",
        content: "The best electronics store I've ever visited. Their collection of Apple products is unmatched, and the service is truly premium.",
        rating: 5,
    },
    {
        name: "Priya Patel",
        role: "Freelance Designer",
        content: "Found my perfect MacBook here. The staff helped me compare models, and the EMI options made it very affordable.",
        rating: 5,
    },
    {
        name: "Amit Verma",
        role: "Professional Photographer",
        content: "Amazing range of cameras and accessories. The expert knowledge of the team is what sets them apart.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-accent/10">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <div className="max-w-xl mx-auto mb-16">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Happy Customers</h2>
                    <p className="text-4xl font-bold">Trusted by Thousands</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 glass-effect rounded-apple-lg border border-border/50 text-left relative"
                        >
                            <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-secondary italic mb-6">"{t.content}"</p>
                            <div>
                                <p className="font-bold">{t.name}</p>
                                <p className="text-xs text-secondary uppercase tracking-widest">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
