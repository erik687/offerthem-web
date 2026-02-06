"use client";

import { useEffect, useRef } from "react";

export const LeadForm = () => {
    const frameRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // Listen for resize events from the iframe
            if (event.data && event.data.type === 'OFFERTHEM_RESIZE') {
                if (frameRef.current) {
                    // Set the iframe height
                    frameRef.current.style.height = event.data.height + 'px';
                    // Force a repaint or ensure container adapts if needed, though block display usually handles this.
                }
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <div
            id="offerthem-container"
            className="w-full bg-white rounded-2xl shadow-xl overflow-hidden transition-[height] duration-200 ease-out"
            // Remove fixed min-height to rely on iframe content, 
            // but keep a reasonable default min-height to avoid layout shift on load
            style={{ minHeight: '520px' }}
        >
            <iframe
                ref={frameRef}
                id="offerthem-frame"
                src="https://www.offerthem.cloud/lead-form"
                width="100%"
                // Initial height request, but will be overridden by JS
                height="520"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                title="OffertHem Lead Form"
            ></iframe>
        </div>
    );
};
