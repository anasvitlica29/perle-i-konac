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
          secondaryText="Svaki detalj nosi toplinu, unikatnost i autentičnost prave ručne izrade, pažljivo osmišljen kako bi unio posebnu čar u vaš svakodnevni život"
        />
        <TwoImageTextSection
          reverse
          firstImageUrl="/nit.jpg"
          secondImageUrl="/nit.jpg"
          primaryText="Perla po perla"
          secondaryText="Svaki detalj nosi toplinu, unikatnost i autentičnost prave ručne izrade, pažljivo osmišljen kako bi unio posebnu čar u vaš svakodnevni život"
        />
      </main>
    </div>
  );
}
