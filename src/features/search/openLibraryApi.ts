import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const openLibraryApi = createApi({
  reducerPath: "openLibraryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://openlibrary.org/" }),
  endpoints: (builder) => ({
    searchBooks: builder.query({
      query: (searchTerm: string) =>
        `search.json?q=${encodeURIComponent(searchTerm)}`,
    }),
  }),
});

export const { useSearchBooksQuery } = openLibraryApi;
