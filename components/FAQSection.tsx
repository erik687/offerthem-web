"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQSection = () => {
    const faqs = [
        {
            q: "Kostar det något att använda OffertHem?",
            a: "Nej, tjänsten är helt kostnadsfri för dig som ska sälja. Mäklarna betalar en avgift för att få chansen att presentera sig för dig."
        },
        {
            q: "Binder jag mig till något?",
            a: "Absolut inte. Du bestämmer helt själv om du vill gå vidare med någon av mäklarna vi föreslår eller inte. Om ingen känns rätt kan du enkelt tacka nej."
        },
        {
            q: "Hur många offerter får jag?",
            a: "Vanligtvis matchar vi dig med 2-4 mäklare som är experter på ditt område. Det brukar vara lagom för att få en bra jämförelse utan att det blir rörigt."
        },
        {
            q: "Varför ska jag jämföra mäklare?",
            a: "Arvoden och slutpriser kan skilja sig kraftigt. Genom att jämföra säkerställer du att du får bäst betalt till rimligast villkor. Vår statistik visar att säljare som jämför ofta får ett högre slutpris."
        },
        {
            q: "Hur vet jag att mäklarna är bra?",
            a: "Vi samarbetar endast med registrerade fastighetsmäklare som granskas löpande. Vi kollar även kundomdömen och försäljningshistorik för att säkerställa hög kvalitet."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Vanliga frågor och svar</h2>
                    <p className="text-slate-600 text-lg">Allt du behöver veta om hur tjänsten fungerar</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <FAQItem key={i} question={item.q} answer={item.a} isOpen={i === 0} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ question, answer, isOpen: defaultOpen = false }: { question: string, answer: string, isOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div
            className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-blue-200 shadow-md ring-1 ring-blue-100' : 'border-slate-200 shadow-sm hover:border-blue-200'
                }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer outline-none"
            >
                <span className={`font-bold text-lg md:text-xl transition-colors ${isOpen ? 'text-blue-900' : 'text-slate-900'}`}>
                    {question}
                </span>
                <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-blue-600'
                    }`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 md:px-8 pb-8 text-slate-600 leading-relaxed text-lg border-t border-transparent">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
