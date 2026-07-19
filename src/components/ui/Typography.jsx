const elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  caption: "span",
};

const styles = {
  h1: "text-4xl font-bold tracking-tight",
  h2: "text-3xl font-semibold tracking-tight",
  h3: "text-2xl font-semibold",
  body: "text-base",
  caption: "text-sm text-gray-500",
};

export default function Typography({ variant = "body", children }) {
  const Component = elements[variant] || "p";

  return <Component className={styles[variant]}>{children}</Component>;
}
