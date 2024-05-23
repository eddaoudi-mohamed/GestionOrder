import React from "react";
import { FormatOrderStatus } from "../../../helpers/StatusFunctions";
import { Order } from "../../../types/order";
import { formatDateTime } from "../../../helpers/DateFormat";

interface Props {
    order: Order;
}

const OrderDetails: React.FC<Props> = ({ order }) => {
    return (
      <>
        <div className="flex flex-col justify-between items-center w-full mt-4 px-2">
          <div>
            <h3 className="text-xl dark:text-white font-semibold text-black mb-10">
              Order Details
            </h3>
          </div>

          <div className="flex justify-between dark:text-white border-t border-slate-400 py-4 px-4 w-full">

            <p className="text-black font-semibold">Status</p>
            <p className="text-meta-5 cursor-pointer text-sm ">
              {FormatOrderStatus(order)}
            </p>
          </div>


          <div className="flex justify-between dark:text-white border-t border-slate-400 py-4 px-4 w-full">
            <p className="text-black font-semibold">Date</p>
            <p className="text-meta-5 cursor-pointer text-sm ">
              {formatDateTime(order.created_at)}
            </p>
          </div>
        </div>
      </>
    );
};

export default OrderDetails;
