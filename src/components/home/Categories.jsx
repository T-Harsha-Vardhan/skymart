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
              <Link key={category} to={`/categories/${category}`}>
                <div
                  className="border-border bg-primary border-4 p-8 text-center transition-all shadow-[8px_8px_0px_0px_#000] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#000]"
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
