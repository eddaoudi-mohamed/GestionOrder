import { createSlice } from "@reduxjs/toolkit";
import { emptyClient, InitClientSlice } from "../../types/client";
import { emptyMeta } from "../../types/metaPaginatoin";

const initialState: InitClientSlice = {
  clients: [],
  client: emptyClient,
  deleteClientDialog: false,
  deleteClientsDialog: false,
  ClientDetailsDialog:false,
  clientDialog: false,
  searchLoading: false,
  FetchLoading:false,
  actionType: "",
  page: 1,
  meta: emptyMeta,
};

const clientReducer = createSlice({
  name: "client",
  initialState,
  reducers: {
    setClients: (state, action) => {
      state.clients = action.payload;
    },
    currentClient: (state, action) => {
      state.client = action.payload;
    },
    openClientDialog: (state, action) => {
      state.clientDialog = true;
      state.actionType = action.payload.ActionType;
    },
    handleClientDetailsDialog: (state, action) => {
      state.ClientDetailsDialog = action.payload;
    },
    hideClientDialog: (state) => {
      state.clientDialog = false;
      state.actionType = "";
      state.client = emptyClient;
    },
    openDeleteClientDialog: (state) => {
      state.deleteClientDialog = true;
    },
    hideDeleteClientDialog: (state) => {
      state.deleteClientDialog = false;
      state.client = emptyClient;
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
  setClients,
  openClientDialog,
  hideClientDialog,
  handleClientDetailsDialog,
  hideDeleteClientDialog,
  currentClient,
  openDeleteClientDialog,
  setMetaData,
  setPage,
  setLoading
} = clientReducer.actions;

export default clientReducer.reducer;
