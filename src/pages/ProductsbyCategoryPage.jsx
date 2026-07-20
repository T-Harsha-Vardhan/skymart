import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";
import ProductGrid from "../components/product/ProductGrid";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../api/productApi";
import { useParams } from "react-router";

export default function ProductsbyCategoryPage() {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = await getProductsByCategory(category);
      setProducts(productsData);
    };

    loadProducts();
  }, [category]);

  return (
    <Container>
      <div className="space-y-8 py-12">
        <div>
          <Typography variant="h1">{category}</Typography>

          <Typography>Browse our collection of {category}.</Typography>
        </div>

        <ProductGrid products={products} />
      </div>
    </Container>
  );
}
