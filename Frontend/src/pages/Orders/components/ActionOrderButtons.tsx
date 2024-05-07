import { Fragment } from 'react'
import { Product } from '../../../types/product';
import { Button } from 'primereact/button';
import { useAppDispatch } from '../../../app/hooks';
import { currentProduct, openProductDialog, openDeleteProductDialog } from '../../../app/Features/ProductSlice';

const ActionProductButtons = (rowData: Product) => {

  const dispatch = useAppDispatch();

  const HandleEditProduct = (product: Product) => {
    dispatch(currentProduct(product));
    dispatch(openProductDialog({ ActionType: "edit" }));
  };

  const confirmDeleteProduct = (product: Product) => {
    dispatch(currentProduct(product));
    dispatch(openDeleteProductDialog());
  };

  return (
    <Fragment>
      <Button
        icon="pi pi-pencil"
        className="mr-2 text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white
        active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
        onClick={() => HandleEditProduct(rowData)}
      />

      <Button
        icon="pi pi-trash"
        className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bol
        uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={() => confirmDeleteProduct(rowData)}
      />
    </Fragment>
  );
};

export default ActionProductButtons