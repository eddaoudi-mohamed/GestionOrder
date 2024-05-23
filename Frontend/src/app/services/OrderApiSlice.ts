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
    getOrder: build.query<any, any>({
      query(id) {
        return {
          url: `orders/order/${id}`,
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
    paid: build.mutation({
      query({ id, paid}) {
        return {
          url: `orders/paid/${id}`,
          method: "POST",
          body: { paid: paid },
        };
      },
    }),
    refund: build.mutation({      
      query({ id, refund}) {
        return {
          url: `orders/refunded/${id}`,
          method: "POST",
          body: { refunde: refund },
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
  useGetOrderQuery,
  useAddOrderMutation,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
  usePaidMutation,
  useRefundMutation,
  usePrefetch,
} = OrderApiSlice;
