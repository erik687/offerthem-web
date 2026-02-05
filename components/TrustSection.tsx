"use client";

import { Star } from "lucide-react";

export const TrustSection = () => {
  return (
    <div className="bg-blue-50 py-8 border-y border-blue-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Google Reviews Badge */}
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
              alt="Google" 
              className="w-6 h-6"
            />
            <div className="flex flex-col items-start">
              <div className="flex gap-1">
                 {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                 ))}
              </div>
              <span className="text-xs font-medium text-gray-600">5.0 baserat på verifierade omdömen</span>
            </div>
          </div>

          {/* Real Anonymous Review */}
          <div className="text-left max-w-md">
            <p className="text-gray-800 italic text-sm md:text-base">
              "Hittade en mäklare som sålde min lägenhet på 3 dagar till rekordpris. Tjänsten var otroligt smidig."
            </p>
            <p className="text-gray-500 text-xs mt-1 font-semibold">– Anders, Bromma (Sålde 2024)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
