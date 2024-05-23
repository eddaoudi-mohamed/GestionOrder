import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { Order } from "../../../types/order";
import { useGetOrderQuery } from "../../../app/services/OrderApiSlice";
import { setOrderProduct } from "../../../app/Features/OrderItemSlice";
import { currentClient } from "../../../app/Features/ClientSlice";
import { currentOrder } from "../../../app/Features/OrderSlice";
import { useNavigate } from "react-router-dom";

const ActionProductButtons = (rowData: Order) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [orderData, setOrderData] = useState<any | null>(null);

  // const {products : ORProducts } = useAppSelector(state => state.orderItems)

  const GetOrder = useGetOrderQuery(rowData.id);

  useEffect(() => {
    if (GetOrder.isSuccess) {
      setOrderData(GetOrder.data);
    }
  }, [GetOrder.isSuccess, GetOrder.data]);

  const handleViewOrder = () => {
    if (orderData) {
      // Extracting necessary fields from the order data

      const { id, amount, paid, status, created_at, updated_at, products, client } = orderData.data;

      const orderDetails = { id, amount, paid, status, created_at, updated_at };
      dispatch(currentOrder(orderDetails));

      // console.log("products => ", orderDetails);
      dispatch(setOrderProduct(products));
      dispatch(currentClient(client));
      // console.log("The Selected order Products  => ",products );
      navigate("/orders/view");
    }
  };

  return (
    <>
      {GetOrder.isLoading && (
        <div className="max-w-fit mr-2 text-sky-500 bg-transparent  px-6 py-3  mb-1 ease-linear transition-all duration-150" >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="mr-2 animate-spin"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
          </svg>
        </div>
      )}
      {!GetOrder.isLoading && orderData && (
        <Button
          key={rowData.id}
          icon="pi pi-eye"
          className="mr-2 text-sky-500 bg-transparent border border-solid border-sky-500 hover:bg-sky-500 hover:text-white
          active:bg-sky-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
          onClick={handleViewOrder}
        />
      )}
    </>
  );
};

export default ActionProductButtons;
