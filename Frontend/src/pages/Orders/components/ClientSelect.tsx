import { useState } from "react";
import Select from "react-tailwindcss-select";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setClientOrder } from "../../../app/Features/OrderSlice";



const ClientSelect = () => {

  const { clients } = useAppSelector((state) => state.clients);
const dispatch = useAppDispatch()
  // Transform the clients array into options array
  const options = clients.map((client) => ({
    value: client.id,
    label: `${client.email}`,
  }));

  const [client, setClient] = useState(null);

  const handleChange = (value: any) => {
    console.log("value:", value.value);
    setClient(value);
    dispatch(setClientOrder(value.value))
  };

  return (
    <Select
      value={client}
      onChange={handleChange}
      options={options}
      primaryColor={"cyan"}
      isSearchable
      isClearable
      />
  );
};

export default ClientSelect;