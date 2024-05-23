import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { DHFormat } from '../../../helpers/MoneyFormat';
import { Order } from '../../../types/order';

interface RefundOrderProps {
  openRefundDialog: () => void;
  hideRefundDialog: () => void;
  cancelRefundDialog: () => void;
  handleRefundingAmount: (e: React.FormEvent<HTMLInputElement>) => void;
  Refund: () => void;
  orderRefundDialog: boolean;
  order: Order;
}

const RefundOrder: React.FC<RefundOrderProps> = ({
  openRefundDialog,
  hideRefundDialog,
  cancelRefundDialog,
  handleRefundingAmount,
  Refund,
  orderRefundDialog,
  order,
}) => {

  const RefundDialogFooter = (
    <>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="max-w-fit text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
        onClick={cancelRefundDialog}
      />
      <Button
        label="Save"
        className="max-w-fit text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
        icon="pi pi-check"
        onClick={Refund}
      />
    </>
  );

  return (
    <>
      <button
        className="text-white p-3 rounded-full bg-meta-8 float-element tooltip-left "
        onClick={openRefundDialog}
      >
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <span className="material-symbols-outlined">currency_exchange</span>
      </button>

      <Dialog
        onHide={hideRefundDialog}
        header="Refund Order"
        visible={orderRefundDialog}
        position="right"
        modal
        footer={RefundDialogFooter}
        style={{ width: "50vw" }}
      >
        <Message text={`The Down Payment : ${DHFormat(order.paid)}`} />
        <div className="mt-4 mb-8 grid gap-4 col">
          <label htmlFor="refundedAmount" className="font-bold">
            Refunded Amount
          </label>
          <input
            name="refundedAmount"
            type="number"
            required
            className="w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary border-stroke"
            onChange={handleRefundingAmount}
          />
        </div>
      </Dialog>
    </>
  );
}

export default RefundOrder;
