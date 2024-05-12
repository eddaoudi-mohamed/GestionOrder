export interface InitOrderItemtSlice {
  orderItems: OrderItem[];
  orderItem: OrderItem;
  TotalOrderItems: number;
  deleteOrderItemDialog: boolean;
  orderItemDialog: boolean;
  actionType: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  product_name: string;
  quantity: number;
  price: number;
  total: number;
}

export const emptyOrderItem: OrderItem = {
  id: "",
  order_id: "",
  product_id: "",
  product_name: "",
  quantity: 0,
  price: 0,
  total: 0,
};
