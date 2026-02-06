"use client";

import Image from "next/image";

export const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-center md:justify-start">
                    <div className="relative w-40 h-10 md:w-48 md:h-12">
                        <Image
                            src="/logo.png"
                            alt="OffertHem"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};
