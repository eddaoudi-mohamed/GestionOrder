import { formatDateTime } from "../../../helpers/DateFormat";
import { getActionTypeIcon ,getHistorySeverity, getSeverityColors } from "../../../helpers/HistoryActionType";
import { History } from "../../../types/history";
import HistoryClientCardBody from "./HistoryClientCardBody";

interface HistoryOrderCardProps {
  historyCltt: History;
}

const HistoryClientCard = ({historyCltt} : HistoryOrderCardProps) => {

  const severityClasses = getSeverityColors(historyCltt.action_type);

  return (
    <div
      className={`block min-w-fit max-w-[18rem] rounded-lg ${severityClasses[0]} text-meta-4 shadow-secondary-1`}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="flex items-center gap-4 px-6 py-3 text-meta-4 ">
        {historyCltt.action_type === "refunded" ? (
          <span
            className={`material-symbols-outlined ${getHistorySeverity(historyCltt.action_type)}`}
          >
            currency_exchange
          </span>
        ) : (
          <>{getActionTypeIcon(historyCltt.action_type)}</>
        )}
        <p className="text-xl font-semibold uppercase">
          {historyCltt.initiator}
        </p>
      </div>
      <div className="p-6">
        <div className="flex gap-2">
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
            className="lucide lucide-calendar-clock"
          >
            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
            <path d="M16 2v4" />
            <path d="M8 2v4" />
            <path d="M3 10h5" />
            <path d="M17.5 17.5 16 16.3V14" />
            <circle cx="16" cy="16" r="6" />
          </svg>

          {historyCltt.created_at ? (
            <h5 className="mb-2 text-xl font-medium leading-tight text-wrap">
              {formatDateTime(historyCltt.created_at)}
            </h5>
          ) : (
            <h5 className="mb-2 text-xl font-medium leading-tight text-wrap">
              {historyCltt.date}
            </h5>
          )}
        </div>
        <HistoryClientCardBody history={historyCltt} />
        <div
          className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full ${severityClasses[1]} text-white mt-4`}
        >
          {historyCltt.action_type}
        </div>
      </div>
    </div>
  );
};

export default HistoryClientCard;
