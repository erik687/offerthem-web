"use client";

import { Check } from "lucide-react";

export const ChecklistSection = () => {
    const checklistItems = [
        {
            title: "Arbetssätt",
            desc: "Hur planerar mäklaren att skapa intresse för din bostad?"
        },
        {
            title: "Resultat",
            desc: "Har de goda referenser och dokumenterad försäljningshistorik?"
        },
        {
            title: "Kostnad",
            desc: "Vad betalar du för – och vad får du tillbaka i värde?"
        },
        {
            title: "Känsla",
            desc: "Ger mötet trygghet och förtroende?"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                    {/* Left Column: Text & Checklist */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Öka oddsen för en lyckad försäljning
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Statistiken visar att bostäder som marknadsförs professionellt och med rätt mäklare ofta säljs både snabbare och till högre pris.
                            Genom att analysera mäklarnas resultat, lokalkännedom och kundnöjdhet kan du öka oddsen för att din försäljning blir riktigt lyckad.
                        </p>

                        <div className="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50">
                            <div className="bg-blue-600 py-3 px-6">
                                <span className="text-white font-bold tracking-wide uppercase text-sm">Checklistan att ha koll på</span>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Vad du bör tänka på när du jämför mäklare</h3>

                                <div className="space-y-6">
                                    {checklistItems.map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="mt-1 flex-shrink-0">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                                    <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">{item.title}</h4>
                                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                        {/* Placeholder for the user's image, utilizing a generic professional image for now */}
                        <img
                            src="/broker-meeting.png"
                            alt="Professionell mäklare i möte med kunder"
                            className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                    </div>

                </div>
            </div>
        </section>
    );
};
