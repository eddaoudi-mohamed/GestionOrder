import { Dialog } from "primereact/dialog";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Button } from "primereact/button";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import {
  currentOrder,
  hideDeleteOrderDialog
} from "../../../app/Features/OrderSlice";
import { useDeleteOrderMutation } from "../../../app/services/OrderApiSlice";
import { emptyOrder } from "../../../types/order";

interface refetchInter {
  RefreshOrder: () => void;
}

const DeleteOrderDialog = ({ RefreshOrder }: refetchInter) => {
  const DeleteToast = useRef<Toast>(null);

  const { order, deleteOrderDialog } = useAppSelector(
    (state) => state.orders
  );

  const dispatch = useAppDispatch();

  const [deleteOrder, {}] = useDeleteOrderMutation();

  const HandlehideDeleteOrderDialog = () => {
    dispatch(hideDeleteOrderDialog());
  };

  const HandledeleteOrder = () => {
    const id = order?.id;

    console.log("the Deleted Order => ", order);

    deleteOrder(id);

    RefreshOrder();

    dispatch(hideDeleteOrderDialog());
    dispatch(currentOrder(emptyOrder));

    DeleteToast.current?.show({
      severity: "success",
      summary: "Successful",
      detail: "Order Deleted Successfully",
      life: 3000,
    });
  };

  const deleteOrderDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal
         uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
        onClick={HandlehideDeleteOrderDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal
         uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
        onClick={HandledeleteOrder}
      />
    </>
  );

  return (
    <>
      <Toast ref={DeleteToast} />
      <Dialog
        visible={deleteOrderDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
        modal
        footer={deleteOrderDialogFooter}
        onHide={HandlehideDeleteOrderDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {order && (
            <span>
              Are you sure you want to delete this Order
              {/* <b>{order.name}</b>? */}
            
            </span>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default DeleteOrderDialog;
