  import React from 'react';
  import { Dialog } from 'primereact/dialog';
  import { Button } from 'primereact/button';
  import { Message } from 'primereact/message';
  import { DHFormat } from '../../../helpers/MoneyFormat';
  import { Order } from '../../../types/order';

  interface UpdatePaidProps {
    openPaidDialog: () => void;
    hidePaidDialog: () => void;
    cancelPaidDialog: () => void;
    handlePaid: (e: React.FormEvent<HTMLInputElement>) => void;
    deposit: () => void;
    orderPaidDialog: boolean;
    order: Order;
    setPaidAmount: React.Dispatch<React.SetStateAction<number>>;
  }

  const UpdatePaid: React.FC<UpdatePaidProps> = ({
    openPaidDialog,
    hidePaidDialog,
    cancelPaidDialog,
    handlePaid,
    deposit,
    orderPaidDialog,
    order,
  }) => {

    const PaidDialogFooter = (
      <>
        <Button
          label="Cancel"
          icon="pi pi-times"
          className="max-w-fit text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
          onClick={cancelPaidDialog}
        />
        <Button
          label="Save"
          className="max-w-fit text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
          icon="pi pi-check"
          onClick={deposit}
        />
      </>
    );

    return (
      <>
        <button
          className="text-white p-3 rounded-full bg-meta-5 float-element tooltip-left"
          onClick={openPaidDialog}
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
            className="lucide lucide-credit-card"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
          </svg>
        </button>
      
        <Dialog
          onHide={hidePaidDialog}
          header="Down Payment"
          visible={orderPaidDialog}
          position="right"
          modal
          footer={PaidDialogFooter}
          style={{ width: "50vw" }}
        >
          <Message text={`Old Down Payment : ${DHFormat(order.paid)}`} />
          <div className="mt-4 mb-8 grid gap-4 col">
            <label htmlFor="paid" className="font-bold">Down Payment</label>
            <input
              name="paid"
              type="number"
              required
              className="w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary border-stroke"
              onChange={handlePaid}
            />
          </div>
        </Dialog>
      </>
    );
  }

  export default UpdatePaid;
