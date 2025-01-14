import { LogoLink } from "@/components";
import NavLink from "@/components/Navbar/NavLink";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 md:px-12 py-5 gap-5 md:gap-0 z-10 fixed w-full">
      <div className="">
        <LogoLink />
      </div>
      <div className="flex justify-end items-center gap-12">
        <NavLink href="/" text="Početna" />
        <NavLink href="/shop" text="Shop" />
        <NavLink href="/faq" text="FAQ" />
      </div>
    </nav>
  );
};

export default Navbar;
