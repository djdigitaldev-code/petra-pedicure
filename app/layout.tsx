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
  title: "Petra Pedicure",
  description: "Professionele pedicure aan huis in Almere",
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