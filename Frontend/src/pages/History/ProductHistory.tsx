import { Card } from "primereact/card";
import DefaultLayout from "../../layout/DefaultLayout"
import { Breadcrumb } from "../Orders/components"
import HistoryProductCard from "./components/HistoryProductCard";


const ProductHistory = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="History" subPageName="Order" />
      <Card>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="m-0">Manage Orders</h4>
          <div className="relative">
            <span className="absolute left-4.5 top-4 dark:text-white">
              <i className="pi pi-search" />
            </span>
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
              onChange={(e) => e}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
          <HistoryProductCard />
        </div>
      </Card>
    </DefaultLayout>
  );
}

export default ProductHistory