import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Typography from "../ui/Typography";
import { getProductById } from "../../api/productApi";
import { useNavigate } from "react-router";

export default function Hero() {
  const [product, setProduct] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const loadProduct = async () => {
      const productsData = await getProductById(1);
      setProduct(productsData);
    };

    loadProduct();
  }, []);

  return (
    <section className="bg-surface py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-6">
            <Typography variant="h1">
              Discover Your Next Favorite Product
            </Typography>

            <Typography>
              Shop from thousands of carefully selected products with fast
              delivery and great prices.
            </Typography>

            <div className="flex flex-wrap gap-4">
              <Button onClick={() => navigate("/products")}>Shop Now</Button>

              <Button
                onClick={() => navigate("/categories")}
                variant="secondary"
              >
                Explore Categories
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <img
              src={product.images?.[0]}
              alt="Featured products"
              className="w-full max-w-lg rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
