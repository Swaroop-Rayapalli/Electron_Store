"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImageSliderProps {
    images: string[];
    name: string;
    /** When true the slider fills its parent (used on the product detail page) */
    large?: boolean;
}

export default function ProductImageSlider({ images, name, large = false }: ProductImageSliderProps) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

    const total = images.length;

    const go = useCallback(
        (next: number, dir: number) => {
            setDirection(dir);
            setCurrent((next + total) % total);
        },
        [total]
    );

    // Auto-play every 3 seconds
    useEffect(() => {
        if (total <= 1) return;
        const id = setInterval(() => go(current + 1, 1), 3000);
        return () => clearInterval(id);
    }, [current, go, total]);

    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
    };

    return (
        <div className={`relative overflow-hidden bg-accent/30 ${large ? "aspect-[4/3] rounded-2xl" : "aspect-square"}`}>
            {/* Slides */}
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[current]}
                        alt={`${name} – image ${current + 1}`}
                        fill
                        className={`object-contain ${large ? "p-8" : "p-6"}`}
                        priority={current === 0}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Arrows — only shown when >1 image */}
            {total > 1 && (
                <>
                    <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); go(current - 1, -1); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-sm shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-primary hover:text-white"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); go(current + 1, 1); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-sm shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-primary hover:text-white"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </>
            )}

            {/* Dot indicators */}
            {total > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); go(i, i > current ? 1 : -1); }}
                            className={`rounded-full transition-all duration-300 ${i === current
                                    ? "w-4 h-1.5 bg-primary"
                                    : "w-1.5 h-1.5 bg-black/25 dark:bg-white/30 hover:bg-primary/60"
                                }`}
                            aria-label={`Go to image ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
