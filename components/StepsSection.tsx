"use client";

export const StepsSection = () => {
    const steps = [
        {
            num: "1",
            title: "Fyll i formuläret",
            desc: "Berätta kort om din bostad och dina önskemål. Det tar bara 1 minut."
        },
        {
            num: "2",
            title: "Mäklarna kontaktar dig",
            desc: "Upp till 4 handplockade mäklare i ditt område hör av sig med sina upplägg."
        },
        {
            num: "3",
            title: "Jämför & Välj",
            desc: "Jämför arvoden, värderingar och personkemi. Välj den som känns bäst – eller ingen alls."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Så fungerar OffertHem</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Vi gör det svåra enkelt. Från start till mål på dina villkor.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">

                    {/* Connector Line (Desktop only) */}
                    <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-blue-100 z-0" />

                    {steps.map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-blue-200">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed max-w-xs">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
