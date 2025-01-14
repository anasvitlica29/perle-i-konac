import Button from "@/components/Button/Button";
import Image from "next/image";
import "./Hero.css";

interface Props {
  mainText: string;
  secondaryText: string;
  imageUrl?: string;
  href?: string;
  cta?: string;
}
const Hero = ({ mainText, secondaryText, href, cta, imageUrl }: Props) => {
  return (
    <div className="hero w-full h-[31rem] flex flex-col items-center justify-center gap-5 bg-scroll relative mb-16 md:mb-0">
      {imageUrl ? (
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover opacity-25 -z-10"
          src={imageUrl}
          alt="Perle i konac"
          height={400}
          width={400}
        />
      ) : null}

      <div>
        <h1 className="font-serif text-6xl">{mainText}</h1>
        <h4 className="text-lg">{secondaryText}</h4>
      </div>
      {href && cta ? <Button variant="primary" href={href} text={cta} /> : null}
    </div>
  );
};

export default Hero;
