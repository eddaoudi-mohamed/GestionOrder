
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
    }),
    ProductsSearch: build.query<any, any>({
      query(query) {
        return {
          url: `products/search?query=${query}`,
        };
      },
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
