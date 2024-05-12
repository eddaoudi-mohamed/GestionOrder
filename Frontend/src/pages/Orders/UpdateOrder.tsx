import { useRef, useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { InputText } from "primereact/inputtext";
import { useDispatch } from "react-redux";
import { currentOrder } from "../../app/Features/OrderSlice";
import { useAppSelector } from "../../app/hooks";
import { Message } from "primereact/message";
import { Card } from "primereact/card";
import OrderItems from "./components/OrderItems";
import ClientSelect from "./components/ClientSelect";

interface Product {
  productName: string;
  quantity: string;
  price: string;
}

const AddOrder = () => {
  // order slice action & state
  const dispatch = useDispatch();

  const { order } = useAppSelector((state) => state.orders);

  const { clients } = useAppSelector((state) => state.clients);

  const [Status, setStatus] = useState([
    { name: "pending", label: "pending" },
    { name: "paid", label: "paid" },
    { name: "unpaid", label: "unpaid" },
    { name: "partially_paid", label: "partially paid" },
    { name: "refunded", label: "refunded" },
    { name: "partially_refunded", label: "partially refunded" },
  ]);

  // Order Error State

  const [OrderError, setOrderError] = useState({
    client: false,
    status: false,
    paid: false,
    products: false
  });

  // Stepper Referrence withe the next & back function
  const stepperRef = useRef<any>(null);

  const NextStep = () => {
    if (stepperRef.current) {
      stepperRef.current.nextCallback();
    }
  };
  const PrevStep = () => {
    if (stepperRef.current) {
      stepperRef.current.prevCallback();
    }
  };

  // Input Change Handler
  const onInputChange = (e: React.ChangeEvent<any>, name: string) => {
    const val = (e.target && e.target.value) || "";
    let _order = { ...order };

    // @ts-ignore
    _order[name] = val;

    // Reset the corresponding error flag to false
    // setOrderError((prevErrors) => ({
    //   ...prevErrors,
    //   [name]: false,
    // }));

    dispatch(currentOrder(_order));
  };

  const [rows, setRows] = useState<Product[]>([
    { productName: "", quantity: "", price: "" },
  ]);

  const handleAddRow = () => {
    setRows([...rows, { productName: "", quantity: "", price: "" }]);
  };

  const handleInputChange = (index: number, value: string, field: string) => {
    const updatedRows = [...rows];

    updatedRows[index][field as keyof (typeof updatedRows)[0]] = value;

    setRows(updatedRows);
  };

  const handleDeleteRow = (index: number) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Update Order" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="col-span-10">
          <Stepper linear ref={stepperRef} >
            <StepperPanel>
              <div className="flex flex-col justify-around ">
                <div className="my-4 grid gap-4 ">
                  <label htmlFor="client" className="font-bold">
                    Client
                  </label>
                  {/* <InputText */}
                  {/* id="client" */}
                  {/* onChange={(e) => onInputChange(e, "client")} */}
                  {/* required */}
                  {/* autoFocus */}
                  {/* className={`w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary */}
                  {/* active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input */}
                  {/* dark:text-white dark:focus:border-primary ${OrderError.client ? "border-danger" : "border-stroke"}`} */}
                  {/* /> */}

                  <ClientSelect />

                  {OrderError.client && (
                    <Message
                      className="my-4"
                      severity="error"
                      text="Client is required."
                    />
                  )}
                </div>
                <div className="card my-4 grid gap-4">
                  <label htmlFor="paid" className="font-bold">
                    Paid
                  </label>
                  <InputText
                    id="paid"
                    onChange={(e) => onInputChange(e, "paid")}
                    required
                    autoFocus
                    className={`w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary
                         active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input
                        dark:text-white dark:focus:border-primary ${OrderError.paid ? "border-danger" : "border-stroke"}`}
                  />
                  {OrderError.paid && (
                    <Message
                      className="my-4"
                      severity="error"
                      text="Paid is required."
                    />
                  )}
                </div>
                <div className="mt-4 grid gap-4">
                  <div>
                    <label htmlFor="status" className="font-bold ">
                      Status
                    </label>
                    <div className="relative z-20 bg-white dark:bg-form-input">
                      <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                        <i className="text-xl text-color-secondary pi pi-tags"></i>
                      </span>
                      <select
                        id="client_id"
                        value={order ? order.client_id : ""}
                        onChange={(e) => {
                          onInputChange(e, "client_id");
                          console.log("client_id => ", order?.client_id);
                        }}
                        className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input
                          ${OrderError.status ? "border-danger" : "border-stroke"}`}
                      >
                        <option value="" className="text-body dark:text-bodydark">
                          Select Status
                        </option>
                        {Status.map((status) => (
                          <option
                            value={status.name}
                            className="text-semibold capitalize dark:text-bodydark"
                          >
                            {status.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {OrderError.status && (
                      <Message
                        className="my-4"
                        severity="error"
                        text="Status is required."
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex pt-4 justify-end">
                <div>
                  <button
                    type="button"
                    className="text-white bg-sky-500 font-bold uppercase text-sm px-6 py-3 rounded 
                    shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => NextStep()}
                  >
                    Next
                    <i className="pi pi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </StepperPanel>
            <StepperPanel>
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
              <div className="flex pt-4 justify-between">
                <div>
                  <button
                    type="button"
                    className="text-white bg-slate-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none
                  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => PrevStep()}
                  >
                    <i className="pi pi-arrow-left me-2"></i>
                    Back
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="text-white bg-sky-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none 
        focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => NextStep()}
                  >
                    Next
                    <i className="pi pi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </StepperPanel>
          </Stepper>
          </div>
          <div className="col-span-2" >
            <Card></Card>
          </div>
      </div>
    </DefaultLayout>
  );
};

export default AddOrder;