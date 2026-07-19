export default function Card({ children }) {
  return (
    <div className="border-border bg-surface rounded-lg border p-6 shadow-sm">
      {children}
    </div>
  );
}
