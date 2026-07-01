import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.petrapedicureaanhuis.nl"),

  title: {
    default: "Petra Pedicure aan Huis | Professionele Pedicure aan Huis in Almere",
    template: "%s | Petra Pedicure aan Huis",
  },

  description:
    "Professionele pedicure aan huis in Almere. Voor voetverzorging, eelt, likdoorns, ingegroeide nagels en verzorgde voeten bij u thuis.",

  applicationName: "Petra Pedicure aan Huis",

  alternates: {
    canonical: "/",
  },

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
    title: "Petra Pedicure aan Huis | Professionele Pedicure aan Huis in Almere",
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
    title: "Petra Pedicure aan Huis",
    description:
      "Professionele pedicure aan huis in Almere.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${cormorant.variable} ${nunito.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}