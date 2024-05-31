export interface DashboardData {
    allClient: number;
    allProducts: number;
    allOrders: number;
    revenueTotale: string;
    countClient: number;
    countProducts: number;
    countOrder: number;
    sales: number;
    refunded: number;
    revenue: number;
    categories: Category[];
    ProductsMoreSale: ProductsMoreSale;
    topClients: TopClient[];
    revenuByMonth: RevenuByMonth;
}


export interface GlobalState {
    allClient: string;
    allProducts: string;
    allOrders: string;
    revenueTotale: string;
}

export interface Category {
    [key: string]: number;
}

export interface ProductsMoreSale {
    [productName: string]: number;
}

export interface TopClient {
    map(arg0: (brand: any, key: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    id: number;
    name: string;
    email: string;
    phone: string;
    status: string;
    created_at: string;
    updated_at: string;
    order_count: number;
    paid: string;
}

export interface RevenuByMonth {
    January: string | number;
    February: string | number;
    March: string | number;
    April: string | number;
    May: string | number;
    [month: string]: string | number;
}
