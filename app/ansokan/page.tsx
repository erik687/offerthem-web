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
        city: "", // Add city to state
        area: "",
        rooms: "",
        description: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        brokerCount: "3" // Default to 3 brokers
    });

    const [isLoading, setIsLoading] = useState(false); // Loading state

    useEffect(() => {
        const type = searchParams.get("type");
        if (type) {
            // Map slugs to display names if needed, or just capitalize
            const label = type.charAt(0).toUpperCase() + type.slice(1);
            setPropertyType(label);
        }
    }, [searchParams]);

    const handleNext = async () => {
        if (step === 1) {
            setIsLoading(true);
            try {
                // Remove spaces for API call
                const cleanPostcode = formData.postcode.replace(/\s+/g, '');
                if (cleanPostcode.length >= 5) {
                    const response = await fetch(`https://api.zippopotam.us/se/${cleanPostcode}`);
                    if (response.ok) {
                        const data = await response.json();
                        if (data.places && data.places.length > 0) {
                            setFormData(prev => ({ ...prev, city: data.places[0]["place name"] }));
                        }
                    }
                }
            } catch (error) {
                console.error("Failed to fetch city", error);
            } finally {
                setIsLoading(false);
                setStep(step + 1);
            }
        } else {
            setStep(step + 1);
        }
    };

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
        const isEttWord = ["Radhus", "Fritidshus"].includes(propertyType);
        const pronoun = isEttWord ? "ditt" : "din";

        return (
            <WizardLayout step={1} title={`Hitta rätt lokala mäklare för ${pronoun} ${propertyType.toLowerCase()}`}>
                <div className="max-w-md mx-auto">
                    <label className="block text-sm font-bold text-slate-800 mb-2">Postnummer</label>
                    <input
                        autoFocus
                        type="text"
                        value={formData.postcode}
                        onChange={(e) => handleChange("postcode", e.target.value)}
                        placeholder="T.ex. 123 45"
                        className="w-full p-5 text-lg border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    />
                    <p className="text-xs text-slate-500 mt-3 font-medium">Postnumret används endast för att matcha dig med rätt lokala mäklare.</p>

                    <div className="mt-8 flex justify-end">
                        <button
                            onClick={handleNext}
                            disabled={!formData.postcode || isLoading}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-blue-500/25 flex justify-center items-center"
                        >
                            {isLoading ? "Hämtar information..." : "Nästa steg"}
                        </button>
                    </div>
                </div>
            </WizardLayout>
        );
    }

    // Step 2: Details
    if (step === 2) {
        const isEttWord = ["Radhus", "Fritidshus"].includes(propertyType);
        const pronoun = isEttWord ? "ditt" : "din";

        const title = formData.city
            ? `Information om ${pronoun} ${propertyType.toLowerCase()} i ${formData.city}`
            : `Information om ${pronoun} ${propertyType.toLowerCase()}`;

        return (
            <WizardLayout step={2} title={title} onBack={handleBack}>
                <div className="max-w-xl mx-auto space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-900 mb-2">Boarea (m²) <span className="text-slate-400 font-normal">(frivillig)</span></label>
                            <input
                                type="number"
                                value={formData.area}
                                onChange={(e) => handleChange("area", e.target.value)}
                                placeholder="85"
                                className="w-full p-4 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-900 mb-2">Antal rum <span className="text-slate-400 font-normal">(frivillig)</span></label>
                            <div className="relative">
                                <select
                                    value={formData.rooms}
                                    onChange={(e) => handleChange("rooms", e.target.value)}
                                    className="w-full p-4 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none appearance-none bg-white transition-all"
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
                        <label className="block text-sm font-bold text-slate-900 mb-2">Övrig information <span className="text-slate-400 font-normal">(frivillig)</span></label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => handleChange("description", e.target.value)}
                            placeholder="T.ex. balkong, nytt kök, närhet till kommunikationer..."
                            rows={4}
                            className="w-full p-4 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none resize-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-bold text-slate-900 mb-4">Hur många mäklare vill du jämföra?</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                            {[2, 3, 4].map((num) => (
                                <button
                                    key={num}
                                    onClick={() => handleChange("brokerCount", num.toString())}
                                    className={`py-4 px-2 rounded-2xl font-bold text-center border-2 transition-all ${formData.brokerCount === num.toString()
                                        ? "bg-blue-50 border-blue-600 text-blue-700 shadow-sm"
                                        : "bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50/50"
                                        }`}
                                >
                                    {num} {num === 1 ? "mäklare" : "mäklare"}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                        <button
                            onClick={handleNext}
                            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg hover:shadow-blue-500/25"
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
                            <label className="block text-sm font-bold text-slate-900 mb-2">Namn</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                placeholder="För- och efternamn"
                                className="w-full p-4 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-900 mb-2">E-postadress</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                placeholder="namn@exempel.se"
                                className="w-full p-4 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-bold text-slate-900 mb-2">Telefonnummer</label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            placeholder="070-123 45 67"
                            className="w-full p-4 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-bold text-slate-900 mb-2">Bostadens adress</label>
                        <input
                            type="text"
                            value={formData.address}
                            onChange={(e) => handleChange("address", e.target.value)}
                            placeholder="T.ex. Storgatan 1"
                            className="w-full p-4 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        />
                        <p className="text-xs text-slate-500 mt-2">Adressen används för att matcha dig med rätt lokala mäklare.</p>
                    </div>

                    <div className="text-xs text-slate-500 mt-4 leading-relaxed">
                        Genom att skicka in godkänner du våra <a href="/villkor" target="_blank" className="underline hover:text-blue-600">villkor och integritetspolicy</a> och att vi kontaktar dig med förslag på mäklare.
                    </div>

                    <div className="mt-8 flex justify-end">
                        <button
                            onClick={handleSubmit}
                            disabled={!formData.name || !formData.phone}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg hover:shadow-blue-500/25"
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
        <div className="min-h-screen bg-sky-50">
            <header className="p-6">
                <div className="container mx-auto flex justify-center">
                    <div className="relative w-32 h-8 md:w-40 md:h-10">
                        <img src="/logo.png" alt="OffertHem" className="object-contain w-full h-full" />
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 max-w-2xl">
                {/* Progress Steps */}
                <div className="flex justify-center items-center gap-2 mb-12">
                    {/* Step 1 */}
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors ${step >= 1 ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-400 border border-slate-200'}`}>
                        <span>1</span>
                        <span className="hidden md:inline">Postnr</span>
                    </div>

                    <div className={`w-8 h-1 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-slate-200'}`} />

                    {/* Step 2 */}
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors ${step >= 2 ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-400 border border-slate-200'}`}>
                        <span>2</span>
                        <span className="hidden md:inline">Detaljer</span>
                    </div>

                    <div className={`w-8 h-1 rounded-full ${step >= 3 ? 'bg-blue-600' : 'bg-slate-200'}`} />

                    {/* Step 3 */}
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors ${step >= 3 ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-400 border border-slate-200'}`}>
                        <span>3</span>
                        <span className="hidden md:inline">Kontakt</span>
                    </div>
                </div>

                {/* Content Card */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h1>
                    {subtitle ? (
                        <p className="text-slate-600 max-w-lg mx-auto text-lg leading-relaxed">{subtitle}</p>
                    ) : (
                        <p className="text-slate-500 text-lg">Jämför de bästa lokala mäklarna i ditt område</p>
                    )}
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-blue-50/50 p-6 pt-20 md:p-12 relative overflow-hidden">
                    {/* Decorative blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10 opacity-50" />

                    {children}

                    {onBack && (
                        <button
                            onClick={onBack}
                            className="absolute top-8 left-8 p-2 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-700 transition-all"
                            aria-label="Gå tillbaka"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </main>
        </div>
    );
}
