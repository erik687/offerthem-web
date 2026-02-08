"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 500px
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 transform translate-y-0 animate-fade-in-up">
            <div className="container mx-auto max-w-6xl flex items-center justify-between gap-4">
                <div className="hidden md:block">
                    <p className="font-bold text-slate-900">Redo att hitta rätt mäklare?</p>
                    <p className="text-sm text-slate-500">Jämför helt kostnadsfritt.</p>
                </div>

                <a
                    href="#start"
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                    Jämför mäklare nu
                    <ArrowUp className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
};
