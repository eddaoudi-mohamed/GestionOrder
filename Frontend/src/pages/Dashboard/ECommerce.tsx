import ChartTwo from "../../components/Charts/ChartTwo";
import MapOne from "../../components/Maps/MapOne";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { useEffect, useState } from "react";
import {
  useGetDashboardStaticsQuery,
  useGetStaticsByQuery,
} from "../../app/services/DashboardApiSlice";
import ChatCard from "../../components/Chat/ChatCard";
import TopClients from "./TopClient";
import GlobalStatics from "./GlobalStatics";
import { TopClient } from "../../types/DashboardData";
import RevenueLineChart from "./RevenueLineChart";
import Loader from "../../common/Loader";
import ProductCategoriesChart from "../../components/Charts/ProductCategoriesChart";

const ECommerce = () => {
  const { data, isLoading, isFetching, isSuccess } =
    useGetDashboardStaticsQuery();

  const [selectedDate, setSelectedDate] = useState<"today" | "month" | "year">(
    "today"
  );
  const [GlobaleStaticsState, setGlobaleStatics] = useState({
    allClient: "",
    allProducts: "",
    allOrders: "",
    revenueTotale: "",
  });
  const [ProductCategoriesState, setProductCategories] = useState([]);
  const [TopClientsState, setTopClients] = useState<TopClient[]>([]);
  const [RevenuByMonthState, setRevenuByMonth] = useState<any>();
  const [ProductsMoreSaleState, setProductsMoreSale] = useState({});

  const {
    data: filteredData,
    isSuccess: isFilteredSuccess,
    isLoading: isFliteredLoading,
  } = useGetStaticsByQuery({ date: selectedDate });
  console.log("the filtered data => ", filteredData);

  useEffect(() => {
    if (isSuccess) {
      const {
        allClient,
        allProducts,
        allOrders,
        revenueTotale,
        categories,
        topClients,
        revenuByMonth,
        ProductsMoreSale,
      } = data;
      setGlobaleStatics({ allClient, allProducts, allOrders, revenueTotale });
      setProductCategories(categories);
      setTopClients(topClients);
      setRevenuByMonth(revenuByMonth);
      setProductsMoreSale(ProductsMoreSale);
      console.log("Dashboard data: ", data);
    }
  }, [data, isLoading, isFetching, isSuccess]);

  useEffect(() => {
    if (isFilteredSuccess) {
      console.log(`Filtered data (${selectedDate}): `, filteredData);
    }
  }, [filteredData, isFilteredSuccess, selectedDate]);

  return isLoading && isFliteredLoading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Breadcrumb pageName="Home" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <GlobalStatics GlobalStatics={GlobaleStaticsState} />
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">

        <RevenueLineChart revenuByMonth={RevenuByMonthState} />
        <ChartTwo />
        <ProductCategoriesChart categories={ProductCategoriesState} />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TopClients topClients={TopClientsState} />
        </div>
        <ChatCard />
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
