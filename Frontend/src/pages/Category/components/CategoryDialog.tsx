import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  currentCategory,
  hideCategoryDialog,
} from "../../../app/Features/CategorySlice";
import { useRef, useState } from "react";
import { Button } from "primereact/button";
import { useAddCategoryMutation } from "../../../app/services/CategoryApiSlice";
import { emptyCategory } from "../../../types/category";
import { Toast } from "primereact/toast";

interface refetchInter{
  RefetchCateroy: () => void;
}

const CategoryDialog = ({RefetchCateroy}:refetchInter) => {

  const AddToast = useRef<Toast>(null);

  const [addCategory, { }] = useAddCategoryMutation()

  const [CategoryError, setCategoryError] = useState({
    name: false,
    description: false,
  })
  const { category, categoryDialog } = useAppSelector((state) => state.categories);

  const dispatch = useAppDispatch();

  const HandlehideDialog = () => {
    dispatch(hideCategoryDialog());
  };

  // The Input handler for change and set the data to the category state
  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setCategoryError({
      name: false,
      description: false,
    });
    const val = (e.target && e.target.value) || "";
    let _category = { ...category };

    // @ts-ignore
    _category[name] = val;

    dispatch(currentCategory(_category));
  };

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

      try {
        
        await addCategory(category).unwrap();

        RefetchCateroy();

        dispatch(currentCategory(emptyCategory));


      dispatch(hideCategoryDialog());

      AddToast.current?.show({ severity: "success", summary: "Successful", detail: "Category Added Successfully", life: 3000 });
      
    } catch (error: any) {

      if (error.status === 400 && error.data && error.data.data.messages) {
        // Extract error messages for each field
        const errorMessages = error.data.data.messages;
  
        // Set error flags for each field
        setCategoryError({
          name: errorMessages.name ? true : false,
          description: errorMessages.description ? true : false,
        });
  
        // Show error toast
        AddToast.current?.show({ severity: 'error', summary: 'Error', detail: 'Please check the form fields.', life: 3000 });
      } else {
        // Show generic error toast
        AddToast.current?.show({ severity: 'error', summary: 'Error', detail: 'An error occurred. Please try again later.', life: 3000 });
      }
      }
     
  };



  return (
    <>
    <Toast ref={AddToast} />
      <Dialog
        visible={categoryDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Category Details"
        modal
        className="p-fluid"
        onHide={HandlehideDialog}
      >
        <form onSubmit={HandleSubmit} >
          <div className="field my-4 ">
            <label htmlFor="name" className="font-bold">
              Name
            </label>

            <InputText
              id="name"
              value={category?.name}
              onChange={(e) => onInputChange(e, "name")}
              required
              autoFocus
              className={`
          w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary
           ${CategoryError.name ? "border-danger":"border-stroke"}`}
            />
            {CategoryError.name && <small className="p-error">Name is required.</small>}
          </div>

          <div className="field my-4 ">
            <label htmlFor="description" className="font-bold">
              Description
            </label>

            <InputText
              id="description"
              value={category?.description}
              type="text"
              onChange={(e) => onInputChange(e, "description")}
              required
              className={`w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${CategoryError.description ? "border-danger":"border-stroke"}`}
            />
            {CategoryError.description && (
              <small className="p-error">Description is required.</small>
            )}
          </div>
          <div className="flex justify-end gap-4.5 mt-10">
            <Button
              label="Cancel"
              icon="pi pi-times"
              className=" flex justify-center max-w-fit text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
              onClick={HandlehideDialog}
            />  
            <Button
              label="Save"
              type="submit"
              className="flex justify-center max-w-fit text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
              icon="pi pi-check"
              // onClick={HandleSubmit}
            />
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default CategoryDialog;
