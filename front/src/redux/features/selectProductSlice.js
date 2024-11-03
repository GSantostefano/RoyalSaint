// src/redux/features/selectProductsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const selectProductSlice = createSlice({
  name: 'products',
  initialState: {
    selectedProductId: null, // Estado para el ID del producto seleccionado
  },
  reducers: {
    setSelectedProductId: (state, action) => {
      state.selectedProductId = action.payload; // Actualiza el ID del producto seleccionado
      console.log("pase por aca");
    },
  },
});

export const { setSelectedProductId } = selectProductSlice.actions;

export default selectProductSlice.reducer;
