import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//! Todo: create custom base query function
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    credentials: "include"
  }),
  tagTypes: ["Auth", "Users", "Project"],
  endpoints: () => ({}),
});

export default baseApi;
