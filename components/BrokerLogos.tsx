"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const BrokerLogos = () => {
    // Array of logos to display
    const logos = [
        { name: "Mäklarringen", src: "/brokers/maklarringen.png" },
        { name: "Bjurfors", src: "/brokers/bjurfors.png" },
        { name: "Svensk Fastighetsförmedling", src: "/brokers/svenskfast.png" },
        { name: "Erik Olsson", src: "/brokers/erikolsson.png" },
    ];

    // Duplicate the list to create a seamless loop
    const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="py-10 border-y border-slate-100 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 mb-8">
                <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    Vi samarbetar med Sveriges ledande mäklare
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
                    {marqueeLogos.map((logo, index) => (
                        <div key={index} className="relative flex-shrink-0 w-40 h-16 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Tailwind configuration for the animation is needed in global styles or tailwind.config.ts */}
            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    );
};
