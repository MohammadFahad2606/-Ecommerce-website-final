import { createStore } from "redux";
import { ProductReducer } from "../Reducers/Reducer";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, ProductReducer)
  export let store = createStore(persistedReducer)
  export let persistor = persistStore(store)