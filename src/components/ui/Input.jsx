export default function Input({
  type = "text",
  placeholder = "",
  disabled = false,
  ...rest
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className="border-border bg-background text-text placeholder:text-text-muted focus:shadow-[4px_4px_0px_0px_#000] w-full rounded-none border-2 px-4 py-2 font-bold transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50"
      {...rest}
    />
  );
}
