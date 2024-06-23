import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverBaseUrl } from '../constants/constants';

import {
  TLoginRequest,
  TLoginResponse,
  TRegisterRequest,
  TRegisterResponse,
} from '../types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: serverBaseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation<TLoginResponse, TLoginRequest>({
      query: (authData) => ({
        url: 'api/login',
        method: 'POST',
        body: authData,
      }),
    }),
    register: builder.mutation<TRegisterResponse, TRegisterRequest>({
      query: (regData) => ({
        url: 'api/register',
        method: 'POST',
        body: regData,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'api/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
