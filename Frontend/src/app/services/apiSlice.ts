import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../Store";

import { logOut } from "../Features/AuthSlice";

const baseQuery = fetchBaseQuery({
  // baseUrl: `${process.env.REACT_APP_API_URL}`,
  baseUrl:"http://localhost/api/",
  credentials:"include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("API_SECRET", `${token}`);
    }
  },
});

export const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args: any, api: any, extraOptions: any) => {
  try {

    let result = await baseQuery(args, api, extraOptions);

    console.log("the baseQuery result => ", result);

    if (result?.error?.status === 401) {
      console.log("send a refresh token");

      // send a refresh token to get  new access token

      const refreshToken = await baseQuery("auth/refresh", api, extraOptions);

      console.log("refresh token => ", refreshToken);

      if (refreshToken.data) {
        
        // const user = (api.getState() as RootState).auth.user;

        result = await baseQuery(args, api, extraOptions);
        
      } else {
        console.log("log out");
        api.dispatch(logOut());
        
      }
    }

    return result;
  } catch (err: any) {
    console.error("Error in baseQueryWithReAuth:", err);
    return { error: { status: "FETCH_ERROR", error: err.message } };
  }
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth,
  tagTypes:["Client","Category","Order","Product","clientHistory","productHistory","orderHistory"],
  endpoints: () => ({}),
});
