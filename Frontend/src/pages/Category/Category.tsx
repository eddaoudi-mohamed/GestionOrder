import React, { useState, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import 'primeicons/primeicons.css';
interface Category {
    id: string | null;
    name: string;
    description: string;
}

export default function Category() {
    let emptyCategory: Category = {
        id: null,
        name: '',
        description: '',
    };

    const [categories, setCategories] = useState<Category[]>(
        [
            {
                "id": "1",
                "name": "Category 1",
                "description": "Description for Category 1"
            },
            {
                "id": "2",
                "name": "Category 2",
                "description": "Description for Category 2"
            },
            {
                "id": "3",
                "name": "Category 3",
                "description": "Description for Category 3"
            },
            {
                "id": "4",
                "name": "Category 4",
                "description": "Description for Category 4"
            },
            {
                "id": "5",
                "name": "Category 5",
                "description": "Description for Category 5"
            },
            {
                "id": "6",
                "name": "Category 6",
                "description": "Description for Category 6"
            },
            {
                "id": "7",
                "name": "Category 7",
                "description": "Description for Category 7"
            },
            {
                "id": "8",
                "name": "Category 8",
                "description": "Description for Category 8"
            },
            {
                "id": "9",
                "name": "Category 9",
                "description": "Description for Category 9"
            },
            {
                "id": "10",
                "name": "Category 10",
                "description": "Description for Category 10"
            }
        ]
    );

    const [categoryDialog, setCategoryDialog] = useState<boolean>(false);
    const [deleteCategoryDialog, setDeleteCategoryDialog] = useState<boolean>(false);
    const [deleteCategoriesDialog, setdeleteCategoriesDialog] = useState<boolean>(false);
    const [category, setCategory] = useState<Category>(emptyCategory);
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [globalFilter, setGlobalFilter] = useState<string>('');
    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<Category[]>>(null);

    const openNew = () => {
        setCategory(emptyCategory);
        setSubmitted(false);
        setCategoryDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setCategoryDialog(false);
    };

    const hideDeleteCategoryDialog = () => {
        setDeleteCategoryDialog(false);
    };

    const hidedeleteCategoriesDialog = () => {
        setdeleteCategoriesDialog(false);
    };

    const saveCategory = () => {
        setSubmitted(true);

        if (category.name.trim()) {
            let _categories = [...categories];
            let _category = { ...category };

            if (category.id) {
                const index = findIndexById(category.id);

                _categories[index] = _category;
                toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Category Updated', life: 3000 });
            } else {
                _category.id = createId();
                _categories.push(_category);
                toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Category Created', life: 3000 });
            }

            setCategories(_categories);
            setCategoryDialog(false);
            setCategory(emptyCategory);
        }
    };

    const editCategory = (category: Category) => {
        setCategory({ ...category });
        setCategoryDialog(true);
    };

    const confirmDeleteCategory = (category: Category) => {
        setCategory(category);
        setDeleteCategoryDialog(true);
    };

    const deleteCategory = () => {
        let _categories = categories.filter((val) => val.id !== category.id);

        setCategories(_categories);
        setDeleteCategoryDialog(false);
        setCategory(emptyCategory);
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Category Deleted', life: 3000 });
    };

    const findIndexById = (id: string) => {
        let index = -1;

        for (let i = 0; i < categories.length; i++) {
            if (categories[i].id === id) {
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
        setdeleteCategoriesDialog(true);
    };

    const deleteSelectedCategories = () => {
        let _categories = categories.filter((val) => !selectedCategories.includes(val));

        setCategories(_categories);
        setdeleteCategoriesDialog(false);
        setSelectedCategories([]);
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Categories Deleted', life: 3000 });
    };


    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _category = { ...category };

        // @ts-ignore
        _category[name] = val;

        setCategory(_category);
    };

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2 dark:bg-boxdark-2 dark:text-bodydark">
                <button className="inline-flex items-center gap-x-2 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none waves-effect"
                    onClick={openNew}
                >
                    <span className="p-button-icon p-c p-button-icon-left pi pi-plus" data-pc-section="icon"></span>
                    New
                </button>
                {!selectedCategories || !selectedCategories.length ? "" :
                    <button
                        type="button"
                        className="w-full inline-flex items-center gap-x-2 rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700  sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={confirmDeleteSelected}

                    >
                        <span className="p-button-icon p-c p-button-icon-left pi pi-trash" data-pc-section="icon"></span>
                        Delete
                    </button>
                }
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return (
            <Button
                label="Export"
                icon="pi pi-upload"
                className="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={exportCSV}
            />
        );
    };


    const actionBodyTemplate = (rowData: Category) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-pencil"
                    className="mr-2 text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                    onClick={() => editCategory(rowData)}
                />

                <Button
                    icon="pi pi-trash"
                    className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => confirmDeleteCategory(rowData)}
                />
            </React.Fragment>
        );
    };


    const header = (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h4 className="m-0">Manage Category</h4>
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
    const categoryDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times"
                className='text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4'
                onClick={hideDialog} />
            <Button label="Save"
                className='text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150'
                icon="pi pi-check" onClick={saveCategory} />
        </React.Fragment>
    );
    const dategoryCategoryDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
                onClick={hideDeleteCategoryDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                className="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                onClick={deleteCategory}
            />
        </React.Fragment>
    );
    const deleteCategoriesDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-normal uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
                onClick={hidedeleteCategoriesDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                className="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-normal uppercase text-sm px-2 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                onClick={deleteSelectedCategories}
            />
        </React.Fragment>
    );

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Clients" />

            <div>
                <Toast ref={toast} />
                <div className="card">
                    <Toolbar
                        className="mb-4"
                        left={leftToolbarTemplate}
                        right={rightToolbarTemplate}
                    ></Toolbar>

                    <DataTable
                        className='dark:bg-boxdark-2 dark:text-bodydark'
                        ref={dt}
                        value={categories}
                        selection={selectedCategories}
                        onSelectionChange={(e) => {
                            if (Array.isArray(e.value)) {
                                setSelectedCategories(e.value);
                            }
                        }}
                        removableSort
                        dataKey="id"
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter}
                        header={header}
                        selectionMode="multiple"
                    >
                        <Column selectionMode="multiple" exportable={false}></Column>
                        <Column
                            field="name"
                            header="Name"
                            sortable
                            style={{ minWidth: "16rem" }}
                        ></Column>

                        <Column
                            field="description"
                            header="Description"
                            sortable
                            style={{ minWidth: "25rem" }}
                        ></Column>

                        <Column
                            body={actionBodyTemplate}
                            exportable={false}
                            style={{ minWidth: "12rem" }}
                        ></Column>
                    </DataTable>
                </div>

                <Dialog
                    visible={categoryDialog}
                    style={{ width: "32rem" }}
                    breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                    header="Product Details"
                    modal
                    className="p-fluid"
                    footer={categoryDialogFooter}
                    onHide={hideDialog}
                >
                    <div className="field">
                        <label htmlFor="name" className="font-bold">
                            Name
                        </label>

                        <InputText
                            id="name"
                            value={category.name}
                            onChange={(e) => onInputChange(e, "name")}
                            required
                            className={`
                            w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary
                            ${classNames({ "p-invalid": submitted && !category.name })}`}
                        />
                        {submitted && !category.name && (
                            <small className="p-error">Name is required.</small>
                        )}
                    </div>

                    <div className="field">
                        <label htmlFor="description" className="font-bold">
                            Description
                        </label>

                        <textarea
                            id="description"
                            value={category.description}
                            //@ts-ignore
                            onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20}
                            className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary 
                            ${classNames({ "p-invalid": submitted && !category.description })}`}
                        />
                        {submitted && !category.description && (
                            <small className="p-error">Description is required.</small>
                        )}
                    </div>

                </Dialog>


                <Dialog
                    visible={deleteCategoryDialog}
                    style={{ width: "32rem" }}
                    breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                    header="Confirm"
                    modal
                    footer={dategoryCategoryDialogFooter}
                    onHide={hideDeleteCategoryDialog}
                >
                    <div className="confirmation-content">
                        <i
                            className="pi pi-exclamation-triangle mr-3"
                            style={{ fontSize: "2rem" }}
                        />
                        {category && (
                            <span>
                                Are you sure you want to delete <b>{category.name}</b>?
                            </span>
                        )}
                    </div>
                </Dialog>

                <Dialog
                    visible={deleteCategoriesDialog}
                    style={{ width: "32rem" }}
                    breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                    header="Confirm"
                    modal
                    footer={deleteCategoriesDialogFooter}
                    onHide={hidedeleteCategoriesDialog}
                >
                    <div className="confirmation-content">
                        <i
                            className="pi pi-exclamation-triangle mr-3"
                            style={{ fontSize: "2rem" }}
                        />
                        {category && (
                            <span>
                                Are you sure you want to delete the selected categories?
                            </span>
                        )}
                    </div>
                </Dialog>
            </div>
        </DefaultLayout>
    );
}



