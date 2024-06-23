import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverBaseUrl } from '../constants/constants';
// import { setTeamList } from '../../providers/store/teamListSlice';

import { TTeamListResponse, TTeamList } from '../types';

export const teamListApi = createApi({
  reducerPath: 'teamListApi',
  baseQuery: fetchBaseQuery({ baseUrl: serverBaseUrl }),
  endpoints: (builder) => ({
    getTeamListByPage: builder.query<TTeamList, number>({
      query: (pageNumber) => {
        return {
          url: `api/users?page=${pageNumber}`,
        };
      },
      transformResponse: (response: TTeamListResponse) => response.data,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newTeamList) => {
        currentCache.push(...newTeamList);
      },
      forceRefetch({ currentArg, previousArg }) {
        return Number(currentArg) > Number(previousArg);
      },
    }),
  }),
});

export const { useGetTeamListByPageQuery } = teamListApi;
