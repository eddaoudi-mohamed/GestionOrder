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
import TableTwo from "../../components/Tables/TableTwo";

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

  // Order Error State

  const [OrderError, setOrderError] = useState({
    name: false,
    image: false,
    description: false,
    category_id: false,
    price: false,
    quantityPreUnit: false,
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
      <Breadcrumb pageName="Add Order" />
      <div className="flex">
        <Stepper linear ref={stepperRef}>
          <StepperPanel>
            <div className="flex flex-col justify-around ">
              <div className="my-4 grid gap-4 ">
                <label htmlFor="name" className="font-bold">
                  Name
                </label>

                <InputText
                  id="name"
                  onChange={(e) => onInputChange(e, "name")}
                  required
                  autoFocus
                  className={`w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary
                       active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input
                      dark:text-white dark:focus:border-primary ${OrderError.name ? "border-danger" : "border-stroke"}`}
                />

                {OrderError.name && (
                  <Message
                    className="my-4"
                    severity="error"
                    text="Name is required."
                  />
                )}
              </div>

              <div className="card my-4 grid gap-4">
                <label htmlFor="price" className="font-bold">
                  Price
                </label>

                <InputText
                  id="price"
                  onChange={(e) => onInputChange(e, "price")}
                  required
                  autoFocus
                  className={`w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary
                       active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input
                      dark:text-white dark:focus:border-primary ${OrderError.price ? "border-danger" : "border-stroke"}`}
                />

                {OrderError.price && (
                  <Message
                    className="my-4"
                    severity="error"
                    text="Price is required."
                  />
                )}
              </div>

              <div className="card my-4 grid gap-4">
                <label htmlFor="quantityPreUnit" className="font-bold">
                  Quantity Unit
                </label>

                <InputText
                  id="quantityPreUnit"
                  onChange={(e) => onInputChange(e, "quantityPreUnit")}
                  required
                  autoFocus
                  className={`w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary
                       active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input
                      dark:text-white dark:focus:border-primary ${OrderError.quantityPreUnit ? "border-danger" : "border-stroke"}`}
                />

                {OrderError.quantityPreUnit && (
                  <Message
                    className="my-4"
                    severity="error"
                    text="Product Quantyty  is required."
                  />
                )}
              </div>
              <div className="mt-4 grid gap-4">
                <div>
                  <label htmlFor="client" className="font-bold ">
                    Category
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
                        ${OrderError.category_id ? "border-danger" : "border-stroke"}`}
                    >
                      <option value="" className="text-body dark:text-bodydark">
                        Select Category
                      </option>
                      {clients.map((client) => (
                        <option
                          key={client.id}
                          value={client.id}
                          className="text-body dark:text-bodydark"
                        >
                          {client.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {OrderError.category_id && (
                    <Message
                      className="my-4"
                      severity="error"
                      text="Name is required."
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="flex pt-4 justify-end">
              <div>
                <button
                  type="button"
                  className={`text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none 
                focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
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
                {OrderError.image && (
                  <Message
                    className="my-4"
                    severity="error"
                    text="Image is required."
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
          <StepperPanel></StepperPanel>
        </Stepper>
        <div>
          <Card></Card>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AddOrder;