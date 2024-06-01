import { ApexOptions } from "apexcharts";
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { ProductsMoreSale as ProductsMoreSaleInter } from "../../../types/DashboardData";



interface TopProductsProps {
  ProductsMoreSale: ProductsMoreSaleInter;
}

const TopProducts = ({ ProductsMoreSale }: TopProductsProps) => {
  const options: ApexOptions = {
    colors: ["#3C50E0", "#80CAEE", "#8FD0EF", "#0FADCF"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "bar",
      height: 335,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "25%",
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        columnWidth: "25%",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: Object.keys(ProductsMoreSale),
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Satoshi",
      fontWeight: 500,
      fontSize: "14px",
      markers: {
        radius: 99,
      },
    },
    fill: {
      opacity: 1,
    },
  };

  const [state, setState] = useState({
    series: [
      {
        name: "Sales",
        data: Object.values(ProductsMoreSale),  //  ProductsMoreSale
      },
    ],
  });

  const handleReset = () => {
    if (ProductsMoreSale) {
      setState({
        series: [
          {
            name: "Sales",
            data: Object.values(ProductsMoreSale),
          },
        ],
      });
    }
  };

  useEffect(() => {
    handleReset();
  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Most Product Sales
          </h4>
        </div>
        <div></div>
      </div>

      <div>
        <div id="TopProducts" className="-ml-5 -mb-9">
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
