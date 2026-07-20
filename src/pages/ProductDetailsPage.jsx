import { useParams } from "react-router";
import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";
import Button from "../components/ui/Button";

import useCart from "../context/useCart";
import QuantitySelector from "../components/cart/QuantitySelector";
import { useEffect, useState } from "react";
import { getProductById } from "../api/productApi";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      const productsData = await getProductById(id);
      setProduct(productsData);
    };

    loadProduct();
  }, [id]);

  const isProductExists = cart.find((item) => item.product.id === product.id);

  if (!product) {
    return (
      <Container>
        <div className="space-y-4 py-20 text-center">
          <Typography variant="h1">Product Not Found</Typography>

          <Typography>The product you're looking for doesn't exist.</Typography>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="grid gap-12 py-16 lg:grid-cols-2">
        {/* Product Image */}
        <div className="border-border bg-muted overflow-hidden rounded-xl border">
          <img
            src={product.images?.[0]}
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
