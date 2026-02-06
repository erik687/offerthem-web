import { Header } from "@/components/Header";
import { PropertySelector } from "@/components/PropertySelector";
import { Star } from "lucide-react";
import Image from "next/image";
import { StepsSection } from "@/components/StepsSection";
import { FAQSection } from "@/components/FAQSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { SocialProofPopup } from "@/components/SocialProofPopup";
import { MainCTA } from "@/components/MainCTA";
import { HeroLogos } from "@/components/HeroLogos";
import { InfoSection } from "@/components/InfoSection";
import { ChecklistSection } from "@/components/ChecklistSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-sky-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

            {/* Left Column: Copy & Trust */}
            <div className="text-left pt-2">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Jämför erbjudanden från <span className="text-blue-600">kvalitetssäkrade mäklare</span>
              </h1>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Ska du sälja lägenhet eller hus? Låt inte slumpen avgöra valet av mäklare.
                Vi matchar dig med lokala experter som kan din ort och ditt område utan och innan.
              </p>

              {/* Bullet Points */}
              <div className="space-y-4 mb-8 bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
                {[
                  "Hitta bästa mäklaren för dig",
                  "Få högre försäljningspris",
                  "Spara tid och pengar",
                  "Kvalitetssäkrade mäklare"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-green-600" fill="none" strokeWidth={3} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </div>
                    <span className="font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>


              {/* Broker Logos Marquee in Hero */}
              <div className="pt-4">
                <p className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wider">Vi samarbetar med ledande mäklare:</p>
                <HeroLogos />
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="relative">
              {/* Pattern Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 blur-3xl -z-10 rounded-full mix-blend-multiply" />
              <PropertySelector />
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Social Proof Section */}
      <ReviewsSection />

      {/* How it Works (Steps) */}
      <StepsSection />

      {/* Info Section (Circle Layout) */}
      <InfoSection />

      {/* Checklist Section */}
      <ChecklistSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 bg-blue-50 text-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Redo att maximera din bostadsförsäljning?</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto text-lg">
            Över 1 500 säljare har redan hittat sin drömmäklare via oss. Det kostar ingenting att jämföra.
          </p>
          <div className="flex justify-center">
            <MainCTA />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-8 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Om oss</a>
            <a href="#" className="hover:text-white transition-colors">Integritetspolicy</a>
            <a href="#" className="hover:text-white transition-colors">Kontakta oss</a>
          </div>
          <p>© {new Date().getFullYear()} OffertHem. Alla rättigheter reserverade.</p>
        </div>
      </footer>

      {/* Dynamic Social Proof Notification */}
      <SocialProofPopup />
    </main>
  );
}
