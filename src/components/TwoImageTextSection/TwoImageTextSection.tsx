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
      className={`flex ${reverse ? "flex-col-reverse md:flex-row-reverse md:mb-28" : "flex-col md:flex-row"}  md:flex-row gap-8 md:gap-12 justify-center`}
    >
      <div
        className={`relative w-full md:w-1/3 flex justify-end ${reverse ? "px-5 md:pr-24 md:pl-0" : "px-5 md:pl-24 md:pr-0"}`}
      >
        <Image
          src={firstImageUrl}
          alt="First image"
          height={200}
          width={400}
          className="rounded-3xl h-[400px] md:h-[500px] w-full object-cover shadow-xl"
        />
        <Image
          src={secondImageUrl}
          alt="Second image"
          height={400}
          width={400}
          className={`rounded-3xl h-full w-full object-cover absolute  ${reverse ? "left-0 md:left-1/3 -top-6 md:top-20" : "left-0 md:-left-1/3 -top-14 md:top-20"} opacity-10 -z-10`}
        />
      </div>

      <div
        className={`relative flex items-center gap-5 flex-col justify-center w-full md:w-2/3 py-5 md:py-0 ${reverse ? "px-5 md:pl-24 md:pr-5" : "px-5 md:pr-24 md:pl-5"}`}
      >
        <div
          className={`absolute top-1/2 -translate-y-1/2 left-0 h-full md:h-1/2 w-full ${reverse ? "bg-secondary-light" : "bg-primary-light"}`}
        />
        <h2
          className={`font-serif text-5xl w-full ${reverse ? "text-secondary-dark" : "text-primary"}`}
        >
          {primaryText}
        </h2>
        <p
          className={`w-full ${reverse ? "text-secondary-dark" : "text-primary"}`}
        >
          {secondaryText}
        </p>
      </div>
    </div>
  );
};

export default TwoImageTextSection;
