import { Fragment } from 'react'
import { Client } from '../../../types/client';
import { Button } from 'primereact/button';
import { useAppDispatch } from '../../../app/hooks';
import { currentClient, openClientDialog, openDeleteClientDialog } from '../../../app/Features/ClientSlice';

const ActionClientButtons = (rowData: Client) => {

  const dispatch = useAppDispatch();

  const HandleShowClient = (client: Client) => {
    dispatch(currentClient(client));
    dispatch(openClientDialog({ ActionType: "edit" }));
  };

  const HandleEditClient = (client: Client) => {
    dispatch(currentClient(client));
    dispatch(openClientDialog({ ActionType: "edit" }));
  };

  const confirmDeleteClient = (client: Client) => {
    dispatch(currentClient(client));
    dispatch(openDeleteClientDialog());
  };

  return (
    <Fragment>
      <Button
        icon="pi pi-pencil"
        className="mr-2 text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white
        active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
        onClick={() => HandleShowClient(rowData)}
      />
      <Button
        icon="pi pi-pencil"
        className="mr-2 text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white
        active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
        onClick={() => HandleEditClient(rowData)}
      />

      <Button
        icon="pi pi-trash"
        className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bol
        uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={() => confirmDeleteClient(rowData)}
      />
    </Fragment>
  );
};

export default ActionClientButtons