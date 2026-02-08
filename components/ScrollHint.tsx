"use client";

import { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";

export const ScrollHint = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleLinkClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a[href="#start"]');

            if (link) {
                // Wait for scroll to (mostly) finish
                setTimeout(() => {
                    setIsVisible(true);

                    // Hide again after 5 seconds
                    setTimeout(() => setIsVisible(false), 5000);
                }, 800);
            }
        };

        document.addEventListener("click", handleLinkClick);
        return () => document.removeEventListener("click", handleLinkClick);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="absolute top-20 -left-6 md:-left-44 z-50 animate-bounce-horizontal hidden md:block">
            <div className="relative bg-green-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3">
                <span className="font-bold whitespace-nowrap">Starta din jämförelse här</span>
                <MoveRight className="w-5 h-5" />

                {/* Speech bubble triangle */}
                <div className="absolute top-1/2 -right-2 w-4 h-4 bg-green-600 transform -translate-y-1/2 rotate-45" />
            </div>
        </div>
    );
};
