import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Hero from "../components/home/Hero";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <Hero />
      <Categories />
      <FeaturedProducts />
    </div>
  );
}
