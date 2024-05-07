import { apiSlice } from "./apiSlice";



export const AuthApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    LogIn: build.mutation<any, { email: string; password: string }>({
      query: (credentials) => {
        return {
          url: "auth/login",
          method: "POST",
          body: credentials,
        };
      },
    }),
  }),
});





// Manually create the useLoginMutation hook

export const { useLogInMutation } = AuthApiSlice;
