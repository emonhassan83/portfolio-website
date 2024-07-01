import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState()).auth.token;

    if (token) {
      headers.set("Authorization", `${token}`);
    }
    return headers;
  },
})

//! Todo: create custom base query function
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: ["Auth", "Users", "Project"],
  endpoints: () => ({}),
});

export default baseApi;
