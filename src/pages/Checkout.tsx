import { Helmet } from "react-helmet";
import useCart from "../hooks/useCart";

const Checkout = () => {
  const { cart, subTotal } = useCart();
  return (
    <>
      <Helmet>
        <title>DoWell Shop | Checkout</title>
        <meta name="description" content="Checkout securely on DoWell Shop" />
      </Helmet>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="address"
                >
                  Addres
                </label>
                <input
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  id="address"
                  placeholder="Enter your address"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="city"
                  >
                    City
                  </label>
                  <input
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    id="city"
                    placeholder="Enter your city"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="state"
                  >
                    State
                  </label>
                  <input
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    id="state"
                    placeholder="Enter your state"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="zip"
                  >
                    Zip Code
                  </label>
                  <input
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    id="zip"
                    placeholder="Enter your zip code"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="card-number"
                >
                  Card Number
                </label>
                <input
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  id="card-number"
                  placeholder="Enter your card number"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="expiry"
                  >
                    Expiry
                  </label>
                  <input
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    id="expiry"
                    placeholder="MM/YY"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="cvc"
                  >
                    CVC
                  </label>
                  <input
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    id="cvc"
                    placeholder="CVC"
                    type="text"
                  />
                </div>
              </div>
              <button
                disabled={cart.length === 0}
                className="bg-zinc-700 hover:bg-zinc-600 active:scale-[98%] text-white inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium px-4 py-3 mt-4 w-full disabled:opacity-70 disabled:active:transform-none disabled:transform-none disabled:cursor-not-allowed"
                type="submit"
              >
                Place Order
              </button>
            </form>
          </div>
          <div className="bg-zzinc-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4 text-sm">
              {cart.map((item) => (
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">${item.price}</p>
                </div>
              ))}
              <hr />
              <div className="flex justify-between items-center font-bold">
                <p>Total</p>
                <p>${subTotal.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
