import { ProductTypes } from "../Action/ActionTypes";

const initialState ={
    allproducts:[],
    cart:[],
}

export const ProductReducer = (state = initialState,{type,payload})=>{
    switch (type) {
        case ProductTypes.allProduct:
            return {allproducts:[...state.allproducts,...payload]}
            break;
    
        default:
           state
    }
}