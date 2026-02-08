"use client";

import { Mail, ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react";
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">

                    {/* 1. Brand / Info */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white tracking-tight">OffertHem</h3>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Vi hjälper dig att hitta rätt mäklare för din bostadsförsäljning. Jämför offerter kostnadsfritt och välj den mäklare som passar dig bäst.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Utforska</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/" className="hover:text-white transition-colors">Startsida</Link></li>
                            <li><Link href="/ansokan?type=bostad" className="hover:text-white transition-colors">Jämför mäklare</Link></li>
                            <li><Link href="/villkor" className="hover:text-white transition-colors">Villkor & Policy</Link></li>
                        </ul>
                    </div>

                    {/* 3. Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Kontakt</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="mailto:info@offerthem.cloud" className="hover:text-white transition-colors flex items-center gap-2"><Mail size={16} /> info@offerthem.cloud</a></li>
                        </ul>
                        <div className="mt-6">
                            <p className="text-xs text-slate-500">Trygghet och kvalitet i varje steg.</p>
                        </div>
                    </div>

                    {/* 4. Newsletter */}
                    <div className="col-span-1 md:col-span-1">
                        <h4 className="text-white font-bold mb-6">Nyhetsbrev</h4>
                        <p className="text-sm mb-4">Få tips och råd inför din försäljning direkt i inkorgen.</p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Din e-post"
                                className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg px-4 py-3 w-full focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-2 transition-colors flex-shrink-0">
                                <ArrowRight size={20} />
                            </button>
                        </form>
                        <p className="text-xs text-slate-600 mt-2">Vi delar aldrig din e-post med andra.</p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm">© {new Date().getFullYear()} OffertHem. Alla rättigheter förbehållna.</p>
                    <div className="flex gap-6 text-sm">
                        <Link href="/villkor" className="hover:text-white transition-colors">Integritetspolicy</Link>
                        <Link href="/villkor" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
