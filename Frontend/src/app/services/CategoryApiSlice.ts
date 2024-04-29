import { Category } from "../../types/category";
import { apiSlice } from "./apiSlice";

export const CategoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<any, any>({
      query() {
        return {
          url: `categories`,
        };
      },
    }),
    addCategory: build.mutation<any, Category >({
      query(category) {
        return {
          url: "categories/store",
          method: "POST",
          body: category,
        };
      },
    }),
    deleteCategory: build.mutation<any,any>({
      query(id) {
        return {
          url: `categories/delete/${id}`,
          method: "POST",
        };
      },
    }),
    
    
  }),
});

export const { useGetCategoriesQuery , useAddCategoryMutation ,useDeleteCategoryMutation} = CategoriesApiSlice;
