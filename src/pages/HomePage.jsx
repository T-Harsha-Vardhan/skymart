import ProductCard from "../components/product/ProductCard";
import Container from "../components/ui/Container";

export default function HomePage() {
  return (
    <Container>
      <ProductCard
        title="iPhone 17 Pro"
        price={89999}
        image="https://picsum.photos/300"
      />
    </Container>
  );
}
