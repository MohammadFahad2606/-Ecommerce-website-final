import { ProductTypes } from "../Action/ActionTypes";

const initialState = {
    allproducts: [],
    cart: [],
};

export const ProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ProductTypes.allProduct:
            return {
                ...state,
                allproducts: [...state.allproducts, ...payload],
            };

        case ProductTypes.cartData:
            return {
                ...state,
                cart: [...state.cart, payload], // Corrected spreading
            };

        default:
            return state; // Always return state in default
    }
};
