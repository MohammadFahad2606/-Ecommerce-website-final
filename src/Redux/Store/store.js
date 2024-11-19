import { createStore } from "redux";
import { ProductReducer } from "../Reducers/Reducer";

export const store = createStore(ProductReducer)