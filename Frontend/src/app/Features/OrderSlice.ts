import { createSlice } from "@reduxjs/toolkit";
import { emptyOrder } from "../../types/order";
import { emptyMeta } from "../../types/metaPaginatoin";
import { InitOrdertSlice } from "../../types/order";

const initialState: InitOrdertSlice = {
  orders: [],
  order: {
    id: "",
    client_id: "",
    amount: 0,
    paid: 0,
    status: "pending",
    created_at: "",
    updated_at: "",
  },
  orderItems: [],
  deleteOrderDialog: false,
  deleteOrdersDialog: false,
  orderDialog: false,
  searchLoading: false,
  FetchLoading: false,
  actionType: "",
  page: 1,
  meta: emptyMeta,
};

const orderReducer = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    currentOrder: (state, action) => {
      state.order = action.payload;
    },
    openOrderDialog: (state, action) => {
      state.orderDialog = true;
      state.actionType = action.payload.ActionType;
    },
    hideOrderDialog: (state) => {
      state.orderDialog = false;
      state.actionType = "";
      state.order = emptyOrder;
    },

    openDeleteOrderDialog: (state) => {
      state.deleteOrderDialog = true;
    },
    hideDeleteOrderDialog: (state) => {
      state.deleteOrderDialog = false;
      state.order = emptyOrder;
    },
    setMetaData: (state, action) => {
      state.meta = action.payload;
    },
    setPage: (state, action) => {
      state.FetchLoading = true;
      state.page = action.payload;
    },
    setLoading: (state, action) => {
      state.FetchLoading = action.payload;
    },
  },
});

export const {
  setOrders,
  openOrderDialog,
  hideOrderDialog,
  hideDeleteOrderDialog,
  currentOrder,
  openDeleteOrderDialog,
  setMetaData,
  setPage,
  setLoading,
} = orderReducer.actions;

export default orderReducer.reducer;
