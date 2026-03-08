"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Invalid phone number"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log("Email sent successfully!");
                setIsSuccess(true);
                reset();
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                const errorData = await response.json();
                console.error("Failed to send email:", errorData);
                alert("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while sending the message.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white dark:bg-black min-h-screen">
            {/* Header */}
            <section className="bg-accent/20 py-24">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-5xl font-bold tracking-tight mb-6">Get in <span className="text-primary italic">Touch.</span></h1>
                    <p className="text-secondary max-w-xl mx-auto italic">
                        Have questions about our products or need technical assistance? Our team of experts is ready to help you.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 -mt-12 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="p-8 glass-effect rounded-apple-lg border border-border/50">
                            <h3 className="text-xl font-bold mb-8 underline-apple">Contact Details</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-apple bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Call Us</p>
                                        <p className="font-bold">+91 9030600126</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-apple bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Email Us</p>
                                        <p className="font-bold">support@electrostore.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-apple bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Visit Us</p>
                                        <p className="font-bold">INS Kalings, Blue Marino</p>
                                        <p className="font-bold">Visakhapatnam, Andhra Pradesh - 531163</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-apple bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Working Hours</p>
                                        <p className="font-bold">Mon - Sat: 10:00 AM - 09:00 PM</p>
                                        <p className="font-bold">Sun: 11:00 AM - 07:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-12 w-full py-4 bg-[#25D366] text-white rounded-apple font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="p-8 md:p-12 glass-effect rounded-apple-lg border border-border/50 h-full">
                            <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>

                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-500/10 border border-green-500/20 p-12 rounded-apple-lg text-center"
                                >
                                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
                                    <h4 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h4>
                                    <p className="text-secondary italic">Thank you for reaching out. Our team will get back to you shortly.</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-8 font-bold text-primary underline"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-secondary">Full Name</label>
                                            <input
                                                {...register("name")}
                                                className={cn(
                                                    "w-full px-4 py-3 bg-accent/30 border border-transparent rounded-apple outline-none focus:border-primary/30 transition-all",
                                                    errors.name && "border-red-500/50"
                                                )}
                                                placeholder="Enter your name"
                                            />
                                            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-secondary">Email Address</label>
                                            <input
                                                {...register("email")}
                                                className={cn(
                                                    "w-full px-4 py-3 bg-accent/30 border border-transparent rounded-apple outline-none focus:border-primary/30 transition-all",
                                                    errors.email && "border-red-500/50"
                                                )}
                                                placeholder="your@email.com"
                                            />
                                            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-secondary">Phone Number</label>
                                            <input
                                                {...register("phone")}
                                                className={cn(
                                                    "w-full px-4 py-3 bg-accent/30 border border-transparent rounded-apple outline-none focus:border-primary/30 transition-all",
                                                    errors.phone && "border-red-500/50"
                                                )}
                                                placeholder="+91 00000 00000"
                                            />
                                            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-secondary">Subject</label>
                                            <input
                                                {...register("subject")}
                                                className={cn(
                                                    "w-full px-4 py-3 bg-accent/30 border border-transparent rounded-apple outline-none focus:border-primary/30 transition-all",
                                                    errors.subject && "border-red-500/50"
                                                )}
                                                placeholder="How can we help?"
                                            />
                                            {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-secondary">Message</label>
                                        <textarea
                                            {...register("message")}
                                            rows={5}
                                            className={cn(
                                                "w-full px-4 py-3 bg-accent/30 border border-transparent rounded-apple outline-none focus:border-primary/30 transition-all resize-none",
                                                errors.message && "border-red-500/50"
                                            )}
                                            placeholder="Tell us more about your enquiry..."
                                        />
                                        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-primary text-white rounded-apple font-bold flex items-center justify-center gap-2 hover:shadow-apple-hover disabled:opacity-50 transition-all"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <section className="container mx-auto px-4 md:px-6 mb-24">
                <div className="h-96 w-full rounded-apple-lg overflow-hidden border border-border/50 relative bg-accent/20">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        <MapPin className="w-12 h-12 text-primary mb-4" />
                        <h4 className="text-xl font-bold mb-2">Interactive Store Map</h4>
                        <p className="text-secondary italic max-w-sm">Use our map to find the flagship Electro Store nearest to you for a hands-on tech experience.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
