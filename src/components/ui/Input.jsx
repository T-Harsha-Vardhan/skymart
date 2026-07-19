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
      className="w-full rounded-md border border-gray-300 px-4 py-2 transition-colors outline-none focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
}
