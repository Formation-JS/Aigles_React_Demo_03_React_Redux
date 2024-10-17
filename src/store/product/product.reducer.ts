//! Reducer -> Fonction qui resoudre les actions du store

import { createReducer } from '@reduxjs/toolkit';
import { Product } from '../../@types/product';
import { productAdd, productDispo, productRemove, productRemoveAll, productUpdatePrice, productUpdateQuantity } from './product.action';

// Définition du type du state du reducer
export type ProductReducerState = {
  products: Product[];
  lastAdd: Product | null;
  totalCount : number;
}

// Définir le state initial du reducer
const initialState : ProductReducerState = {
  products: [],
  lastAdd: null,
  totalCount: 0
};

// Le reducer des produits
const productReducer = createReducer(initialState, (builder) => {

  // Définition des différentes actions que le reducer doit résoudre
  builder
    .addCase(productAdd, (state, action) => {
      //? Résolution de l'action "add"
      const product = action.payload;

      // - Reducer à l'ancienne
      /*
      return {
        products: [...state.products, product],
        totalCount : state.totalCount + product.quantity,
        lastAdd : product
      }
      */
      
      // - Reducer via "Immer"
      state.products.push(product);
      state.lastAdd = product;
      state.totalCount += product.quantity;
    })
    .addCase(productUpdatePrice, (state, action) => {
      //? Résolution de l'action "update-price"

      // - Reducer à l'ancienne
      /*
      return {
        ...state,
        products : state.products.map((product) => (product.id !== action.payload.id) ? product : {
          ...product,
          price: action.payload.price,
          updateAt: action.payload.updateAt
        })
      };
      */

      // - Reducer via "Immer"
      const product = state.products.find(product => product.id === action.payload.id);

      if(product) {
        product.price = action.payload.price;
        product.updateAt = action.payload.updateAt;
      }
    })
    .addCase(productUpdateQuantity, (state, action) => {
      //? Résolution de l'action "update-quantity"
      const { id, move, quantity, updateAt } = action.payload;

      const product = state.products.find(product => product.id === id);
      if(product) {
        product.quantity = (move === 'up') ? product.quantity + quantity : product.quantity - quantity;
        product.updateAt = updateAt;
      }
    })
    .addCase(productDispo, (state, action) => {
      //? Résolution de l'action "update-dispo"
      const { id, dispo } = action.payload;

      const product = state.products.find(product => product.id === id);
      if(product) {
        product.isActive = dispo;
        state.totalCount = (dispo) ? state.totalCount + product.quantity : state.totalCount - product.quantity;
      }
    })
    .addCase(productRemove, (state, action) => {
      //? Résolution de l'action "remove"
      const id = action.payload;

      state.totalCount -= state.products.find(product => product.id === id)?.quantity ?? 0;
      state.products = state.products.filter(product => product.id !== id);
    })
    .addCase(productRemoveAll, (state) => {
      //? Résolution de l'action "remove-all"
      state.products = [];
      state.totalCount = 0;
      state.lastAdd = null;
    });
});

export default productReducer;