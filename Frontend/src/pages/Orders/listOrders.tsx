import { useCallback, useEffect, useRef, useState } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";



import { setClients } from "../../app/Features/ClientSlice";
import { useGetClietsQuery } from "../../app/services/ClientsApiSlice";
import { Button } from "primereact/button";

import "primeicons/primeicons.css";
import {
  useGetOrdersQuery,
  usePrefetch,
  useOrdersSearchQuery,
} from "../../app/services/OrderApiSlice";
import {
  OrderPagination,
  ActionOrderButtons,
  DeleteOrderDialog,
  LeftToolbar,
  TableHeader,
  Breadcrumb,
  EmptyMessage

} from "./components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  setOrders,
  setMetaData,
  setPage,
} from "../../app/Features/OrderSlice";
import { Order } from "../../types/order";
import DefaultLayout from "../../layout/DefaultLayout";
import statusOrderTemplate from "./components/StatusOrderTemplate";
import IdTemplate from "./components/orderIdTemplate";
export default function ListOrders() {
  const toast = useRef<Toast>(null);

  const dt = useRef<DataTable<Order[]>>(null);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const searchOrder = useOrdersSearchQuery(searchQuery, { skip: !searchQuery || searchQuery == "" });

  const dispatch = useAppDispatch();

  const { meta, orders, page } = useAppSelector((state) => state.orders);

  const GetOrders = useGetOrdersQuery(page, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (GetOrders.isSuccess) {
      console.log("GetOrders data => ", GetOrders.data);
      dispatch(setOrders(GetOrders?.data?.data));
      dispatch(setMetaData(GetOrders?.data?.meta));
    }
  }, [GetOrders, dispatch, GetOrders.refetch, page]);

  useEffect(() => {
    if (searchOrder.isSuccess) {
      dispatch(setOrders(searchOrder?.data?.data));
      dispatch(setMetaData(searchOrder?.data?.meta));
    }
  }, [searchOrder, searchOrder.isSuccess]);


  const { data } = useGetClietsQuery({}, {
    refetchOnMountOrArgChange: true
  });

  useEffect(() => {
    if (data) {
      dispatch(setClients(data?.data));
    }
  }, [useGetClietsQuery, data, dispatch]);



  const HandleRefresh = () => {
    GetOrders.refetch();
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      setSearchQuery(e.target.value);
    }else{
      GetOrders.refetch()
    }
  };

  const prefetchPage = usePrefetch("getOrders");

  const PrefetchNext = useCallback(() => {
    dispatch(setPage(page + 1));
  }, [prefetchPage, page]);

  const prefetchPrev = useCallback(() => {
    dispatch(setPage(page - 1));
  }, [prefetchPage, page]);

  const PrefetchPageLink = useCallback(
    (page: number) => {
      prefetchPage(setPage(page));
    },
    [prefetchPage, page]
  );


  const RightToolbar = () => {


    return (
      <Button
        label="Export"
        icon="pi pi-upload"
        className="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 
      hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={() => {
          dt.current?.exportCSV();
        }}
      />
    )
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Orders" />
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
            value={orders}
            dataKey="id"
            header={<TableHeader handleSearch={handleSearch} />}
            loading={
              GetOrders.isLoading ||
              searchOrder.isLoading ||
              GetOrders.isFetching
            }
            loadingIcon="pi pi-spinner"
            emptyMessage={EmptyMessage}
            rows={meta?.per_page}
          >
            <Column selectionMode="multiple" exportable={false}></Column>
            <Column bodyStyle={{ minWidth: "10rem" }} field="id" body={IdTemplate} header="Id" sortable></Column>
            <Column bodyStyle={{ minWidth: "10rem" }} field="client_name" header="Client" sortable></Column>
            <Column bodyStyle={{ minWidth: "10rem" }} field="amount" header="Amount" sortable></Column>
            <Column bodyStyle={{ minWidth: "10rem" }} field="paid" header="Paid" sortable></Column>
            <Column bodyStyle={{ minWidth: "8rem" }}
              field="status"
              header="Status"
              style={{minWidth:"12rem"}}
              body={statusOrderTemplate}
              sortable
            ></Column>
            <Column header="Action" body={ActionOrderButtons} exportable={true}></Column>
          </DataTable>

          {GetOrders.data ? (
            <OrderPagination
              meta={meta}
              HandlePrefetchPrev={prefetchPrev}
              HandlePrefetchNext={PrefetchNext}
              HandlePrefetchPageLink={PrefetchPageLink}
            />
          ) : null}
        </div>
        <DeleteOrderDialog RefreshOrder={HandleRefresh} />
      </div>
    </DefaultLayout>
  );
}
