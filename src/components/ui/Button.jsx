const variants = {
  primary:
    "rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50",

  secondary:
    "rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50",
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
