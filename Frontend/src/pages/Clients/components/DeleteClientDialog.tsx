import { Dialog } from "primereact/dialog"
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { currentClient, hideDeleteClientDialog } from "../../../app/Features/ClientSlice";
import { Button } from "primereact/button";
import { useDeleteClientMutation, useGetClietsQuery } from "../../../app/services/ClientsApiSlice";
import { useRef } from "react";
import { Toast } from "primereact/toast";

const DeleteClientDialog = () => {

    const DeleteToast = useRef<Toast>(null);

    const GetClients = useGetClietsQuery(1, {
      refetchOnMountOrArgChange: true,
    });

    const { client, deleteClientDialog } = useAppSelector(
      (state) => state.clients
    );

    const dispatch = useAppDispatch();

    const [deleteClient, {}] = useDeleteClientMutation();

    const HandlehideDeleteClientDialog = () => {
      dispatch(hideDeleteClientDialog());
    };

    const HandledeleteClient =  async () => {
        try {
            const id = client?.id;
            await deleteClient(id);

            GetClients.refetch();

            dispatch(hideDeleteClientDialog());
            dispatch(currentClient(null));

            DeleteToast.current?.show({
                severity: "success",
                summary: "Successful",
                detail: "Client Deleted Successfully",
                life: 3000,
            });
        } catch (error: any) {
            if (error.status == 400) {
                DeleteToast.current?.show({
                    severity: "success",
                    summary: "Successful",
                    detail: error.data.message,
                    life: 3000,
                });
            }
        }


    };

    const deleteClientDialogFooter = (
        <>
            <Button
                label="No"
                icon="pi pi-times"
                className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
                onClick={HandlehideDeleteClientDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                className="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                onClick={HandledeleteClient}
            />
        </>
    );


    return (
        <>
        <Toast ref={DeleteToast} />  
            <Dialog
                visible={deleteClientDialog}
                style={{ width: "32rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                footer={deleteClientDialogFooter}
                onHide={HandlehideDeleteClientDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                    {client && (
                        <span>
                            Are you sure you want to delete <b>{client.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>
        </>
    )
}

export default DeleteClientDialog