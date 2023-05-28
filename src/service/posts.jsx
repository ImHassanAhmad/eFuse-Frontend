// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:5000/api" });

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: baseQuery,
  tagTypes: ["Posts"],
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: "post/",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Posts"],
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: "post/",
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});
export const { useGetPostsQuery, useCreatePostMutation } = postsApi;
