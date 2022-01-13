import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/carItems";

const initialState = {
    cartItems: cartItems,
}
export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let payment = state.cartItems.find(c => c.payment.paymentId === payload.id)
            if (payment) {
                payment.quantity++;
                return {
                    ...state
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, payment: payload }]
                };
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.carItems.filter(c => c.payment.paymentId !== payload.id)
            };
        default:
            return state;
    }
}