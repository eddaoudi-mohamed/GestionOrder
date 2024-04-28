import { createSlice} from "@reduxjs/toolkit";
import { InitClientSlice } from "../../types/InitClientSlice";

const initialState:InitClientSlice = {
  client: null,
  deleteClientDialog: false,
  deleteClientsDialog: false,
  clientDialog: false,
  actionType: "",
  page: "",
}



const clientReducer = createSlice({
  name: "client",
  initialState,
  reducers: {
    currentClient:(state, action)=>{
        state.client = action.payload;
    },
    openClientDialog:(state,action)=>{
        state.clientDialog = true;
        state.actionType = action.payload.ActionType
    },
    hideClientDialog:(state)=>{
        state.clientDialog = false;
        state.actionType = "";
    },

    openDeleteClientDialog:(state)=>{
        state.deleteClientDialog = true;
    },
    hideDeleteClientDialog:(state)=>{
        state.deleteClientDialog = false;
    },
  },
});


export const { openClientDialog ,hideClientDialog,hideDeleteClientDialog ,currentClient ,openDeleteClientDialog} =clientReducer.actions

export default clientReducer.reducer