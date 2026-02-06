"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQSection = () => {
    const faqs = [
        {
            q: "Kostar det något att använda OffertHem?",
            a: "Nej, tjänsten är helt kostnadsfri för dig som ska sälja. Mäklarna betalar en avgift för att få chansen att presentera sig för dig."
        },
        {
            q: "Binder jag mig till något?",
            a: "Absolut inte. Du bestämmer helt själv om du vill gå vidare med någon av mäklarna vi föreslår eller inte."
        },
        {
            q: "Hur många offerter får jag?",
            a: "Vanligtvis matchar vi dig med 2-4 mäklare som är experter på ditt område. Det brukar vara lagom för att få en bra jämförelse utan att det blir rörigt."
        },
        {
            q: "Varför ska jag jämföra mäklare?",
            a: "Arvoden och slutpriser kan skilja sig kraftigt. Genom att jämföra säkerställer du att du får bäst betalt till rimligast villkor."
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Vanliga frågor</h2>
                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <FAQItem key={i} question={item.q} answer={item.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
            >
                <span className="font-semibold text-slate-900">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>
            {isOpen && (
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                    {answer}
                </div>
            )}
        </div>
    );
};
