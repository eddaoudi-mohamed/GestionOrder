import { FormatOrderStatus, getSeverity } from "../../../helpers/StatusFunctions";
import { Order } from "../../../types/order";

interface HistoryOrderCardProps {
  order: Order;
}

const HistoryOrderCard = ({ order }: HistoryOrderCardProps) => {
  const Severity = (order: Order) => {
    switch (order.status) {
      case "pending":
        return ["bg-orange-200", "bg-orange-600"];

      case "paid":
        return ["bg-green-200", "bg-green-600"];

      case "partially_paid":
        return ["bg-blue-200", "bg-blue-600"];

      case "unpaid":
        return ["bg-red-200", "bg-red-600"];

      case "refunded":
        return ["bg-purple-200", "bg-purple-600"];

      case "partially_refunded":
        return ["bg-gray-200", "bg-gray-600"];

      default:
        return ["bg-gray-200", "bg-gray-600"];
    }
  };

  const severityClasses = Severity(order);
  const FormatStatus = FormatOrderStatus(order);

  return (
    <div
      className={`block max-w-[18rem] rounded-lg ${severityClasses[0]} text-meta-4 shadow-secondary-1 mx-auto `}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="flex items-center gap-4 px-6 py-3 text-meta-4 ">
        {order.status === "refunded" ? (
          <span className={`material-symbols-outlined ${getSeverity(order)}`}>currency_exchange</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-pencil ${getSeverity(order)}`}
          >
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            <path d="m15 5 4 4" />
          </svg>)
        }
        <p className="text-xl font-semibold">Header</p>
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">
          Primary card title
        </h5>
        <p className="text-base">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div
          className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full ${severityClasses[1]} text-white mt-4`}
        >
          {FormatStatus}
        </div>
      </div>
    </div>
  );
};

export default HistoryOrderCard;
