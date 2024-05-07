
interface TableHeaderProp {
  handleSearch:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

const TableHeader = ({handleSearch}:TableHeaderProp) => {


  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h4 className="m-0">Manage Clients</h4>
      <div className="relative">
        <span className="absolute left-4.5 top-4 dark:text-white">
          <i className="pi pi-search" />
        </span>
        <input
          type="search"
          placeholder="Search..."
          className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          onChange={(e) => handleSearch(e)}
        />
      </div>
    </div>
  )
}

export default TableHeader