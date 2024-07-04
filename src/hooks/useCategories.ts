import products from "../assets/products.json";

const useCategories = (): string[] => {
  const categoriesSet: Set<string> = new Set();

  for (let product of products) categoriesSet.add(product.category);

  return Array.from(categoriesSet);
};

export default useCategories;
