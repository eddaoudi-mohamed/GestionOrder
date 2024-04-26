import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./apiSlice";
import { LogInUser } from "../../types/user";
import { RootState } from "../Store";



// export const AuthApiSlice = apiSlice.injectEndpoints({
//   endpoints: (build) => ({
//     LogIn: build.mutation<any, { email: string; password: string }>({
//       query: (credentials) => {
//         return {
//           url: "auth/login",
//           method: "POST",
//           body: credentials,
//         };
//       },
//     }),
//   }),
// });



export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:80/api", 
    //credentials:"include",
    
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("API_SECRET", `${token}`);
      }
    },
  }),
  endpoints: (builder) => ({
    logIn: builder.mutation<any, { email: string; password: string }>({
      query: (user) => ({
        url: '/auth/login',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});



// Manually create the useLoginMutation hook

export const { useLogInMutation } = authApi;
