import { createReducer } from '@reduxjs/toolkit';


export type UserReducerState = {
  email: string | null;
  token: string | null;
  isConnected: boolean;
};

const initialState: UserReducerState = {
  email: null,
  token: null,
  isConnected: false
};

const userReducer = createReducer(initialState, (builder) => {

});

export default userReducer;