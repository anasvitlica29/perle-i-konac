"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  text: string;
  href: string;
};
const NavLink = ({ text, href }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${href === pathname ? "font-bold" : ""} hover:text-primary-light transition-colors`}
      href={href}
    >
      {text}
    </Link>
  );
};

export default NavLink;
