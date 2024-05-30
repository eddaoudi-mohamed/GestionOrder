export const getSeverityColors = (actionType: string): [string, string] => {
  switch (actionType) {
    case "created":
      return ["bg-blue-200", "bg-blue-600"];
    case "updated":
      return ["bg-green-200", "bg-green-600"];
    case "searched":
      return ["bg-yellow-200", "bg-yellow-600"];
    case "deleted":
      return ["bg-red-200", "bg-red-600"];
    case "paid":
      return ["bg-teal-200", "bg-teal-600"];
    case "refunded":
      return ["bg-purple-200", "bg-purple-600"];
    case "delivered":
      return ["bg-orange-200", "bg-orange-600"];
    default:
      return ["bg-zinc-200", "bg-zinc-600"];
  }
};



export const getHistorySeverity = (actionType: string): string => {
  switch (actionType) {
    case "created":
      return "bg-blue-200 text-blue-700";
    case "updated":
      return "bg-green-200 text-green-700";
    case "searched":
      return "bg-yellow-200 text-yellow-700";
    case "deleted":
      return "bg-red-200 text-red-700";
    case "paid":
      return "bg-teal-200 text-teal-700";
    case "refunded":
      return "bg-purple-200 text-purple-700";
    case "delivered":
      return "bg-orange-200 text-orange-700";
    default:
      return "bg-zinc-200 text-zinc-700";
  }
};


export const getActionTypeIcon = (actionType: string) => {
  switch (actionType) {
    case "created":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
           width="24" height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-badge-plus ${getHistorySeverity(actionType)}`}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8m-4-4h8" />
        </svg>
      );
    case "updated":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
           width="24" height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-pencil ${getHistorySeverity(actionType)}`}
        >
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      );
    case "deleted":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
           width="24" height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-trash ${getHistorySeverity(actionType)}`}
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6l-1 14H6L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      );
    case "searched":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
           width="24" height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-search-slash ${getHistorySeverity(actionType)}`}
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
       );
    case "paid":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
           width="24" height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-credit-card ${getHistorySeverity(actionType)}`}
        >
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      );
    case "refunded":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
           width="24" height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-rotate-cw ${getHistorySeverity(actionType)}`}
        >
          <path d="M21 11a9 9 0 1 0-4.5 7.9" />
          <polyline points="21 11 21 17 15 17" />
        </svg>
      );
    case "delivered":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
           width="24" height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-package ${getHistorySeverity(actionType)}`}
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73L13 3a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L11 21a2 2 0 0 0 2 0l7-3.73A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
           width="24" height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-help-circle ${getHistorySeverity(actionType)}`}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 1 1 5.82 1c0 1.5-1.5 2.5-1.5 2.5s-1 1-1 2" />
          <line x1="12" y1="17" x2="12" y2="17" />
        </svg>
      );
  }
};
