import ButtonSvg from "../assets/svg/ButtonSvg";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  white?: boolean;
  px?: string;
}

function Button({
  px,
  white,
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const classes = `relative inline-flex items-center button justify-start transition-colors h-11 hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className}`;

  const spanClasses = "relative z-10";
  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
}

export default Button;
