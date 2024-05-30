import DefaultLayout from "../../layout/DefaultLayout";
import { Breadcrumb } from "../Orders/components";
import { Card } from "primereact/card";
import HistoryClientCard from "./components/HistoryClientCard";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useGetClientsHistoryQuery, useSearchClientHistoryQuery } from "../../app/services/HistoryApiSlice";
import { useEffect, useState } from "react";
import { History } from "../../types/history";

const ClientHistory = () => {
  const { data, isLoading, isFetching, isSuccess } = useGetClientsHistoryQuery({});
  const [history, setHistory] = useState<any>({});
  const [SearchedHistory, setSearchedHistory] = useState<any>({});
  const [query, setQuery] = useState<string>('');
  
  const { data: searchData, isSuccess: isSearchSuccess } =
    useSearchClientHistoryQuery({ query }, { skip: !query || query == "" });

  useEffect(() => {
    if (isSuccess) {
      setHistory(data.data);
    }
  }, [data, isLoading, isFetching, isSuccess]);

  useEffect(() => {
    if (isSearchSuccess) {
      setSearchedHistory(searchData.data);
      console.log("setHistory (search) => ", SearchedHistory );
    }
  }, [searchData, isSearchSuccess]);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="History" subPageName="Client" />
      <Card>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4">
          <h1 className="text-2xl font-semibold ">Clients History</h1>
          <div className="relative">
            <span className="absolute left-4.5 top-4 dark:text-white">
              <i className="pi pi-search" />
            </span>
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-8">
          <Accordion>
            {!query || query === "" ? (
              Object.keys(history).map((date, index) => (
                <AccordionTab key={index} header={date}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {history[date].map((historyEntry: any) => (
                      <HistoryClientCard
                        key={historyEntry.id}
                        historyCltt={historyEntry}
                      />
                    ))}
                  </div>
                </AccordionTab>
              ))
            ) : (
              <AccordionTab header="Search Resulte">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {SearchedHistory.map((historyEntry: History) => (
                    <HistoryClientCard
                      key={historyEntry.id}
                      historyCltt={historyEntry}
                    />
                  ))}
                </div>
              </AccordionTab>
            )}
          </Accordion>
        </div>
      </Card>
    </DefaultLayout>
  );
};

export default ClientHistory;
