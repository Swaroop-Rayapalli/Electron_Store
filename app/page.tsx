import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import ProductCard from "@/components/ProductCard";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { products } from "@/lib/data";

const featuredProducts = products.slice(0, 4);

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCategories />

      {/* Featured Products Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Today's Highlights</h2>
              <p className="text-4xl md:text-5xl font-bold tracking-tight">Featured Products</p>
            </div>
            <Link
              href="/products"
              className="text-sm font-bold text-primary hover:underline flex items-center gap-2 group"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Features />

      {/* Store Preview / CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-effect rounded-apple-lg p-12 md:p-24 text-center relative z-10">
            <h2 className="text-3xl md:text-6xl font-bold mb-8 max-w-2xl mx-auto leading-tight">
              Ready to Upgrade Your <span className="text-primary italic">Digital Life?</span>
            </h2>
            <p className="text-lg text-secondary mb-12 max-w-lg mx-auto">
              Visit our flagship store today for a hands-on experience or browse our complete collection online with 24-hour delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/products"
                className="px-8 py-4 bg-primary text-white rounded-apple font-bold hover:shadow-apple-hover transition-all duration-300"
              >
                Start Shopping
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-primary text-primary rounded-apple font-bold hover:bg-primary/5 transition-all duration-300"
              >
                Find a Store
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Circle */}
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </section>

      <Testimonials />
    </div>
  );
}
