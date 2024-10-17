import { createReducer } from '@reduxjs/toolkit';
import { userLogin, userLogout } from './user.action';


export type UserReducerState = {
  email: string | null;
  token: string | null;
  isConnected: boolean;
  isLoading: boolean;
  error: string | null;
};

const initialState: UserReducerState = {
  email: null,
  token: null,
  isConnected: false,
  isLoading: false,
  error: null
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userLogin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    }) 
    .addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isConnected = true;
      state.email = action.payload.email;
      state.token = action.payload.token;
    }) 
    .addCase(userLogin.rejected, (state, action) => {
      state.isLoading= false;
      state.isConnected = false;
      state.error = action.error.message ?? '(╯°□°）╯︵ ┻━┻';
    })
    .addCase(userLogout, (state) => {
      state.isConnected = false;
      state.token = null;
      state.email = null;
      state.error = null;
    })
});

export default userReducer;