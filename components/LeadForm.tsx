"use client";

import { useEffect, useRef } from "react";

export const LeadForm = () => {
    const frameRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // Security check: ideally verify origin if known specific subdomain, 
            // but 'https://www.offerthem.cloud' seems to be the one.
            // if (event.origin !== "https://www.offerthem.cloud") return;

            if (event.data && event.data.type === 'OFFERTHEM_RESIZE') {
                if (frameRef.current) {
                    frameRef.current.style.height = event.data.height + 'px';
                }
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <div id="offerthem-container" className="w-full bg-white rounded-2xl shadow-xl overflow-hidden min-h-[500px]">
            <iframe
                ref={frameRef}
                id="offerthem-frame"
                src="https://www.offerthem.cloud/lead-form"
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden', minHeight: '500px' }}
                scrolling="no"
                title="OffertHem Lead Form"
            ></iframe>
        </div>
    );
};
