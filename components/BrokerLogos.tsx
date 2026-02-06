"use client";

// Using text representation for logos to avoid external image dependencies breaking or looking bad without real assets.
// In a real scenario, you would replace these with actual SVG logos.
export const BrokerLogos = () => {
    const brokers = [
        "Fastighetsbyrån", "Svensk Fastighetsförmedling", "Bjurfors", "HusmanHagberg",
        "Länsförsäkringar Fastighetsförmedling", "Mäklarhuset", "Mohv", "Erik Olsson"
    ];

    return (
        <section className="py-10 border-y border-slate-100 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
                    Vi samarbetar med Sveriges ledande mäklare
                </p>

                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {brokers.map((broker) => (
                        <span key={broker} className="text-xl md:text-2xl font-bold text-slate-400 hover:text-slate-700 cursor-default select-none">
                            {broker}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
