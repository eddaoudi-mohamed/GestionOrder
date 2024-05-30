
import { apiSlice } from "./apiSlice";

export const ProductsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<any, any>({
      query(page) {
        if (page) {
          return {
            url: `products?page=${page}`,
          };
        }
        return {
          url: `products`,
        };
      },
    }),
    addProduct: build.mutation({
      query(client) {
        return {
          url: "products/store",
          method: "POST",
          body: client,
        };
      },
      invalidatesTags: ["Product"],
    }),
    updateProduct: build.mutation({
      query: ({ product, id }) => ({
        url: `products/update/${id}`,
        method: "POST",
        body: product,
      }),
    }),
    deleteProduct: build.mutation({
      query(id) {
        return {
          url: `products/delete/${id}`,
          method: "POST",
        };
      },
      invalidatesTags: ["Product"],
    }),
    ProductsSearch: build.query<any, any>({
      query: ( query ) => `products/search?query=${query}`,
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useProductsSearchQuery,
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  usePrefetch,
} = ProductsApiSlice;
