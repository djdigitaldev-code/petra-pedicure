import "./globals.css";
import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Nunito,
} from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-nunito",
});

import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Petra Pedicure",
  description: "Professionele pedicure aan huis in Almere",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={cormorant.variable}>
        {children}
      </body>
    </html>
  );
}