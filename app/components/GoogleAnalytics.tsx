"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = "G-FHY2NJQDYN";

export default function GoogleAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent =
        localStorage.getItem("analytics-consent") === "true";

      setAllowed(consent);
    };

    // Controleer opgeslagen toestemming bij het openen van de website
    checkConsent();

    // Controleer opnieuw zodra de bezoeker zijn keuze maakt
    window.addEventListener("cookie-consent-updated", checkConsent);

    return () => {
      window.removeEventListener(
        "cookie-consent-updated",
        checkConsent
      );
    };
  }, []);

  if (!allowed) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname
          });
        `}
      </Script>
    </>
  );
}