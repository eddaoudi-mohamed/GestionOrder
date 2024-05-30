import { apiSlice } from "./apiSlice";

const HistoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getClientsHistory: builder.query({
      query: () => "histories/client",
    }),
    getProductsHistory: builder.query({
      query: () => "histories/product",
    }),
    getOrderHistory: builder.query({
      query: () => `histories/order`,
    }),
    searchClientHistory: builder.query({
      query: ({ query }) => `histories/search/Client?query=${query}`,
      providesTags: ["clientHistory"],
    }),
    searchProductHistory: builder.query({
      query: ({ query }) => `histories/search/Product?query=${query}`,
      providesTags: ["productHistory"],
    }),
    searchOrderHistory: builder.query({
      query: ({ query }) => `histories/search/Order?query=${query}`,
      providesTags: ["orderHistory"],
    }),
  }),
});

export const {
  useGetClientsHistoryQuery,
  useGetProductsHistoryQuery,
  useGetOrderHistoryQuery,
  useSearchClientHistoryQuery,
  useSearchProductHistoryQuery,
  useSearchOrderHistoryQuery,
} = HistoryApi;
