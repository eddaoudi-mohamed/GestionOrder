import { DHFormat } from "../../../helpers/MoneyFormat";
import { OrderProduct } from "../../../types/orderItem";

interface Props {
  product: OrderProduct;
}

const CustomerCart: React.FC<Props> = ({ product }) => {

  const {
    name,
    description,
    pivot,
    price,
    image,
  } = product;
  return (
    <>
      <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
        <div className="pb-4 md:pb-8 w-full md:w-40">
          <img
            className="w-full hidden md:block"
            src={`${image}`}
            alt={`${name}`}
          />
          <img className="w-full md:hidden" src={`${image}`} alt={`${name}`} />
        </div>
        <div className="md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
          <div className="w-full flex flex-col justify-start items-start space-y-8">
            <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-black">
              {name}
            </h3>
            <div className="flex justify-start items-start flex-col space-y-2">
              <h4 className="text-meta-4 dark:text-white xl:text-lg leading-6">
                Descriptoin :{" "}
              </h4>
              <p className="line-clamp-3">{description}</p>
            </div>
          </div>
          <div className="flex justify-between space-x-8 items-start w-full">
            <p className="text-black dark:text-white xl:text-lg leading-6">
              {DHFormat(price)}
            </p>
            <div className="flex h-6 w-12 p-4 items-center justify-center rounded-full bg-primary">
              <span className="text-sm text-center font-medium text-white">
                {" "}
                {pivot.quantity}{" "}
              </span>
            </div>
            <p className="dark:text-white xl:text-lg font-semibold leading-6 text-primary">
              {DHFormat(pivot.totale)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerCart;
