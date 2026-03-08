"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Target, History, Award, CheckCircle2 } from "lucide-react";

const stats = [
    { label: "Years of Experience", value: "25+" },
    { label: "Products Sold", value: "1M+" },
    { label: "Expert Engineers", value: "100+" },
    { label: "Store Locations", value: "15" },
];

const team = [
    {
        name: "Swaroop Rayapalli",
        role: "CEO & Founder",
        image: "/me.JPG",
    },
];

export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-black">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=2000" alt="About Hero" fill className="object-cover opacity-20" />
                <div className="absolute inset-0 bg-accent/40" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        Redefining <span className="text-primary italic">Excellence.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-secondary max-w-2xl mx-auto italic"
                    >
                        Since 1999, Electro Store has been at the forefront of the technological revolution, bringing premium products and expert service to millions.
                    </motion.p>
                </div>
            </section>

            {/* Intro / Stats */}
            <section className="py-24 border-y">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Our Legacy</h2>
                            <h3 className="text-4xl font-bold mb-6">25 Years of Technical Innovation</h3>
                            <p className="text-secondary leading-relaxed mb-6">
                                Founded in Silicon Valley, India, we started as a small electronics workshop. Today, we stand as a beacon of quality in the tech retail space, representing world-class brands like Apple, Dell, and Sony.
                            </p>
                            <div className="space-y-4">
                                {["Authorized premium reseller", "Factory-trained service engineers", "Zero-cost financing partner"].map(item => (
                                    <div key={item} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="p-8 glass-effect rounded-apple-lg border border-border/50 text-center">
                                    <p className="text-4xl font-bold text-primary mb-2 tracking-tight">{stat.value}</p>
                                    <p className="text-xs font-bold uppercase tracking-widest text-secondary">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-accent/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="p-12 glass-effect rounded-apple-lg border relative overflow-hidden group">
                            <Target className="w-12 h-12 text-primary mb-6" />
                            <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
                            <p className="text-secondary italic">To be the world's most trusted medium for experiencing the power of technology, fostering a future where innovation is accessible to everyone.</p>
                            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                        </div>
                        <div className="p-12 glass-effect rounded-apple-lg border relative overflow-hidden group">
                            <History className="w-12 h-12 text-primary mb-6" />
                            <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
                            <p className="text-secondary italic">We are committed to providing premium quality products and unparalleled after-sales service, ensuring every customer walks away with more than just a gadget.</p>
                            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">The Experts</h2>
                    <h3 className="text-4xl font-bold mb-16 underline-apple">Meet Our Leadership</h3>
                    <div className="flex justify-center">
                        {team.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group w-full max-w-sm"
                            >
                                <div className="aspect-square relative grayscale group-hover:grayscale-0 transition-all duration-500 rounded-apple-lg overflow-hidden mb-6 shadow-apple">
                                    <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                                <h4 className="text-xl font-bold">{member.name}</h4>
                                <p className="text-sm text-primary font-bold uppercase tracking-widest mt-1">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-24 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Tech Background" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <Award className="w-16 h-16 text-primary mx-auto mb-8 animate-bounce" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Experience Technology Like Never Before.</h2>
                    <p className="text-secondary text-lg max-w-xl mx-auto mb-10">Visit our flagship interactive stores to get a hands-on experience of the latest flagship devices from across the globe.</p>
                    <button className="px-10 py-4 bg-primary text-white rounded-apple font-bold hover:shadow-apple-hover transition-all duration-300">Explore Our Locations</button>
                </div>
            </section>
        </div>
    );
}
