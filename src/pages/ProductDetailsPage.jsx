import { useParams } from "react-router";
import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";
import Button from "../components/ui/Button";
import useCart from "../context/useCart";
import QuantitySelector from "../components/cart/QuantitySelector";
import { getProductById } from "../api/productApi";
import useApi from "../hooks/useApi.js";
import LoadingState from "../components/feedback/LoadingState";
import ErrorState from "../components/feedback/ErrorState";
import EmptyState from "../components/feedback/EmptyState";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useApi(() => getProductById(id), [id]);

  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const isProductExists = cart.find((item) => item.product.id === product?.id);

  if (isLoading) return <LoadingState loadingText="Loading Product..." />;

  if (error) return <ErrorState error={error} />;

  if (!product)
    return (
      <EmptyState
        title="Product Not Found"
        subTitle="The product you're looking for doesn't exist."
      />
    );

  return (
    <Container>
      <div className="grid gap-12 py-16 lg:grid-cols-2">
        {/* Product Image */}
        <div className="border-border bg-surface overflow-hidden border-4 shadow-xl">
          <img
            src={product.images[0]}
            alt={product.title}
            className="aspect-square w-full object-cover"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center space-y-6">
          <Typography variant="caption">{product.category}</Typography>

          <Typography variant="h1">{product.title}</Typography>

          <div className="flex items-center gap-4">
            <Typography>⭐ {product.rating}</Typography>

            <Typography>
              {product.stock > 0 ? (
                <span className="text-green-600">
                  In Stock ({product.stock})
                </span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </Typography>
          </div>

          <Typography variant="h2">₹{product.price}</Typography>

          <Typography>{product.description}</Typography>

          <div className="pt-4">
            {!isProductExists ? (
              <Button
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
              >
                {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
              </Button>
            ) : (
              <QuantitySelector
                quantity={isProductExists.quantity}
                onIncrease={() => increaseQuantity(id)}
                onDecrease={() => decreaseQuantity(id)}
                onRemove={() => removeFromCart(id)}
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
