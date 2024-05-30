import { getHistorySeverity } from "../../../helpers/HistoryActionType";
import { DHFormat } from "../../../helpers/MoneyFormat";
import { History } from "../../../types/history";

interface HistoryCardBodyProps {
  history: History;
}

const HistoryProductCardBody= ({ history }: HistoryCardBodyProps) => {
  switch (history.action_type) {
    case "created":
      return (
        <div className="">
          <h3
            className={`flex gap-2 text-center font-semibold capitalize ${getHistorySeverity(history.action_type)}`}
          >
            Create
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-package-plus"
              >
                <path d="M16 16h6" />
                <path d="M19 13v6" />
                <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                <path d="m7.5 4.27 9 5.15" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" x2="12" y1="22" y2="12" />
              </svg>
            </span>
            :
          </h3>
          <p className="capitalize font-medium text-base">
            {history.details?.name}
          </p>
        </div>
      );
    case "updated":
      return (
        <div className="">
          <h3
            className={`flex gap-2 text-center font-semibold capitalize ${getHistorySeverity(history.action_type)}`}
          >
            Update
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-square-pen"
              >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z" />
              </svg>
            </span>
            :
          </h3>
          <p className="capitalize font-medium text-base">
            {history.details?.name}
          </p>
        </div>
      );
    case "deleted":
      return (
        <div className="">
          <h3
            className={`flex gap-2 text-center font-semibold capitalize ${getHistorySeverity(history.action_type)}`}
          >
            Delete
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
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
            </span>
            :
          </h3>
          <p className="capitalize font-medium text-base">
            {history.details?.name}
          </p>
        </div>
      );
    case "searched":
      return (
        <div className="">
          {history.details?.query == null ? (
            <>
              <h3
                className={`flex gap-2 text-center font-semibold capitalize ${getHistorySeverity(history.action_type)}`}
              >
                Searching
                <span>
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
                    className="lucide lucide-package-search"
                  >
                    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                    <path d="m7.5 4.27 9 5.15" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" x2="12" y1="22" y2="12" />
                    <circle cx="18.5" cy="15.5" r="2.5" />
                    <path d="M20.27 17.27 22 19" />
                  </svg>
                </span>
              </h3>
            </>
          ) : (
            <>
              <h3
                className={`flex gap-2 text-center font-semibold capitalize ${getHistorySeverity(history.action_type)}`}
              >
                Search
                <span>
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
                    className="lucide lucide-package-search"
                  >
                    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                    <path d="m7.5 4.27 9 5.15" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" x2="12" y1="22" y2="12" />
                    <circle cx="18.5" cy="15.5" r="2.5" />
                    <path d="M20.27 17.27 22 19" />
                  </svg>
                </span>
                :
              </h3>
              <p className="capitalize font-medium text-base">
                {history.details?.query}
              </p>
            </>
          )}
        </div>
      );
    case "paid":
      return (
        <div className="">
          <h3
            className={`flex gap-2 mb-2  text-center font-semibold capitalize ${getHistorySeverity(history.action_type)}`}
          >
            Down Payment
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-credit-card"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
            </span>
            :
          </h3>
          <div
            className={`flex flex-col gap-1 text-center font-semibold capitalize ${getHistorySeverity(history.action_type)}`}
          >
            <div className="flex gap-2">
              Order code :
              <p className="capitalize font-medium text-meta-4">
                {history.details?.code}
              </p>
            </div>
            <div className="flex gap-2">
              refunde :
              <p className="capitalize font-medium text-meta-4">
                {DHFormat(history.details?.refunde)}
              </p>
            </div>
          </div>
        </div>
      );
    case "refunded":
      return (
        <div className="">
          <h3
            className={`flex gap-2 mb-2  text-center font-semibold capitalize ${getHistorySeverity(history.action_type)}`}
          >
            Refund
            <span
            className={`20icon material-symbols-outlined ${getHistorySeverity(history.action_type)}`}
          >
            currency_exchange
          </span>
            :
          </h3>
          <div
            className={`flex flex-col  gap-2 text-center font-semibold capitalize ${getHistorySeverity(history.action_type)}`}
          >
            <div className="flex gap-2">
              Order code :
              <p className="capitalize font-medium text-meta-4">
                {history.details?.code}
              </p>
            </div>
            <div className="flex gap-2">
              refunde :
              <p className="capitalize font-medium text-meta-4">
                {DHFormat(history.details?.refunde)}
              </p>
            </div>
          </div>
        </div>
      );
    case "delivered":
      return (
        <div className="">
          <h3
            className={`flex gap-2 text-center font-semibold capitalize ${getHistorySeverity(history.action_type)}`}
          >
            Order Delivered:
          </h3>
        </div>
      );
    default:
      return (
        <div className="">
          <h3 className="font-semibold capitalize">Unknown Action:</h3>
        </div>
      );
  }
};

export default HistoryProductCardBody;
