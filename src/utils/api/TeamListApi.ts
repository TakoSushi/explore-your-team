import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverBaseUrl } from '../constants/constants';
// import { setTeamList } from '../../providers/store/teamListSlice';

import { TTeamListResponse, TTeamListResponseOmit } from '../types';

export const teamListApi = createApi({
  reducerPath: 'teamListApi',
  baseQuery: fetchBaseQuery({ baseUrl: serverBaseUrl }),
  endpoints: (builder) => ({
    getTeamListByPage: builder.query<TTeamListResponseOmit, number>({
      query: (pageNumber) => {
        return {
          url: `api/users?page=${pageNumber}`,
        };
      },
      transformResponse: (response: TTeamListResponse) => {
        return {
          page: response.page,
          total_pages: response.total_pages,
          teamList: response.data,
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newTeamList) => {
        currentCache.teamList.push(...newTeamList.teamList);
      },
      forceRefetch({ currentArg, previousArg }) {
        return Number(currentArg) > Number(previousArg);
      },
    }),
  }),
});

export const { useGetTeamListByPageQuery } = teamListApi;
