"use client";

type Props = {
  selectedTreatment: string | null;
  closeModal: () => void;
};

export default function BookingModal({
  selectedTreatment,
  closeModal,
}: Props) {
  if (!selectedTreatment) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center px-6">

      <div
        onClick={closeModal}
        className="absolute inset-0 bg-black/40"
      />

      <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-[#EEE8E1]">

        <button
          onClick={closeModal}
          className="absolute top-6 right-6 text-3xl text-[#7F7F72]"
        >
          ✕
        </button>

        <p className="uppercase tracking-[0.25em] text-sm text-[#C1978D] mb-4">
          Afspraak aanvragen
        </p>

        <h2 className="text-4xl font-light text-[#6F745C] mb-6">
          {selectedTreatment}
        </h2>

        <p className="text-[#7F7F72] leading-8 text-lg mb-10">
          Kies hoe je jouw afspraak wilt aanvragen.
        </p>

        <div className="flex flex-col gap-5">

          <a
            href={`https://wa.me/31612345678?text=${encodeURIComponent(
`Hallo Petra,

Ik wil graag een afspraak maken voor:

• ${selectedTreatment}

Mijn gegevens:
Naam:
Adres:
Telefoonnummer:

Voorkeursdatum:
Voorkeurstijd:

Met vriendelijke groet,`
            )}`}
            target="_blank"
            className="bg-[#D9B0A7] hover:bg-[#c89b91] transition text-white text-center py-5 rounded-full text-lg"
          >
            Afspraak via WhatsApp
          </a>

          <a
            href={`mailto:petrapedicureaanhuis@hotmail.com?subject=${encodeURIComponent(
              `Afspraak aanvraag ${selectedTreatment}`
            )}&body=${encodeURIComponent(
`Hallo Petra,

Ik wil graag een afspraak maken voor:

• ${selectedTreatment}

Mijn gegevens:
Naam:
Adres:
Telefoonnummer:

Voorkeursdatum:
Voorkeurstijd:

Met vriendelijke groet,`
            )}`}
            className="border border-[#AEB49A] text-[#6F745C] text-center py-5 rounded-full text-lg hover:bg-[#EEF0E7] transition"
          >
            Afspraak via e-mail
          </a>

        </div>

      </div>

    </div>
  );
}