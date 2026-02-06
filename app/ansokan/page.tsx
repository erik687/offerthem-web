"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle, ChevronDown } from "lucide-react";

// Wrap main component in Suspense for useSearchParams
export default function AnsokanPage() {
    return (
        <Suspense fallback={<div>Laddar...</div>}>
            <WizardContent />
        </Suspense>
    );
}

function WizardContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [step, setStep] = useState(1);
    const [propertyType, setPropertyType] = useState("Bostad");

    // Form State
    const [formData, setFormData] = useState({
        postcode: "",
        area: "",
        rooms: "",
        description: "",
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        const type = searchParams.get("type");
        if (type) {
            // Map slugs to display names if needed, or just capitalize
            const label = type.charAt(0).toUpperCase() + type.slice(1);
            setPropertyType(label);
        }
    }, [searchParams]);

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        // Here you would typically send data to an API
        console.log("Form Submitted:", { propertyType, ...formData });
        setStep(4); // Success step
    };

    // Step 1: Postcode
    if (step === 1) {
        return (
            <WizardLayout step={1} title={`Hitta rätt lokala mäklare för din ${propertyType.toLowerCase()}`}>
                <div className="max-w-md mx-auto">
                    <label className="block text-sm font-bold text-slate-800 mb-2">Postnummer</label>
                    <input
                        autoFocus
                        type="text"
                        value={formData.postcode}
                        onChange={(e) => handleChange("postcode", e.target.value)}
                        placeholder="T.ex. 123 45"
                        className="w-full p-4 text-lg border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:ring-0 outline-none transition-colors"
                    />
                    <p className="text-xs text-slate-500 mt-2">Postnumret används endast för att matcha dig med rätt lokala mäklare.</p>

                    <div className="mt-8 flex justify-end">
                        <button
                            onClick={handleNext}
                            disabled={!formData.postcode}
                            className="bg-orange-400 hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-xl transition-all"
                        >
                            Nästa steg
                        </button>
                    </div>
                </div>
            </WizardLayout>
        );
    }

    // Step 2: Details
    if (step === 2) {
        return (
            <WizardLayout step={2} title={`Information om din ${propertyType.toLowerCase()}`} onBack={handleBack}>
                <div className="max-w-xl mx-auto space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-800 mb-2">Boarea (m²) <span className="text-slate-400 font-normal">(frivillig)</span></label>
                            <input
                                type="number"
                                value={formData.area}
                                onChange={(e) => handleChange("area", e.target.value)}
                                placeholder="85"
                                className="w-full p-4 border border-slate-200 rounded-xl focus:border-orange-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-800 mb-2">Antal rum <span className="text-slate-400 font-normal">(frivillig)</span></label>
                            <div className="relative">
                                <select
                                    value={formData.rooms}
                                    onChange={(e) => handleChange("rooms", e.target.value)}
                                    className="w-full p-4 border border-slate-200 rounded-xl focus:border-orange-500 outline-none appearance-none bg-white"
                                >
                                    <option value="">Välj</option>
                                    {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8].map(r => (
                                        <option key={r} value={r}>{r} rum</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-800 mb-2">Övrig information <span className="text-slate-400 font-normal">(frivillig)</span></label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => handleChange("description", e.target.value)}
                            placeholder="T.ex. balkong, nytt kök, närhet till kommunikationer..."
                            rows={4}
                            className="w-full p-4 border border-slate-200 rounded-xl focus:border-orange-500 outline-none resize-none"
                        />
                    </div>

                    <div className="mt-8 flex justify-end">
                        <button
                            onClick={handleNext}
                            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-xl transition-all"
                        >
                            Nästa steg
                        </button>
                    </div>
                </div>
            </WizardLayout>
        );
    }

    // Step 3: Contact
    if (step === 3) {
        return (
            <WizardLayout step={3} title="Sista steget" subtitle="Vi sammanställer nu de mäklare som har levererat bäst slutpriser för bostäder som din i ditt område" onBack={handleBack}>
                <div className="max-w-xl mx-auto space-y-4">
                    {/* Name & Email Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-800 mb-2">Namn</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                placeholder="För- och efternamn"
                                className="w-full p-3 border border-slate-200 rounded-xl focus:border-orange-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-800 mb-2">E-postadress</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                placeholder="namn@exempel.se"
                                className="w-full p-3 border border-slate-200 rounded-xl focus:border-orange-500 outline-none"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-bold text-slate-800 mb-2">Telefonnummer</label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            placeholder="070-123 45 67"
                            className="w-full p-3 border border-slate-200 rounded-xl focus:border-orange-500 outline-none"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-bold text-slate-800 mb-2">Bostadens adress</label>
                        <input
                            type="text"
                            value={formData.address}
                            onChange={(e) => handleChange("address", e.target.value)}
                            placeholder="T.ex. Storgatan 1"
                            className="w-full p-3 border border-slate-200 rounded-xl focus:border-orange-500 outline-none"
                        />
                        <p className="text-xs text-slate-500 mt-2">Adressen används för att matcha dig med rätt lokala mäklare.</p>
                    </div>

                    <div className="text-xs text-slate-500 mt-4 leading-relaxed">
                        Genom att skicka in godkänner du våra villkor och att vi kontaktar dig med förslag på mäklare.
                    </div>

                    <div className="mt-8 flex justify-end">
                        <button
                            onClick={handleSubmit}
                            disabled={!formData.name || !formData.phone}
                            className="bg-orange-400 hover:bg-orange-500 disabled:opacity-50 text-white font-bold py-3 px-8 rounded-xl transition-all w-full md:w-auto"
                        >
                            Visa mina mäklare
                        </button>
                    </div>
                </div>
            </WizardLayout>
        );
    }

    // Success Step
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg w-full">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Tack för din ansökan!</h2>
                <p className="text-slate-600 mb-8">
                    Vi har mottagit dina uppgifter och kommer nu att matcha dig med de bästa mäklarna i ditt område. Du kommer att bli kontaktad inom kort.
                </p>
                <button
                    onClick={() => router.push("/")}
                    className="text-orange-500 font-bold hover:underline"
                >
                    Gå tillbaka till startsidan
                </button>
            </div>
        </div>
    );
}

// Layout Component for Wizard Steps
function WizardLayout({ step, title, subtitle, children, onBack }: { step: number, title: string, subtitle?: string, children: React.ReactNode, onBack?: () => void }) {
    return (
        <div className="min-h-screen bg-[#FDFBF7]"> {/* Creamy background from image */}
            <header className="p-6">
                <div className="container mx-auto font-bold text-xl text-slate-800">
                    OffertHem
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 max-w-3xl">
                {/* Progress Steps */}
                <div className="flex justify-center items-center gap-4 mb-16 text-sm font-medium text-slate-500">
                    <div className={`flex flex-col items-center gap-2 ${step >= 1 ? 'text-orange-500' : ''}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-200'}`}>1</div>
                        <span>Postnr</span>
                    </div>
                    <div className="w-12 h-0.5 bg-slate-200 mb-6" />
                    <div className={`flex flex-col items-center gap-2 ${step >= 2 ? 'text-orange-500' : ''}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-200'}`}>2</div>
                        <span>Detaljer</span>
                    </div>
                    <div className="w-12 h-0.5 bg-slate-200 mb-6" />
                    <div className={`flex flex-col items-center gap-2 ${step >= 3 ? 'text-orange-500' : ''}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-200'}`}>3</div>
                        <span>Kontakt</span>
                    </div>
                </div>

                {/* Content Card */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-slate-900 mb-3">{title}</h1>
                    {subtitle ? (
                        <p className="text-slate-600 max-w-xl mx-auto">{subtitle}</p>
                    ) : (
                        <p className="text-slate-500">Jämför de 3 bästa lokala mäklarna i ditt område</p>
                    )}
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-12 relative">
                    {children}

                    {onBack && (
                        <button
                            onClick={onBack}
                            className="absolute bottom-12 left-12 flex items-center gap-2 text-slate-800 font-bold hover:text-slate-600 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" /> Tillbaka
                        </button>
                    )}
                </div>
            </main>
        </div>
    );
}
