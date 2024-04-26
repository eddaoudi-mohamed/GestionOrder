import { Client } from "../../types/client";
import { apiSlice } from "./apiSlice";

export const ClientsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCliets: build.query<Client[], void>({
      query() {
        return {
          url: `clients`,
        };
      },
    }),
  }),
});

export const { useGetClietsQuery } = ClientsApiSlice;
