import { getHistorySeverity } from "../../../helpers/HistoryActionType";
import { DHFormat } from "../../../helpers/MoneyFormat";
import { History } from "../../../types/history";

interface HistoryCardBodyProps {
  history: History;
}

const HistoryClientCardBody= ({ history }: HistoryCardBodyProps) => {
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
                className="lucide lucide-user-round-plus"
              >
                <path d="M2 21a8 8 0 0 1 13.292-6" />
                <circle cx="10" cy="8" r="5" />
                <path d="M19 16v6" />
                <path d="M22 19h-6" />
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
                className="lucide lucide-user-round-cog"
              >
                <path d="M2 21a8 8 0 0 1 10.434-7.62" />
                <circle cx="10" cy="8" r="5" />
                <circle cx="18" cy="18" r="3" />
                <path d="m19.5 14.3-.4.9" />
                <path d="m16.9 20.8-.4.9" />
                <path d="m21.7 19.5-.9-.4" />
                <path d="m15.2 16.9-.9-.4" />
                <path d="m21.7 16.5-.9.4" />
                <path d="m15.2 19.1-.9.4" />
                <path d="m19.5 21.7-.4-.9" />
                <path d="m16.9 15.2-.4-.9" />
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
                className="lucide lucide-user-round-x"
              >
                <path d="M2 21a8 8 0 0 1 11.873-7" />
                <circle cx="10" cy="8" r="5" />
                <path d="m17 17 5 5" />
                <path d="m22 17-5 5" />
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
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user-round-search"
                  >
                    <circle cx="10" cy="8" r="5" />
                    <path d="M2 21a8 8 0 0 1 10.434-7.62" />
                    <circle cx="18" cy="18" r="3" />
                    <path d="m22 22-1.9-1.9" />
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
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user-round-search"
                  >
                    <circle cx="10" cy="8" r="5" />
                    <path d="M2 21a8 8 0 0 1 10.434-7.62" />
                    <circle cx="18" cy="18" r="3" />
                    <path d="m22 22-1.9-1.9" />
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

export default HistoryClientCardBody;
