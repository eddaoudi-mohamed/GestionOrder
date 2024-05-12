
import { apiSlice } from "./apiSlice";

export const OrderApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query<any, any>({
      query(page) {
        if (page) {
          return {
            url: `orders?page=${page}`,
          };
        }
        return {
          url: `orders`,
        };
      },
    }),
    addOrder: build.mutation({
      query(client) {
        return {
          url: "orders/store",
          method: "POST",
          body: client,
        };
      },
    }),
    updateOrder: build.mutation({
      query: ({ order, id }) => ({
        url: `orders/update/${id}`,
        method: "POST",
        body: order,
      }),
    }),
    deleteOrder: build.mutation({
      query(id) {
        return {
          url: `orders/delete/${id}`,
          method: "POST",
        };
      },
    }),
    OrdersSearch: build.query<any, any>({
      query(query) {
        return {
          url: `orders/search?query=${query}`,
        };
      },
    }),
  }),
});

export const {
  useOrdersSearchQuery,
  useGetOrdersQuery,
  useAddOrderMutation,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
  usePrefetch,
} = OrderApiSlice;
