import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverBaseUrl } from '../constants/constants';

import { TUserStateResponse, TUserState } from '../types';

export const userApi = createApi({
  reducerPath: 'UserApi',
  baseQuery: fetchBaseQuery({ baseUrl: serverBaseUrl }),
  endpoints: (builder) => ({
    getUserById: builder.query<TUserState, number>({
      query(id) {
        return {
          url: `api/users/${id}`,
        };
      },
      transformResponse: (response: TUserStateResponse) => response.data,
    }),
  }),
});

export const { useGetUserByIdQuery } = userApi;
