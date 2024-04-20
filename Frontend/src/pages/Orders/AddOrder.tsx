import { useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";

interface Product {
  productName: string;
  quantity: string;
  price: string;
}

const AddOrder = () => {
  const [rows, setRows] = useState<Product[]>([
    { productName: "", quantity: "", price: "" },
  ]);

  const handleAddRow = () => {
    setRows([...rows, { productName: "", quantity: "", price: "" }]);
  };

  const handleInputChange = (index: number, value: string, field: string) => {
    const updatedRows = [...rows];

    updatedRows[index][field as keyof (typeof updatedRows)[0]] = value;

    setRows(updatedRows);
  };

  const handleDeleteRow = (index: number) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Add Order" />
      <div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={row.productName}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        e.target.value as any,
                        "productName"
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.quantity}
                    onChange={(e) =>
                      handleInputChange(index, "quantity", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.price}
                    onChange={(e) =>
                      handleInputChange(index, "price", e.target.value)
                    }
                  />
                </td>
                <td>
                  <button onClick={() => handleDeleteRow(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleAddRow}>Add Row</button>
      </div>
    </DefaultLayout>
  );
};

export default AddOrder;