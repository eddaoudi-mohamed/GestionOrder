import { useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import "primeicons/primeicons.css";
import { useGetCategoriesQuery } from "../../app/services/CategoryApiSlice";
import {
  LeftToolbar,
  TableHeader,
  ActionCategoryButtons,
  CategoryDialog,
  DeleteCategoryDialog,
} from "./components/index";
import { Category } from "../../types/category";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCategories } from "../../app/Features/CategorySlice";
import { Button } from "primereact/button";
import EmptyMessage from "./components/EmptyMessage";

export default function ListCategory() {
  const { categories } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  const { data, isLoading, refetch } = useGetCategoriesQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    if (data) {
      dispatch(setCategories(data?.data));
    }
  }, [useGetCategoriesQuery, data, dispatch]);

  const RefetchCateroy = () => {
    refetch();
  };

  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<Category[]>>(null);

  const RightToolbar = () => {
    return (
      <Button
        label="Export"
        icon="pi pi-upload"
        className="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={() => {
          dt.current?.exportCSV();
        }}
      />
    );
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Categories" />
      <div>
        <Toast ref={toast} />
        <div className="card">
          <Toolbar
            className="mb-4"
            left={LeftToolbar}
            right={RightToolbar}
          ></Toolbar>
          <DataTable
            className="dark:bg-boxdark-2 dark:text-bodydark "
            ref={dt}
            value={categories}
            removableSort
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25, 50]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            emptyMessage={EmptyMessage}
            header={TableHeader}
            loading={isLoading}
          >
            <Column exportable={false}></Column>
            <Column
              headerStyle={{ textAlign: "center" }}
              field="name"
              header="Name"
              sortable
            ></Column>
            <Column
            style={{maxWidth:"10rem"}}
              headerStyle={{ textAlign: "center" }}
              field="description"
              header="Description"
              sortable
            ></Column>
            <Column
              headerStyle={{ textAlign: "center" }}
              header="Actions"
              body={ActionCategoryButtons}
              exportable={false}
            ></Column>
          </DataTable>
        </div>
        <CategoryDialog RefetchCateroy={RefetchCateroy} />
        <DeleteCategoryDialog RefetchCateroy={RefetchCateroy} />
      </div>
    </DefaultLayout>
  );
}
