export interface OrderItem {
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
  totale: number;
}

export const emptyOrderItem: OrderItem = {
  order_id: "",
  product_id: "",
  quantity: 0,
  price: 0,
  totale: 0,
};
