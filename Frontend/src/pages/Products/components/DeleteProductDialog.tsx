import { Dialog } from "primereact/dialog";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Button } from "primereact/button";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import {
  currentProduct,
  hideDeleteProductDialog,
} from "../../../app/Features/ProductSlice";
import { useDeleteProductMutation } from "../../../app/services/ProductsApiSlice";
import { emptyProduct } from "../../../types/product";

interface refetchInter {
  RefreshProduct: () => void;
}

const DeleteProductDialog = ({ RefreshProduct }: refetchInter) => {
  const DeleteToast = useRef<Toast>(null);

  const { product, deleteProductDialog } = useAppSelector(
    (state) => state.products
  );

  const dispatch = useAppDispatch();

  const [deleteProduct, {}] = useDeleteProductMutation();

  const HandlehideDeleteProductDialog = () => {
    dispatch(hideDeleteProductDialog());
  };

  const HandledeleteProduct = async () => {
    try {
      const id = product?.id;

      console.log("the Deleted Product => ", product);

      const { data } = await deleteProduct(id).unwrap();

      RefreshProduct();

      dispatch(hideDeleteProductDialog());

      dispatch(currentProduct(emptyProduct));

      DeleteToast.current?.show({
        severity: "success",
        summary: "Successful",
        detail: data.data.message,
        life: 3000,
      });
    } catch (error: any) {
      DeleteToast.current?.show({
        severity: "error",
        summary: "Error",
        detail: error.data.data.messages,
        life: 3000,
      });
      RefreshProduct();

      dispatch(hideDeleteProductDialog());

      dispatch(currentProduct(emptyProduct));
    }
  };

  const deleteProductDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal
         uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
        onClick={HandlehideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal
         uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
        onClick={HandledeleteProduct}
      />
    </>
  );

  return (
    <>
      <Toast ref={DeleteToast} />
      <Dialog
        visible={deleteProductDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
        modal
        footer={deleteProductDialogFooter}
        onHide={HandlehideDeleteProductDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {product && (
            <span>
              Are you sure you want to delete <b>{product.name}</b>?
            </span>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default DeleteProductDialog;
