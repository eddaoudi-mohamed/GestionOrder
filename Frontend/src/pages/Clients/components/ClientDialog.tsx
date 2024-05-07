import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  currentClient,
  hideClientDialog,
  setPage,
} from "../../../app/Features/ClientSlice";
import { useRef, useState } from "react";
import { Button } from "primereact/button";
import {
  useAddClientMutation,
  useUpdateClientMutation,
} from "../../../app/services/ClientsApiSlice";
import { Toast } from "primereact/toast";
import { Message } from "primereact/message";

interface refetchInter {
  RefreshClient: () => void;
}

const ClientDialog = ({ RefreshClient }: refetchInter) => {
  const ActionToast = useRef<Toast>(null);

  const [
    updateClient
  ] = useUpdateClientMutation();

  const [addClient, {}] = useAddClientMutation();

  const [ClientError, setClientError] = useState({
    name: false,
    email: false,
    phone: false,
  });
  const { client, clientDialog, actionType } = useAppSelector(
    (state: { clients: any }) => state.clients
  );

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

    // Reset the corresponding error flag to false
    setClientError((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));

    dispatch(currentClient(_client));
  };

  const HandleAddClient = async () => {
    try {
      await addClient(client).unwrap();


      dispatch(setPage(1))

      
      dispatch(hideClientDialog());
      
      ActionToast.current?.show({
        severity: "success",
        summary: "Successfully",
        detail: "The Client Created Successfully",
        life: 3000,
      });
    } catch (error: any) {
      if (error.status === 400 && error.data.data && error.data.data.messages) {
        // Extract error messages for each field
        const errorMessages = error.data.data.messages;

        // Set error flags for each field
        setClientError({
          name: errorMessages.name ? true : false,
          email: errorMessages.email ? true : false,
          phone: errorMessages.phone ? true : false,
        });
        // Show error toast for each error condition
        if (errorMessages.name) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.name[0],
            life: 3000,
          });
        } else if (errorMessages.email) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.email[0],
            life: 3000,
          });
        } else if (errorMessages.phone) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.phone[0],
            life: 3000,
          });
        } else {
          // Show generic error toast
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: "An error occurred. Please try again later.",
            life: 3000,
          });
        }
      }
    }
  };

  const HandleUpdateClient = async () => {
    try {
      
      await updateClient({ client }).unwrap();

      dispatch(setPage(1))

      dispatch(hideClientDialog());
      ActionToast.current?.show({
        severity: "success",
        summary: "Successfully",
        detail: "The Client Updated Successfully",
        life: 3000,
      });
      RefreshClient();
    } catch (error: any) {
      console.log("Catch Add Client Error  => ", error);

      if (error.status === 400 && error.data.data && error.data.data.messages) {
        // Extract error messages for each field
        const errorMessages = error.data.data.messages;

        // Set error flags for each field
        setClientError({
          name: errorMessages.name ? true : false,
          email: errorMessages.email ? true : false,
          phone: errorMessages.phone ? true : false,
        });

        // Show error toast for each error condition
        if (errorMessages.name) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.name[0],
            life: 3000,
          });
        } else if (errorMessages.email) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.email[0],
            life: 3000,
          });
        } else if (errorMessages.phone) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.phone[0],
            life: 3000,
          });
        } else {
          // Show generic error toast
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: "An error occurred. Please try again later.",
            life: 3000,
          });
        }
      }
    }
  };
  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (actionType === "add") {
      HandleAddClient();
    } else if (actionType === "edit") {
      HandleUpdateClient();
    }
  };

  return (
    <>
      <Toast ref={ActionToast} />
      <Dialog
        visible={clientDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Client Details"
        modal
        className="p-fluid"
        onHide={HandlehideDialog}
      >
        <form onSubmit={HandleSubmit} className="flex flex-col gap-4">
          <div className="field">
            <label htmlFor="name" className="font-bold">
              Name
            </label>

            <InputText
              id="name"
              value={client?.name}
              onChange={(e) => onInputChange(e, "name")}
              required
              autoFocus
              className={`
          w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${ClientError.name ? "border-danger" : "border-stroke"}`}
            />
            {ClientError.name && (
              <Message
                className="my-4"
                severity="error"
                text="Name is required."
              />
            )}
          </div>

          <div className="field">
            <label htmlFor="email" className="font-bold">
              Email
            </label>

            <InputText
              id="email"
              value={client?.email}
              type="email"
              onChange={(e) => onInputChange(e, "email")}
              required
              className={`w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${ClientError.email ? "border-danger" : "border-stroke"}`}
            />
            {ClientError.email && (
              <Message
                className="my-4"
                severity="error"
                text="Email is required."
              />
            )}
          </div>

          <div className="field">
            <label htmlFor="phone" className="font-bold">
              Phone
            </label>
            <InputText
              id="phone"
              value={client?.phone}
              onChange={(e) => onInputChange(e, "phone")}
              required
              className={`
        w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary
         ${ClientError.phone ? "border-danger" : "border-stroke"}`}
            />
            {ClientError.phone && (
              <Message
                className="my-4"
                severity="error"
                text="Phone is required."
              />
            )}
          </div>

          <div className="flex justify-end gap-4.5 mt-8">
            <Button
              label="Cancel"
              icon="pi pi-times"
              className="max-w-fit text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
              onClick={HandlehideDialog}
            />
            <Button
              type="submit"
              label="Save"
              className="max-w-fit text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
              icon="pi pi-check"
            />
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default ClientDialog;
