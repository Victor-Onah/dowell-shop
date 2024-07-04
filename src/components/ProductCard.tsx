import { Link } from "react-router-dom";
import { Product } from "../../types";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart";

const ProductCard = ({ description, id, image, price, title }: Product) => {
  const dispatch = useDispatch();

  return (
    <div
      key={id}
      className="rounded-lg shadow-md overflow-hidden flex flex-col bg-white"
    >
      <Link to={`/products/${id}`} className="flex-1">
        <img
          src={image}
          alt={title}
          width={320}
          className="w-full aspect-[1/1.2]"
        />
      </Link>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="line-clamp-2 text-sm">{description}</p>
        <div className="flex justify-between items-baseline gap-2">
          <span className="text-2xl font-bold">${price}</span>
          <button
            onClick={() => dispatch(addToCart({ id, title, image, price }))}
            className="bg-zinc-700 hover:bg-zinc-600 active:scale-[98%] text-white inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium px-4 py-3 mt-4 w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
