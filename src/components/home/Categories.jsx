import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Typography from "../ui/Typography";
import { getCategories } from "../../api/productApi";
import { Link } from "react-router";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadProductCategories = async () => {
      const categoriesData = await getCategories();

      setCategories(categoriesData);
    };

    loadProductCategories();
  }, []);

  return (
    <section className="py-20">
      <Container>
        <div className="space-y-10">
          <Typography variant="h2">Shop by Category</Typography>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link to={`/categories/${category}`}>
                <div
                  key={category}
                  className="border-border bg-surface rounded-lg border p-8 text-center transition-shadow hover:shadow-md"
                >
                  <Typography variant="h3">
                    {category.split("-").join(" ")}
                  </Typography>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
