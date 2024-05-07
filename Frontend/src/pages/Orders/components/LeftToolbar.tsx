import { useAppDispatch } from '../../../app/hooks';
import { openOrderDialog } from '../../../app/Features/OrderSlice';
import { useNavigate } from 'react-router-dom';

const LeftToolbar = () => {

    const dispatch = useAppDispatch();

  const navigate = useNavigate();

    const AddHandler= ()=>{
      dispatch(openOrderDialog({ ActionType: "add" }));
      navigate("add");
      
    }
   
  return (
    <div className="flex flex-wrap gap-2 dark:bg-boxdark-2 dark:text-bodydark">
    <button
      className="inline-flex items-center gap-x-2 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none waves-effect"
      onClick={AddHandler}
    >
      <span
        className="p-button-icon p-c p-button-icon-left pi pi-plus"
        data-pc-section="icon"
      ></span>
      Add Order
    </button>

  </div>
  )
}

export default LeftToolbar