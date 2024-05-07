import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { Message } from "primereact/message";
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from "../../../app/services/ProductsApiSlice";
import {
  currentProduct,
  hideProductDialog,
  setPage,
} from "../../../app/Features/ProductSlice";
import { StepperPanel } from "primereact/stepperpanel";
import { Stepper } from "primereact/stepper";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

interface refetchInter {
  RefreshProduct: () => void;
}

const ProductsDialog = ({ RefreshProduct }: refetchInter) => {
  const ActionToast = useRef<Toast>(null);

  const stepperRef = useRef<any>(null);

  const NextStep = () => {
    console.log("the Product Values => ", product);

    if (stepperRef.current) {
      stepperRef.current.nextCallback();
    }
  };

  const PrevStep = () => {
    if (stepperRef.current) {
      stepperRef.current.prevCallback();
    }
  };

  const [updateProduct] = useUpdateProductMutation();

  const [addProduct, {}] = useAddProductMutation();

  const [ProductError, setProductError] = useState({
    name: false,
    image: false,
    description: false,
    category_id: false,
    price: false,
    quantityPreUnit: false,
  });

  const { product, productDialog, actionType } = useAppSelector(
    (state) => state.products
  );

  const { categories } = useAppSelector((state) => state.categories);

  const dispatch = useAppDispatch();

  const HandlehideDialog = () => {
    setProductError({
      name: false,
      image: false,
      description: false,
      category_id: false,
      price: false,
      quantityPreUnit: false,
    });
    dispatch(hideProductDialog());
  };

  const onInputChange = (e: React.ChangeEvent<any>, name: string) => {
    const val = (e.target && e.target.value) || "";
    let _product = { ...product };

    // @ts-ignore
    _product[name] = val;

    // Reset the corresponding error flag to false
    setProductError((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));

    dispatch(currentProduct(_product));
  };

  const onImageChange = (e: React.ChangeEvent<any>) => {
    const file = e.currentTarget.files && e.currentTarget.files;
    const _product = { ...product };
    const allowedTypes = ["image/png", "image/jpg", "image/jpeg" , "image/webp"];

    // console.log("Image File => ", file);
    // console.log("Is Include => ", allowedTypes.includes(file[0].type));

    if (file) {
      if (file) {
        // Reset the corresponding error flag to false
        setProductError((prevErrors) => ({
          ...prevErrors,
          image: false,
        }));
      }
      // Check if the file size exceeds the limit
      if (file.size > 2048000) {
        ActionToast.current?.show({
          severity: "error",
          summary: "Error",
          detail: "File size exceeds the limit (2MB).",
          life: 3000,
        });
      } else if (!allowedTypes.includes(file[0].type)) {
        // Handle invalid file type
        ActionToast.current?.show({
          severity: "error",
          summary: "Error",
          detail:
            "Invalid file type. Only PNG, JPG, WEBP and JPEG files are allowed.",
          life: 3000,
        });
      } else {
        // Update the product image
        console.log("the PRoduct Image => ", e.currentTarget.files[0]);
        
        _product.image = file[0];

        // Dispatch currentProduct
        dispatch(currentProduct(_product));
      }
    }
  };

  const HandleaddProduct = async () => {
    try {
      const formData = new FormData();
      formData.append('name', product?.name);
      formData.append('description', product?.description);
      //@ts-ignore
      formData.append('category_id', product?.category_id);
      //@ts-ignore
      formData.append('price', product?.price);
      //@ts-ignore
      formData.append('quantityPreUnit', product?.quantityPreUnit);
      formData.append('image', product?.image); // Append the image file
  
      console.log("the Add Product values => ", product);
      console.log("the Add formData values => ", formData);

      await addProduct(formData).unwrap();
      
      RefreshProduct();
      dispatch(setPage(1));

      dispatch(hideProductDialog());

      ActionToast.current?.show({
        severity: "success",
        summary: "Successfully",
        detail: "The Product Created Successfully",
        life: 3000,
      });
    } catch (error: any) {
      if (error.status === 400 && error.data.data && error.data.data.messages) {
        // Extract error messages for each field
        const errorMessages = error.data.data.messages;

        // Set error flags for each field
        setProductError({
          name: errorMessages.name ? true : false,
          image: errorMessages.image ? true : false,
          description: errorMessages.description ? true : false,
          category_id: errorMessages.category_id ? true : false,
          price: errorMessages.price ? true : false,
          quantityPreUnit: errorMessages.quantityPreUnit ? true : false,
        });

        // Show error toast for each error condition
        if (errorMessages.name) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.name[0],
            life: 3000,
          });
        } else if (errorMessages.image) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.image[0],
            life: 3000,
          });
        } else if (errorMessages.description) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.description[0],
            life: 3000,
          });
        } else if (errorMessages.category_id) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: "The Category  field is required.",
            life: 3000,
          });
        } else if (errorMessages.price) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.price[0],
            life: 3000,
          });
        } else if (errorMessages.quantityPreUnit) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.quantityPreUnit[0],
            life: 3000,
          });
        } else {
          // Show generic error toast
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: "An error occurred. Please try again later.",
            life: 3000,
          });
        }
      }
    }
  };


  const HandleupdateProduct = async () => {
    try {
      const formData = new FormData();
      formData.append('name', product?.name);
      formData.append('description', product?.description);
      //@ts-ignore
      formData.append('category_id', product?.category_id);
      //@ts-ignore
      formData.append('price', product?.price);
      //@ts-ignore
      formData.append('quantityPreUnit', product?.quantityPreUnit);
      formData.append('image', product?.image); // Append the image file
  
      console.log("the Product Values => ", product);
      console.log("the formData Values => ", formData);
  
      await updateProduct({ product: formData, id: product?.id }).unwrap();
  

      dispatch(setPage(1));

      dispatch(hideProductDialog());
      ActionToast.current?.show({
        severity: "success",
        summary: "Successfully",
        detail: "The Product Updated Successfully",
        life: 3000,
      });
      RefreshProduct();
    } catch (error: any) {
      console.log("Catch Add Product Error  => ", error);

      if (error.status === 400 && error.data.data && error.data.data.messages) {
        // Extract error messages for each field
        const errorMessages = error.data.data.messages;

        // Set error flags for each field
        setProductError({
          name: errorMessages.name ? true : false,
          image: errorMessages.image ? true : false,
          description: errorMessages.description ? true : false,
          category_id: errorMessages.category_id ? true : false,
          price: errorMessages.price ? true : false,
          quantityPreUnit: errorMessages.quantityPreUnit ? true : false,
        });

        // Show error toast for each error condition
        if (errorMessages.name) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.name[0],
            life: 3000,
          });
        } else if (errorMessages.image) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.image[0],
            life: 3000,
          });
        } else if (errorMessages.description) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.description[0],
            life: 3000,
          });
        } else if (errorMessages.category_id) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: "The Category  field is required.",
            life: 3000,
          });
        } else if (errorMessages.price) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.price[0],
            life: 3000,
          });
        } else if (errorMessages.quantityPreUnit) {
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: errorMessages.quantityPreUnit[0],
            life: 3000,
          });
        } else {
          // Show generic error toast
          ActionToast.current?.show({
            severity: "error",
            summary: "Error",
            detail: "An error occurred. Please try again later.",
            life: 3000,
          });
        }
      }
    }
  };


  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (actionType === "add") {
      HandleaddProduct();
    } else if (actionType === "edit") {
      HandleupdateProduct();
    }
  };

  return (
    <>
      <Toast ref={ActionToast} />
      <Dialog
        visible={productDialog}
        style={{ width: "60rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header={`Product ${actionType}`}
        modal
        className="p-fluid z-10"
        onHide={HandlehideDialog}
      >
        <form onSubmit={HandleSubmit}>
          <Stepper
          linear
            ref={stepperRef}
            //@ts-ignore
            style={{
              flexBasis: "50rem",
              height: "content-fit",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <StepperPanel>
              <div className="flex flex-col justify-around ">
                <div className="my-4 grid gap-4 ">
                  <label htmlFor="name" className="font-bold">
                    Name
                  </label>

                  <InputText
                    id="name"
                    value={product ? product.name : ""}
                    onChange={(e) => onInputChange(e, "name")}
                    required
                    autoFocus
                    className={`w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary
                       active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input
                      dark:text-white dark:focus:border-primary ${ProductError.name ? "border-danger" : "border-stroke"}`}
                  />

                  {ProductError.name && (
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
                    value={String(product ? product.price : "0")}
                    onChange={(e) => onInputChange(e, "price")}
                    required
                    autoFocus
                    className={`w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary
                       active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input
                      dark:text-white dark:focus:border-primary ${ProductError.price ? "border-danger" : "border-stroke"}`}
                  />

                  {ProductError.price && (
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
                    value={String(product ? product.quantityPreUnit : "0")}
                    onChange={(e) => onInputChange(e, "quantityPreUnit")}
                    required
                    autoFocus
                    className={`w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary
                       active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input
                      dark:text-white dark:focus:border-primary ${ProductError.quantityPreUnit ? "border-danger" : "border-stroke"}`}
                  />

                  {ProductError.quantityPreUnit && (
                    <Message
                      className="my-4"
                      severity="error"
                      text="Product Quantyty  is required."
                    />
                  )}
                </div>
              </div>

              <div className="flex pt-4 justify-end">
                <div>
                  <button
                    type="button"
                    className={`text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none 
                focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                ${product?.name == "" || product?.quantityPreUnit == 0 || product?.price == 0 ? "bg-sky-300 " : "bg-sky-500 "}`}
                    disabled={
                      product?.name == "" ||
                      product?.quantityPreUnit == 0 ||
                      product?.price == 0
                        ? true
                        : false
                    }
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
                  <label htmlFor="image" className="font-bold gap-2 ">
                    Image
                  </label>
                  <input
                    id="image"
                    type="file"
                    max={2048}
                    onChange={onImageChange}

                    accept="image/png, image/gif, image/jpeg ,image/webp"
                    className={`w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter 
                  file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter${ProductError.image ? "border-danger" : "border-stroke"}`}
                  />

                  {ProductError.image && (
                    <Message
                      className="my-4"
                      severity="error"
                      text="Image is required."
                    />
                  )}
                </div>
                <div className="mt-4 grid gap-4">
                  <div>
                    <label htmlFor="category" className="font-bold ">
                      Category
                    </label>
                    <div className="relative z-20 bg-white dark:bg-form-input">
                      <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                        <i className="text-xl text-color-secondary pi pi-tags"></i>
                      </span>
                      <select
                        id="category_id"
                        value={product ? product.category_id : ""}
                        onChange={(e) => {
                          onInputChange(e, "category_id");
                          console.log("category_id => ", product?.category_id);
                        }}
                        className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input
                        ${ProductError.category_id ? "border-danger" : "border-stroke"}`}
                      >
                        <option
                          value=""
                          className="text-body dark:text-bodydark"
                        >
                          Select Category
                        </option>
                        {categories.map((category) => (
                          <option
                            key={category.id}
                            value={category.id}
                            className="text-body dark:text-bodydark"
                          >
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {ProductError.category_id && (
                      <Message
                        className="my-4"
                        severity="error"
                        text="Name is required."
                      />
                    )}
                  </div>
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
                    className={`text-white bg-sky-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none 
                                focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 
                                ${product?.category_id == 0 ? true : false} `}
                    disabled={product?.category_id == 0 ? true : false}
                    onClick={() => NextStep()}
                  >
                    Next
                    <i className="pi pi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </StepperPanel>
            <StepperPanel>
              <div className="flex flex-col justify-around h-80 ">
                <div className="card my-4 grid gap-4">
                  <label htmlFor="name" className="font-bold">
                    Description
                  </label>

                  <InputTextarea
                    id="description"
                    value={product ? product.description : ""}
                    onChange={(e) => onInputChange(e, "description")}
                    style={{ height: "180px" }}
                    required
                    autoFocus
                    className={`w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary
                       active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input
                      dark:text-white dark:focus:border-primary ${ProductError.name ? "border-danger" : "border-stroke"}`}
                  />

                  {ProductError.name && (
                    <Message
                      className="my-4"
                      severity="error"
                      text="Name is required."
                    />
                  )}
                </div>
              </div>
              <div className="flex pt-4 justify-content-start">
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
              </div>
            </StepperPanel>
          </Stepper>

          <div className="flex justify-end gap-4.5 mt-8">
            <Button
              label="Cancel"
              icon="pi pi-times"
              className="max-w-fit text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white 
              active:bg-red-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
              onClick={HandlehideDialog}
            />
            <Button
              disabled={
                product?.name == "" ||
                product?.quantityPreUnit == 0 ||
                product?.price == 0 ||
                product?.description == "" ||
                product?.category_id == 0
                  ? true
                  : false
              }
              type="submit"
              label="Save"
              className="max-w-fit text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white
               active:bg-green-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
              icon="pi pi-check"
            />
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default ProductsDialog;
