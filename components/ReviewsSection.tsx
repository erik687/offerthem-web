"use client";

import { Star, CheckCircle } from "lucide-react";

export const ReviewsSection = () => {
    const reviews = [
        {
            name: "Anna Lindberg",
            location: "Stockholm",
            text: "Otroligt smidigt! Fick kontakt med tre duktiga mäklare samma dag och valde den som kändes bäst. Rekommenderas!",
            date: "2 dagar sedan"
        },
        {
            name: "Johan Ek",
            location: "Göteborg",
            text: "Vi sparade säkert 20 000 kr i arvode genom att jämföra. Tjänsten var helt gratis och väldigt enkel att använda.",
            date: "1 vecka sedan"
        },
        {
            name: "Maria Nilsson",
            location: "Malmö",
            text: "Kände mig trygg genom hela processen. Mäklaren vi hittade via OffertHem sålde lägenheten innan visning!",
            date: "3 veckor sedan"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">

                {/* Header with Google Badge */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-white border border-slate-200 shadow-sm px-5 py-2 rounded-full mb-6">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                            alt="Google"
                            className="w-6 h-6"
                        />
                        <span className="font-bold text-slate-800">4.9/5 i kundbetyg</span>
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Hundratals nöjda bostadssäljare
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Vi hjälper dig att hitta rätt, oavsett om du säljer en villa, bostadsrätt eller tomt.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative hover:shadow-xl transition-all duration-300 group flex flex-col h-full">


                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            <p className="text-slate-600 italic mb-8 leading-relaxed text-lg">”{review.text}”</p>

                            <div className="flex items-center gap-4 mt-auto border-t border-slate-50 pt-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">{review.name}</p>
                                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                                        <span>{review.location}</span>
                                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                        <span className="flex items-center gap-1 text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full text-xs">
                                            <CheckCircle className="w-3 h-3" /> Verifierad
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
