import { createSlice } from "@reduxjs/toolkit";
import { emptyOrderItem, InitOrderItemtSlice } from "../../types/orderItem";

const initialState: InitOrderItemtSlice = {
  orderItems: [],
  orderItem: emptyOrderItem,
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

const orderReducer = createSlice({
  name: "orderItem",
  initialState,
  reducers: {
    setOrderItems: (state, action) => {
      state.orderItems = action.payload;
      state.TotalOrderItems = action.payload.reduce(
        (acc: any, curr: any) => acc + curr.total,
        0
      );
    },
    addOrderItem: (state, action) => {
      const id = createId();
      const newOrderItem = { ...action.payload, id };
      state.orderItems.push(newOrderItem);
      state.TotalOrderItems += newOrderItem.total; // Update TotalOrderItems
    },
    updateOrderItem: (state, action) => {
      const { index, orderItem } = action.payload;
      state.orderItems[index] = orderItem;
      state.TotalOrderItems = state.orderItems.reduce(
        (acc, curr) => acc + curr.total,
        0
      ); // Recalculate TotalOrderItems
    },
    currentOrderItem: (state, action) => {
      state.orderItem = action.payload;
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
  openOrderItemDialog,
  hideOrderItemDialog,
  hideDeleteOrderItemDialog,
  openDeleteOrderItemDialog,
} = orderReducer.actions;

export default orderReducer.reducer;
