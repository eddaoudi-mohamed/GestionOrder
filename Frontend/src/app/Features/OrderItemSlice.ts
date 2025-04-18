import { createSlice } from "@reduxjs/toolkit";
import { emptyOrderItem, InitOrderItemSlice } from "../../types/orderItem";

const initialState: InitOrderItemSlice = {
  orderItems: [],
  orderItem: emptyOrderItem,
  products: [],
  TotalOrderItems: 0,
  deleteOrderItemDialog: false,
  orderItemDialog: false,
  actionType: "",
};

const createId = () => {
  let id = '';
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return id;
};

const orderItemReducer = createSlice({
  name: "orderItem",
  initialState,
  reducers: {
    setOrderItems: (state, action) => {
      state.orderItems = action.payload;
      state.TotalOrderItems = action.payload.reduce(
        (acc: number, curr: { total: number }) => Number(acc) + Number(curr.total),
        0
      );
    },
    addOrderItem: (state, action) => {
      const id = createId();
      const newOrderItem = { ...action.payload, id };
      state.orderItems.push(newOrderItem);
      let OldTotalOrder= state.TotalOrderItems
        state.TotalOrderItems = Number(OldTotalOrder) + Number(newOrderItem.total);
 

    },
    setOrderProduct: (state, action) => {
      state.products = action.payload;
    },
    updateOrderItem: (state, action) => {
      const { index, orderItem } = action.payload;
      state.orderItems[index] = orderItem;
      state.TotalOrderItems = state.orderItems.reduce(
        (acc: number, curr: { total: number }) => Number(acc) + Number(curr.total),
        0
      );
    },
    currentOrderItem: (state, action) => {
      state.orderItem = action.payload;
    },
    setTotalOrderItems: (state, action) => {
      state.TotalOrderItems = action.payload;
    },
    resetOrderItems: (state) => {
      state.TotalOrderItems = initialState.TotalOrderItems;
      state.actionType = initialState.actionType;
      state.deleteOrderItemDialog = initialState.deleteOrderItemDialog;
      state.orderItem = initialState.orderItem;
      state.orderItemDialog = initialState.orderItemDialog;
      state.orderItems = initialState.orderItems;
    },
    openOrderItemDialog: (state, action) => {
      state.orderItemDialog = true;
      state.actionType = action.payload;
    },
    hideOrderItemDialog: (state) => {
      state.orderItemDialog = false;
      state.actionType = "";
      state.orderItem = emptyOrderItem;
    },
    openDeleteOrderItemDialog: (state) => {
      state.deleteOrderItemDialog = true;
    },
    hideDeleteOrderItemDialog: (state) => {
      state.deleteOrderItemDialog = false;
      state.orderItem = emptyOrderItem;
    },
  },
});

export const {
  setOrderItems,
  updateOrderItem,
  addOrderItem,
  currentOrderItem,
  resetOrderItems,
  setOrderProduct,
  setTotalOrderItems,
  openOrderItemDialog,
  hideOrderItemDialog,
  hideDeleteOrderItemDialog,
  openDeleteOrderItemDialog,
} = orderItemReducer.actions;

export default orderItemReducer.reducer;
