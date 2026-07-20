export default function Card({ children }) {
  return (
    <div className="border-border bg-white border-4 p-6 shadow-[8px_8px_0px_0px_#000] transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#000] h-full flex flex-col">
      {children}
    </div>
  );
}
