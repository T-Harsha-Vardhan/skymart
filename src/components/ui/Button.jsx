const variants = {
  primary:
    "rounded-none border-2 border-border bg-primary font-bold uppercase transition-all shadow-[4px_4px_0px_0px_#000] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_#000] active:translate-y-1 active:translate-x-1 active:shadow-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",

  secondary:
    "rounded-none border-2 border-border bg-surface font-bold uppercase transition-all shadow-[4px_4px_0px_0px_#000] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_#000] hover:bg-white active:translate-y-1 active:translate-x-1 active:shadow-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",

  ghost:
    "rounded-none border-2 border-transparent font-bold uppercase transition-all hover:bg-surface hover:border-border hover:shadow-[4px_4px_0px_0px_#000] active:translate-y-1 active:translate-x-1 active:shadow-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",

  icon: "flex items-center justify-center rounded-none border-2 border-border bg-primary text-text shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_#000] active:translate-y-1 active:translate-x-1 active:shadow-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
};

const sizes = {
  sm: "h-8 w-8 p-0",
  md: "px-4 py-2",
  lg: "px-6 py-3",
  icon: "h-8 w-8 p-0",
};

const colors = {
  default: "text-text",
  danger: "text-red-500 hover:text-red-600",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  color = "default",
  disabled = false,
  type = "button",
  onClick,
  className,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={` ${variants[variant]} ${sizes[size]} ${colors[color]} ${className}`}
    >
      {children}
    </button>
  );
}
