const variantMap = {
  gradient: "bg-gradient text-stone-50",
  white:
    "bg-neutral-50 bg-opacity-10 bg-white hover:bg-neutral-100 hover:bg-opacity-20 text-stone-50 ",
  secondary:
    "bg-secondary-light-pink text-secondary-dark-pink border border-secondary-dark-pink hover:bg-pink-200",
  disabled: "bg-slate-100 text-slate-400 cursor-not-allowed",
};

const textSizeMap = {
  lg: "text-2xl py-3 px-6",
  base: "text-lg py-2 px-4",
  md: "text-base py-1 px-3",
  sm: "text-sm py-1 px-2",
};

const Button = ({
  children,
  variant,
  className,
  textSize = "lg",
  onClick,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex gap-3 font-bold rounded-md ${variantMap[variant]} ${textSizeMap[textSize]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
