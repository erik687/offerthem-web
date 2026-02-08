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
                        <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative hover:shadow-xl transition-all duration-300 group">
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-slate-100 group-hover:text-blue-50 transition-colors">
                                <svg className="w-12 h-12 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                </svg>
                            </div>

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
