import { FacebookIcon, InstagramIcon } from "@/vectors";
import Link from "next/link";

type Props = {
  type: "instagram" | "facebook";
};
const SocialMediaButton = ({ type }: Props) => {
  switch (type) {
    case "facebook":
      return (
        <Link
          href="https://www.facebook.com/profile.php?id=61571337808154"
          target="_blank"
        >
          <FacebookIcon className="h-6 w-6 fill-primary text-primary" />
        </Link>
      );
    case "instagram":
      return (
        <Link
          href="https://www.instagram.com/perle_i_konac/?hl=en"
          target="_blank"
        >
          <InstagramIcon className="h-9 w-9 text-primary" />
        </Link>
      );
    default:
      return null;
  }
};

export default SocialMediaButton;
