import { MainCTA } from "@/components/MainCTA";
import { TrustSection } from "@/components/TrustSection";
import { StepsSection } from "@/components/StepsSection";
import { BrokerLogos } from "@/components/BrokerLogos";
import { FAQSection } from "@/components/FAQSection";
import { SocialProofPopup } from "@/components/SocialProofPopup";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">

          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-1.5 bg-blue-50 text-blue-700 font-semibold rounded-full text-sm">
            Sveriges tryggaste mäklarjämförelse
          </div>

          {/* H1 Headline (Variant: Smärtpunkt / Risk) */}
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Riskera inte miljoner i slutpris – <br className="hidden md:block" />
            <span className="text-blue-600">Anlita rätt mäklare från början.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Statistik visar att valet av mäklare kan skilja 100 000-tals kronor i slutpris.
            Jämför lokala experter gratis och säkra din vinst.
          </p>

          {/* CTA Area */}
          <div className="flex flex-col items-center gap-6">
            <MainCTA />

            {/* Trust Indicators near CTA */}
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Gratis
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Ej bindande
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Verifierade mäklare
              </span>
            </div>
          </div>
        </div>

        {/* Video Placeholder (To be replaced with Lo-Fi Video) */}
        <div className="mt-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-slate-900 rounded-2xl aspect-video relative flex items-center justify-center shadow-2xl overflow-hidden group cursor-pointer">
            {/* Fake Video Thumb / Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <p className="mt-6 text-white font-medium text-lg drop-shadow-md">Se hur du maxar din försäljning på 30s</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 rounded text-white text-xs backdrop-blur-md">0:30</div>
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
