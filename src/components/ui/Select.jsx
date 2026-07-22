export default function Select({ options, value, onChange, disabled = false, ...rest }) {
  return (
    <select
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="border-border bg-background text-text focus:shadow-[4px_4px_0px_0px_#000] w-full cursor-pointer appearance-none rounded-none border-2 px-4 py-2 font-bold transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50"
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
