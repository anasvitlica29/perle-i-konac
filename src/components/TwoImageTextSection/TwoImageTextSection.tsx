import Image from "next/image";

type Props = {
  firstImageUrl: string;
  secondImageUrl: string;
  primaryText: string;
  secondaryText: string;
  reverse?: boolean;
};
const TwoImageTextSection = ({
  firstImageUrl,
  secondImageUrl,
  primaryText,
  secondaryText,
  reverse = false,
}: Props) => {
  return (
    <div
      className={`flex ${reverse ? "flex-col-reverse md:flex-row-reverse" : "flex-col md:flex-row"}  md:flex-row gap-8 md:gap-0 justify-center`}
    >
      <div className="relative flex justify-end px-5 md:px-12">
        <Image
          src={firstImageUrl}
          alt="First image"
          height={200}
          width={400}
          className="rounded-3xl h-[400px] md:h-[500px] w-full object-cover shadow-lg"
        />
        <Image
          src={secondImageUrl}
          alt="Second image"
          height={400}
          width={400}
          className="rounded-3xl h-full w-full object-cover absolute -top-20 md:top-20 -left-1/3 opacity-10 -z-10"
        />
      </div>

      <div className="flex items-center flex-col gap-5">
        <h2 className="font-serif text-4xl w-2/3">{primaryText}</h2>
        <p className="w-2/3">{secondaryText}</p>
      </div>
    </div>
  );
};

export default TwoImageTextSection;
