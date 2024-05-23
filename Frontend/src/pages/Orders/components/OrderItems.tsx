import { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { OrderItem } from "../../../types/orderItem";
import {
  addOrderItem,
  currentOrderItem,
  hideOrderItemDialog,
  openOrderItemDialog,
  setOrderItems,
  updateOrderItem,
} from "../../../app/Features/OrderItemSlice";
import Select from "react-tailwindcss-select";
import { hidePaidDailog, openPaidDialog, setPaid } from "../../../app/Features/OrderSlice";
import { Toast } from "primereact/toast";
import { useGetProductsQuery } from "../../../app/services/ProductsApiSlice";
import { setProducts } from "../../../app/Features/ProductSlice";

interface OrderItemProduct {
  value: string;
  image: string;
  label: string;
  price: number;
}
export default function OrderItems() {

  const [OrderItemProduct, setOrderItemProduct] =
    useState<OrderItemProduct | null>(null);
  const [options, setoptions] = useState<any>();
  const dt = useRef<DataTable<OrderItem[]>>(null);
  const OrderItemToast=useRef<Toast>(null)
  
  const dispatch = useAppDispatch();
  const { orderItems, orderItem, orderItemDialog, actionType ,TotalOrderItems} = useAppSelector((state) => state.orderItems);
  const { order ,orderPaidDialog } = useAppSelector((state) => state.orders);
  const { products } = useAppSelector((state) => state.products);
  
  const [paid, setPaidAmount] = useState<number>(order.paid);
  const GetProducts = useGetProductsQuery(1, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (GetProducts.isSuccess) {
      console.log("GetProducts data => ", GetProducts.data);
      dispatch(setProducts(GetProducts?.data?.data));
    }
  }, [GetProducts, dispatch, GetProducts.refetch]);


  // Transform the clients array into options array
  useEffect(() => {
    if (!!products && !!products.length) {
      const options = products.map((product) => ({
        value: product.id,
        image: product.image,
        label: product.name,
        price: product.price,
      }));
      setoptions(options)
    }
  }, [products])



  const openNew = () => {
    dispatch(openOrderItemDialog("add"));
  };
  
  const hideDialog = () => {
    dispatch(hideOrderItemDialog());
    setOrderItemProduct(null)
  };
  

  const openPaidDailog = () => {
    dispatch(openPaidDialog());
  };

  const hidePaidDialog = () => {
    dispatch(hidePaidDailog())
  }

  const CancelPaidDialog = ()=>{
    dispatch(setPaid(0))
    dispatch(hidePaidDailog())
  }

  const Deposit = () => {
    if (paid > TotalOrderItems) {
      OrderItemToast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Down Payement Must Be Less Then The Order Total.",
        life: 3000,
      });
    }else{
      dispatch(setPaid(paid))
      hidePaidDialog()
    }
  }



  const saveOrderItem = () => {
    if (actionType === "add") {
      
      dispatch(addOrderItem(orderItem));
      
      console.log("the Order Item => ", orderItems);
      
    } else if (actionType === "edit") {
      const index = findIndexById(orderItem.id)
      console.log("the Order Items => ", orderItems);
      console.log("the Updated Order Item => ", orderItem);
      console.log("the Updated Order Item  index => ", index);
      
      dispatch(updateOrderItem({ index, orderItem }));
    }
    dispatch(hideOrderItemDialog());
    setOrderItemProduct(null);
  };
  
  const findIndexById = (id:string) => {
    let index = -1;

    for (let i = 0; i < orderItems.length; i++) {
        if (orderItems[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
};
  
  const editOrderItem = (EditedrderItem: OrderItem) => {
    dispatch(currentOrderItem(EditedrderItem));
    
    // Find the option corresponding to the product_id of the EditedrderItem
    const selectedOption = options.find((option: any) => option.value === EditedrderItem.product_id);
  
    // Check if the selectedOption exists before setting the state
    if (selectedOption) {
      setOrderItemProduct(selectedOption);
    } else {
      // Handle the case when the selected option is not found
      console.error(`Option for product_id ${EditedrderItem.product_id} not found.`);
    }
    
    dispatch(openOrderItemDialog("edit"));
  };


  const deleteOrderItem = (CrtorderItem: OrderItem) => {
    let _orderItems = orderItems.filter((val) => val.id !== CrtorderItem.id);
    console.log("_orderItems => ", _orderItems);
    

    dispatch(setOrderItems(_orderItems));
  };

  const onInputChange = (e: any) => {
    const val = (e.target && e.target.value) || "";

    let _orderItem = { ...orderItem };
    
    // @ts-ignore
    _orderItem[e.target.name] = val;
    _orderItem.total = val * orderItem.price;

    dispatch(currentOrderItem(_orderItem));
  };


  const OnInputPaidChange = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget ? Number(e.currentTarget.value) : 0;
    
    setPaidAmount(val);
  }

  const handleSelectChange = (value: any) => {
    let _orderItem = { ...orderItem };

    // @ts-ignore
    _orderItem.product_id = value.value;
    _orderItem.product_name = value.label;
    _orderItem.price = value.price;
    dispatch(currentOrderItem(_orderItem));
    setOrderItemProduct(value);
  };

  const leftToolbarTemplate = () => {
    return (
      <>
        <Button
          icon="pi pi-plus"
          label="New"
          className="inline-flex items-center gap-x-2 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none waves-effect"
          onClick={openNew}
        />
         
      </>
    );
  };

  const RightToolbar = () => {
    return (
      <>
        <Button
        icon="pi pi-wallet"
          label="Down Payment"
          className="inline-flex items-center gap-x-1 px-6 py-2 text-xs font-medium leading-6 text-center bg-white uppercase transition border border-sky-500 text-sky-500 rounded shadow ripple hover:shadow-lg hover:text-sky-600 hover:border-sky-600  focus:outline-none waves-effect"
          onClick={openPaidDailog}
        />
      </>
    );
  };

  const actionBodyTemplate = (rowData: OrderItem) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          className="mr-2 text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white
           active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
          onClick={() => editOrderItem(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bol
          uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={() => deleteOrderItem(rowData)}
        />
      </>
    );
  };

  const OrderItemDialogFooter = (
    <>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="max-w-fit text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
        onClick={hideDialog}
      />
      <Button
        label="Save"
        className="max-w-fit text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
        icon="pi pi-check"
        onClick={saveOrderItem}
      />
    </>
  );
  const PaidDialogFooter = (
    <>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="max-w-fit text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
        onClick={CancelPaidDialog}
      />
      <Button
        label="Save"
        className="max-w-fit text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
        icon="pi pi-check"
        onClick={Deposit}
      />
    </>
  );


  return (
    <>
      <Toast ref={OrderItemToast} />
      <div className="card">
        <Toolbar
          className="mb-4"
          right={RightToolbar}
          left={leftToolbarTemplate}
        ></Toolbar>
        <DataTable
          className="min-w-fit"
          ref={dt}
          value={orderItems}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
        >
          <Column selectionMode="multiple" exportable={false}></Column>
          <Column field="product_name" header="Product" sortable></Column>
          <Column field="quantity" header="Quantity" sortable></Column>
          <Column field="price" header="Price" sortable></Column>
          <Column field="total" header="Total" sortable></Column>
          <Column body={actionBodyTemplate} exportable={false}></Column>
        </DataTable>
      </div>

      <Dialog
        visible={orderItemDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header={`${actionType} Product`}
        modal
        className="p-fluid"
        footer={OrderItemDialogFooter}
        onHide={hideDialog}
      >
        {OrderItemProduct?.image && (
          <img
            src={`${OrderItemProduct?.image}`}
            alt={OrderItemProduct?.label}
            className="product-image block m-auto pb-3"
          />
        )}
        <div className="mt-4 mb-8 grid gap-4 z-999 ">
          <label htmlFor="product" className="font-bold">
            Product
          </label>
          <Select
            value={OrderItemProduct}
            onChange={handleSelectChange}
            options={options}
            primaryColor={"cyan"}
            isSearchable
            isClearable
          />
        </div>

        <div className="mt-4 mb-8 grid gap-4  col">
          <label htmlFor="quantity" className="font-bold">
            Quantity
          </label>
          <input
            name="quantity"
            type="text"
            className={`w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary
             active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary border-stroke`}
            value={orderItem.quantity !== 0 ? orderItem.quantity : ""}
            onChange={(e) => onInputChange(e)}
          />
        </div>
      </Dialog>

      <Dialog
      onHide={hidePaidDialog}
        header="Down Payement"
        visible={orderPaidDialog}
        position="right"
        modal
        footer={PaidDialogFooter}
        style={{ width: "50vw" }}
      >
       <div className="mt-4 mb-8 grid gap-4  col">
          <label htmlFor="paid" className="font-bold">
            Down Payement
          </label>
          <input
            name="paid"
            type="text"
            required
            className={`w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary
             active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary border-stroke`}
            value={paid != 0 || isNaN(paid) ? paid : 0}
            onChange={(e) => OnInputPaidChange(e)}
          />
        </div>
        
      </Dialog>
    </>
  );
}
