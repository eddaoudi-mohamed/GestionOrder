import { Meta } from "./metaPaginatoin";

export interface Order {
  id: string;
  client_id: string;
  amount: number;
  paid: number;
  status: "pending"
    | "paid"
    | "unpaid"
    | "partially_paid"
    | "refunded"
    | "partially_refunded"
    | "voided";
  created_at: string;
  updated_at: string;
}

export interface InitOrdertSlice {
  orders: Order[];
  order: Order;
  deleteOrderDialog: boolean;
  deleteOrdersDialog: boolean;
  orderDialog: boolean;
  searchLoading: boolean;
  orderPaidDialog:boolean,
  FetchLoading: boolean;
  actionType: string;
  page: number;
  meta: Meta;
}

export const emptyOrder: Order = {
  id: "",
  client_id: "",
  amount: 0,
  paid: 0,
  status: "pending",
  created_at: "",
  updated_at: "",
}

