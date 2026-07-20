export async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return data.products;
}

export async function getProductById(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return data;
}

export async function searchProducts(query) {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return data.products;
}

export async function getCategories() {
  const response = await fetch("https://dummyjson.com/products/category-list");

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return data;
}

export async function getProductsByCategory(category) {
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return data.products;
}
