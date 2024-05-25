import { createSlice } from "@reduxjs/toolkit";
import { emptyOrder } from "../../types/order";
import { emptyMeta } from "../../types/metaPaginatoin";
import { InitOrderSlice } from "../../types/order";

const initialState: InitOrderSlice = {
  orders: [],
  order: emptyOrder,
  deleteOrderDialog: false,
  deleteOrdersDialog: false,
  orderDialog: false,
  orderPaidDialog: false,
  orderRefundDialog: false,
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
    setClientOrder: (state, action) => {
      state.order.client_id = action.payload;
    },
    currentOrder: (state, action) => {
      state.order = action.payload;
    },
    resetOrder: (state) => {
      state.actionType = initialState.actionType;
      state.order = initialState.order;
    },
    setPaid: (state, action) => {
      let downPaid = Number(state.order.paid) + Number(action.payload);
      state.order.paid = downPaid;
    },
    setRefund: (state, action) => {
      let refundedAmount = Number(state.order.paid) - Number(action.payload);
      state.order.paid = refundedAmount;
    },
    updateState: (state, action) => {
      state.order.status = action.payload;
    },
    setAmount: (state, action) => {
      state.order.amount = action.payload;
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
    openOrderDialog: (state, action) => {
      state.orderDialog = true;
      state.actionType = action.payload.ActionType;
    },
    hideOrderDialog: (state) => {
      state.orderDialog = false;
    },
    openPaidDialog: (state) => {
      state.orderPaidDialog = true;
    },
    hidePaidDialog: (state) => {
      state.orderPaidDialog = false;
    },
    openDeleteOrderDialog: (state) => {
      state.deleteOrderDialog = true;
    },
    hideDeleteOrderDialog: (state) => {
      state.deleteOrderDialog = false;
    },
    openRefundDialog: (state) => {
      state.orderRefundDialog = true;
    },
    hideRefundDialog: (state) => {
      state.orderRefundDialog = false;
    },
  },
});

export const {
  setOrders,
  setClientOrder,
  currentOrder,
  resetOrder,
  setPaid,
  setRefund,
  setAmount,
  updateState,
  setMetaData,
  setPage,
  setLoading,
  openOrderDialog,
  hideOrderDialog,
  openPaidDialog,
  hidePaidDialog,
  openRefundDialog,
  hideRefundDialog,
  hideDeleteOrderDialog,
  openDeleteOrderDialog,
} = orderReducer.actions;

export default orderReducer.reducer;
