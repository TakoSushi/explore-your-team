import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverBaseUrl } from '../constants/constants';

import { TMemberStateResponse, TMemberState } from '../types';

export const memberApi = createApi({
  reducerPath: 'MemberApi',
  baseQuery: fetchBaseQuery({ baseUrl: serverBaseUrl }),
  endpoints: (builder) => ({
    getMemberById: builder.query<TMemberState, number>({
      query(id) {
        return {
          url: `api/users/${id}`,
        };
      },
      transformResponse: (response: TMemberStateResponse) => response.data,
    }),
  }),
});

export const { useGetMemberByIdQuery } = memberApi;
