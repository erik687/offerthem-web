"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown, Star } from "lucide-react";
import { useRouter } from "next/navigation";

export const PropertySelector = () => {
    const router = useRouter();
    const [showMore, setShowMore] = useState(false);

    const primaryTypes = [
        { id: "villa", label: "Villa" },
        { id: "bostadsratt", label: "Bostadsrätt (lägenhet)" },
        { id: "radhus", label: "Radhus" },
    ];

    const secondaryTypes = [
        { id: "fritidshus", label: "Fritidshus" },
        { id: "gard", label: "Gård" },
        { id: "tomt", label: "Tomt" },
    ];

    const handleSelect = (typeId: string) => {
        router.push(`/ansokan?type=${typeId}`);
    };

    return (
        <div className="w-full bg-white rounded-3xl shadow-xl p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Vad vill du sälja?
            </h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Få erbjudanden från flera lokala mäklare i ditt område och en tydlig strategi för värdering eller eventuell försäljningen av din bostad.
            </p>

            <div className="space-y-3">
                {primaryTypes.map((type) => (
                    <PropertyButton key={type.id} type={type} onSelect={handleSelect} />
                ))}

                {showMore && secondaryTypes.map((type) => (
                    <PropertyButton key={type.id} type={type} onSelect={handleSelect} />
                ))}

                {!showMore && (
                    <button
                        onClick={() => setShowMore(true)}
                        className="w-full py-4 text-slate-500 font-medium hover:text-slate-800 transition-colors flex items-center justify-center gap-2"
                    >
                        Visa fler alternativ <ChevronDown className="w-4 h-4" />
                    </button>
                )}
            </div>

            <div className="mt-8 flex justify-center">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
                    {/* Google G Logo SVG */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>

                    <span className="font-bold text-slate-800 text-sm">4.9/5 i kundbetyg</span>

                    <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const PropertyButton = ({ type, onSelect }: { type: { id: string, label: string }, onSelect: (id: string) => void }) => (
    <button
        onClick={() => onSelect(type.id)}
        className="w-full flex items-center justify-between p-4 pl-6 bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 rounded-2xl transition-all duration-200 group shadow-sm hover:shadow-md"
    >
        <span className="font-bold text-slate-900 text-lg">{type.label}</span>
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition-colors transform group-hover:scale-105">
            <ChevronRight className="w-6 h-6" />
        </div>
    </button>
);
