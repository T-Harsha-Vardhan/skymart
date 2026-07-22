import { useState, useEffect } from "react";
import { getProductsWithFilters } from "../api/productApi";
import EmptyState from "../components/feedback/EmptyState";
import ErrorState from "../components/feedback/ErrorState";
import LoadingState from "../components/feedback/LoadingState";
import ProductGrid from "../components/product/ProductGrid";
import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Pagination from "../components/ui/Pagination";
import useDebounce from "../hooks/useDebounce";
import { useSearchParams } from "react-router";

const SORT_OPTIONS = [
  { label: "Default", value: "" },
  { label: "Name (A-Z)", value: "title-asc" },
  { label: "Name (Z-A)", value: "title-desc" },
  { label: "Price (Low to High)", value: "price-asc" },
  { label: "Price (High to Low)", value: "price-desc" },
];

const ITEMS_PER_PAGE = 12;

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Read initial state from URL or use defaults
  const initialQuery = searchParams.get("search") || "";
  const initialSort = searchParams.get("sort") || "";
  const initialPage = parseInt(searchParams.get("page") || "1", 10);

  const [searchInput, setSearchInput] = useState(initialQuery);
  const debouncedSearch = useDebounce(searchInput, 500);
  
  const [sortValue, setSortValue] = useState(initialSort);
  const [currentPage, setCurrentPage] = useState(initialPage);
  
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Update URL when search, sort or page changes
    const params = new URLSearchParams();
    if (debouncedSearch) params.set("search", debouncedSearch);
    if (sortValue) params.set("sort", sortValue);
    if (currentPage > 1) params.set("page", currentPage);
    setSearchParams(params, { replace: true });

    // Fetch data
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        let sortBy = "";
        let order = "asc";
        
        if (sortValue) {
          const [sortField, sortOrder] = sortValue.split("-");
          sortBy = sortField;
          order = sortOrder;
        }

        const skip = (currentPage - 1) * ITEMS_PER_PAGE;

        const result = await getProductsWithFilters({
          query: debouncedSearch,
          limit: ITEMS_PER_PAGE,
          skip,
          sortBy,
          order,
        });

        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [debouncedSearch, sortValue, currentPage, setSearchParams]);

  // Reset to page 1 when search or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, sortValue]);

  if (error) return <ErrorState error={error} />;

  const products = data?.products || [];
  const total = data?.total || 0;
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  return (
    <Container>
      <div className="space-y-8 py-12">
        <div>
          <Typography variant="h1">
            {debouncedSearch ? `Search Results for "${debouncedSearch}"` : "Products"}
          </Typography>

          <Typography>
            {debouncedSearch
              ? "Showing results for your search query."
              : "Browse our collection of products."}
          </Typography>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:max-w-md">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="w-full sm:max-w-xs">
            <Select
              options={SORT_OPTIONS}
              value={sortValue}
              onChange={(e) => setSortValue(e.target.value)}
            />
          </div>
        </div>

        {isLoading ? (
          <LoadingState loadingText="Loading Products..." />
        ) : products.length === 0 ? (
          <EmptyState
            title="No products found"
            subTitle="Try adjusting your search or filters"
          />
        ) : (
          <>
            <ProductGrid products={products} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </Container>
  );
}
