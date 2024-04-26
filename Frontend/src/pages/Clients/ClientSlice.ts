import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Client } from "../../types/client";

// const initialState: Client[] = [{
//   id: null,
//   name: "",
//   email: "",
//   phone: "",
//   status: "",
// }];


const initialState :Client[]= [
    {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "123-456-7890",
      "status": "Active"
    },
    {
      "id": "2",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "phone": "987-654-3210",
      "status": "Inactive"
    },
    {
      "id": "3",
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "phone": "555-555-5555",
      "status": "Pending"
    },
    {
      "id": "4",
      "name": "Bob Brown",
      "email": "bob@example.com",
      "phone": "111-222-3333",
      "status": "Active"
    },
    {
      "id": "5",
      "name": "Emma Wilson",
      "email": "emma@example.com",
      "phone": "444-555-6666",
      "status": "Inactive"
    },
    {
      "id": "6",
      "name": "Michael Davis",
      "email": "michael@example.com",
      "phone": "777-888-9999",
      "status": "Pending"
    },
    {
      "id": "7",
      "name": "Sophia Garcia",
      "email": "sophia@example.com",
      "phone": "333-666-9999",
      "status": "Active"
    },
    {
      "id": "8",
      "name": "David Martinez",
      "email": "david@example.com",
      "phone": "111-777-3333",
      "status": "Inactive"
    },
    {
      "id": "9",
      "name": "Olivia Lopez",
      "email": "olivia@example.com",
      "phone": "999-888-7777",
      "status": "Pending"
    },
    {
      "id": "10",
      "name": "William Clark",
      "email": "william@example.com",
      "phone": "666-555-4444",
      "status": "Active"
    },
    {
      "id": "11",
      "name": "Isabella Adams",
      "email": "isabella@example.com",
      "phone": "222-888-9999",
      "status": "Inactive"
    },
    {
      "id": "12",
      "name": "James Moore",
      "email": "james@example.com",
      "phone": "555-999-1111",
      "status": "Pending"
    },
    {
      "id": "13",
      "name": "Sophia Baker",
      "email": "sophia.b@example.com",
      "phone": "222-333-4444",
      "status": "Active"
    },
    {
      "id": "14",
      "name": "Lucas Stewart",
      "email": "lucas@example.com",
      "phone": "888-999-0000",
      "status": "Inactive"
    },
    {
      "id": "15",
      "name": "Emily Rivera",
      "email": "emily@example.com",
      "phone": "444-555-6666",
      "status": "Pending"
    },
    {
      "id": "16",
      "name": "Benjamin Gray",
      "email": "benjamin@example.com",
      "phone": "666-777-8888",
      "status": "Active"
    },
    {
      "id": "17",
      "name": "Mia Rodriguez",
      "email": "mia@example.com",
      "phone": "333-777-1111",
      "status": "Inactive"
    },
    {
      "id": "18",
      "name": "Alexander Wright",
      "email": "alexander@example.com",
      "phone": "999-555-6666",
      "status": "Pending"
    },
    {
      "id": "19",
      "name": "Charlotte Hill",
      "email": "charlotte@example.com",
      "phone": "111-555-8888",
      "status": "Active"
    },
    {
      "id": "20",
      "name": "Ethan Russell",
      "email": "ethan@example.com",
      "phone": "777-333-2222",
      "status": "Inactive"
    }
  ]

const clientReducer = createSlice({
  name: "client",
  initialState,
  reducers: {
      AddClient:(state,action: PayloadAction<Client[]>)=>{
        return action.payload
      },
      DeleteClient:(state,action:PayloadAction<string|null>)=>{
        return state.filter((val) => val.id !== action.payload)
      },
      DeleteSelectedClients:(state,action:PayloadAction<Client[]>)=>{
        return state.filter((val) => !action.payload.includes(val))
      }
  },
});


export const {AddClient ,DeleteClient,DeleteSelectedClients } =clientReducer.actions

export default clientReducer.reducer