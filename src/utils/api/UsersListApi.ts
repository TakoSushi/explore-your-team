import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverBaseUrl } from '../constants/constants';

import { TUsersListResponse, TUsersList } from '../types';

export const usersListApi = createApi({
  reducerPath: 'usersListApi',
  baseQuery: fetchBaseQuery({ baseUrl: serverBaseUrl }),
  endpoints: (builder) => ({
    getUsersListByPage: builder.query<TUsersList, number>({
      query(page) {
        return {
          url: `api/users?page=${page}`,
        };
      },
      transformResponse: (response: TUsersListResponse) => response.data,
    }),
  }),
});

export const { useGetUsersListByPageQuery } = usersListApi;
