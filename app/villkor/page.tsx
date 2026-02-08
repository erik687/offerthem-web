import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function VillkorPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Tillbaka till startsidan
                </Link>

                <h1 className="text-3xl font-bold text-slate-900 mb-6">Villkor och Integritetspolicy</h1>

                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="lead text-lg">
                        Genom att använda OffertHem godkänner du följande användarvillkor och integritetspolicy.
                    </p>

                    <h3>1. Tjänsten</h3>
                    <p>
                        OffertHem är en kostnadsfri matchningstjänst som förmedlar kontakt mellan privatpersoner som vill sälja bostad och registrerade fastighetsmäklare.
                    </p>

                    <h3>2. Personuppgifter</h3>
                    <p>
                        När du fyller i en intresseanmälan samlar vi in de uppgifter du lämnar (namn, kontaktuppgifter, bostadsfakta) för att kunna matcha dig med lämpliga mäklare.
                        Dina uppgifter delas endast med de mäklare som väljs ut för just ditt uppdrag.
                    </p>

                    <h3>3. Trygghet och Säkerhet</h3>
                    <p>
                        Vi värnar om din integritet. Dina uppgifter sparas säkert och säljs aldrig vidare till obehörig tredje part utanför den avsedda mäklartjänsten.
                    </p>

                    <h3>4. Kontakt</h3>
                    <p>
                        Har du frågor om hur dina uppgifter hanteras? Kontakta oss på info@offerthem.cloud.
                    </p>
                </div>
            </div>
        </div>
    );
}
