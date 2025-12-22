"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import WashiTape from "../../components/ui/WashiTape";
import PolaroidFrame from "../../components/ui/PolaroidFrame";
import { contactFormSchema, ContactFormData } from "@/lib/schemas";
import { submitInquiry } from "../../actions";

export default function ContactClient() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isPending, startTransition] = useTransition();

    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = (data: ContactFormData) => {
        startTransition(async () => {
            const response = await submitInquiry(data);
            if (response.success) {
                setIsSubmitted(true);
            } else {
                alert("Something went wrong. Please try again.");
            }
        });
    };

    return (
        <div className="min-h-screen py-12 bg-white relative">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-hand text-warm-brown relative inline-block">
                        Start the Conversation
                        <WashiTape color="forest" className="w-full -top-4 left-0 rotate-1 opacity-40 -z-10" />
                    </h1>
                    <p className="mt-4 font-sans text-stone-600">
                        We prioritize safety and fit, so every enrollment starts with a chat.
                        <br /><strong>Vetting First:</strong> Submit this form &rarr; We Interview &rarr; Secure Booking.
                    </p>
                </div>

                <PolaroidFrame caption="Let's get to know each other!" rotation={1} className="bg-[#FAF9F6] p-8">
                    {isSubmitted ? (
                        <div className="text-center py-12 px-4 space-y-6">
                            <div className="text-6xl animate-bounce">💌</div>
                            <h2 className="text-3xl font-hand text-warm-brown text-center">Inquiry Drafted!</h2>
                            <p className="font-sans text-stone-600 text-lg">
                                Your email client should be opening with your details pre-filled.
                                <br />Just hit <strong>Send</strong> and I'll get back to you!
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="mt-8 text-forest-green underline font-hand text-xl hover:text-terracotta"
                            >
                                Send another?
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-sans text-left">
                            {/* Parent Details */}
                            <div className="space-y-4">
                                <h3 className="font-hand text-2xl text-terracotta border-b border-dashed border-terracotta/30 pb-2">Parent Details</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="overflow-scroll text-sm font-bold text-warm-brown mb-1">Name</label>
                                        <input {...register("parentName")} className="w-full border-2 border-stone-200 rounded-lg p-2 focus:border-terracotta outline-none bg-white" placeholder="Jane Doe" />
                                        {errors.parentName && <span className="text-red-500 text-xs font-hand">{(errors.parentName as any).message}</span>}
                                    </div>
                                    <div>
                                        <label className="overflow-scroll text-sm font-bold text-warm-brown mb-1">Phone</label>
                                        <input {...register("phone")} className="w-full border-2 border-stone-200 rounded-lg p-2 focus:border-terracotta outline-none bg-white" placeholder="(555) 123-4567" />
                                        {errors.phone && <span className="text-red-500 text-xs font-hand">{(errors.phone as any).message}</span>}
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="overflow-scroll text-sm font-bold text-warm-brown mb-1">Email</label>
                                        <input {...register("email")} className="w-full border-2 border-stone-200 rounded-lg p-2 focus:border-terracotta outline-none bg-white" placeholder="jane@example.com" />
                                        {errors.email && <span className="text-red-500 text-xs font-hand">{(errors.email as any).message}</span>}
                                    </div>
                                </div>
                            </div>

                            {/* Child Logistics */}
                            <div className="space-y-4">
                                <h3 className="font-hand text-2xl text-terracotta border-b border-dashed border-terracotta/30 pb-2">Child Logistics</h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="overflow-scroll text-sm font-bold text-warm-brown mb-1"># Children</label>
                                        <select {...register("childCount")} className="w-full border-2 border-stone-200 rounded-lg p-2 bg-white">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="overflow-scroll text-sm font-bold text-warm-brown mb-1">Ages</label>
                                        <input {...register("childAges")} className="w-full border-2 border-stone-200 rounded-lg p-2 bg-white" placeholder="e.g. 2 and 4" />
                                    </div>
                                    <div>
                                        <label className="overflow-scroll text-sm font-bold text-warm-brown mb-1">Start Date</label>
                                        <input type="date" {...register("startDate")} className="w-full border-2 border-stone-200 rounded-lg p-2 bg-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Free Text */}
                            <div className="space-y-4">
                                <h3 className="font-hand text-2xl text-terracotta border-b border-dashed border-terracotta/30 pb-2">Tell us about them</h3>
                                <div>
                                    <label className="overflow-scroll text-sm font-bold text-warm-brown mb-1">Personality, Needs, Favorites?</label>
                                    <textarea {...register("message")} rows={4} className="w-full border-2 border-stone-200 rounded-lg p-2 focus:border-terracotta outline-none bg-white" placeholder="My child loves dinosaurs and nap time is tricky..." />
                                    {errors.message && <span className="text-red-500 text-xs font-hand">{(errors.message as any).message}</span>}
                                </div>
                            </div>

                            <div className="pt-4 text-center">
                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="bg-forest-green text-white font-hand text-2xl px-12 py-3 rounded-full hover:bg-forest-green/90 shadow-lg hover:-rotate-1 transition-transform w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isPending ? "Sending..." : "Send Inquiry to Mrs. A"}
                                </button>
                            </div>

                        </form>
                    )}
                </PolaroidFrame>
            </div>
        </div>
    );
}
