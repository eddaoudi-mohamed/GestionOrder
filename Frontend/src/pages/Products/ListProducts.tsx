import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import DefaultLayout from "../../layout/DefaultLayout"
import React, { useState, useRef, ChangeEvent } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';

interface Product {
  id: string | null;
  code: string;
  name: string;
  description: string;
  image: string | null;
  price: number;
  category: string | null;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

export default function ListProduts() {
  let emptyProduct: Product = {
    id: null,
    code: '',
    name: '',
    image: null,
    description: '',
    category: null,
    price: 0,
    quantity: 0,
    rating: 0,
    inventoryStatus: 'INSTOCK',
  };

  const [products, setProducts] = useState<Product[]>([
    {
      "id": "1",
      "code": "P001",
      "name": "Product 1",
      "description": "Description for Product 1",
      "image": "image1.jpg",
      "price": 10.99,
      "category": "Category A",
      "quantity": 100,
      "inventoryStatus": "In Stock",
      "rating": 4.5
    },
    {
      "id": "2",
      "code": "P002",
      "name": "Product 2",
      "description": "Description for Product 2",
      "image": "image2.jpg",
      "price": 20.49,
      "category": "Category B",
      "quantity": 150,
      "inventoryStatus": "In Stock",
      "rating": 3.8
    },
    {
      "id": "3",
      "code": "P003",
      "name": "Product 3",
      "description": "Description for Product 3",
      "image": "image3.jpg",
      "price": 15.99,
      "category": "Category A",
      "quantity": 120,
      "inventoryStatus": "Out of Stock",
      "rating": 4.2
    },
    {
      "id": "4",
      "code": "P004",
      "name": "Product 4",
      "description": "Description for Product 4",
      "image": "image4.jpg",
      "price": 25.99,
      "category": "Category C",
      "quantity": 90,
      "inventoryStatus": "In Stock",
      "rating": 4.9
    },
    {
      "id": "5",
      "code": "P005",
      "name": "Product 5",
      "description": "Description for Product 5",
      "image": "image5.jpg",
      "price": 12.49,
      "category": "Category B",
      "quantity": 200,
      "inventoryStatus": "Out of Stock",
      "rating": 3.6
    },
    {
      "id": "6",
      "code": "P006",
      "name": "Product 6",
      "description": "Description for Product 6",
      "image": "image6.jpg",
      "price": 18.99,
      "category": "Category A",
      "quantity": 180,
      "inventoryStatus": "In Stock",
      "rating": 4.1
    },
    {
      "id": "7",
      "code": "P007",
      "name": "Product 7",
      "description": "Description for Product 7",
      "image": "image7.jpg",
      "price": 22.99,
      "category": "Category C",
      "quantity": 130,
      "inventoryStatus": "Out of Stock",
      "rating": 4.7
    },
    {
      "id": "8",
      "code": "P008",
      "name": "Product 8",
      "description": "Description for Product 8",
      "image": "image8.jpg",
      "price": 16.49,
      "category": "Category B",
      "quantity": 150,
      "inventoryStatus": "In Stock",
      "rating": 3.9
    },
    {
      "id": "9",
      "code": "P009",
      "name": "Product 9",
      "description": "Description for Product 9",
      "image": "image9.jpg",
      "price": 19.99,
      "category": "Category A",
      "quantity": 160,
      "inventoryStatus": "Out of Stock",
      "rating": 4.4
    },
    {
      "id": "10",
      "code": "P010",
      "name": "Product 10",
      "description": "Description for Product 10",
      "image": "image10.jpg",
      "price": 14.99,
      "category": "Category C",
      "quantity": 170,
      "inventoryStatus": "In Stock",
      "rating": 4.6
    },
    {
      "id": "11",
      "code": "P011",
      "name": "Product 11",
      "description": "Description for Product 11",
      "image": "image11.jpg",
      "price": 27.49,
      "category": "Category B",
      "quantity": 140,
      "inventoryStatus": "Out of Stock",
      "rating": 3.7
    },
    {
      "id": "12",
      "code": "P012",
      "name": "Product 12",
      "description": "Description for Product 12",
      "image": "image12.jpg",
      "price": 17.99,
      "category": "Category A",
      "quantity": 190,
      "inventoryStatus": "In Stock",
      "rating": 4.0
    },
    {
      "id": "13",
      "code": "P013",
      "name": "Product 13",
      "description": "Description for Product 13",
      "image": "image13.jpg",
      "price": 23.99,
      "category": "Category C",
      "quantity": 110,
      "inventoryStatus": "Out of Stock",
      "rating": 4.8
    },
    {
      "id": "14",
      "code": "P014",
      "name": "Product 14",
      "description": "Description for Product 14",
      "image": "image14.jpg",
      "price": 21.49,
      "category": "Category B",
      "quantity": 160,
      "inventoryStatus": "In Stock",
      "rating": 3.9
    },
    {
      "id": "15",
      "code": "P015",
      "name": "Product 15",
      "description": "Description for Product 15",
      "image": "image15.jpg",
      "price": 13.99,
      "category": "Category A",
      "quantity": 180,
      "inventoryStatus": "Out of Stock",
      "rating": 4.3
    },
    {
      "id": "16",
      "code": "P016",
      "name": "Product 16",
      "description": "Description for Product 16",
      "image": "image16.jpg",
      "price": 29.99,
      "category": "Category C",
      "quantity": 120,
      "inventoryStatus": "In Stock",
      "rating": 4.9
    },
    {
      "id": "17",
      "code": "P017",
      "name": "Product 17",
      "description": "Description for Product 17",
      "image": "image17.jpg",
      "price": 18.49,
      "category": "Category B",
      "quantity": 140,
      "inventoryStatus": "Out of Stock",
      "rating": 3.8
    },
    {
      "id": "18",
      "code": "P018",
      "name": "Product 18",
      "description": "Description for Product 18",
      "image": "image18.jpg",
      "price": 24.99,
      "category": "Category A",
      "quantity": 150,
      "inventoryStatus": "In Stock",
      "rating": 4.2
    },
    {
      "id": "19",
      "code": "P019",
      "name": "Product 19",
      "description": "Description for Product 19",
      "image": "image19.jpg",
      "price": 16.99,
      "category": "Category C",
      "quantity": 130,
      "inventoryStatus": "Out of Stock",
      "rating": 3.7
    },
    {
      "id": "20",
      "code": "P020",
      "name": "Product 20",
      "description": "Description for Product 20",
      "image": "image20.jpg",
      "price": 22.99,
      "category": "Category B",
      "quantity": 170,
      "inventoryStatus": "In Stock",
      "rating": 4.5
    }
  ]
  );
  
  const [productDialog, setProductDialog] = useState<boolean>(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState<boolean>(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<Product[]>>(null);


  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  const openNew = () => {
    setProduct(emptyProduct);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const saveProduct = () => {
    setSubmitted(true);

    if (product.name.trim()) {
      let _products = [...products];
      let _product = { ...product };

      if (product.id) {
        const index = findIndexById(product.id);

        _products[index] = _product;
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
      } else {
        _product.id = createId();
        _product.image = 'product-placeholder.svg';
        _products.push(_product);
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
      }

      setProducts(_products);
      setProductDialog(false);
      setProduct(emptyProduct);
    }
  };

  const editProduct = (product: Product) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  const confirmDeleteProduct = (product: Product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProduct = () => {
    let _products = products.filter((val) => val.id !== product.id);

    setProducts(_products);
    setDeleteProductDialog(false);
    setProduct(emptyProduct);
    toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
  };

  const findIndexById = (id: string) => {
    let index = -1;

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const createId = (): string => {
    let id = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
  };

  const exportCSV = () => {
    dt.current?.exportCSV();
  };

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val));

    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts([]);
    toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
  };

  const onCategoryChange = (e: RadioButtonChangeEvent) => {
    let _product = { ...product };

    _product['category'] = e.value;
    setProduct(_product);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const val = (e.target && e.target.value) || '';
    let _product = { ...product };

    // @ts-ignore
    _product[name] = val;

    setProduct(_product);
  };

  const onInputTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>, name: string) => {
    const val = (e.target && e.target.value) || '';
    let _product = { ...product };

    // @ts-ignore
    _product[name] = val;

    setProduct(_product);
  };

  const onInputNumberChange = (e: InputNumberValueChangeEvent, name: string) => {
    const val = e.value ?? 0;
    let _product = { ...product };

    // @ts-ignore
    _product[name] = val;

    setProduct(_product);
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2 dark:bg-boxdark-2 dark:text-bodydark">
        <button
          className="inline-flex items-center gap-x-2 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none waves-effect"
          onClick={openNew}
        >
          <span
            className="p-button-icon p-c p-button-icon-left pi pi-plus"
            data-pc-section="icon"
          ></span>
          New
        </button>
        {!selectedProducts || !selectedProducts.length ? (
          ""
        ) : (
          <button
            type="button"
            className="w-full inline-flex items-center gap-x-2 rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700  sm:ml-3 sm:w-auto sm:text-sm"
            onClick={confirmDeleteSelected}
          >
            <span
              className="p-button-icon p-c p-button-icon-left pi pi-trash"
              data-pc-section="icon"
            ></span>
            Delete
          </button>
        )}
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return <Button label="Export"
      icon="pi pi-upload"
      className="inline-flex items-center gap-x-2 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-purple-500 rounded shadow ripple hover:shadow-lg hover:bg-purple-600 focus:outline-none waves-effect"
      onClick={exportCSV} />;
  };

  const imageBodyTemplate = (rowData: Product) => {
    return <img src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`} alt={rowData.image!} className="shadow-2 border-round" style={{ width: '64px' }} />;
  };

  const priceBodyTemplate = (rowData: Product) => {
    return formatCurrency(rowData.price);
  };

  const ratingBodyTemplate = (rowData: Product) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (rowData: Product) => {
    return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData)}></Tag>;
  };

  const actionBodyTemplate = (rowData: Product) => {
    return (
      <React.Fragment>
        <Button
              icon="pi pi-pencil"
              className="mr-2 text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
              onClick={() => editProduct(rowData)}
            />

            <Button
              icon="pi pi-trash"
              className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={() => confirmDeleteProduct(rowData)}
            />
      </React.Fragment>
    );
  };

  const getSeverity = (product: Product) => {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

  const header = (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <h4 className="m-0">Manage Products</h4>
    <div className="relative">
      <span className='absolute left-4.5 top-4 dark:text-white' >
      <i className="pi pi-search" />
      </span>
      <input
        type="search"
        placeholder="Search..."
        className='w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          setGlobalFilter(target.value);
        }}
      />
    </div>
  </div>
  );
  const productDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" 
            className='text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4' 
            onClick={hideDialog} />
       <Button label="Save"
            className='text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150'
            icon="pi pi-check"  onClick={saveProduct} />
    </React.Fragment>
  );
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button label="No" icon="pi pi-times" 
          className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
      onClick={hideDeleteProductDialog} />
      <Button label="Yes" icon="pi pi-check" 
        className="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
      onClick={deleteProduct} />
    </React.Fragment>
  );
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button label="No"
       className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"  
      icon="pi pi-times"
      onClick={hideDeleteProductsDialog} />
      <Button label="Yes" icon="pi pi-check" 
       className="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
      onClick={deleteSelectedProducts} />
    </React.Fragment>
  );

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Products" />
      <div>
        <Toast ref={toast} />
        <div className="card">
          <Toolbar
            className="mb-4"
            left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          ></Toolbar>

          <DataTable removableSort ref={dt} value={products} selection={selectedProducts}
            onSelectionChange={(e) => {
              if (Array.isArray(e.value)) {
                setSelectedProducts(e.value);
              }
            }}
            dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header}
            selectionMode="multiple"
          >
            <Column selectionMode="multiple" exportable={false}></Column>
            <Column field="code" header="Code" sortable style={{ minWidth: '12rem' }}></Column>
            <Column field="name" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
            <Column field="image" header="Image" body={imageBodyTemplate}></Column>
            <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
            <Column field="category" header="Category" sortable style={{ minWidth: '10rem' }}></Column>
            <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
            <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
            <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
          </DataTable>

        </div>

        <Dialog
          visible={productDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Product Details"
          modal
          className="p-fluid"
          footer={productDialogFooter}
          onHide={hideDialog}
        >
          {product.image && (
            <img
              src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
              alt={product.image}
              className="product-image block m-auto pb-3"
            />
          )}
          <div className="field">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <InputText
              id="name"
              value={product.name}
              onChange={(e) => onInputChange(e, "name")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !product.name,
              })}
            />
            {submitted && !product.name && (
              <small className="p-error">Name is required.</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="description" className="font-bold">
              Description
            </label>
            <InputTextarea
              id="description"
              value={product.description}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                onInputTextAreaChange(e, "description")
              }
              required
              rows={3}
              cols={20}
            />
          </div>

          <div className="field">
            <label className="mb-3 font-bold">Category</label>
            <div className="formgrid grid">
              <div className="field-radiobutton col-6">
                <RadioButton
                  inputId="category1"
                  name="category"
                  value="Accessories"
                  onChange={onCategoryChange}
                  checked={product.category === "Accessories"}
                />
                <label htmlFor="category1">Accessories</label>
              </div>
              <div className="field-radiobutton col-6">
                <RadioButton
                  inputId="category2"
                  name="category"
                  value="Clothing"
                  onChange={onCategoryChange}
                  checked={product.category === "Clothing"}
                />
                <label htmlFor="category2">Clothing</label>
              </div>
              <div className="field-radiobutton col-6">
                <RadioButton
                  inputId="category3"
                  name="category"
                  value="Electronics"
                  onChange={onCategoryChange}
                  checked={product.category === "Electronics"}
                />
                <label htmlFor="category3">Electronics</label>
              </div>
              <div className="field-radiobutton col-6">
                <RadioButton
                  inputId="category4"
                  name="category"
                  value="Fitness"
                  onChange={onCategoryChange}
                  checked={product.category === "Fitness"}
                />
                <label htmlFor="category4">Fitness</label>
              </div>
            </div>
          </div>

          <div className="formgrid grid">
            <div className="field col">
              <label htmlFor="price" className="font-bold">
                Price
              </label>
              <InputNumber
                id="price"
                value={product.price}
                onValueChange={(e) => onInputNumberChange(e, "price")}
                mode="currency"
                currency="USD"
                locale="en-US"
              />
            </div>
            <div className="field col">
              <label htmlFor="quantity" className="font-bold">
                Quantity
              </label>
              <InputNumber
                id="quantity"
                value={product.quantity}
                onValueChange={(e) => onInputNumberChange(e, "quantity")}
              />
            </div>
          </div>
        </Dialog>

        <Dialog
          visible={deleteProductDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Confirm"
          modal
          footer={deleteProductDialogFooter}
          onHide={hideDeleteProductDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Are you sure you want to delete <b>{product.name}</b>?
              </span>
            )}
          </div>
        </Dialog>

        <Dialog
          visible={deleteProductsDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Confirm"
          modal
          footer={deleteProductsDialogFooter}
          onHide={hideDeleteProductsDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Are you sure you want to delete the selected products?
              </span>
            )}
          </div>
        </Dialog>
      </div>
    </DefaultLayout>
  );
}
