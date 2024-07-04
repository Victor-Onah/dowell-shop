import { Params } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import useCart from "../hooks/useCart";
import products from "../assets/products.json";
import type { Product as ProductType } from "../../types";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart, setQuantity } from "../redux/cart";
import ProductCard from "../components/ProductCard";
import { Helmet } from "react-helmet";

export const loader = async ({ params }: { params: Params<"id"> }) => {
  const { id } = params;
  const product = products.find((product) => product.id === Number(id));
  let relatedProducts;

  if (product)
    relatedProducts = products.filter(
      (pr) => pr.category === product.category && pr.id !== Number(id)
    );

  return {
    product,
    id: Number(id),
    relatedProducts: relatedProducts || [],
  };
};

function Product() {
  const { product, id, relatedProducts } = useLoaderData() as {
    product: ProductType;
    id: number;
    relatedProducts: ProductType[];
  };
  const { inCart, quantity } = useCart(Number(id));
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>{`${product.title}`}</title>
        <meta name="description" content={`${product.description}`} />
      </Helmet>
      <div>
        <div className="grid md:grid-cols-2 gap-8 items-start px-4 md:px-6 py-12 max-w-6xl mx-auto">
          <div>
            <img
              src={product.image}
              alt={product.title}
              width={600}
              height={600}
              className="w-full rounded-lg aspect-[1/1.2]"
            />
          </div>
          <div className="grid gap-6">
            <div>
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <p className="text-muted-foreground">{product.description}</p>
              <p className="text-4xl font-bold mt-4">${product.price}</p>
            </div>
            <div className="flex flex-col gap-2">
              {inCart ? (
                <>
                  <input
                    className="p-2 rounded-lg border-2 border-zinc-400"
                    type="number"
                    value={quantity as number}
                    onChange={(e) =>
                      dispatch(
                        setQuantity({
                          id,
                          quantity: Number(e.target.value),
                        })
                      )
                    }
                    min={1}
                  />
                  <button
                    className="bg-zinc-700 hover:bg-zinc-600 active:scale-[98%] text-white inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium px-4 py-3 mt-4 w-full"
                    onClick={() => dispatch(deleteFromCart({ id }))}
                  >
                    Remove from Cart
                  </button>
                </>
              ) : (
                <button
                  className="bg-zinc-700 hover:bg-zinc-600 active:scale-[98%] text-white inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium px-4 py-3 mt-4 w-full"
                  onClick={() => dispatch(addToCart({ id }))}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="mt-12 bg-gradient-to-b from-white via-slate-50 to-slate-50">
          <h2 className="text-2xl font-bold mb-4 px-4 md:px-6 py-12">
            Related Products
          </h2>
          <div className="py-8 px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {relatedProducts.map((product) => (
              <ProductCard {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
