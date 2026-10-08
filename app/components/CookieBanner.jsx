"use client";

import { useEffect, useState } from "react";

type CookieChoice = "accepted" | "rejected" | "custom" | null;

export default function CookieBanner() {
  const [choice, setChoice] = useState<CookieChoice>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    const savedChoice = localStorage.getItem("cookie-consent");

    if (!savedChoice) {
      setShowBanner(true);
      return;
    }

    setChoice(savedChoice as CookieChoice);

    const savedAnalytics =
      localStorage.getItem("analytics-consent") === "true";

    setAnalyticsAllowed(savedAnalytics);
  }, []);

  useEffect(() => {
  const openPreferences = () => {
    setShowBanner(true);
    setShowPreferences(true);

    const savedAnalytics =
      localStorage.getItem("analytics-consent") === "true";

    setAnalyticsAllowed(savedAnalytics);
  };

  window.addEventListener(
    "openCookiePreferences",
    openPreferences
  );

  return () => {
    window.removeEventListener(
      "openCookiePreferences",
      openPreferences
    );
  };
}, []);

  const saveChoice = (
    newChoice: Exclude<CookieChoice, null>,
    analytics: boolean
  ) => {
    localStorage.setItem("cookie-consent", newChoice);
    localStorage.setItem("analytics-consent", String(analytics));

    setChoice(newChoice);
    setAnalyticsAllowed(analytics);
    setShowBanner(false);
    setShowPreferences(false);

    window.dispatchEvent(new Event("cookie-consent-updated"));
  };

  const acceptAll = () => {
    saveChoice("accepted", true);
  };

  const rejectAll = () => {
    saveChoice("rejected", false);
  };

  const savePreferences = () => {
    saveChoice("custom", analyticsAllowed);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-[20000] flex items-end sm:items-center justify-center p-4 sm:p-6">
      {/* Achtergrond */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
        aria-hidden="true"
      />

      {/* Cookievenster */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        className="
          relative
          w-full
          max-w-[620px]
          bg-[#FCFAF8]
          border
          border-[#E8E2DC]
          rounded-[2rem]
          sm:rounded-[2.5rem]
          shadow-[0_25px_70px_rgba(0,0,0,0.15)]
          px-6
          py-7
          sm:px-10
          sm:py-9
        "
      >
        {!showPreferences ? (
          <>
            <p className="uppercase tracking-[0.25em] text-xs text-[#A97870] mb-3">
              Cookies & privacy
            </p>

            <h2
              id="cookie-title"
              className="text-3xl sm:text-4xl font-light text-[#6F745C] mb-5"
            >
              Jouw privacy, jouw keuze
            </h2>

            <p className="text-[#7F7F72] leading-7">
              We gebruiken noodzakelijke cookies om de website goed te laten
              werken. Met jouw toestemming gebruiken we daarnaast analytische
              cookies om te begrijpen hoe de website wordt gebruikt en deze te
              verbeteren.
            </p>

            <p className="mt-4 text-sm text-[#8A8A80] leading-6">
              Google Analytics wordt alleen ingeschakeld wanneer je hiervoor
              toestemming geeft.
            </p>

            <a
              href="/privacy"
              className="inline-block mt-4 text-sm text-[#8A625B] underline underline-offset-4 hover:text-[#6F745C] transition"
            >
              Lees onze privacyverklaring
            </a>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={acceptAll}
                className="
                  bg-[#D9B0A7]
                  hover:bg-[#C89B91]
                  text-white
                  rounded-full
                  px-5
                  py-3.5
                  transition
                "
              >
                Accepteren
              </button>

              <button
                type="button"
                onClick={rejectAll}
                className="
                  bg-white
                  border
                  border-[#DCCFC4]
                  text-[#6F745C]
                  rounded-full
                  px-5
                  py-3.5
                  hover:bg-[#F7F4F1]
                  transition
                "
              >
                Afwijzen
              </button>

              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="
                  bg-white
                  border
                  border-[#DCCFC4]
                  text-[#6F745C]
                  rounded-full
                  px-5
                  py-3.5
                  hover:bg-[#F7F4F1]
                  transition
                "
              >
                Voorkeuren
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="uppercase tracking-[0.25em] text-xs text-[#A97870] mb-3">
              Cookievoorkeuren
            </p>

            <h2
              id="cookie-title"
              className="text-3xl sm:text-4xl font-light text-[#6F745C] mb-6"
            >
              Beheer jouw voorkeuren
            </h2>

            {/* Noodzakelijk */}
            <div className="border border-[#E8E2DC] rounded-[1.5rem] p-5 mb-4 bg-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg text-[#6F745C]">
                    Noodzakelijke cookies
                  </h3>

                  <p className="mt-1 text-sm text-[#7F7F72] leading-6">
                    Nodig voor de basiswerking van de website.
                  </p>
                </div>

                <span className="text-sm text-[#A97870] font-medium">
                  Altijd aan
                </span>
              </div>
            </div>

            {/* Analytics */}
            <div className="border border-[#E8E2DC] rounded-[1.5rem] p-5 bg-white">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <h3 className="text-lg text-[#6F745C]">
                    Analytische cookies
                  </h3>

                  <p className="mt-1 text-sm text-[#7F7F72] leading-6">
                    Helpen ons met Google Analytics te begrijpen hoe bezoekers
                    de website gebruiken.
                  </p>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={analyticsAllowed}
                  aria-label="Analytische cookies"
                  onClick={() => setAnalyticsAllowed(!analyticsAllowed)}
                  className={`
                    relative
                    shrink-0
                    w-14
                    h-8
                    rounded-full
                    transition
                    ${
                      analyticsAllowed
                        ? "bg-[#D9B0A7]"
                        : "bg-[#D8D5D0]"
                    }
                  `}
                >
                  <span
                    className={`
                      absolute
                      top-1
                      w-6
                      h-6
                      bg-white
                      rounded-full
                      shadow-sm
                      transition-all
                      ${
                        analyticsAllowed
                          ? "left-7"
                          : "left-1"
                      }
                    `}
                  />
                </button>
              </div>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={savePreferences}
                className="
                  flex-1
                  bg-[#D9B0A7]
                  hover:bg-[#C89B91]
                  text-white
                  rounded-full
                  px-5
                  py-3.5
                  transition
                "
              >
                Voorkeuren opslaan
              </button>

              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="
                  flex-1
                  bg-white
                  border
                  border-[#DCCFC4]
                  text-[#6F745C]
                  rounded-full
                  px-5
                  py-3.5
                  hover:bg-[#F7F4F1]
                  transition
                "
              >
                Terug
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}