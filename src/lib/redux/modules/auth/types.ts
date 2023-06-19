export const AUTH_STORE_KEY = 'auth';

export type InitialState = {
  value: AuthState;
};

export type AuthState = {
  token?: string;
};
