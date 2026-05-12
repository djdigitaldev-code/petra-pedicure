export default function Annuleringsbeleid() {
  return (
    <main className="min-h-screen bg-[#F7F4F1] px-6 lg:px-20 py-24 text-[#6F745C]">

      <div className="max-w-4xl mx-auto">

        {/* TITEL */}
        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-4">
            Petra Pedicure
          </p>

          <h1 className="text-5xl lg:text-6xl font-light text-[#6F745C]">
            Annuleringsbeleid
          </h1>

        </div>

        {/* CONTENT */}
        <div className="bg-white rounded-[2.5rem] border border-[#EEE8E1] p-8 lg:p-14 shadow-sm space-y-12">

          <p className="leading-9 text-[#7F7F72] text-lg">
            Ik streef ernaar om mijn diensten zo goed mogelijk te plannen
            en beschikbaar te houden voor alle klanten.
            Daarom hanteer ik het volgende annuleringsbeleid.
          </p>

          {/* ITEM */}
          <div>
            <h2 className="text-2xl lg:text-3xl mb-4 text-[#6F745C]">
              1. Annuleren van afspraken
            </h2>

            <p className="leading-9 text-[#7F7F72]">
              Afspraken kunnen kosteloos worden geannuleerd of verplaatst
              tot 24 uur vóór de geplande afspraak.
            </p>
          </div>

          {/* ITEM */}
          <div>
            <h2 className="text-2xl lg:text-3xl mb-4 text-[#6F745C]">
              2. Te late annulering
            </h2>

            <p className="leading-9 text-[#7F7F72]">
              Bij annuleringen binnen 24 uur vóór de afspraak behoud ik mij
              het recht voor om 100% van de kosten in rekening te brengen.
            </p>
          </div>

          {/* ITEM */}
          <div>
            <h2 className="text-2xl lg:text-3xl mb-4 text-[#6F745C]">
              3. No-show (niet verschijnen)
            </h2>

            <p className="leading-9 text-[#7F7F72]">
              Indien u zonder bericht niet verschijnt op de afspraak,
              wordt 100% van de kosten in rekening gebracht.
            </p>
          </div>

          {/* ITEM */}
          <div>
            <h2 className="text-2xl lg:text-3xl mb-4 text-[#6F745C]">
              4. Te laat komen
            </h2>

            <p className="leading-9 text-[#7F7F72]">
              Wanneer u te laat arriveert, kan de behandeltijd worden
              ingekort zonder prijsvermindering.
              In sommige gevallen kan de afspraak worden geannuleerd
              en als no-show worden beschouwd.
            </p>
          </div>

          {/* ITEM */}
          <div>
            <h2 className="text-2xl lg:text-3xl mb-4 text-[#6F745C]">
              5. Overmacht
            </h2>

            <p className="leading-9 text-[#7F7F72]">
              In geval van overmacht zoals ziekte of onvoorziene omstandigheden
              kijken wij samen naar een passende oplossing.
              Neem hiervoor zo snel mogelijk contact met ons op.
            </p>
          </div>

          {/* ITEM */}
          <div>
            <h2 className="text-2xl lg:text-3xl mb-4 text-[#6F745C]">
              6. Annuleren door mij
            </h2>

            <p className="leading-9 text-[#7F7F72]">
              Ik behoud mij het recht voor om afspraken te verplaatsen
              of te annuleren in geval van onvoorziene omstandigheden.
              Uiteraard wordt er in overleg een nieuwe afspraak ingepland.
            </p>
          </div>

          {/* CONTACT */}
          <div className="pt-8 border-t border-[#EEE8E1]">

            <h2 className="text-2xl lg:text-3xl mb-6 text-[#6F745C]">
              7. Contact voor annuleringen
            </h2>

            <div className="space-y-4 text-[#7F7F72] text-lg">

              <p>
                WhatsApp: 06 12 34 56 78
              </p>

              <p>
                Telefoon: 06 12 34 56 78
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}