import { useEffect } from 'react'
import { useGetClietQuery } from '../../../app/services/ClientsApiSlice'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { handleClientDetailsDialog } from '../../../app/Features/ClientSlice';
import { Dialog } from 'primereact/dialog';

const ShowClientDailog = () => {

  const dispatch = useAppDispatch();

  const { client,ClientDetailsDialog } = useAppSelector((state) => state.clients);

  const getClient= useGetClietQuery(client.id)

  useEffect(() => {
    if (getClient.isSuccess) {

      const fetchedOrderData = getClient.data;

      const { data } = fetchedOrderData.data;
    }
  }, [getClient.isSuccess, dispatch]);

  const HandlehideDetailsDialog = () => {
    dispatch(handleClientDetailsDialog(false));

  };



  return (
    <>
    
    <Dialog
        visible={ClientDetailsDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Client Details"
        modal
        className="p-fluid"
        onHide={HandlehideDetailsDialog}
      >

      </Dialog>
    
    
    </>
  )
}

export default ShowClientDailog