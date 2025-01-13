import Link from "next/link";
import Image from "next/image";

const LogoLink = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="Perle i Konac" width={120} height={120} />
    </Link>
  );
};

export default LogoLink;
