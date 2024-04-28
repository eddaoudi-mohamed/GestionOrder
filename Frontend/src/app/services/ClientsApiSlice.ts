import { Client } from "../../types/client";
import { apiSlice } from "./apiSlice";

export const ClientsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCliets: build.query<any, void>({
      query() {
        return {
          url: `clients`,
        };
      },
    }),
    addClient: build.mutation<any, Client >({
      query(client) {
        return {
          url: "clients/store",
          method: "POST",
          body: client,
        };
      },
    }),
    updateClient: build.mutation({
      query({client,id}) {
        return {
          url: `clients/update/${id}`,
          method: "PUT",
          body: client,
        };
      },
    }),
    deleteClient: build.mutation({
      query(id) {
        return {
          url: `clients/delete/${id}`,
          method: "DELETE",
        };
      },
    }),
    
    
  }),
});

export const { useGetClietsQuery , useAddClientMutation ,useDeleteClientMutation,useUpdateClientMutation} = ClientsApiSlice;
