import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Monitor } from "lucide-react";

const footerLinks = {
    Shop: [
        { name: "Mobiles", href: "/products?category=mobiles" },
        { name: "Laptops", href: "/products?category=laptops" },
        { name: "TVs", href: "/products?category=tvs" },
        { name: "Accessories", href: "/products?category=accessories" },
        { name: "Home Appliances", href: "/products?category=appliances" },
    ],
    Company: [
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Careers", href: "#" },
        { name: "Store Locator", href: "/contact" },
    ],
    Support: [
        { name: "FAQ", href: "#" },
        { name: "Order Status", href: "#" },
        { name: "Warranty Policy", href: "#" },
        { name: "Return Center", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-accent/30 border-t pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-primary rounded-apple flex items-center justify-center text-white">
                                <Monitor className="w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                ELECTRO<span className="text-primary">.</span>
                            </span>
                        </Link>
                        <p className="text-secondary text-sm max-w-xs mb-6">
                            Your one-stop destination for the latest technology and electronics. Premium quality, trusted service.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">{title}</h4>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-secondary text-sm hover:text-primary transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-border/50 text-sm text-secondary">
                    <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>support@electrostore.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-primary" />
                        <span>+91 9030600126</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>INS Kalings, Blue Marino</span>
                        <span>Visakhapatnam, Andhra Pradesh - 531163</span>                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary/70">
                    <p>© {new Date().getFullYear()} Electro Store. All rights reserved to Swaroop Rayapalli.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary">Privacy Policy</a>
                        <a href="#" className="hover:text-primary">Terms of Service</a>
                        <a href="#" className="hover:text-primary">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
