import { MainCTA } from "@/components/MainCTA";
import { TrustSection } from "@/components/TrustSection";
import { StepsSection } from "@/components/StepsSection";
import { BrokerLogos } from "@/components/BrokerLogos";
import { FAQSection } from "@/components/FAQSection";
import { SocialProofPopup } from "@/components/SocialProofPopup";
import { Header } from "@/components/Header";
import { LeadForm } from "@/components/LeadForm";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-sky-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

            {/* Left Column: Copy & Trust */}
            <div className="text-left">
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

              {/* Google Rating Badge */}
              <div className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm border border-slate-100 w-fit">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  className="w-8 h-8"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">Google omdöme</span>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-slate-900">5.0</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="relative">
              {/* Pattern Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 blur-3xl -z-10 rounded-full mix-blend-multiply" />
              <LeadForm />
            </div>

          </div>
        </div>
      </section>

      {/* Broker Logos (Trusted Partners) */}
      <BrokerLogos />

      {/* Social Proof (Trust Section) */}
      <TrustSection />

      {/* How it Works (Steps) */}
      <StepsSection />

      {/* Value Props Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Därför väljer säljare OffertHem</h2>
            <p className="text-slate-600">Vi har skalat bort bruset och fokuserar på det enda som betyder något: Ditt slutpris.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Topplistade Mäklare",
                desc: "Vi samarbetar bara med mäklare som har dokumenterat höga slutpriser och kundnöjdhet i ditt område.",
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                )
              },
              {
                title: "Pressa Arvodet",
                desc: "När mäklarna vet att de tävlar om din bostad ger de dig sitt absolut bästa erbjudande direkt.",
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                )
              },
              {
                title: "Spara Tid",
                desc: "Slipp ringa runt. Fyll i formuläret på 1 minut och luta dig tillbaka medan offerterna trillar in.",
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                )
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
