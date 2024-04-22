import React, { useState, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { FloatLabel } from 'primereact/floatlabel';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import 'primeicons/primeicons.css';
import { Client } from '../../types/client';
import statusBodyTemplate from './components/StatusBodyTemplate';

export default function ListClients() {
    let emptyClient: Client = {
       id: null,
       name: '',
       email: '',
       phone: "",
       status: '',
    };

    const [clients, setClients] = useState<Client[]>([
        {
          "id": "1",
          "name": "John Doe",
          "email": "john@example.com",
          "phone": "123-456-7890",
          "status": "Active"
        },
        {
          "id": "2",
          "name": "Jane Smith",
          "email": "jane@example.com",
          "phone": "987-654-3210",
          "status": "Inactive"
        },
        {
          "id": "3",
          "name": "Alice Johnson",
          "email": "alice@example.com",
          "phone": "555-555-5555",
          "status": "Pending"
        },
        {
          "id": "4",
          "name": "Bob Brown",
          "email": "bob@example.com",
          "phone": "111-222-3333",
          "status": "Active"
        },
        {
          "id": "5",
          "name": "Emma Wilson",
          "email": "emma@example.com",
          "phone": "444-555-6666",
          "status": "Inactive"
        },
        {
          "id": "6",
          "name": "Michael Davis",
          "email": "michael@example.com",
          "phone": "777-888-9999",
          "status": "Pending"
        },
        {
          "id": "7",
          "name": "Sophia Garcia",
          "email": "sophia@example.com",
          "phone": "333-666-9999",
          "status": "Active"
        },
        {
          "id": "8",
          "name": "David Martinez",
          "email": "david@example.com",
          "phone": "111-777-3333",
          "status": "Inactive"
        },
        {
          "id": "9",
          "name": "Olivia Lopez",
          "email": "olivia@example.com",
          "phone": "999-888-7777",
          "status": "Pending"
        },
        {
          "id": "10",
          "name": "William Clark",
          "email": "william@example.com",
          "phone": "666-555-4444",
          "status": "Active"
        },
        {
          "id": "11",
          "name": "Isabella Adams",
          "email": "isabella@example.com",
          "phone": "222-888-9999",
          "status": "Inactive"
        },
        {
          "id": "12",
          "name": "James Moore",
          "email": "james@example.com",
          "phone": "555-999-1111",
          "status": "Pending"
        },
        {
          "id": "13",
          "name": "Sophia Baker",
          "email": "sophia.b@example.com",
          "phone": "222-333-4444",
          "status": "Active"
        },
        {
          "id": "14",
          "name": "Lucas Stewart",
          "email": "lucas@example.com",
          "phone": "888-999-0000",
          "status": "Inactive"
        },
        {
          "id": "15",
          "name": "Emily Rivera",
          "email": "emily@example.com",
          "phone": "444-555-6666",
          "status": "Pending"
        },
        {
          "id": "16",
          "name": "Benjamin Gray",
          "email": "benjamin@example.com",
          "phone": "666-777-8888",
          "status": "Active"
        },
        {
          "id": "17",
          "name": "Mia Rodriguez",
          "email": "mia@example.com",
          "phone": "333-777-1111",
          "status": "Inactive"
        },
        {
          "id": "18",
          "name": "Alexander Wright",
          "email": "alexander@example.com",
          "phone": "999-555-6666",
          "status": "Pending"
        },
        {
          "id": "19",
          "name": "Charlotte Hill",
          "email": "charlotte@example.com",
          "phone": "111-555-8888",
          "status": "Active"
        },
        {
          "id": "20",
          "name": "Ethan Russell",
          "email": "ethan@example.com",
          "phone": "777-333-2222",
          "status": "Inactive"
        }
      ]
      );

    const [ clientDialog, setClientDialog] = useState<boolean>(false);
    const [deleteClientDialog, setDeleteClientDialog] = useState<boolean>(false);
    const [deleteClientsDialog, setdeleteClientsDialog] = useState<boolean>(false);
    const [client, setClient] = useState<Client>(emptyClient);
    const [selectedClients, setSelectedClients] = useState<Client[]>([]);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [globalFilter, setGlobalFilter] = useState<string>('');
    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<Client[]>>(null);

    const openNew = () => {
      setClient(emptyClient);
        setSubmitted(false);
        setClientDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setClientDialog(false);
    };

    const hideDeleteClientDialog = () => {
        setDeleteClientDialog(false);
    };

    const hidedeleteClientsDialog = () => {
        setdeleteClientsDialog(false);
    };

    const saveClient = () => {
        setSubmitted(true);

        if (client.name.trim()) {
            let _clients = [...clients];
            let _client = { ...client };

            if (client.id) {
                const index = findIndexById(client.id);

                _clients[index] = _client;
                toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Client Updated', life: 3000 });
            } else {
                _client.id = createId();
                _clients.push(_client);
                toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Client Created', life: 3000 });
            }

            setClients(_clients);
            setClientDialog(false);
            setClient(emptyClient);
        }
    };

    const editClient = (client: Client) => {
        setClient({ ...client });
        setClientDialog(true);
    };

    const confirmDeleteClient = (client: Client) => {
        setClient(client);
        setDeleteClientDialog(true);
    };

    const deleteClient = () => {
        let _clients = clients.filter((val) => val.id !== client.id);

        setClients(_clients);
        setDeleteClientDialog(false);
        setClient(emptyClient);
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Client Deleted', life: 3000 });
    };

    const findIndexById = (id: string) => {
        let index = -1;

        for (let i = 0; i < clients.length; i++) {
            if (clients[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const createId = (): string => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    };

    const exportCSV = () => {
        dt.current?.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setdeleteClientsDialog(true);
    };

    const deleteSelectedClients = () => {
        let _clients = clients.filter((val) => !selectedClients.includes(val));

        setClients(_clients);
        setdeleteClientsDialog(false);
        setSelectedClients([]);
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Clients Deleted', life: 3000 });
    };

    const onStatusChange = (e: RadioButtonChangeEvent) => {
        let _client = { ...client };

        _client['status'] = e.value;
        setClient(_client);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _client = { ...client };

        // @ts-ignore
        _client[name] = val;

        setClient(_client);
    };

    const leftToolbarTemplate = () => {
        return (
          <div className="flex flex-wrap gap-2 dark:bg-boxdark-2 dark:text-bodydark">
            <button className="inline-flex items-center gap-x-2 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none waves-effect"
              onClick={openNew}
            >
            <span className="p-button-icon p-c p-button-icon-left pi pi-plus" data-pc-section="icon"></span>
            New
          </button>
          {!selectedClients || !selectedClients.length?"":
             <button
              type="button"
              className="w-full inline-flex items-center gap-x-2 rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700  sm:ml-3 sm:w-auto sm:text-sm"
              onClick={confirmDeleteSelected}
              
            >
                <span className="p-button-icon p-c p-button-icon-left pi pi-trash" data-pc-section="icon"></span>
              Delete
            </button>
          }
          </div>
        );
    };

    const rightToolbarTemplate = () => {
        return (
          <Button
            label="Export"
            icon="pi pi-upload"
            className="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={exportCSV}
          />
        );
    };


   
    const actionBodyTemplate = (rowData: Client) => {
        return (
          <React.Fragment>
            <Button
              icon="pi pi-pencil"
              className="mr-2 text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
              onClick={() => editClient(rowData)}
            />

            <Button
              icon="pi pi-trash"
              className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={() => confirmDeleteClient(rowData)}
            />
          </React.Fragment>
        );
    };


    const header = (
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h4 className="m-0">Manage Clients</h4>
        <div className="relative">
          <span className='absolute left-4.5 top-4 dark:text-white' >
          <i className="pi pi-search" />
          </span>
          <input
            type="search"
            placeholder="Search..."
            className='w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              setGlobalFilter(target.value);
            }}
          />
        </div>
      </div>
    );
    const clientDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" 
            className='text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4' 
            onClick={hideDialog} />
            <Button label="Save"
            className='text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150'
            icon="pi pi-check" onClick={saveClient} />
        </React.Fragment>
    );
    const deleteClientDialogFooter = (
      <React.Fragment>
        <Button
          label="No"
          icon="pi pi-times"
          className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
          onClick={hideDeleteClientDialog}
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          className="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
          onClick={deleteClient}
        />
      </React.Fragment>
    );
    const deleteClientsDialogFooter = (
      <React.Fragment>
        <Button
          label="No"
          icon="pi pi-times"
          className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
          onClick={hidedeleteClientsDialog}
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          className="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
          onClick={deleteSelectedClients}
        />
      </React.Fragment>
    );

    return (
      <DefaultLayout>
        <Breadcrumb pageName="Clients" />

        <div>
          <Toast ref={toast} />
          <div className="card">
            <Toolbar
              className="mb-4"
              left={leftToolbarTemplate}
              right={rightToolbarTemplate}
            ></Toolbar>

            <DataTable
            className='dark:bg-boxdark-2 dark:text-bodydark'
              ref={dt}
              value={clients}
              selection={selectedClients}
              onSelectionChange={(e) => {
                if (Array.isArray(e.value)) {
                  setSelectedClients(e.value);
                }
              }}
              dataKey="id"
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25]}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
              globalFilter={globalFilter}
              header={header}
              selectionMode="multiple"
            >
              <Column selectionMode="multiple" exportable={false}></Column>
              <Column
                field="name"
                header="Name"
                sortable
                style={{ minWidth: "16rem" }}
              ></Column>
              <Column
                field="email"
                header="Email"
                sortable
                style={{ minWidth: "16rem" }}
              ></Column>
              <Column
                field="phone"
                header="Phone"
                sortable
                style={{ minWidth: "16rem" }}
              ></Column>
              <Column
                field="status"
                header="Status"
                body={statusBodyTemplate}
                sortable
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                body={actionBodyTemplate}
                exportable={false}
                style={{ minWidth: "12rem" }}
              ></Column>
            </DataTable>
          </div>

          <Dialog
            visible={clientDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Product Details"
            modal
            className="p-fluid"
            footer={clientDialogFooter}
            onHide={hideDialog}
          >
            <div className="field">
              <label htmlFor="name" className="font-bold">
                Name
              </label>

              <InputText
                id="name"
                value={client.name}
                onChange={(e) => onInputChange(e, "name")}
                required
                className={`
                            w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary
                            ${classNames({ "p-invalid": submitted && !client.name })}`}
              />
              {submitted && !client.name && (
                <small className="p-error">Name is required.</small>
              )}
            </div>

            <div className="field">
              <label htmlFor="email" className="font-bold">
                Email
              </label>

              <InputText
                id="email"
                value={client.email}
                onChange={(e) => onInputChange(e, "email")}
                required
                autoFocus
                className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary 
                            ${classNames({ "p-invalid": submitted && !client.email })}`}
              />
              {submitted && !client.email && (
                <small className="p-error">Email is required.</small>
              )}
            </div>

            <div className="field">
              <label htmlFor="phone" className="font-bold">
                Phone
              </label>
              <InputText
                id="phone"
                value={client.phone}
                onChange={(e) => onInputChange(e, "phone")}
                required
                autoFocus
                className={`
              w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary
              ${classNames({ "p-invalid": submitted && !client.phone })}`}
              />
              {submitted && !client.phone && (
                <small className="p-error">Phone is required.</small>
              )}
            </div>

            <div className="my-5">
              <label className="mb-3 font-bold">Status</label>
              <div className="grid grid-cols-3 gap-4 my-5">
                <div className="field-radiobutton col-6">
                   <label
                    htmlFor="status1"
                    className="flex cursor-pointer select-none items-center gap-2"
                  > <RadioButton
                    inputId="status1"
                    name="staus"
                    value="Active"
                    onChange={onStatusChange}
                    checked={client.status === "Active"}
                  />
                
                    Active
                  </label>
                </div>
                <div className="field-radiobutton col-6">
                 <label className='flex cursor-pointer select-none items-center gap-2' htmlFor="status3">  <RadioButton
                    inputId="status3"
                    name="status"
                    value="Pending"
                    onChange={onStatusChange}
                    checked={client.status === "Pending"}
                  />
                 Pending</label>
                </div>
                <div className="field-radiobutton col-6">
                  <label className='flex cursor-pointer select-none items-center gap-2' htmlFor="status2">
                    <RadioButton
                    inputId="status2"
                    name="status"
                    value="Inactive"
                    onChange={onStatusChange}
                    checked={client.status === "Inactive"}
                  />
                  Inactive</label>
                </div>
              </div>
            </div>
          </Dialog>


          <Dialog
            visible={deleteClientDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Confirm"
            modal
            footer={deleteClientDialogFooter}
            onHide={hideDeleteClientDialog}
          >
            <div className="confirmation-content">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem" }}
              />
              {client && (
                <span>
                  Are you sure you want to delete <b>{client.name}</b>?
                </span>
              )}
            </div>
          </Dialog>

          <Dialog
            visible={deleteClientsDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Confirm"
            modal
            footer={deleteClientsDialogFooter}
            onHide={hidedeleteClientsDialog}
          >
            <div className="confirmation-content">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem" }}
              />
              {client && (
                <span>
                  Are you sure you want to delete the selected clients?
                </span>
              )}
            </div>
          </Dialog>
        </div>
      </DefaultLayout>
    );
}
        


