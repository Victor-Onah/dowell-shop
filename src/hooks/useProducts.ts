import products from "../assets/products.json";

const useProducts = (category?: string): typeof products => {
  if (!category) return products;
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
};

export default useProducts;
