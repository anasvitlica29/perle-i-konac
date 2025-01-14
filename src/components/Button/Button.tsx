import Link from "next/link";

type Props = {
  text: string;
  href?: string;
  variant?: "primary" | "secondary";
};
const Button = ({ href, text, variant = "primary" }: Props) => {
  return href ? (
    <Link
      className={`bg-${variant} text-white font-bold rounded py-2 px-8`}
      href={href}
    >
      {text}
    </Link>
  ) : (
    <button>{text}</button>
  );
};

export default Button;
