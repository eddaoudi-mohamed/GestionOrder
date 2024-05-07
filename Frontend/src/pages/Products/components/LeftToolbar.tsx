import { useAppDispatch } from '../../../app/hooks';
import { openProductDialog } from '../../../app/Features/ProductSlice';

const LeftToolbar = () => {

    const dispatch = useAppDispatch();

   
  return (
    <div className="flex flex-wrap gap-2 dark:bg-boxdark-2 dark:text-bodydark">
    <button
      className="inline-flex items-center gap-x-2 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none waves-effect"
      onClick={()=>{
        dispatch(openProductDialog({ActionType:"add"}));

      }}
    >
      <span
        className="p-button-icon p-c p-button-icon-left pi pi-plus"
        data-pc-section="icon"
      ></span>
      Add Product
    </button>

  </div>
  )
}

export default LeftToolbar