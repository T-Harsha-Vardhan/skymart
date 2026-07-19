const variants = {
  primary:
    "rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",

  secondary:
    "rounded-md border border-border bg-background px-4 py-2 text-text transition-colors hover:bg-surface disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
};

export default function Button({
  children,
  variant = "primary",
  disabled = false,
  type = "button",
}) {
  return (
    <button type={type} disabled={disabled} className={variants[variant]}>
      {children}
    </button>
  );
}
