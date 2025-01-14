import Link from "next/link";
import Image from "next/image";

const LogoLink = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Perle i Konac"
        className="h-16 w-auto"
        width={75}
        height={75}
      />
    </Link>
  );
};

export default LogoLink;
