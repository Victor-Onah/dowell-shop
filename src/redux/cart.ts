import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../types";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		value: [] as Cart
	},
	reducers: {
		addToCart(state, action) {
			const { id, title, image, price } = action.payload;
			const productIndex = state.value.findIndex(
				product => product.id === id
			);

			if (productIndex > -1) {
				state.value[productIndex].quantity++;
			} else {
				state.value.push({ id, quantity: 1, title, image, price });
			}
		},
		setQuantity(state, action) {
			const { id, quantity } = action.payload;
			const productIndex = state.value.findIndex(
				product => product.id === id
			);

			state.value[productIndex].quantity = quantity;
		},
		deleteFromCart(state, action) {
			const { id } = action.payload;
			const productIndex = state.value.findIndex(
				product => product.id === id
			);

			state.value.splice(productIndex, 1);
		}
	}
});

export const { addToCart, setQuantity, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
