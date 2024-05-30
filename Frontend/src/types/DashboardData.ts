interface DashboardData {
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

interface Category {
    [key: string]: number;
}

interface ProductsMoreSale {
    [productName: string]: number;
}

interface TopClient {
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

interface RevenuByMonth {
    January: string | number;
    February: string | number;
    March: string | number;
    April: string | number;
    May: string | number;
    [month: string]: string | number;
}
