import { Dialog } from "primereact/dialog"
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { currentCategory, hideDeleteCategoryDialog } from "../../../app/Features/CategorySlice";
import { Button } from "primereact/button";
import { useDeleteCategoryMutation } from "../../../app/services/CategoryApiSlice";
import { useRef } from "react";
import { Toast } from "primereact/toast";


interface refetchInter{
    RefetchCateroy: () => void;
  }

const DeleteCategoryDialog = ({RefetchCateroy}:refetchInter) => {

    const DeleteToast = useRef<Toast>(null);

    const { category, deleteCategoryDialog } = useAppSelector((state) => state.categories);

    const dispatch = useAppDispatch()

    const [deleteCategory, { }] = useDeleteCategoryMutation()


    const HandlehidDialog = () => {
        dispatch(hideDeleteCategoryDialog());
    };

    const HandledeleteCategory =async (e: React.FormEvent) => {

        e.preventDefault();
        try {

        const id = category?.id;
        deleteCategory(id);

        RefetchCateroy();

        dispatch(hideDeleteCategoryDialog());

        dispatch(currentCategory(null));
        
        DeleteToast.current?.show({
            severity: "success", summary: "Successful", detail: "Category Deleted Successfully", life: 3000,
        });

        } catch (error) {
            DeleteToast.current?.show({
                severity: "error", summary: "Error", detail: "An error occurred. Please try again later.", life: 3000,
            });
        }
    
    };




    return (
        <>
            <Toast ref={DeleteToast} />

            <Dialog
                visible={deleteCategoryDialog}
                style={{ width: "32rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                onHide={HandlehidDialog}
            >
                <form onSubmit={HandledeleteCategory}>

                    <div className="confirmation-content">
                        <i
                            className="pi pi-exclamation-triangle mr-3"
                            style={{ fontSize: "2rem" }}
                        />
                        {category && (
                            <span>
                                Are you sure you want to delete <b>{category.name}</b>?
                            </span>
                        )}
                    </div>
                    <div className="flex justify-end gap-4.5 mt-10">
                        <Button
                            label="No"
                            icon="pi pi-times"
                            className="max-w-fit text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 
                font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
                            onClick={HandlehidDialog}
                        />
                        <Button
                            type="submit"
                            label="Yes"
                            icon="pi pi-check"
                            className="max-w-fit text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600
                font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                        />
                    </div>
                </form>
            </Dialog>
        </>
    )
}

export default DeleteCategoryDialog