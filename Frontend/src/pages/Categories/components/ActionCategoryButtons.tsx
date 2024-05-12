import { Category } from '../../../types/category';
import { Button } from 'primereact/button';
import { useAppDispatch } from '../../../app/hooks';
import { currentCategory, openDeleteCategoryDialog } from '../../../app/Features/CategorySlice';

const ActionCategoryButtons = (rowData: Category) => {

  const dispatch = useAppDispatch();


  const confirmDeleteCategory = (category: Category) => {
    dispatch(currentCategory(category));
    dispatch(openDeleteCategoryDialog());
  };

  return (
    <> 
      <Button
        icon="pi pi-trash"
        className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={() => confirmDeleteCategory(rowData)}
      />
    </>
  );
};

export default ActionCategoryButtons