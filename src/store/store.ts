import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product/product.reducer';
import userReducer from './user/user.reducer';

//! Configuration du store
const store = configureStore({
  reducer : {
    product: productReducer,
    user: userReducer
  },
  devTools: import.meta.env.DEV
});

//! Typage des éléments du store
// - Le type du store Redux
export type Store = typeof store;
// - Le type du "state" du store (via la méthode "getState")
export type StateStore = ReturnType<Store['getState']>;
// - Le type des actions possible du store (via le dispatcher)
export type DispatchStore = Store['dispatch'];

export default store;