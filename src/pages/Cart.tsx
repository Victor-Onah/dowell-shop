import { useDispatch } from "react-redux";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";
import { addToCart, setQuantity, deleteFromCart } from "../redux/cart";
import { Helmet } from "react-helmet";

const Cart = () => {
  const { cart, uniqueItems, subTotal } = useCart();
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>{`DoWell Shop | Cart (${uniqueItems})`}</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="container mx-auto py-12 p-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          {cart.length > 0 ? (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[100px_1fr_100px] items-center gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width="100"
                    height="100"
                    className="rounded-lg"
                    style={{
                      aspectRatio: "100 / 100",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <div className="flex items-center gap-2">
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium hover:bg-zinc-100 border active:bg-zinc-200 h-9 rounded-md px-3"
                        onClick={() =>
                          item.quantity > 1 &&
                          dispatch(
                            setQuantity({
                              id: item.id,
                              quantity: item.quantity - 1,
                            })
                          )
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium hover:bg-zinc-100 border active:bg-zinc-200 h-9 rounded-md px-3"
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id: item.id,
                            })
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <span className="font-semibold">${item.price}</span>
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium hover:bg-red-100 border border-red-200 active:bg-red-200 h-9 rounded-md px-3 text-red-500"
                      onClick={() => dispatch(deleteFromCart({ id: item.id }))}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" x2="10" y1="11" y2="17"></line>
                        <line x1="14" x2="14" y1="11" y2="17"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-xl text-zinc-300">No item in your cart</p>
              <Link
                className="bg-zinc-100 rounded-xl h-10 flex items-center text-sm p-2 active:bg-zinc-200"
                to="/"
              >
                Continue shopping
              </Link>
            </div>
          )}
          <div
            className="rounded-lg bg-zinc-50 shadow-sm h-fit"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Order Summary
              </h3>
            </div>
            <div className="p-6">
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total items</span>
                  <span>{uniqueItems}</span>
                </div>
                <Link
                  to="/checkout"
                  className="bg-zinc-700 hover:bg-zinc-600 active:scale-[98%] text-white inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium px-4 py-3 mt-4 w-full"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
