import { useCallback, useEffect, useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import "primeicons/primeicons.css";
import {
  useGetProductsQuery,
  usePrefetch,
  useSearchQuery,
} from "../../app/services/ProductsApiSlice";
import {
  ProductsDialog,
  ProductsPagination,
  ActionProductButtons,
  DeleteProductDialog,
  LeftToolbar,
  TableHeader,
} from "./components/index";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  setProducts,
  setMetaData,
  setPage,
} from "../../app/Features/ProductSlice";
import { Product } from "../../types/product";
import { Tag } from "primereact/tag";
import { setCategories } from "../../app/Features/CategorySlice";
import { useGetCategoriesQuery } from "../../app/services/CategoryApiSlice";
import { Button } from "primereact/button";

export default function ListProducts() {
  const toast = useRef<Toast>(null);

  const dt = useRef<DataTable<Product[]>>(null);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const searchProduct = useSearchQuery(searchQuery);

  const dispatch = useAppDispatch();

  const { meta, products, page } = useAppSelector((state) => state.products);

  const GetProducts = useGetProductsQuery(page, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (GetProducts.isSuccess) {
      console.log("GetProducts data => ", GetProducts.data);
      dispatch(setProducts(GetProducts?.data?.data));
      dispatch(setMetaData(GetProducts?.data?.meta));
    }
  }, [GetProducts, dispatch, GetProducts.refetch, page]);

  useEffect(() => {
    if (searchProduct.isSuccess) {
      dispatch(setProducts(searchProduct?.data?.data));
      dispatch(setMetaData(searchProduct?.data?.meta));
    }
  }, [searchProduct, searchProduct.isSuccess]);


  const { data } = useGetCategoriesQuery({}, {
    refetchOnMountOrArgChange: true
  });

  useEffect(() => {
    if (data) {
      dispatch(setCategories(data?.data));
    }
  }, [useGetCategoriesQuery, data, dispatch]);



  const HandleRefresh = () => {
    GetProducts.refetch();
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const prefetchPage = usePrefetch("getProducts");

  const PrefetchNext = useCallback(() => {
    dispatch(setPage(page + 1));
  }, [prefetchPage, page ]);

  const prefetchPrev = useCallback(() => {
    dispatch(setPage(page - 1));
  }, [prefetchPage, page ]);

  const PrefetchPageLink = useCallback(
    (page: number) => {
      prefetchPage(setPage(page));
    },
    [prefetchPage, page ]
  );

  const imageProductTemplate = (rowData: Product) => {
    const Image = rowData.image
    if (Image) {
      
    }
    return (
      <img
        src={`${rowData.image}`}
        alt={`Image-${rowData.name}`}
        className="shadow-2 border-round"
        style={{ width: "64px" }}
      />
    );
  };

  const getSeverity = (product: Product) => {
    switch (product.status) {
      case "available":
        return "success";

      case "unavailable":
        return "danger";
      default:
        return null;
    }
  };

  const statusProductTemplate = (rowData: Product) => {
    const severity = getSeverity(rowData);
    return <Tag value={rowData.status} severity={severity} />;
  };


  const RightToolbar = () => {

    
    return (
      <Button
      label="Export"
      icon="pi pi-upload"
      className="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 
      hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      onClick={()=>{
      dt.current?.exportCSV();
      }}
    />
    )
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Products" />
      <div>
        <Toast ref={toast} />
        <div className="card">
          <Toolbar
            className="mb-4"
            left={LeftToolbar}
            right={<RightToolbar />}
          ></Toolbar>

          <DataTable
            className="dark:bg-boxdark-2 dark:text-bodydark"
            ref={dt}
            value={products}
            dataKey="id"
            header={<TableHeader handleSearch={handleSearch} />}
            loading={
              GetProducts.isLoading ||
              searchProduct.isLoading ||
              GetProducts.isFetching
            }
            loadingIcon="pi pi-spinner"
            emptyMessage="There's no Products To Manage In The Current State "
            rows={meta?.per_page}
          >
            <Column selectionMode="multiple" exportable={false}></Column>
            <Column bodyStyle={{minWidth:"10rem"}} field="image" header="Image" body={imageProductTemplate} ></Column>
            <Column bodyStyle={{minWidth:"10rem"}} field="name" header="Name" sortable></Column>
            <Column bodyStyle={{minWidth:"10rem"}} field="category" header="Category" sortable></Column>
            <Column bodyStyle={{minWidth:"10rem"}} field="price" header="Price" sortable></Column>
            <Column bodyStyle={{minWidth:"8rem"}}
              field="status"
              header="Status"
              body={statusProductTemplate}
              sortable
            ></Column>
            <Column bodyStyle={{minWidth:"10rem"}} body={ActionProductButtons} exportable={true}></Column>
          </DataTable>

          {GetProducts.data ? (
            <ProductsPagination
              meta={meta}
              HandlePrefetchPrev={prefetchPrev}
              HandlePrefetchNext={PrefetchNext}
              HandlePrefetchPageLink={PrefetchPageLink}
            />
          ) : null}
        </div>

        <ProductsDialog RefreshProduct={HandleRefresh} />
        <DeleteProductDialog RefreshProduct={HandleRefresh} />
      </div>
    </DefaultLayout>
  );
}
