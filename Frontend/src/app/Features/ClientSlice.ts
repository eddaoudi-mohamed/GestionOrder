import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Client } from "../../types/client";

const initialState :Client[]= [
  {
    "id": "",
    "name": "",
    "email": "",
    "phone": "",
  }
]



const clientReducer = createSlice({
  name: "client",
  initialState,
  reducers: {
    GetClients: (state,action:PayloadAction<Client[]>) => {
       return state = action.payload;
    },
    
    AddClient: (state, action: PayloadAction<Client>) => {
      state.push(action.payload);
    },
    DeleteClient: (state, action: PayloadAction<string | null>) => {
      return state.filter((val) => val.id !== action.payload);
    },
    DeleteSelectedClients: (state, action: PayloadAction<Client[]>) => {
      return state.filter((val) => !action.payload.includes(val));
    },
  },
});


export const {AddClient ,DeleteClient,DeleteSelectedClients } =clientReducer.actions

export default clientReducer.reducer