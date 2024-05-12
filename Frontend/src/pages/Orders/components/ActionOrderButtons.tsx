import { Button } from 'primereact/button';
import { useAppDispatch } from '../../../app/hooks';
import { Order } from '../../../types/order';

const ActionProductButtons = (rowData: Order) => {

  const dispatch = useAppDispatch();

  const HandleEditOrder = (order: Order) => {
    console.log("the Order Viewed => ", order);
    
  };


  return (
    <>
      <Button
        icon="pi-eye"
        className="mr-2 text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white
        active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
        onClick={() => HandleEditOrder(rowData)}
      />
    </>
  );
};

export default ActionProductButtons