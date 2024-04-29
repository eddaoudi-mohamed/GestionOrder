import { createSlice } from "@reduxjs/toolkit";
import { emptyCategory, InitCategorySlice } from "../../types/category";

const initialState: InitCategorySlice = {
  categories:[{
    id: "",
    name: "",
    description: "",
  }],
  category: {
    id: "",
    name: "",
    description: "",
  },

  deleteCategoryDialog: false,
  deleteCategorysDialog: false,
  categoryDialog: false,
  page: "",
}



const categoryReducer = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories:(state,action)=>{
      state.categories = action.payload
    },
    currentCategory: (state, action) => {
      state.category = action.payload;
    },
    openCategoryDialog: (state) => {
      state.categoryDialog = true;
    },
    hideCategoryDialog: (state) => {
      state.categoryDialog = false;
      state.category = emptyCategory;
    },

    openDeleteCategoryDialog: (state) => {
      state.deleteCategoryDialog = true;
    },
    hideDeleteCategoryDialog: (state) => {
      state.deleteCategoryDialog = false;
      state.category = emptyCategory;
    },
  },
});


export const { openCategoryDialog, hideCategoryDialog, hideDeleteCategoryDialog, currentCategory, openDeleteCategoryDialog ,setCategories } = categoryReducer.actions

export default categoryReducer.reducer