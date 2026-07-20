const elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  caption: "span",
};

const styles = {
  h1: "text-4xl md:text-6xl font-black uppercase tracking-tighter text-text",
  h2: "text-3xl md:text-4xl font-bold uppercase tracking-tight text-text",
  h3: "text-2xl font-bold uppercase tracking-tight text-text",
  body: "text-base font-medium text-text",
  caption: "text-sm font-bold text-text-muted uppercase",
};

export default function Typography({ variant = "body", children, className }) {
  const Component = elements[variant] || "p";

  return (
    <Component className={`${styles[variant]} ${className}`}>
      {children}
    </Component>
  );
}
