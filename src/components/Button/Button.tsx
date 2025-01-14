import Link from "next/link";

type Props = {
  text: string;
  href?: string;
  variant?: "primary" | "secondary";
};
const Button = ({ href, text, variant = "primary" }: Props) => {
  return href ? (
    <Link
      className={`${variant === "primary" ? "bg-primary hover:bg-primary-light" : "bg-secondary-dark hover:bg-secondary"} text-white font-bold rounded py-2 px-8 transition-colors`}
      href={href}
    >
      {text}
    </Link>
  ) : (
    <button
      className={`${variant === "primary" ? "bg-primary hover:bg-primary-light" : "bg-secondary-dark"} text-white font-bold rounded py-2 px-8 transition-colors`}
    >
      {text}
    </button>
  );
};

export default Button;
