export default function Input({
  type = "text",
  placeholder = "",
  disabled = false,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className="border-border bg-background text-text placeholder:text-text-muted focus:border-primary w-full rounded-md border px-4 py-2 transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
}
