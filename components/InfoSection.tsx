"use client";

import { Building2 } from "lucide-react";

export const InfoSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                    {/* Left Column: Image with Floating Elements */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-700">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                            <img
                                src="/happy-couple.png"
                                alt="Lyckligt par som sålt sin bostad"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Floating Badge 1: Cost Free */}
                        <div className="absolute -bottom-6 -right-6 md:right-8 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-20 animate-fade-in-up">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-xl">💸</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Tjänsten är</p>
                                <p className="text-lg font-bold text-slate-900">Helt kostnadsfri</p>
                            </div>
                        </div>

                        {/* Decorative Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply" />
                    </div>

                    {/* Right Column: Content */}
                    <div className="md:pl-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
                            <span>✨</span>
                            <span>Sveriges största mäklarguide</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.1]">
                            Vi gör det enkelt att hitta <span className="text-blue-600">rätt mäklare</span>
                        </h2>

                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-8">
                            <p>
                                Att hitta rätt när du ska sälja kan kännas svårt och ta tid. Mäklare är bra på olika saker.
                                <span className="text-slate-900 font-medium"> Vi gör det istället väldigt enkelt!</span>
                            </p>
                            <p>
                                OffertHem är en matchningstjänst som samlar Sveriges kvalitetssäkrade mäklare på ett ställe.
                                Jämför försäljningar, slutpriser och omdömen. Vi vet vilka du borde träffa i ditt område.
                            </p>
                        </div>

                        {/* Stats / Trust Box */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="bg-slate-50 rounded-2xl p-5 flex items-center gap-4 border border-slate-100 flex-1">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-slate-900">5 200+</div>
                                    <div className="text-sm text-slate-600">Hjälpta säljare</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
