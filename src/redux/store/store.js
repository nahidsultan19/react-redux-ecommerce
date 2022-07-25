import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../state/ProductSlice';

const store = configureStore({
    reducer: {
        products: productReducer
    }
});

export default store;