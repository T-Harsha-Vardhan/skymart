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
    <section className="bg-secondary py-20 border-b-4 border-black">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-8 bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_#000]">
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
              className="w-full max-w-lg border-4 border-black object-cover shadow-[12px_12px_0px_0px_#000] bg-white p-2"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
