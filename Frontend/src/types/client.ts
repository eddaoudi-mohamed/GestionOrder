import { Meta } from "./metaPaginatoin";

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface InitClientSlice {
  clients: Client[];
  client: Client;
  clientDialog: boolean;
  deleteClientDialog: boolean;
  deleteClientsDialog: boolean;
  ClientDetailsDialog:boolean;
  searchLoading: boolean;
  FetchLoading: boolean;
  actionType: string;
  page: number;
  meta: Meta;
}

export const emptyClient: Client = {
  id: "",
  name: "",
  email: "",
  phone: "",
};
