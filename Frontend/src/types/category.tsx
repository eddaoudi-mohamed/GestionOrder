export interface Category {
    id: string;
    name: string;
    description: string;
  }

  export interface InitCategorySlice {
    categories:Category[];
    category: Category ;
    categoryDialog: boolean;
    deleteCategoryDialog: boolean;
    deleteCategorysDialog: boolean;
    page:string;
}

export const emptyCategory:Category = {
  id: "",
  name: "",
  description: "",
}