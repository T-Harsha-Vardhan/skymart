export default function Card({ children }) {
  return (
    <div className="border-border bg-surface border-4 p-6 shadow-lg transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-xl h-full flex flex-col">
      {children}
    </div>
  );
}
