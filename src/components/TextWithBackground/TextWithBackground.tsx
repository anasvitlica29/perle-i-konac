import Image from "next/image";
import Button from "@/components/Button/Button";

type Props = {
  text: string;
  backgroundImageUrl: string;
};
const TextWithBackground = ({ text, backgroundImageUrl }: Props) => {
  return (
    <div className="h-80 relative flex justify-center items-center">
      <Image
        src={backgroundImageUrl}
        alt="Perle i konac"
        height={500}
        width={500}
        className="w-full h-full object-cover opacity-15 absolute top-0 left-0 -z-10"
      />
      <div className="flex flex-col items-center gap-5 bg-background rounded w-full md:w-1/3 p-12 shadow-xl">
        <p>{text}</p>
        <Button text="Istraži" variant="primary" href="/shop" />
      </div>
    </div>
  );
};

export default TextWithBackground;
