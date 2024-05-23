import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Client } from "../../../types/client";
import { Order } from "../../../types/order";

interface DeleteOrderMenuProps {
  openDeleteDialog: () => void;
  hideDeleteDialog: () => void;
  cancelDeleteDialog: () => void;
  confirmDelete: () => void;
  deleteOrderDialog: boolean;
  order: Order;
  client: Client;
}

function DeleteOrderMenu({
  openDeleteDialog,
  hideDeleteDialog,
  cancelDeleteDialog,
  confirmDelete,
  deleteOrderDialog,
  order,
  client
} : DeleteOrderMenuProps) {

  const deleteDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="max-w-fit text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
        onClick={cancelDeleteDialog}
      />
      <Button
        label="Yes"
        className="max-w-fit text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
        icon="pi pi-check"
        onClick={confirmDelete}
      />
    </>
  );

  return (
    <>
      <button
        className="text-white p-3 rounded-full bg-danger float-element tooltip-left"
        onClick={openDeleteDialog}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-package-x"
        >
          <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
          <path d="m7.5 4.27 9 5.15" />
          <polyline points="3.29 7 12 12 20.71 7" />
          <line x1="12" x2="12" y1="22" y2="12" />
          <path d="m17 13 5 5m-5 0 5-5" />
        </svg>
      </button>

      <Dialog
        onHide={hideDeleteDialog}
        header="Delete Order"
        visible={deleteOrderDialog}
        position="right"
        modal
        footer={deleteDialogFooter}
        style={{ width: "50vw" }}
      >
        <div className="confirmation-content capitalize">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {order && (
            <span>
              Are you sure you want to delete order <b>{order.id}</b> of user{" "}
              <b>{client.name}</b>?
            </span>
          )}
        </div>
      </Dialog>
    </>
  );
}

export default DeleteOrderMenu;
