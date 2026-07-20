import Container from "../ui/Container";
import Typography from "../ui/Typography";
import ProductGrid from "../product/ProductGrid";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/productApi";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };

    loadProducts();
  }, []);

  return (
    <section className="py-20">
      <Container>
        <div className="space-y-10">
          <Typography variant="h2">Featured Products</Typography>

          <ProductGrid products={products} />
        </div>
      </Container>
    </section>
  );
}
