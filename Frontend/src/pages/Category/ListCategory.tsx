import { useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import 'primeicons/primeicons.css';
import LeftToolbar from './components/LeftToolbar';
import RightToolbar from './components/RightToolbar';
import { useGetCategoriesQuery } from '../../app/services/CategoryApiSlice';
import TableHeader from './components/TableHeader';
import ActionCategoryButtons from './components/ActionCategoryButtons';
import CategoryDialog from './components/CategoryDialog';
import DeleteCategoryDialog from './components/DeleteCategoryDialog';
import { Category } from '../../types/category';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setCategories } from '../../app/Features/CategorySlice';


export default function ListCategory() {
    const { categories } = useAppSelector(state => state.categories);
    const dispatch = useAppDispatch();

    const { data, isLoading, refetch } = useGetCategoriesQuery({}, {
        refetchOnMountOrArgChange: true
    });
    dispatch(setCategories(data?.data));


    const RefetchCateroy = () => {
        refetch()
    }

    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<Category[]>>(null);

    return (
        
        <DefaultLayout>
            <Breadcrumb pageName="Categories" />
            <div>
                <Toast ref={toast} />
                <div className="card">
                    <Toolbar
                        className="mb-4"
                        left={LeftToolbar}
                        right={RightToolbar}
                    ></Toolbar>
                    <DataTable
                        className='dark:bg-boxdark-2 dark:text-bodydark '
                        ref={dt}
                        value={categories}
                        removableSort
                        dataKey="id"
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 25, 50]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        header={TableHeader}
                        loading={isLoading}
                    >
                        <Column
                            field="name"
                            header="Name"
                            sortable
                        ></Column>
                        <Column
                            field="description"
                            header="Description"
                            sortable
                        ></Column>
                        <Column
                            header="Actions"
                            body={ActionCategoryButtons}
                            exportable={false}
                        ></Column>
                    </DataTable>
                </div>
                <CategoryDialog RefetchCateroy={RefetchCateroy} />
                <DeleteCategoryDialog RefetchCateroy={RefetchCateroy} />
            </div>
        </DefaultLayout>
    );
}
