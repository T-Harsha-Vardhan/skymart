const elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  caption: "span",
};

const styles = {
  h1: "text-4xl font-bold tracking-tight text-primary",
  h2: "text-3xl font-semibold tracking-tight text-text",
  h3: "text-2xl font-semibold text-text",
  body: "text-base text-text",
  caption: "text-sm text-text-muted",
};

export default function Typography({ variant = "body", children }) {
  const Component = elements[variant] || "p";

  return <Component className={styles[variant]}>{children}</Component>;
}
