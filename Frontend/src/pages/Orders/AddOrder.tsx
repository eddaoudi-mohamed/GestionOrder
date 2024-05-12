import { useEffect, useRef, useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Message } from "primereact/message";
import { Card } from "primereact/card";
import OrderItems from "./components/OrderItems";
import ClientSelect from "./components/ClientSelect";
import { Button } from "primereact/button";
import { useAddOrderMutation } from "../../app/services/OrderApiSlice";
import { Toast } from "primereact/toast";
import { resetOrderItems } from "../../app/Features/OrderItemSlice";
import { resetOrder, setAmount } from "../../app/Features/OrderSlice";
import { useNavigate } from "react-router-dom";


const AddOrder = () => {

  const OrderToast=useRef<Toast>(null)

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  // Order Error State

  const [OrderError, setOrderError] = useState({
    client: false,
    products: false
  });

  const [FormatMoney, setFormatMoney] = useState<{total:string,paid:string}>()

  const [addOrder, {}] = useAddOrderMutation();


  // order slice action & state
  const { orderItems, TotalOrderItems } = useAppSelector((state) => state.orderItems);
  const { order } = useAppSelector((state) => state.orders);

  useEffect(() => {
    const MoroccoDH = Intl.NumberFormat('fr-Morocco', {
      style: 'currency',
      currency: 'MAD',
    });
  
    // Format the total order items amount
    setFormatMoney((prev: any) => ({ ...prev, total: MoroccoDH.format(TotalOrderItems) }));
  
    // Check if the paid amount is not undefined or null before formatting
    if (order.paid !== undefined && order.paid !== null) {
      setFormatMoney((prev: any) => ({ ...prev, paid: MoroccoDH.format(order.paid) }));
    }
  }, [TotalOrderItems, order]);
  



  const CancelOrder= ()=>{
    dispatch(resetOrderItems())
    dispatch(resetOrder())
  }

  const SaveOrder = async () => {
    try {
      dispatch(setAmount(TotalOrderItems))
      const ClientOrder = { ...order, products: orderItems }
      console.log("The Saved Order =D", ClientOrder);

      const { data } = await addOrder(ClientOrder).unwrap()

      OrderToast.current?.show({
        severity: "success",
        summary: "Successfully",
        detail: data.message,
        life: 3000,
      });

      navigate("/orders")
      dispatch(resetOrderItems())
      dispatch(resetOrder())

    } catch (error: any) {
      console.log("add Order Error => ", error);

      if (error.status === 400 && error.data.data && error.data.data.messages) {
        // Extract error messages for each field
        const errorMessages = error.data.data.messages;

        // Set error flags for each field
        setOrderError({
          client: errorMessages.client_id ? true : false,
          products: errorMessages.products ? true : false,
        });
        // Show error toast for each error condition
        if (errorMessages.client_id) {
          OrderToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.client_id[0],
            life: 3000,
          });
        } else if (errorMessages.products) {
          OrderToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.products[0],
            life: 3000,
          });
        }
        } else {
          // Show generic error toast
          OrderToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: "An error occurred. Please try again later.",
            life: 3000,
          });
        }
      }
    }
  

  return (
    <DefaultLayout>
      <Toast ref={OrderToast} />
      <Breadcrumb pageName="Add Order" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 ">
        <div className="col-span-full">
          <Card>
            <div className="flex justify-between">
              <div className="container">
                <Message
                  severity="info"
                  text={`Total Order : ${FormatMoney?.total}`}
                />
              </div>
              {order.paid ? (
                <div className="container relative ">
                  <Message
                    className="absolute right-0"
                    severity="success"
                    text={`Order Down Payement : ${FormatMoney?.paid}`}
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div className="flex flex-col justify-around ">
              <div className="my-4 grid gap-4 ">
                <label htmlFor="client" className="font-bold">
                  Client
                </label>
                <ClientSelect />
                {OrderError.client && (
                  <Message
                    className="my-4"
                    severity="error"
                    text="Client is required."
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col justify-items-center mb-12 mt-3 ">
              <div className="mt-4 grid gap-4">
                <OrderItems />
                {OrderError.products && (
                  <Message
                    className="my-4"
                    severity="error"
                    text="Please add a one product at least."
                  />
                )}
              </div>
            </div>
            <>
              <Button
                label="Cancel"
                icon="pi pi-times"
                className="max-w-fit text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white
                active:bg-red-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
                onClick={CancelOrder}
              />
              <Button
                label="Save"
                className="max-w-fit text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white
                active:bg-green-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                icon="pi pi-check"
                onClick={SaveOrder}
              />
            </>
          </Card>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AddOrder;