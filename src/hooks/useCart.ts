import { useSelector } from "react-redux";
import { Cart } from "../../types";

const useCart = (id?: number) => {
  const cart = useSelector<any, Cart>((state) => state.cart.value);
  let uniqueItems = 0,
    subTotal = 0,
    product = null,
    inCart = false,
    quantity = null;

  if (id) {
    product = cart.find((p) => p.id === id);
    if (product) (inCart = true), (quantity = product.quantity);
  }

  for (let item of cart)
    (uniqueItems += item.quantity), (subTotal += item.price * item.quantity);

  return { cart, product, inCart, quantity, uniqueItems, subTotal };
};

export default useCart;
