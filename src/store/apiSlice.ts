import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/people/' }),
  endpoints: (builder) => ({
    getPeople: builder.query({
      query: (paramSearch) => `?search=${paramSearch.search}&page=${paramSearch.page}`,
    }),
  }),
});

export const { useGetPeopleQuery } = apiSlice;
