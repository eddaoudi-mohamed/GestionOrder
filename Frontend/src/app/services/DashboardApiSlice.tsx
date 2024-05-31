import { apiSlice } from "./apiSlice";

const DashboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStatics: builder.query<any, void>({
      query: () => "dashboard",
    }),
    getStaticsBy: builder.query<any, { date: "today" | "month" | "year" }>({
      query: ({ date }) => `dashboard/statusbydate/${date}`,
      providesTags: ["clientHistory"],
    }),
  }),
});

export const { useGetDashboardStaticsQuery, useGetStaticsByQuery } =
  DashboardApi;
