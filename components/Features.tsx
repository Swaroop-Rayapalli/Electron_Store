import React from "react";
import { ShieldCheck, Truck, RotateCcw, Headphones } from "lucide-react";

const features = [
    {
        title: "Eco-Friendly Tech",
        desc: "We prioritize products with sustainable materials and energy efficiency.",
        icon: ShieldCheck,
    },
    {
        title: "Ultra-Fast Delivery",
        desc: "Get your favorite gadgets delivered to your doorstep within 24 hours.",
        icon: Truck,
    },
    {
        title: "Easy Returns",
        desc: "Not satisfied? Hassle-free 14-day return policy on all electronic items.",
        icon: RotateCcw,
    },
    {
        title: "Expert Support",
        desc: "Our tech experts are available 24/7 to help you with any queries.",
        icon: Headphones,
    },
];

export default function Features() {
    return (
        <section className="py-24 border-y">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-start gap-4 p-4">
                            <div className="w-12 h-12 rounded-apple bg-accent flex items-center justify-center text-primary">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">{feature.title}</h3>
                            <p className="text-secondary text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
