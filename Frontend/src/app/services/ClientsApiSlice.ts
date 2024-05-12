import { Client } from "../../types/client";
import { apiSlice } from "./apiSlice";

export const ClientsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCliets: build.query<any, any>({
      query(page) {
        if (page) {
          return {
            url: `clients?page=${page}`,
          };
        }
        return {
          url: `clients`,
        };
      },
    }),
    addClient: build.mutation<any, Client>({
      query(client) {
        return {
          url: "clients/store",
          method: "POST",
          body: client,
        };
      },
    }),
    updateClient: build.mutation({
      query({ client }) {
        console.log("The ApiSlice Updated Client => ", client);
        return {
          url: `clients/update/${client.id}`,
          method: "POST",
          body: client,
        };
      },
    }),
    deleteClient: build.mutation({
      query(id) {
        return {
          url: `clients/delete/${id}`,
          method: "POST",
        };
      },
    }),
    ClientsSearch: build.query<any, any>({
      query(query) {
        return {
          url: `clients/search?query=${query}`,
        };
      },
    }),
  }),
});

export const {
  useClientsSearchQuery,
  useGetClietsQuery,
  useAddClientMutation,
  useDeleteClientMutation,
  useUpdateClientMutation,
  usePrefetch,
} = ClientsApiSlice;
