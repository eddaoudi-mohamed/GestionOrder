import { useAppSelector } from "../../app/hooks";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../layout/DefaultLayout";
import { OrderProduct } from "../../types/orderItem";
import { CustomerCart } from "./components";
import ClientDetails from "./components/ClientDetails";
import { DHFormat, TotalPercentage } from "../../helpers/MoneyFormat";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import ViewMenu from "./components/ViewMenu";
import { formatDateTime } from "../../helpers/DateFormat";
import { FormatOrderStatus, getSeverity } from "../../helpers/StatusFunctions";
import { Order } from "../../types/order";

const ViewOrder = () => {
  const { products } = useAppSelector((state) => state.orderItems);

  const { order } = useAppSelector((state) => state.orders);

  const { client } = useAppSelector((state) => state.clients);

  console.log("the Order Details => ", order);

  const ViewToast = useRef<Toast>(null);

  const statusOrderTemplate = (rowData: Order) => {
    const severity = getSeverity(rowData);
    const FormatStatus = FormatOrderStatus(rowData);
    return (
      <div
        className={`ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full ${severity} border`}
      >
        {FormatStatus}
      </div>
    );
  };

  return (
    <DefaultLayout>
      <Toast ref={ViewToast} />
      <Breadcrumb pageName="View Order" />

      {/* <!-- component --> */}

      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold text-black">
            Order #{order.id}
          </h1>
          <h3 className="text-3xl dark:text-white lg:text-4xl font-semibold text-black">
            {formatDateTime(order.created_at)}
          </h3>
        </div>
        <ViewMenu />

        <div className="mt-5 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className=" sm:flex-col md:flex-row sm:gap-10   md:py-6 xl:py-8 w-full bg-white border border-slate-400  py-8 flex justify-between items-center xl:w-96 xl:flex-col border-none rounded-xl">
            <ClientDetails client={client} />
          </div>
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            {/* START Customer Cart Products */}
            <div className="flex flex-col justify-start items-start border-none rounded-xl bg-white px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-black">
                Customer’s Cart
              </p>
              {products?.map((product: OrderProduct) => {
                return <CustomerCart product={product} key={product.id} />;
              })}
            </div>
            {/* END Customer Cart Products */}

            {/* START Order Details */}
            <div className="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 border-none md:space-y-0 md:space-x-6 xl:space-x-8">
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-white dark:bg-gray-800 space-y-6 rounded-xl">
                <h3 className="text-xl dark:text-white font-semibold leading-5 text-black">
                  Summary
                </h3>
                <div
                  className={`flex justify-center items-center w-full space-y-4 flex-col ${order.status !== "refunded" && "border-gray-200 border-b pb-4"}`}
                >
                  <div className="flex justify-between w-full">
                    <p className="text-base dark:text-white leading-4 text-black">
                      Status
                    </p>
                    <p className="text-base dark:text-gray-300 leading-4 text-black">
                      {statusOrderTemplate(order)}
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-base dark:text-white leading-4 text-black">
                      Total
                    </p>
                    <p className="text-base dark:text-gray-300 leading-4 text-black">
                      {DHFormat(order.amount)}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base dark:text-white leading-4 text-black">
                      Down Payement
                    </p>
                    <p className="text-base dark:text-gray-300 leading-4 text-danger">
                      -{DHFormat(order.paid)} (
                      {TotalPercentage(order.paid, order.amount)}%)
                    </p>
                  </div>
                </div>
                {order.status !== "refunded" ? (
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base dark:text-white font-semibold leading-4 text-black">
                      Rest Total
                    </p>
                    <p className="text-base dark:text-gray-300 font-semibold leading-4 text-primary">
                      {DHFormat(order.amount - order.paid)}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {/* END Order Details */}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ViewOrder;
