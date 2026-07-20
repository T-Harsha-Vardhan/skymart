import { getProducts } from "../api/productApi";
import EmptyState from "../components/feedback/EmptyState";
import ErrorState from "../components/feedback/ErrorState";
import LoadingState from "../components/feedback/LoadingState";
import ProductGrid from "../components/product/ProductGrid";
import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";
import useApi from "../hooks/useApi";

export default function ProductsPage() {
  const { data: products, isLoading, error } = useApi(getProducts);

  if (isLoading) return <LoadingState loadingText="Loading Products..." />;

  if (error) return <ErrorState error={error} />;

  if (!products)
    return (
      <EmptyState
        title="Products are coming soon..."
        subTitle="Thanks for your visit to our store, It means alot"
      />
    );

  return (
    <Container>
      <div className="space-y-8 py-12">
        <div>
          <Typography variant="h1">Products</Typography>

          <Typography>Browse our collection of products.</Typography>
        </div>

        <ProductGrid products={products} />
      </div>
    </Container>
  );
}
