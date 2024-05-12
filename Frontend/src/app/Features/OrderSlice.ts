import { createSlice } from "@reduxjs/toolkit";
import { emptyOrder } from "../../types/order";
import { emptyMeta } from "../../types/metaPaginatoin";
import { InitOrdertSlice } from "../../types/order";



const initialState: InitOrdertSlice = {
  orders: [],
  order: emptyOrder,
  deleteOrderDialog: false,
  deleteOrdersDialog: false,
  orderDialog: false,
  orderPaidDialog:false,
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
      state.actionType = initialState.actionType ;
      state.order = initialState.order ;
    },
    setPaid: (state, action) => {
      state.order.paid = action.payload;
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
    hidePaidDailog: (state) => {
      state.orderPaidDialog = false;
    },
    openDeleteOrderDialog: (state) => {
      state.deleteOrderDialog = true;
    },
    hideDeleteOrderDialog: (state) => {
      state.deleteOrderDialog = false;
      state.order = emptyOrder;
    },
  },
});


export const {
  setOrders,
  setClientOrder,
  currentOrder,
  resetOrder,
  setPaid,
  setAmount,
  setMetaData,
  setPage,
  setLoading,
  openOrderDialog,
  hideOrderDialog,
  openPaidDialog,
  hidePaidDailog,
  hideDeleteOrderDialog,
  openDeleteOrderDialog,
} = orderReducer.actions;

export default orderReducer.reducer;
