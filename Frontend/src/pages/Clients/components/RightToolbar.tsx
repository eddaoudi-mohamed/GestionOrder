import { Button } from 'primereact/button'
import { DataTable } from 'primereact/datatable'
import { useRef } from 'react'
import { Client } from '../../../types/client'

const RightToolbar = () => {

  const dt = useRef<DataTable<Client[]>>(null);

  return (
    <Button
    label="Export"
    icon="pi pi-upload"
    className="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    onClick={()=>{
    dt.current?.exportCSV();
    }}
  />
  )
}

export default RightToolbar