"use client";

export const MainCTA = ({ onClick }: { onClick?: () => void }) => {
    return (
        <a
            href="#start"
            className="group relative w-full md:w-auto inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] transition-all duration-200 transform hover:-translate-y-1 active:scale-95 text-center"
        >
            <span className="flex items-center justify-center gap-2 text-lg">
                Hämta mina offerter nu
                <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </span>
            <span className="block text-xs font-normal text-blue-200 mt-1">
                Alltid 100% kostnadsfritt & utan bindningstid
            </span>
        </a>
    );
};
