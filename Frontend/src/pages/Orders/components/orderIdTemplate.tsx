import { Order } from "../../../types/order";

const IdTemplate = (rowData: Order) => {
  return `#${rowData.id}`;
};
export default IdTemplate;
