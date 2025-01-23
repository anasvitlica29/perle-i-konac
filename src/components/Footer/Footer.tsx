import { LogoLink, SearchBar } from "@/components";
import NavLink from "@/components/Navbar/NavLink";
import SocialMediaButton from "@/components/SocialMediaButton/SocialMediaButton";

const Footer = () => {
  return (
    <div className="flex flex-col mt-5">
      <div className="bg-secondary-dark-transparent flex flex-col md:flex-row gap-5 md:gap-0 justify-between py-6 items-center">
        <div className="bg-background w-full md:w-1/3 rounded-l-2xl md:rounded-l-none rounded-r-2xl pl-5 md:pl-24 py-8 flex flex-col items-center gap-5">
          <LogoLink />
          <div className="flex gap-3 items-center">
            <SocialMediaButton type="instagram" />
            <SocialMediaButton type="facebook" />
          </div>
        </div>
        <div className="flex flex-col gap-3 mx-3">
          <NavLink text="Početna" href="/" />
          <NavLink text="Shop" href="/shop" />
          <NavLink text="FAQ" href="/faq" />
        </div>
        <div className="pr-r md:pr-24 flex flex-col gap-3 items-center">
          <p className="w-2/3">
            Istražite naše proizvode i obradujte sebe i svoje najdraže
            jedinstvenim poklonom.
          </p>
          <div>
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="bg-background text-primary text-center text-sm">
        Copyright Ana Tot 2025. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
