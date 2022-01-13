export const ADD_TO_CART="ADD_TO_CART";
export const REMOVE_FROM_CART="REMOVE_FROM_CART";
export function addToCart(payment){
    return {
        type : ADD_TO_CART,
        payload:payment
    }



}


export function removeFromCart(payment){
    return{
        type: REMOVE_FROM_CART,
        payload:payment
    }
}