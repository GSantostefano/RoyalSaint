// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/productsSlice';
import productsReducer2 from './features//selectProductSlice';
const store = configureStore({
  reducer: {
    products: productsReducer, // Agrega el reducer de productos al store
    products: productsReducer2, // Agrega el reducer de productos
  },
});

export default store;
