import { Nullable } from "primereact/ts-helpers";

export interface History {
  action_type:
    | "created"
    | "updated"
    | "deleted"
    | "searched"
    | "paid"
    | "refunded"
    | "delivered";
  entity_type: "Product" | "Client" | "Order";
  initiator: "admin" | "system";
  details: Nullable;
  created_at: string;
  updated_at: string;
}

export interface InitHistorySlice {
  Producthistories: History[];
  Orderhistories: History[];
  Clienthistories: History[];
}
