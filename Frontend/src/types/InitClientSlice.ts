import { Client } from "./client";

export interface InitClientSlice {
    client: Client | null;
    clientDialog: boolean;
    deleteClientDialog: boolean;
    deleteClientsDialog: boolean;
    actionType:string;
    page:string;
}