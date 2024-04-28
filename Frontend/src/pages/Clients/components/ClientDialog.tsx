import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  currentClient,
  hideClientDialog,
} from "../../../app/Features/ClientSlice";
import { Fragment, useState } from "react";
import { Button } from "primereact/button";
import { useAddClientMutation, useUpdateClientMutation } from "../../../app/services/ClientsApiSlice";

const ClientDialog = () => {

  const [updateClient ,{error: UpdateClientError ,isLoading:UpdateClientisLoading}] = useUpdateClientMutation()

  const [addClient ,{error: AddClientError ,isLoading : AddClientisLoading}] = useAddClientMutation()

  const [ClientError, setClientError] = useState({
    name: false,
    email: false,
    phone: false,
  })
  const { client, clientDialog, actionType } = useAppSelector((state) => state.clients);

  const dispatch = useAppDispatch();

  const HandlehideDialog = () => {
    dispatch(hideClientDialog());
  };

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const val = (e.target && e.target.value) || "";
    let _client = { ...client };

    // @ts-ignore
    _client[name] = val;

    dispatch(currentClient(_client));
  };

  const HandleSubmit = () => { 

    if (actionType === "add" && client?.name && client.email && client.phone) {
      addClient(client);
      console.log("Add Client isLoading => ", AddClientisLoading);
      console.log("Add Client Error => ", AddClientError);
      dispatch(currentClient(null));
      dispatch(hideClientDialog());


    } else if (actionType === "edit") {
      updateClient(client);
      console.log("Add Client isLoading => ", UpdateClientisLoading);
      console.log("Add Client Error => ", UpdateClientError);
      dispatch(currentClient(null));
      dispatch(hideClientDialog());
      
    }
    
  };

  const clientDialogFooter = (
    <Fragment>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
        onClick={HandlehideDialog}
      />
      <Button
        label="Save"
        className="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
        icon="pi pi-check"
        onClick={HandleSubmit}
      />
    </Fragment>
  );

  return (
    <Dialog
      visible={clientDialog}
      style={{ width: "32rem" }}
      breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      header="Client Details"
      modal
      className="p-fluid"
      footer={clientDialogFooter}
      onHide={HandlehideDialog}
    >
      <div className="field">
        <label htmlFor="name" className="font-bold">
          Name
        </label>

        <InputText
          id="name"
          onChange={(e) => onInputChange(e, "name")}
          required
          autoFocus
          className={`
                      w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary
                      ${ClientError.name && "border-danger"}`}
        />
        {ClientError.name && <small className="p-error">Name is required.</small>}
      </div>

      <div className="field">
        <label htmlFor="email" className="font-bold">
          Email
        </label>

        <InputText
          id="email"
          type="email"
          onChange={(e) => onInputChange(e, "email")}
          required
          className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary 
                      ${ClientError.email && "border-danger"}`}
        />
        {ClientError.email && (
          <small className="p-error">Email is required.</small>
        )}
      </div>

      <div className="field">
        <label htmlFor="phone" className="font-bold">
          Phone
        </label>
        <InputText
          id="phone"
          type="number"
          onChange={(e) => onInputChange(e, "phone")}
          required
          className={`
        w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary
         ${ClientError.phone && "border-danger"}`}
        />
        {ClientError.phone && (
          <small className="p-error">Phone is required.</small>
        )}
      </div>
    </Dialog>
  );
};

export default ClientDialog;
