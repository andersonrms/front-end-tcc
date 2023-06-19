import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AUTH_STORE_KEY, AuthState, InitialState } from './types';

const initialState = {
  value: {
    token: undefined,
  } as AuthState,
} as unknown as InitialState;

export const auth = createSlice({
  name: AUTH_STORE_KEY,
  initialState,
  reducers: {
    deleteToken: () => {
      return initialState;
    },
    setToken: (state, action: PayloadAction<string>) => {
      return {
        value: {
          token: action.payload,
        },
      };
    },
  },
});

export const { deleteToken, setToken } = auth.actions;
export default auth.reducer;
