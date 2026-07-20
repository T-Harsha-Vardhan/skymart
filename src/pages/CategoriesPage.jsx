import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";
import { useEffect, useState } from "react";
import { getCategories } from "../api/productApi";
import { Link } from "react-router";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadProductCategories = async () => {
      const categoriesData = await getCategories();

      setCategories(categoriesData);
    };

    loadProductCategories();
  }, []);

  return (
    <Container>
      <div className="space-y-8 py-12">
        <div>
          <Typography variant="h1">Categories</Typography>

          <Typography>Explore our Category.</Typography>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category} to={`/categories/${category}`}>
              <div className="border-border bg-surface rounded-lg border p-8 text-center transition-shadow hover:shadow-md">
                <Typography variant="h3">
                  {category.split("-").join(" ")}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
