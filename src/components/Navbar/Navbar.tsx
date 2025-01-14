"use client";
import { LogoLink } from "@/components";
import NavLink from "@/components/Navbar/NavLink";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled more than a specific threshold
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center px-5 md:px-12 py-2 gap-5 md:gap-0 z-10 fixed w-full ${isScrolled ? "bg-background shadow-lg" : "bg-transparent"} transition-colors`}
    >
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
