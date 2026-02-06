"use client";

import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const PropertySelector = () => {
    const router = useRouter();

    const propertyTypes = [
        { id: "villa", label: "Villa" },
        { id: "bostadsratt", label: "Bostadsrätt (lägenhet)" },
        { id: "radhus", label: "Radhus" },
        { id: "fritidshus", label: "Fritidshus" },
        { id: "gard", label: "Gård" },
        { id: "tomt", label: "Tomt" },
    ];

    const handleSelect = (typeId: string) => {
        router.push(`/ansokan?type=${typeId}`);
    };

    return (
        <div className="w-full bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                Vad vill du sälja?
            </h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Få erbjudanden från 3 lokala mäklare i ditt område och en tydlig strategi för värdering eller eventuell försäljningen av din bostad.
            </p>

            <div className="space-y-3">
                {propertyTypes.map((type) => (
                    <button
                        key={type.id}
                        onClick={() => handleSelect(type.id)}
                        className="w-full flex items-center justify-between p-4 pl-6 bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 rounded-2xl transition-all duration-200 group shadow-sm hover:shadow-md"
                    >
                        <span className="font-bold text-slate-900 text-lg">{type.label}</span>
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition-colors transform group-hover:scale-105">
                            <ChevronRight className="w-6 h-6" />
                        </div>
                    </button>
                ))}
            </div>

            <div className="mt-8 text-center pt-6 border-t border-slate-50">
                <p className="text-sm text-slate-400 font-medium">
                    4.9/5 i betyg baserat på 300+ omdömen
                </p>
            </div>
        </div>
    );
};
