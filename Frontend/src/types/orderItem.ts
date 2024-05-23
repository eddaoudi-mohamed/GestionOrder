export interface InitOrderItemtSlice {
  orderItems: OrderItem[];
  orderItem: OrderItem;
  products: OrderProduct[];
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

export interface OrderProduct {
  id: number;
  name: string;
  description: string;
  category_id: number;
  price: string;
  quantityPreUnit: number;
  unitsInStock: number;
  unitsOnOrder: number;
  status: string;
  statusExiste: string;
  created_at: string;
  updated_at: string;
  image: string;
  pivot: {
    order_id: number;
    product_id: number;
    quantity: number;
    price: string;
    totale: string;
  };
}
