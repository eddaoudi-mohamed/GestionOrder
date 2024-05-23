import { Order } from "../types/order";

export const getSeverity = (order: Order) => {
  switch (order.status) {
    case "pending":
      return "bg-orange-200 text-orange-700";

    case "paid":
      return "bg-green-200 text-green-700";

    case "partially_paid":
      return "bg-blue-200 text-blue-700";

    case "unpaid":
      return "bg-red-200 text-red-700";

    case "refunded":
      return "bg-purple-200 text-purple-700";

    case "partially_refunded":
      return "bg-gray-200 text-gray-700";

    default:
      return null;
  }
};

export const FormatOrderStatus = (order: Order) => {
  switch (order.status) {
    case "pending":
      return "Pending";

    case "paid":
      return "Paid";

    case "partially_paid":
      return "Partially Paid";

    case "unpaid":
      return "Unpaid";

    case "refunded":
      return "Refunded";

    case "partially_refunded":
      return "Partially Refunded";

    default:
      return null;
  }
};
