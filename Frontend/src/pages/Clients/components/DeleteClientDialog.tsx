import { Dialog } from "primereact/dialog"
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { currentClient, hideDeleteClientDialog } from "../../../app/Features/ClientSlice";
import { Fragment } from "react/jsx-runtime";
import { Button } from "primereact/button";
import { useDeleteClientMutation } from "../../../app/services/ClientsApiSlice";
import { useEffect, useRef } from "react";
import { Toast } from "primereact/toast";

const DeleteClientDialog = () => {

    const { client, deleteClientDialog } =
        useAppSelector((state) => state.clients);

    const dispatch = useAppDispatch()

    const [deleteClient, { error, isLoading }] = useDeleteClientMutation()

    useEffect(() => {
        console.log("DeleteClientDialog Error => ", error);
        console.log("DeleteClientDialog isLoading => ", isLoading);

    }, [error, isLoading])

    const toast = useRef<Toast>(null);

    const HandlehideDeleteClientDialog = () => {
        dispatch(hideDeleteClientDialog());
    };

    const HandledeleteClient = () => {
        const id = client?.id;
        deleteClient(id);


        dispatch(hideDeleteClientDialog());
        dispatch(currentClient(null));

        toast.current?.show({
            severity: "success",
            summary: "Successful",
            detail: "Client Deleted Successfully",
            life: 3000,
        });
    };




    const deleteClientDialogFooter = (
        <Fragment>
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
        </Fragment>
    );


    return (
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
    )
}

export default DeleteClientDialog