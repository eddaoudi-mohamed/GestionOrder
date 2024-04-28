import { useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import 'primeicons/primeicons.css';
import { Client } from '../../types/client';
import { useGetClietsQuery } from '../../app/services/ClientsApiSlice';
import ClientDialog from './components/ClientDialog';
import TableHeader from './components/TableHeader';
import DeleteClientDialog from './components/DeleteClientDialog';
import ActionClientButtons from './components/ActionClientButtons';
import LeftToolbar from './components/LeftToolbar';
import RightToolbar from './components/RightToolbar';

export default function ListClients() {
  
  
  const { data: clients = [], error, isLoading } = useGetClietsQuery();

  // console.log("what come form the backend => ", clients?.data);
  
  if (error) {
    console.log(error);
    
  }
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<Client[]>>(null);
  


  return (
    <DefaultLayout>
      <Breadcrumb pageName="Clients" />

      <div>
        <Toast ref={toast} />
        <div className="card">
          <Toolbar
            className="mb-4"
            left={LeftToolbar}
            right={<RightToolbar  />}
          ></Toolbar>

          <DataTable
            className="dark:bg-boxdark-2 dark:text-bodydark"
            ref={dt}
            value={clients?.data}
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            // globalFilter={globalFilter}
            header={TableHeader}
            emptyMessage="There's no Clients To Manage In The Current State "
          >
            <Column selectionMode="multiple" exportable={false}></Column>
            <Column
              field="name"
              header="Name"
              sortable
            ></Column>
            <Column
              field="email"
              header="Email"
              sortable
            ></Column>
            <Column
              field="phone"
              header="Phone"
              sortable
            ></Column>
            <Column
              body={ActionClientButtons}
              exportable={true}
            ></Column>
          </DataTable>
        </div>

       

        <ClientDialog    />
        <DeleteClientDialog />
       
      </div>
    </DefaultLayout>
  );
}
        


