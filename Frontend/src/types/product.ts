import { Meta } from "./metaPaginatoin";

export interface Product {
  id: string;
  name: string;
  image:any;
  description: string;
  category_id: number;
  price: number;
  quantityPreUnit: number;
  unitsInStock: number;
  unitsOnOrder: number;
  status: "available" | "unavailable";
  statusExiste: "existe" | "deleted";
  created_at: string;
  updated_at: string;
}

export interface InitProductSlice {
  products: Product[];
  product: Product;
  deleteProductDialog: boolean;
  deleteProductsDialog: boolean;
  productDialog: boolean;
  searchLoading: boolean;
  FetchLoading: boolean;
  actionType: string;
  page: number;
  meta: Meta;
}


export const emptyProduct: Product = {
  id: "",
  name: "",
  image:{},
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
};
