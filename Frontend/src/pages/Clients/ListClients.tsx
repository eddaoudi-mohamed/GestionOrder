import { useCallback, useEffect, useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import "primeicons/primeicons.css";
import { Client } from "../../types/client";
import {
  useGetClietsQuery,
  usePrefetch,
  useSearchQuery,
} from "../../app/services/ClientsApiSlice";
import {
  ClientDialog,
  TableHeader,
  DeleteClientDialog,
  ActionClientButtons,
  LeftToolbar,
  ClientPagination,
} from "./components/index";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  setClients,
  setMetaData,
  setPage,
} from "../../app/Features/ClientSlice";
import { Button } from "primereact/button";

export default function ListClients() {
  const toast = useRef<Toast>(null);

  const dt = useRef<DataTable<Client[]>>(null);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const searchedClient = useSearchQuery(searchQuery);

  const dispatch = useAppDispatch();

  const { meta, clients, page } = useAppSelector((state) => state.clients);

  const GetClients = useGetClietsQuery(page, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (GetClients) {
      console.log("GetClients data => ", GetClients.data);
      dispatch(setClients(GetClients?.data?.data));
      dispatch(setMetaData(GetClients?.data?.meta));
    }
  }, [GetClients, dispatch, GetClients.refetch, page]);

  useEffect(() => {
    if (searchedClient.isSuccess) {
      dispatch(setClients(searchedClient?.data?.data));
      dispatch(setMetaData(searchedClient?.data?.meta));
    }
  }, [searchedClient, searchedClient.isSuccess]);

  const HandleRefresh = () => {
    GetClients.refetch();
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const Query = e.target.value
    setSearchQuery(Query);
  };

  const prefetchPage = usePrefetch("getCliets");

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
        className="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={() => {
          dt.current?.exportCSV();
        }}
      />
    );
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Clients" />

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
            value={clients}
            dataKey="id"
            header={<TableHeader handleSearch={handleSearch} />}
            loading={
              GetClients.isLoading ||
              searchedClient.isLoading ||
              GetClients.isFetching
            }
            loadingIcon="pi pi-spinner"
            emptyMessage="There's no Clients To Manage In The Current State "
            rows={meta?.per_page}
          >
            <Column selectionMode="multiple" exportable={false}></Column>
            <Column field="name" header="Name" sortable></Column>
            <Column field="email" header="Email" sortable></Column>
            <Column field="phone" header="Phone" sortable></Column>
            <Column body={ActionClientButtons} exportable={true}></Column>
          </DataTable>

          {GetClients.data ? (
            <ClientPagination
              meta={meta}
              HandlePrefetchPrev={prefetchPrev}
              HandlePrefetchNext={PrefetchNext}
              HandlePrefetchPageLink={PrefetchPageLink}
            />
          ) : null}
        </div>

        <ClientDialog RefreshClient={HandleRefresh} />
        <DeleteClientDialog />
      </div>
    </DefaultLayout>
  );
}
