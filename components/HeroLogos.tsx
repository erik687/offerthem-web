"use client";

import Image from "next/image";

export const HeroLogos = () => {
    // Array of logos to display
    const logos = [
        { name: "Fastighetsbyrån", src: "/brokers/fastighetsbyran.jpg" },
        { name: "Länsförsäkringar Fastighetsförmedling", src: "/brokers/lansfast.png" },
        { name: "Mäklarringen", src: "/brokers/maklarringen.png" },
        { name: "Bjurfors", src: "/brokers/bjurfors.png" },
        { name: "Svensk Fastighetsförmedling", src: "/brokers/svenskfast.png" },
        { name: "Erik Olsson", src: "/brokers/erikolsson.png" },
    ];

    // Duplicate list for seamless loop
    const marqueeLogos = [...logos, ...logos, ...logos];

    return (
        <div className="w-full overflow-hidden mask-linear-fade">
            <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
                {marqueeLogos.map((logo, index) => (
                    <div key={index} className="relative flex-shrink-0 w-28 h-10 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 mix-blend-multiply">
                        <Image
                            src={logo.src}
                            alt={logo.name}
                            fill
                            className="object-contain mix-blend-multiply"
                        />
                    </div>
                ))}
            </div>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                    will-change: transform;
                }
                .mask-linear-fade {
                    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                }
            `}</style>
        </div>
    );
};
