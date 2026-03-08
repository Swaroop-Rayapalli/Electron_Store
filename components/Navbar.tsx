"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ShoppingCart, User, Menu, X, Search, Moon, Sun, Monitor, Laptop, Smartphone, Headphones, Tv } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const categories = [
    { name: "Mobiles", icon: Smartphone, href: "/products?category=mobiles" },
    { name: "Laptops", icon: Laptop, href: "/products?category=laptops" },
    { name: "TVs", icon: Tv, href: "/products?category=tvs" },
    { name: "Accessories", icon: Headphones, href: "/products?category=accessories" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "glass-effect py-3 shadow-apple"
                    : "bg-transparent py-5 border-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary rounded-apple flex items-center justify-center text-white shadow-apple">
                            <Monitor className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold tracking-tight hidden sm:block">
                            ELECTRO<span className="text-primary">.</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium hover:text-primary transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <button className="p-2 hover:bg-accent rounded-full transition-colors duration-200 relative group">
                            <Search className="w-5 h-5 text-secondary group-hover:text-primary" />
                        </button>

                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 hover:bg-accent rounded-full transition-colors duration-200 group"
                        >
                            {theme === "dark" ? (
                                <Sun className="w-5 h-5 text-secondary group-hover:text-amber-400" />
                            ) : (
                                <Moon className="w-5 h-5 text-secondary group-hover:text-primary" />
                            )}
                        </button>

                        <Link href="/cart" className="p-2 hover:bg-accent rounded-full transition-colors duration-200 relative group">
                            <ShoppingCart className="w-5 h-5 text-secondary group-hover:text-primary" />
                            <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-[10px] font-bold text-white rounded-full flex items-center justify-center">
                                0
                            </span>
                        </Link>

                        <button
                            className="md:hidden p-2 hover:bg-accent rounded-full transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden glass-effect absolute top-full left-0 right-0 border-b p-6"
                    >
                        <div className="flex flex-col gap-6">
                            <div className="grid grid-cols-2 gap-4">
                                {categories.map((cat) => (
                                    <Link
                                        key={cat.name}
                                        href={cat.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex flex-col items-center gap-2 p-4 bg-accent/50 rounded-apple hover:bg-primary/10 transition-colors"
                                    >
                                        <cat.icon className="w-6 h-6 text-primary" />
                                        <span className="text-xs font-semibold">{cat.name}</span>
                                    </Link>
                                ))}
                            </div>
                            <div className="h-px bg-border" />
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-lg font-medium hover:text-primary"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
