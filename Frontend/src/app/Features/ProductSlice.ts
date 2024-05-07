import { createSlice } from "@reduxjs/toolkit";
import { emptyProduct } from "../../types/product";
import { emptyMeta } from "../../types/metaPaginatoin";
import { InitProductSlice } from "../../types/product";

const initialState: InitProductSlice = {
  products: [],
  product: {
    id: "",
    name: "",
    image: null,
    description: "",
    category_id: 0,
    price: 0,
    quantityPreUnit: 0,
    unitsInStock: 0,
    unitsOnOrder: 0,
    status: "available",
    statusExiste: "existe",
    created_at: "",
    updated_at: "",
  },
  deleteProductDialog: false,
  deleteProductsDialog: false,
  productDialog: false,
  searchLoading: false,
  FetchLoading: false,
  actionType: "",
  page: 1,
  meta: emptyMeta,
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    currentProduct: (state, action) => {
      state.product = action.payload;
    },
    openProductDialog: (state, action) => {
      state.productDialog = true;
      state.actionType = action.payload.ActionType;
    },
    hideProductDialog: (state) => {
      state.productDialog = false;
      state.actionType = "";
      state.product = emptyProduct;
    },

    openDeleteProductDialog: (state) => {
      state.deleteProductDialog = true;
    },
    hideDeleteProductDialog: (state) => {
      state.deleteProductDialog = false;
      state.product = emptyProduct;
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
  setProducts,
  openProductDialog,
  hideProductDialog,
  hideDeleteProductDialog,
  currentProduct,
  openDeleteProductDialog,
  setMetaData,
  setPage,
  setLoading
} = productReducer.actions;

export default productReducer.reducer;
