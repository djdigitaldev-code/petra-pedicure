"use client";

import { useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      id="top"
      className={`
bg-[#F7F4F1]
text-[#6F745C]
overflow-x-hidden
${menuOpen ? "h-screen overflow-hidden" : ""}
`}
    >

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-[#F7F4F1] border-b border-[#E8E2DC] px-4 lg:px-20 py-3 lg:py-5">

        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO */}
<a
  href="/"
  onClick={() => setMenuOpen(false)}
  className="flex items-center gap-3"
>
  <img
    src="/logo.jpg"
    alt="Petra Pedicure Logo"
    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover border border-[#E8E2DC] shadow-sm"
  />

  <span
    className="text-[24px] lg:text-4xl text-[#C1978D] font-light tracking-[0.03em]"
    style={{ fontFamily: "'Cormorant Garamond', serif" }}
  >
    Petra Pedicure
  </span>
</a>

          {/* MOBILE BUTTON */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-[#6F745C] relative z-[10001]"
  aria-label="Menu openen"
  type="button"
>
  <span className="text-4xl leading-none">
    {menuOpen ? "✕" : "☰"}
  </span>
</button>

          {/* DESKTOP MENU */}
          <div
  className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.15em] text-[#7F7F72]"
  style={{ fontFamily: "'Cormorant Garamond', serif" }}
>

<a href="/" className="hover:text-[#C1978D] transition">
  Home
</a>

            <a href="/behandelingen" className="hover:text-[#C1978D] transition">
              Behandelingen
            </a>

            <a href="/tarieven" className="hover:text-[#C1978D] transition">
              Tarieven
            </a>

            <a href="/behandelresultaten" className="hover:text-[#C1978D] transition">
              Behandelresultaten
            </a>

            <a href="/over" className="hover:text-[#C1978D] transition">
              Over
            </a>

            <a href="/contact" className="hover:text-[#C1978D] transition">
              Contact
            </a>

          </div>

        </div>
      </nav>

{/* MOBILE MENU */}
{menuOpen && (
  <>

    {/* OVERLAY */}
    <div
      onClick={() => setMenuOpen(false)}
      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9990]"
    />

    {/* MENU */}
    <div
className="
md:hidden
fixed
top-[86px]
left-1/2
-translate-x-1/2
w-[94%]
bg-[#FCFAF8]/95
backdrop-blur-xl
border
border-[#ECE6DF]
rounded-[2.7rem]
shadow-[0_25px_70px_rgba(0,0,0,0.08)]
z-[10000]
px-8
py-6
"
    >

      {/* NAV LINKS */}
      <div className="flex flex-col">

        {[
          ["Behandelingen", "/behandelingen"],
          ["Tarieven", "/tarieven"],
          ["Behandelresultaten", "/behandelresultaten"],
          ["Over", "/over"],
          ["Contact", "/contact"],
        ].map(([title, link], index) => (

          <a
            key={index}
            href={link}
            onClick={() => setMenuOpen(false)}
            className="
            py-3
            border-b
            border-[#EEE8E1]
            uppercase
            tracking-[0.22em]
            text-[15px]
            text-[#7F7F72]
            "
          >
            {title}
          </a>

        ))}

      </div>

      {/* SUBTITLE */}
<p
className="
mt-8
mb-5
text-center
uppercase
tracking-[0.26em]
text-[16px]
text-[#C1978D]
"
>
Maak hier een afspraak
</p>

{/* BUTTONS */}
<div className="mt-6 flex flex-col gap-3">

  <a
    href="tel:+31612170943"
    className="
    bg-[#D9B0A7]
    hover:bg-[#c89b91]
    text-white
    text-center
    py-4
    rounded-full
    text-lg
    shadow-sm
    transition
    "
  >
    Bel direct
  </a>

  <a
    href="https://wa.me/31612170943"
    target="_blank"
    rel="noopener noreferrer"
    className="
    bg-white
    border
    border-[#DCCFC4]
    text-[#6F745C]
    text-center
    py-4
    rounded-full
    text-lg
    hover:bg-[#F7F4F1]
    transition
    "
  >
    WhatsApp
  </a>

  <a
    href="mailto:petrapedicureaanhuis@hotmail.com"
    className="
    bg-[#D9B0A7]
    hover:bg-[#c89b91]
    text-white
    text-center
    py-4
    rounded-full
    text-lg
    shadow-sm
    transition
    "
  >
    Mail ons
  </a>

</div>

    </div>

  </>
)}

      {/* CONTENT */}
      <section className="px-6 lg:px-20 py-20 pt-[160px]">

        <div className="max-w-4xl mx-auto">

          {/* TITEL */}
          <div className="mb-16 text-center">

            <p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-4">
              Petra Pedicure
            </p>

            <h1 className="text-5xl lg:text-6xl font-light mb-6">
              Privacyverklaring
            </h1>

<p className="text-lg leading-8 text-[#7F7F72]">
  Bij Petra Pedicure aan Huis ga ik zorgvuldig om met uw persoonsgegevens.
  In deze privacyverklaring leest u hoe uw gegevens worden verwerkt en beschermd.
</p>

          </div>
</div>

          {/* CONTENT */}
<div className="bg-white border border-[#EEE8E1] rounded-[2rem] p-8 lg:p-12 shadow-sm space-y-12">
  <div>
    <h2 className="text-3xl font-light mb-4">1. Wie ben ik</h2>

    <p className="text-[#7F7F72] leading-8">
      Deze privacyverklaring is van toepassing op de dienstverlening van
      Petra Pedicure aan Huis.
      <br /><br />
<strong>Bedrijfsnaam:</strong> Petra Pedicure aan Huis
<br />
<strong>E-mailadres:</strong>{" "}
<a
  href="mailto:petrapedicureaanhuis@hotmail.com"
  className="hover:text-[#C1978D] transition"
>
  petrapedicureaanhuis@hotmail.com
</a>
<br />
<strong>Telefoonnummer:</strong>{" "}
<a
  href="tel:+31612170943"
  className="hover:text-[#C1978D] transition"
>
  06 12 17 09 43
</a>
      <br /><br />
      Petra Pedicure aan Huis is verantwoordelijk voor de verwerking van uw
      persoonsgegevens zoals beschreven in deze privacyverklaring.
    </p>
  </div>

  <div>
    <h2 className="text-3xl font-light mb-4">
      2. Welke persoonsgegevens verwerk ik?
    </h2>

    <p className="text-[#7F7F72] leading-8">
      Wanneer u gebruikmaakt van mijn diensten of contact met mij opneemt,
      kan ik de volgende persoonsgegevens verwerken:
    </p>

    <ul className="mt-4 list-disc pl-6 text-[#7F7F72] leading-8">
      <li>Voor- en achternaam</li>
      <li>Adresgegevens</li>
      <li>Telefoonnummer</li>
      <li>E-mailadres</li>
      <li>Gegevens over afspraken en behandelingen</li>
      <li>
        Eventuele medische gegevens die van belang zijn voor een veilige
        behandeling, zoals diabetes of specifieke voetproblemen
      </li>
    </ul>
  </div>

  <div>
    <h2 className="text-3xl font-light mb-4">
      3. Waarom verwerk ik deze gegevens?
    </h2>

    <ul className="list-disc pl-6 text-[#7F7F72] leading-8">
      <li>Het plannen en beheren van afspraken</li>
      <li>Het uitvoeren van behandelingen</li>
      <li>Contact opnemen indien nodig</li>
      <li>Facturatie en administratie</li>
      <li>Het voldoen aan wettelijke verplichtingen</li>
    </ul>
  </div>

  <div>
    <h2 className="text-3xl font-light mb-4">
      4. Bijzondere persoonsgegevens
    </h2>

    <p className="text-[#7F7F72] leading-8">
      Wanneer dit noodzakelijk is voor een veilige en verantwoorde behandeling,
      kunnen medische gegevens worden verwerkt.
      Dit gebeurt uitsluitend met uw toestemming en wanneer deze gegevens
      noodzakelijk zijn voor de behandeling.
    </p>
  </div>

  <div>
    <h2 className="text-3xl font-light mb-4">
      5. Bewaartermijn
    </h2>

    <p className="text-[#7F7F72] leading-8">
      Ik bewaar persoonsgegevens niet langer dan noodzakelijk.
    </p>

    <ul className="mt-4 list-disc pl-6 text-[#7F7F72] leading-8">
      <li>Administratie (facturen): 7 jaar</li>
      <li>Klantgegevens: zolang u klant bent of maximaal 2 jaar na uw laatste afspraak</li>
    </ul>
  </div>

  <div>
    <h2 className="text-3xl font-light mb-4">
      6. Delen van persoonsgegevens
    </h2>

    <p className="text-[#7F7F72] leading-8">
      Uw persoonsgegevens worden nooit verkocht aan derden.
      Gegevens worden uitsluitend gedeeld wanneer dit noodzakelijk is voor
      mijn dienstverlening of wanneer ik daartoe wettelijk verplicht ben.
    </p>
  </div>

  <div>
    <h2 className="text-3xl font-light mb-4">
      7. Beveiliging
    </h2>

    <p className="text-[#7F7F72] leading-8">
      Petra Pedicure aan Huis neemt passende maatregelen om uw
      persoonsgegevens zorgvuldig te beschermen tegen verlies,
      misbruik of onbevoegde toegang.
    </p>
  </div>

  <div>
    <h2 className="text-3xl font-light mb-4">
      8. Uw rechten
    </h2>

    <p className="text-[#7F7F72] leading-8">
      U heeft het recht om uw persoonsgegevens in te zien,
      te corrigeren of te laten verwijderen, voor zover de wet dit toestaat.
      Ook kunt u bezwaar maken tegen de verwerking van uw gegevens.
    </p>
  </div>

<div>
  <h2 className="text-3xl font-light mb-4">
    9. Contact
  </h2>

  <p className="text-[#7F7F72] leading-8">
    Heeft u vragen over deze privacyverklaring of over de verwerking van uw
    persoonsgegevens?
  </p>

  <div className="mt-6 space-y-4 text-[#7F7F72]">

    <p>
      <strong>E-mail:</strong>{" "}
      <a
        href="mailto:petrapedicureaanhuis@hotmail.com"
        className="hover:text-[#C1978D] transition"
      >
        petrapedicureaanhuis@hotmail.com
      </a>
    </p>

    <p>
      <strong>Telefoon:</strong>{" "}
      <a
        href="tel:+31612170943"
        className="hover:text-[#C1978D] transition"
      >
        06 12 17 09 43
      </a>
    </p>

  </div>

</div>

        </div>

      </section>

    </main>
  );
}