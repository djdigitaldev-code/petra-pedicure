import "./globals.css";
import CookieBanner from "@/app/components/CookieBanner";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";

import {
  Cormorant_Garamond,
  Nunito,
} from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-heading",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  metadataBase: new URL("https://www.petrapedicureaanhuis.nl"),

  title: {
    default:
      "Pedicure aan huis Almere | Petra Pedicure aan Huis",
    template: "%s | Petra Pedicure aan Huis",
  },

  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
  },

  description:
    "Professionele pedicure aan huis in Almere. Persoonlijke voetverzorging bij u thuis, met aandacht voor eelt, likdoorns, nagelverzorging en verzorgde voeten.",

  applicationName: "Petra Pedicure aan Huis",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.petrapedicureaanhuis.nl",
    siteName: "Petra Pedicure aan Huis",
    title:
      "Pedicure aan huis Almere | Petra Pedicure aan Huis",
    description:
      "Professionele pedicure aan huis in Almere. Persoonlijke voetverzorging bij u thuis.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Petra Pedicure aan Huis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Pedicure aan huis Almere | Petra Pedicure aan Huis",
    description:
      "Professionele pedicure aan huis in Almere.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",

    name: "Petra Pedicure aan Huis",

    logo: "https://www.petrapedicureaanhuis.nl/logo.jpg",
    image: "https://www.petrapedicureaanhuis.nl/logo.jpg",

    url: "https://www.petrapedicureaanhuis.nl",

    telephone: "+31612170943",
    email: "petrapedicureaanhuis@hotmail.com",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Almere",
      addressCountry: "NL",
    },

    areaServed: {
      "@type": "City",
      name: "Almere",
    },

    description:
      "Professionele pedicure aan huis in Almere. Gespecialiseerd in voetverzorging, eelt verwijderen, likdoorns behandelen, nagelverzorging en verzorgde voeten bij u thuis.",

    priceRange: "€€",

    serviceType: [
      "Pedicure aan huis",
      "Voetverzorging",
      "Eelt verwijderen",
      "Likdoorns behandelen",
      "Nagelverzorging",
      "Ingegroeide nagels behandelen",
    ],
  };

  return (
    <html
      lang="nl"
      className={`${cormorant.variable} ${nunito.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}

        <CookieBanner />

        <GoogleAnalytics />
      </body>
    </html>
  );
}