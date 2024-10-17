import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { requestUserLogin } from '../../services/user.service';

type UserLoginActionData = {
  email: string;
  password: string;
}

export const userLogin = createAsyncThunk(
  'user/login',
  async ({ email, password }: UserLoginActionData) => {

    // Requete ajax
    const data = await requestUserLogin(email, password);
    
    // En cas de succes -> Envoi des données
    return data;
  }
);

export const userLogout = createAction('user/logout');