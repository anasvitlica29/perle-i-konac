import { LogoLink } from "@/components";
import NavLink from "@/components/Navbar/NavLink";

const Footer = () => {
  return (
    <div className="flex flex-col mt-5">
      <div className="bg-secondary-dark-transparent flex justify-between py-6">
        <div className="bg-background w-1/3 rounded-r-2xl pl-5 md:pl-24 py-8 flex flex-col items-center gap-5">
          <LogoLink />
          <div>socials</div>
        </div>
        <div className="flex flex-col gap-3">
          <NavLink text="Početna" href="/" />
          <NavLink text="Shop" href="/shop" />
          <NavLink text="FAQ" href="/faq" />
        </div>
        <div className="pr-r md:pr-24">
          <p>
            Istražite naše proizvode i obradujte sebe i svoje najdraže
            jedinstvenim poklonom.
          </p>
          <div>search</div>
        </div>
      </div>
      <div className="bg-background text-primary text-center text-sm">
        Copyright Ana Tot 2025. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
