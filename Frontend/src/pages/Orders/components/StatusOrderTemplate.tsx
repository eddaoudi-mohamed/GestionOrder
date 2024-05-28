import {
  FormatOrderStatus,
  getSeverity,
} from "../../../helpers/StatusFunctions";
import { Order } from "../../../types/order";

const statusOrderTemplate = (rowData: Order) => {
  const severity = getSeverity(rowData);
  const FormatStatus = FormatOrderStatus(rowData);
  return (
    <div
      className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full ${severity} border`}
    >
      {FormatStatus}
    </div>
  );
};

export default statusOrderTemplate