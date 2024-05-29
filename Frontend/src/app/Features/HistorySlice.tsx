import { createSlice } from "@reduxjs/toolkit";
import { InitHistorySlice } from "../../types/history";


const initialState: InitHistorySlice = {
    Clienthistories: [],
    Orderhistories: [],
    Producthistories: []

}

const HistoryReducer = createSlice({
    name: "history",
    initialState,
    reducers: {
        setClientHistories: (state, action) => {
            state.Clienthistories = action.payload
        },
        setProducthistories: (state, action) => {
            state.Producthistories = action.payload
        },
        setOrderHistories: (state, action) => {
            state.Orderhistories = action.payload
        }
    }
})

export const {
    setClientHistories,
    setProducthistories,
    setOrderHistories,
} = HistoryReducer.actions

export default HistoryReducer.reducer