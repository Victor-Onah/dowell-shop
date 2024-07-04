import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import { Helmet } from "react-helmet";

const Home = () => {
  const products = useProducts();

  return (
    <>
      <Helmet>
        <title>DoWell Shop</title>
        <meta
          name="description"
          content="Find beautiful accessories and clothes on DoWell Shop"
        />
      </Helmet>
      <div className="px-4 py-14 bg-gradient-to-b from-zinc-200 to-slate-50 text-center min-h-[220px]">
        <h1 className="text-6xl md:text-4xl font-black">
          Welcome to DoWell Shop
        </h1>
        <p className="text-lg font-semibold">Explore our products</p>
      </div>
      <section className="py-8 px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-slate-50">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </>
  );
};

export default Home;
