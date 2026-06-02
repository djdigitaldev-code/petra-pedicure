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
top-[88px]
left-1/2
-transform-x-1/2
w-[90%]
bg-[#FCFAF8]/95
backdrop-blur-xl
border
border-[#ECE6DF]
rounded-[2.5rem]
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
      py-5
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

{/* CONTACT INFO */}
<div className="mt-8 flex flex-col items-center gap-5 text-[#AEB49A]">

  <div className="flex items-center gap-4 text-[18px]">
    <FaPhoneAlt size={20} color="#C1978D" />
    <span>06 12 34 56 78</span>
  </div>

  <div className="flex items-center gap-4 text-[18px]">
    <FaEnvelope size={20} color="#C1978D" />
    <span>petrapedicureaanhuis@hotmail.com</span>
  </div>

</div>

      {/* SUBTITLE */}
      <p
        className="
        mt-12
        text-center
        uppercase
        tracking-[0.28em]
        text-[15px]
        text-[#C1978D]
        "
      >
        Maak hier een afspraak
      </p>

      {/* BUTTONS */}
      <div className="mt-8 flex flex-col gap-4">

        <a
          href="tel:+31612345678"
          className="
          bg-[#D9B0A7]
          hover:bg-[#c89b91]
          transition
          text-white
          text-center
          py-4
          rounded-full
          text-xl
          shadow-sm
          "
        >
          Bel direct
        </a>

        <a
          href="https://wa.me/31612345678"
          target="_blank"
          rel="noopener noreferrer"
          className="
          border
          border-[#B8B89E]
          text-[#7F7F72]
          text-center
          py-4
          rounded-full
          text-xl
          hover:bg-[#F7F4F1]
          transition
          "
        >
          WhatsApp
        </a>

      </div>

    </div>
  </>
)}

{/* CONTENT */}
<section className="pt-[160px] pb-24 px-6 lg:px-20">

<div className="max-w-6xl mx-auto">

<div className="text-center mb-20">

<p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-5">
Voor & na
</p>

<h1 className="text-5xl lg:text-7xl font-light mb-10">
Behandelresultaten
</h1>

<p className="text-lg text-[#7F7F72] leading-9 max-w-3xl mx-auto">
Iedere voet is anders en iedere behandeling wordt afgestemd op
wat jouw voeten nodig hebben. Hieronder zie je voorbeelden van
resultaten na professionele voetverzorging.
</p>

</div>


{/* RESULTAAT 1 */}
<div className="mb-20">

<div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-[#EEE8E1]">

<img
src="/resultaten/resultaat-1.jpg"
alt="Voor en na voetverzorging"
className="
w-full
rounded-[2rem]
transition
duration-700
hover:scale-[1.02]
"
/>

<div className="text-center mt-8">

<h2 className="text-3xl font-light mb-4">
Verzorging & egaliseren
</h2>

<p className="text-[#7F7F72] leading-8">
Nagels verzorgd, huid verfijnd en voeten weer fris en verzorgd.
</p>

</div>

</div>

</div>


{/* DETAIL GRID */}
<div className="grid lg:grid-cols-2 gap-10">

{[
[
"/resultaten/resultaat-2.jpg",
"Verzorging van hielen"
],

[
"/resultaten/resultaat-3.jpg",
"Verzachten van kloven"
],

[
"/resultaten/resultaat-4.jpg",
"Verwijderen van eelt"
],

[
"/resultaten/resultaat-5.jpg",
"Comfort & verzorging"
],

].map(([image,title],index)=>(

<div
key={index}
className="
bg-white
rounded-[2.5rem]
overflow-hidden
border
border-[#EEE8E1]
shadow-sm
transition
duration-500
hover:-translate-y-2
hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]
"
>

<img
src={image}
className="w-full"
/>

<div className="p-8">

<h3 className="text-3xl font-light mb-4">
{title}
</h3>

<p className="text-[#7F7F72] leading-8">
Professionele behandeling met aandacht voor comfort,
verzorging en uitstraling.
</p>

</div>

</div>

))}

</div>


{/* ONDERSTE FOTO */}
<div className="mt-20">

<img
src="/resultaten/resultaat-6.jpg"
alt="Behandeling"
className="
w-full
rounded-[2.5rem]
shadow-sm
transition
duration-700
hover:scale-[1.01]
"
/>

</div>


<div className="mt-20 text-center">

<p className="text-2xl text-[#C1978D] font-light leading-relaxed">

Iedere behandeling is gericht op comfort,
verzorging en gezonde voeten.

</p>

<p className="mt-6 text-[#7F7F72] text-lg">
Resultaten verschillen per persoon.
</p>

</div>

</div>

</section>

      {/* FOOTER */}
<footer className="border-t border-[#E5DDD5] bg-[#FCFAF8] py-14 px-6 lg:px-20">

  <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

<span
  className="text-[24px] lg:text-4xl text-[#C1978D] font-light tracking-[0.03em]"
  style={{ fontFamily: "'Cormorant Garamond', serif" }}
>
  Petra Pedicure
</span>

    <p className="mt-3 text-[#7F7F72] max-w-md leading-7">
      Professionele pedicure aan huis in Almere en omstreken
    </p>

    {/* SOCIALS */}
    <div className="mt-8 flex items-center justify-center gap-8 text-3xl text-[#AEB49A]">

      <a
        href="#"
        className="hover:text-[#C1978D] hover:scale-110 transition duration-300"
      >
        <FaFacebookF />
      </a>

      <a
        href="#"
        className="hover:text-[#C1978D] hover:scale-110 transition duration-300"
      >
        <FaInstagram />
      </a>

      <a
        href="#"
        className="hover:text-[#C1978D] hover:scale-110 transition duration-300"
      >
        <FaLinkedinIn />
      </a>

    </div>

    {/* LINKS */}
    <div className="mt-6 flex justify-center">

      <div className="flex items-center gap-4 text-sm text-[#8A8A80]">

        <a
          href="/annuleringsbeleid"
          className="hover:text-[#C1978D] transition"
        >
          Annuleringsbeleid
        </a>

        <span className="text-[#CFC7BF]">•</span>

        <a
          href="/voorwaarden"
          className="hover:text-[#C1978D] transition"
        >
          Algemene voorwaarden
        </a>

      </div>

    </div>

  </div>

  {/* SEO TEKST */}
  <div className="mt-12 pt-8 border-t border-[#E5DDD5] text-center max-w-3xl mx-auto">

    <p className="text-sm leading-7 text-[#8A8A80]">
      Petra Pedicure biedt professionele pedicure aan huis in Almere en omgeving.
      Gespecialiseerd in voetverzorging, eelt verwijderen, likdoorns behandelen,
      kalknagels verzorgen, spa voetbehandelingen en ontspannende voetmassages.
    </p>

  </div>

  {/* COPYRIGHT */}
  <div className="mt-10 pt-6 border-t border-[#E5DDD5] text-center text-sm text-[#9A9A90]">

    © 2026 Petra Pedicure • Alle rechten voorbehouden

  </div>

</footer>

    </main>
  );
}