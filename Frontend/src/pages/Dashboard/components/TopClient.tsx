import React from "react";
import { Avatar } from "primereact/avatar";
import { TopClient } from "../../../types/DashboardData";
import { DHFormat } from "../../../helpers/MoneyFormat";

interface TopClientsProps {
  topClients: TopClient[];
}

const TopClients: React.FC<TopClientsProps> = ({ topClients }) => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Clients
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Revenues
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Numver Order
            </h5>
          </div>
        </div>

        {topClients.map((client, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-3 ${
              key === topClients.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Avatar icon="pi pi-user" size="large" shape="circle" />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {client.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{DHFormat(client.paid)}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{client.order_count} Order</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopClients;
