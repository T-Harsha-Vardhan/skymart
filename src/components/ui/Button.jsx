const variants = {
  primary:
    "rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",

  secondary:
    "rounded-md border border-border bg-background px-4 py-2 text-text transition-colors hover:bg-surface disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",

  ghost:
    "rounded-md transition-colors hover:bg-surface active:scale-95 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",

  icon: "flex items-center justify-center rounded-full bg-primary text-white transition-colors cursor-pointer hover:bg-primary-hover active:scale-95 disabled:cursor-not-allowed disabled:opacity-50",
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
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={` ${variants[variant]} ${sizes[size]} ${colors[color]} `}
    >
      {children}
    </button>
  );
}
