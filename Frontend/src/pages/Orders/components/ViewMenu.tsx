import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  openDeleteOrderDialog,
  hideDeleteOrderDialog,
  openPaidDialog,
  hidePaidDailog,
  setPaid,
  openRefundDialog,
  hideRefundDialog,
  setRefunde,
  updateState,
} from "../../../app/Features/OrderSlice";
import { Toast } from "primereact/toast";
import DeleteOrderMenu from "./DeleteOrderMenu";
import UpdatePaid from "./UpdatePaid";
import RefundOrder from "./Refund";
import {
  useDeleteOrderMutation,
  usePaidMutation,
  useRefundMutation,
} from "../../../app/services/OrderApiSlice";
import "./../../../css/FloatingButton.css";

export default function ViewMenu() {
  const dispatch = useAppDispatch();
  const { order, deleteOrderDialog, orderPaidDialog, orderRefundDialog } = useAppSelector(
    (state) => state.orders
  );
  const { client } = useAppSelector((state) => state.clients);

  const [DeleteOrder] = useDeleteOrderMutation();
  const [Paid] = usePaidMutation();
  const [Refund] = useRefundMutation();
  const OrderItemToast = useRef<Toast>(null);
  const MenuToast = useRef<Toast>(null);

  const [paid, setPaidAmount] = useState<number>(0);
  const [refundedAmount, setRefundedAmount] = useState<number>(0);

  // DELETE ORDER FUNCTIONS
  const openDeleteDialog = () => {
    dispatch(openDeleteOrderDialog());
  };

  const hideDeleteDialog = () => {
    dispatch(hideDeleteOrderDialog());
  };

  const cancelDeleteDialog = () => {
    dispatch(hideDeleteOrderDialog());
  };

  const confirmDelete = async () => {
    try {
      const id = order.id;
      console.log("the Order Id => ", order);

      const { data } = await DeleteOrder(id).unwrap();
      console.log("the returned data => ", data);
      OrderItemToast.current?.show({
        severity: "error",
        summary: "Error",
        detail: `${data.message}`,
        life: 3000,
      });
    } catch (error: any) {
      if (error.status === 400) {
        OrderItemToast.current?.show({
          severity: "error",
          summary: "Error",
          detail: `${error.data.data.messages}`,
          life: 3000,
        });
      }
      console.log("the Error => ", error.status);
    }

    hideDeleteDialog();
  };

  // END DELETE ORDER FUNCTIONS

  // UPDATE PAID FUNCTIONS
  const handleOpenPaidDialog = () => {
    dispatch(openPaidDialog());
  };

  const handleHidePaidDialog = () => {
    dispatch(hidePaidDailog());
  };

  const cancelPaidDialog = () => {
    setPaidAmount(0);
    dispatch(hidePaidDailog());
  };

  const handlePaid = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget ? Number(e.currentTarget.value) : 0;
    setPaidAmount(val);
  };

  const deposit = async () => {
    try {
      const { data } = await Paid({ id: order.id, paid }).unwrap();
      console.log("the returned data => ", data);
      MenuToast.current?.show({
        severity: "success",
        summary: "Successfully",
        detail: `${data.messages}`,
        life: 3000,
      });

      dispatch(setPaid(paid));
      
    } catch (error: any) {
      MenuToast.current?.show({
        severity: "error",
        summary: "Error",
        detail: `${error.data.data.messages}`,
        life: 3000,
      });
      console.log("the Error => ", error);
    }
    handleHidePaidDialog();
  };

  // END UPDATE PAID FUNCTIONS


  // REFUND FUNCTIONS
  const handleOpenRefundDialog = () => {
    dispatch(openRefundDialog());
  };

  const handleHideRefundDialog = () => {
    dispatch(hideRefundDialog());
  };

  const cancelRefundDialog = () => {
    setRefundedAmount(0);
    dispatch(hideRefundDialog());
  };

  const handleRefundingAmount = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget ? Number(e.currentTarget.value) : 0;
    setRefundedAmount(val);
  };

  const handleRefund = async () => {
    try {
      const { data } = await Refund({
        id: order.id,
        refund: refundedAmount,
      }).unwrap();

      console.log("the returned data => ", data.message);
      OrderItemToast.current?.show({
        severity: "success",
        summary: "Success",
        detail: `${data.message}`,
        life: 3000,
      });

      dispatch(setRefunde(refundedAmount));
      dispatch(updateState("refunded"))

    } catch (error: any) {
      if (error.status == 400) {
        OrderItemToast.current?.show({
          severity: "error",
          summary: "Error",
          detail: `${error.data.data.messages }`,
          life: 3000,
        });
      }

      console.log("the Error => ", error);
    }
    
    handleHideRefundDialog();
  };

  // END REFUND FUNCTIONS

  return (
    <div className="flex gap-0">
      <Toast ref={OrderItemToast} />

       <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
            />
      <div className="flex items-center"></div>

      <div className="floating-container">
        <div className="floating-button text-white rounded-full bg-primary ">
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
            className="lucide lucide-bolt"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </div>

        <div className="element-container">

        {order.status !== "paid" && order.status !== "refunded"  ? (
              <button className="text-white p-3 rounded-full bg-meta-3 float-element tooltip-left ">
              <span className="material-symbols-outlined">box_edit</span>
            </button>
            
          ) : (
            ""
          )}

        


          <DeleteOrderMenu
            openDeleteDialog={openDeleteDialog}
            hideDeleteDialog={hideDeleteDialog}
            cancelDeleteDialog={cancelDeleteDialog}
            confirmDelete={confirmDelete}
            deleteOrderDialog={deleteOrderDialog}
            order={order}
            client={client}
          />


          {order.status !== "paid" && order.status !== "refunded"  ? (
            <UpdatePaid
              openPaidDialog={handleOpenPaidDialog}
              hidePaidDialog={handleHidePaidDialog}
              cancelPaidDialog={cancelPaidDialog}
              handlePaid={handlePaid}
              deposit={deposit}
              orderPaidDialog={orderPaidDialog}
              order={order}
              setPaidAmount={setPaidAmount}
            />
          ) : (
            ""
          )}

          {order.status !== "paid" && order.status !== "refunded"  ? (
            <RefundOrder
              openRefundDialog={handleOpenRefundDialog}
              hideRefundDialog={handleHideRefundDialog}
              cancelRefundDialog={cancelRefundDialog}
              handleRefundingAmount={handleRefundingAmount}
              Refund={handleRefund}
              orderRefundDialog={orderRefundDialog}
              order={order}
            />
          ) : (
            ""
          )}
        </div>
      </div>

    </div>
  );
}
