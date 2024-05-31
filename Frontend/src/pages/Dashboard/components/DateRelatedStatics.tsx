import { DHFormat } from "../../../helpers/MoneyFormat";
import { DateRelatedStaticsInter } from "../../../types/DashboardData";

interface DateRelatedStaticsProps {
  Data: DateRelatedStaticsInter;
  handleSelectedDate: (Date: "today" | "month" | "year") => void;
  SelectedDate: string;
}

const DateRelatedStatics = ({
  Data,
  handleSelectedDate,
  SelectedDate,
}: DateRelatedStaticsProps) => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary capitalize">
                {" "}
                MEGA {SelectedDate} State{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button
              onClick={() => handleSelectedDate("today")}
              className={
                SelectedDate == "today"
                  ? "rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark"
                  : "rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark"
              }
            >
              Today
            </button>
            <button
              onClick={() => handleSelectedDate("month")}
              className={
                SelectedDate == "month"
                  ? "rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark"
                  : "rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark"
              }
            >
              Month
            </button>
            <button
              onClick={() => handleSelectedDate("year")}
              className={
                SelectedDate == "year"
                  ? "rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark"
                  : "rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark"
              }
            >
              Year
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 my-4">
        <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full  p-5 bg-white rounded-md shadow-xl border-l-4 border-blue-300">
          <div className="flex justify-between w-full">
            <div>
              <div className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#93c5fd"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-credit-card border-blue-300"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold text-2xl">{DHFormat(Data.revenue)}</div>
            <div className="font-bold text-sm">Revenue</div>
          </div>
        </div>
        <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full  p-5 bg-white rounded-md shadow-xl border-l-4 border-purple-300">
          <div className="flex justify-between w-full">
            <div>
              <div className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d8b4fe"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-package"
                >
                  <path d="m7.5 4.27 9 5.15" />
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold text-5xl text-center">
              {Data.countOrder}
            </div>
            <div className="font-bold text-sm">Orders</div>
          </div>
        </div>
        <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full  p-5 bg-white rounded-md shadow-xl border-l-4 border-red-300">
          <div className="flex justify-between w-full">
            <div>
              <div className="p-2">
                <svg
                  className="fill-red-300"
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.18418 8.03751C9.31543 8.03751 11.0686 6.35313 11.0686 4.25626C11.0686 2.15938 9.31543 0.475006 7.18418 0.475006C5.05293 0.475006 3.2998 2.15938 3.2998 4.25626C3.2998 6.35313 5.05293 8.03751 7.18418 8.03751ZM7.18418 2.05626C8.45605 2.05626 9.52168 3.05313 9.52168 4.29063C9.52168 5.52813 8.49043 6.52501 7.18418 6.52501C5.87793 6.52501 4.84668 5.52813 4.84668 4.29063C4.84668 3.05313 5.9123 2.05626 7.18418 2.05626Z"
                    fill=""
                  />
                  <path
                    d="M15.8124 9.6875C17.6687 9.6875 19.1468 8.24375 19.1468 6.42188C19.1468 4.6 17.6343 3.15625 15.8124 3.15625C13.9905 3.15625 12.478 4.6 12.478 6.42188C12.478 8.24375 13.9905 9.6875 15.8124 9.6875ZM15.8124 4.7375C16.8093 4.7375 17.5999 5.49375 17.5999 6.45625C17.5999 7.41875 16.8093 8.175 15.8124 8.175C14.8155 8.175 14.0249 7.41875 14.0249 6.45625C14.0249 5.49375 14.8155 4.7375 15.8124 4.7375Z"
                    fill=""
                  />
                  <path
                    d="M15.9843 10.0313H15.6749C14.6437 10.0313 13.6468 10.3406 12.7874 10.8563C11.8593 9.61876 10.3812 8.79376 8.73115 8.79376H5.67178C2.85303 8.82814 0.618652 11.0625 0.618652 13.8469V16.3219C0.618652 16.975 1.13428 17.4906 1.7874 17.4906H20.2468C20.8999 17.4906 21.4499 16.9406 21.4499 16.2875V15.4625C21.4155 12.4719 18.9749 10.0313 15.9843 10.0313ZM2.16553 15.9438V13.8469C2.16553 11.9219 3.74678 10.3406 5.67178 10.3406H8.73115C10.6562 10.3406 12.2374 11.9219 12.2374 13.8469V15.9438H2.16553V15.9438ZM19.8687 15.9438H13.7499V13.8469C13.7499 13.2969 13.6468 12.7469 13.4749 12.2313C14.0937 11.7844 14.8499 11.5781 15.6405 11.5781H15.9499C18.0812 11.5781 19.8343 13.3313 19.8343 15.4625V15.9438H19.8687Z"
                    fill=""
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold text-5xl text-center">
              {Data.countClient}
            </div>
            <div className="font-bold text-sm">Clients</div>
          </div>
        </div>
        <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full  p-5 bg-white rounded-md shadow-xl border-l-4 border-green-300">
          <div className="flex justify-between w-full">
            <div>
              <div className="p-2">
                <svg
                  className="fill-green-300 dark:fill-white"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7313 1.61566 20.3844C2.20003 21.0375 2.99066 21.3813 3.85003 21.3813H18.1157C18.975 21.3813 19.8 21.0031 20.35 20.3844C20.9 19.7656 21.2094 18.9063 21.1063 18.0469ZM19.2157 19.3531C18.9407 19.6625 18.5625 19.8344 18.15 19.8344H3.85003C3.43753 19.8344 3.05941 19.6625 2.78441 19.3531C2.50941 19.0438 2.37191 18.6313 2.44066 18.2188L4.12503 3.43751C4.19378 2.71563 4.81253 2.16563 5.56878 2.16563H16.4313C17.1532 2.16563 17.7719 2.71563 17.875 3.43751L19.5938 18.2531C19.6282 18.6656 19.4907 19.0438 19.2157 19.3531Z"
                    fill=""
                  />
                  <path
                    d="M14.3345 5.29375C13.922 5.39688 13.647 5.80938 13.7501 6.22188C13.7845 6.42813 13.8189 6.63438 13.8189 6.80625C13.8189 8.35313 12.547 9.625 11.0001 9.625C9.45327 9.625 8.1814 8.35313 8.1814 6.80625C8.1814 6.6 8.21577 6.42813 8.25015 6.22188C8.35327 5.80938 8.07827 5.39688 7.66577 5.29375C7.25327 5.19063 6.84077 5.46563 6.73765 5.87813C6.6689 6.1875 6.63452 6.49688 6.63452 6.80625C6.63452 9.2125 8.5939 11.1719 11.0001 11.1719C13.4064 11.1719 15.3658 9.2125 15.3658 6.80625C15.3658 6.49688 15.3314 6.1875 15.2626 5.87813C15.1595 5.46563 14.747 5.225 14.3345 5.29375Z"
                    fill=""
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold text-5xl text-center">
              {Data.countProducts}
            </div>
            <div className="font-bold text-sm">Products</div>
          </div>
        </div>
        <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
        <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full  p-5 bg-white rounded-md shadow-xl border-l-4 border-purple-700 ">
          <div className="flex justify-between w-full">
            <div>
              <div className="p-2">
              <span
            className={`20icon material-symbols-outlined text-purple-700 `}
          >
            currency_exchange
          </span>
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold text-5xl text-center">
              {Data.refunded}
            </div>
            <div className="font-bold text-sm">Refund Orders</div>
          </div>
        </div>
        <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full  p-5 bg-white rounded-md shadow-xl border-l-4 border-blue-700 ">
          <div className="flex justify-between w-full">
            <div>
              <div className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bar-chart-big"><path d="M3 3v18h18"/><rect width="4" height="7" x="7" y="10" rx="1"/><rect width="4" height="12" x="15" y="5" rx="1"/></svg>
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold text-5xl text-center">
              {Data.sales}
            </div>
            <div className="font-bold text-sm">Sales</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateRelatedStatics;
