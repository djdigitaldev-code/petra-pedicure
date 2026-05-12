export default function VoorwaardenPage() {
  return (
    <main className="min-h-screen bg-[#F7F4F1] text-[#6F745C] px-6 lg:px-20 py-20">

      <div className="max-w-4xl mx-auto">

        {/* TITEL */}
        <div className="mb-16 text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-4">
            Petra Pedicure
          </p>

          <h1 className="text-5xl lg:text-6xl font-light mb-6">
            Algemene voorwaarden
          </h1>

          <p className="text-lg leading-8 text-[#7F7F72]">
            Transparante afspraken en duidelijke voorwaarden voor iedere behandeling.
          </p>

        </div>

        {/* CONTENT */}
        <div className="bg-white border border-[#EEE8E1] rounded-[2rem] p-8 lg:p-12 shadow-sm space-y-12">

          <div>
            <h2 className="text-3xl font-light mb-4">1. Algemeen</h2>

            <p className="text-[#7F7F72] leading-8">
              Deze voorwaarden zijn van toepassing op alle behandelingen en afspraken
              bij Petra Pedicure aan huis in Almere.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">2. Afspraken</h2>

            <p className="text-[#7F7F72] leading-8">
              Afspraken kunnen telefonisch of via WhatsApp worden gemaakt.
              Bij verhindering verzoek ik je om de afspraak minimaal
              24 uur van tevoren te annuleren.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">3. Annulering</h2>

            <p className="text-[#7F7F72] leading-8">
              Bij annulering binnen 24 uur voor de afspraak behoud ik mij
              het recht voor om kosten in rekening te brengen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">4. Betaling</h2>

            <p className="text-[#7F7F72] leading-8">
              Betaling dient direct na de behandeling te worden voldaan,
              contant, contactloos of via betaalverzoek.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">
              5. Hygiëne en veiligheid
            </h2>

            <p className="text-[#7F7F72] leading-8">
              Ik werk volgens de geldende hygiënerichtlijnen.
              Van de klant verwacht ik dat de voeten schoon zijn
              bij aanvang van de behandeling.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">
              6. Aansprakelijkheid
            </h2>

            <p className="text-[#7F7F72] leading-8">
              Petra Pedicure is niet aansprakelijk voor schade,
              van welke aard ook, ontstaan doordat is uitgegaan
              van door de klant verstrekte onjuiste of onvolledige informatie.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">
              7. Medische informatie
            </h2>

            <p className="text-[#7F7F72] leading-8">
              De klant is zelf verantwoordelijk voor het melden van
              relevante medische aandoeningen zoals diabetes,
              huidproblemen of allergieën voorafgaand aan de behandeling.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">8. Overmacht</h2>

            <p className="text-[#7F7F72] leading-8">
              In geval van overmacht, zoals ziekte of onvoorziene omstandigheden,
              behoud ik mij het recht voor om afspraken te verzetten.
            </p>
          </div>

          {/* SLOT */}
          <div className="pt-6 border-t border-[#EEE8E1]">

            <p className="text-[#7F7F72] leading-8 text-lg">
              Door het maken van een afspraak ga je akkoord met deze voorwaarden.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}