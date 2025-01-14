import Hero from "@/components/Hero/Hero";
import { TwoImageTextSection } from "@/components";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-quicksand)]">
      <main className="flex flex-col gap-28">
        <Hero
          mainText="Perle i konac"
          secondaryText="Autentičnost utkana u svaki proizvod"
          href="/shop"
          cta="Istraži kolekciju"
          imageUrl="/hero.jpg"
        />
        <TwoImageTextSection
          firstImageUrl="/nit.jpg"
          secondImageUrl="/nit.jpg"
          primaryText="Nit po nit"
          secondaryText="Svaki detalj nosi toplinu, unikatnost i autentičnost prave ručne izrade. Naša kolekcija je pažljivo osmišljena kako bi unela poseban čar u vaš svakodnevni život. Koristimo najkvalitetnije materijale i posvećujemo pažnju svakom šavu, čineći svaki proizvod ne samo lepim, već i dugotrajnim."
        />
        <TwoImageTextSection
          reverse
          firstImageUrl="/nit.jpg"
          secondImageUrl="/nit.jpg"
          primaryText="Perla po perla"
          secondaryText="Naša inspiracija leži u kombinaciji elegancije i funkcionalnosti. Perle koje koristimo pažljivo su birane kako bi svaka kreacija zračila sofisticiranošću i unikatnošću. Od klasičnih narukvica i ogrlica do modernih aksesoara, svaki komad nosi dašak vašeg stila i posebnosti."
        />
      </main>
    </div>
  );
}
