"use client";

import { Building2 } from "lucide-react";

export const InfoSection = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                    {/* Left Column: Big Circle */}
                    <div className="relative flex items-center justify-center">
                        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-orange-50 rounded-full flex items-center justify-center text-center p-8 md:p-16 relative z-10 shadow-sm">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                                Vi gör det enkelt att hitta mäklaren som passar dig.
                                <br />
                                <span className="text-orange-500 mt-2 block">Helt kostnadsfritt</span>
                            </h3>
                        </div>

                        {/* Decorative blob behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-50/50 blur-3xl -z-10 rounded-full" />
                    </div>

                    {/* Right Column: Content */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Jämför <span className="text-orange-500">mäklare</span> innan du säljer
                        </h2>

                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-8">
                            <p>
                                OffertHem är en matchningstjänst och mäklarguide som samlar Sveriges kvalitetssäkrade mäklare på ett ställe.
                                Mäklare är bra på olika saker och att hitta rätt när du ska sälja kan kännas svårt och ta tid.
                                Vi vill istället göra det väldigt enkelt!
                            </p>
                            <p>
                                Vår tjänst använder du utan förbindelse, och vi har hjälpt tusentals bostadssäljare.
                                Jämför försäljningar, slutpriser, omdömen och läs mäklares presentationer hos oss.
                                Vi vet vilka du borde träffa och vi matchar dig med mäklarna som är bäst i ditt område.
                                <span className="font-bold block mt-2">Väldigt enkelt och väldigt kostnadsfritt!</span>
                            </p>
                        </div>

                        {/* Stats Box */}
                        <div className="bg-slate-50 rounded-2xl p-6 flex items-center gap-6 border border-slate-100 max-w-md">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                <Building2 className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900">5 200+</div>
                                <div className="text-slate-600 font-medium">Levererade erbjudanden</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
