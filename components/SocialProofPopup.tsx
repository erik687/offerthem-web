"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const CITIES = [
    "Stockholm", "Göteborg", "Malmö", "Uppsala", "Västerås",
    "Örebro", "Linköping", "Helsingborg", "Jönköping", "Norrköping"
];

const TIMES = [2, 4, 5, 8, 9, 11, 13, 14, 15, 17, 18, 21, 22, 26, 31, 35, 41, 48];

export const SocialProofPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [data, setData] = useState({ city: "", time: 0 });

    useEffect(() => {
        const showNotification = () => {
            const city = CITIES[Math.floor(Math.random() * CITIES.length)];
            const time = TIMES[Math.floor(Math.random() * TIMES.length)];

            setData({ city, time });
            setIsVisible(true);

            // Hide after 5 seconds
            setTimeout(() => {
                setIsVisible(false);
            }, 5000);
        };

        // Initial delay: 5 seconds
        const initialTimer = setTimeout(() => {
            showNotification();

            // Then repeat every 38 seconds
            const interval = setInterval(showNotification, 53000);
            return () => clearInterval(interval);
        }, 5000);

        return () => clearTimeout(initialTimer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: -20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 20, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-6 left-6 z-[100] bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 p-4 max-w-xs flex items-center gap-4"
                >
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-800">
                            Förfrågan inskickad i {data.city}
                        </p>
                        <p className="text-xs text-slate-500 font-medium">
                            för {data.time} minuter sedan
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
