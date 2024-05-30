import { useEffect, useRef, useState } from "react";
import { useGetClietQuery } from "../../../app/services/ClientsApiSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { handleClientDetailsDialog } from "../../../app/Features/ClientSlice";
import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { formatDateTime } from "../../../helpers/DateFormat";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import statusOrderTemplate from "../../Orders/components/StatusOrderTemplate";
import IdTemplate from "../../Orders/components/orderIdTemplate";
import { DHFormat } from "../../../helpers/MoneyFormat";
import { Button } from "primereact/button";
import { currentCategory } from "../../../app/Features/CategorySlice";
import { emptyClient } from "../../../types/client";

const ShowClientDailog = () => {
  const dispatch = useAppDispatch();

  const { client, ClientDetailsDialog } = useAppSelector(
    (state) => state.clients
  );
  const [Clientid, setClientid] = useState(client.id)

  const { data, isSuccess, isLoading, isFetching } = useGetClietQuery(Clientid);

  // const [clientDetails, setclientDetails] = useState<any>();
  const [clientOrders, setclientOrders] = useState<any>();
  const dt = useRef<DataTable<any[]>>(null);

  useEffect(() => {
    if (isSuccess) {
      const { name, created_at, email, phone, orders } = data.data;

      // setclientDetails(data.data);
      setclientOrders(orders);
      console.log("fetchedOrderData => ", {
        name,
        created_at,
        email,
        phone,
        orders,
      });
    }
  }, [isSuccess, dispatch]);

  const HandlehideDetailsDialog = () => {
    dispatch(handleClientDetailsDialog(false));
    dispatch(currentCategory(emptyClient));
  };

  const AmountTemplate = (rowData: any) => {
    return DHFormat(rowData.amount);
  };

  const PaidTemplate = (rowData: any) => {
    return DHFormat(rowData.paid);
  };

  return (
    <>
      <Dialog
        visible={ClientDetailsDialog}
        style={{ width: "52rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        onHide={HandlehideDetailsDialog}
        maximizable
        footer={
          <div className="flex justify-end gap-4.5 mt-8">
            <Button
              label="return"
              icon="pi pi-times"
              className="max-w-fit text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
              onClick={HandlehideDetailsDialog}
            />
          </div>
        }
      >
        <h2 className="text-3xl font-bold mb-4 text-meta-4">
          Client Infomation :
        </h2>
        <Card className="my-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar icon="pi pi-user" shape="circle" size="xlarge" />
              <div>
                <h5 className="font-semibold">Full Name</h5>
                <p className="text-3xl font-bold capitalize">{client?.name}</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold">Register Date</h5>
              <p className="text-xl font-bold text-meta-4  capitalize">
                {formatDateTime(client?.created_at)}
              </p>
            </div>
          </div>
          <p className="text-3xl font-semibold text-primary my-4">Contact :</p>
          <div className="flex justify-evenly ">
            <div>
              <h5 className="font-semibold capitalize">email</h5>
              <p className="text-xl font-bold text-meta-4 ">{client?.email}</p>
            </div>

            <div>
              <h5 className="font-semibold capitalize">Phone</h5>
              <p className="text-xl font-bold text-meta-4 ">{client?.phone}</p>
            </div>
          </div>
        </Card>
        <DataTable
          ref={dt}
          value={clientOrders}
          header={
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-3xl font-bold my-4 text-meta-4">
                Client Order History :
              </h2>
            </div>
          }
          stripedRows
          dataKey="id"
          loading={isLoading || isFetching}
          loadingIcon="pi pi-spinner"
          emptyMessage={
            <div className="flex items-center  justify-center border border-gray-500 w-full max-w-full p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow space-x">
              <div className="text-lg font-bold capitalize">
                the current client had not place any orders .
              </div>
            </div>
          }
        >
          <Column exportable={false}></Column>
          <Column
            className="text-center font-bold text-xl"
            field="id"
            header="ID"
            body={IdTemplate}
            sortable
          ></Column>
          <Column
            className="text-center font-semibold"
            field="amount"
            header="Amount"
            body={AmountTemplate}
            sortable
          ></Column>
          <Column
            className="text-center font-semibold"
            field="paid"
            header="Down Payment"
            body={PaidTemplate}
            sortable
          ></Column>
          <Column
            className="text-center font-semibold"
            field="status"
            header="Status"
            body={statusOrderTemplate}
            sortable
          ></Column>
        </DataTable>
      </Dialog>
    </>
  );
};

export default ShowClientDailog;
