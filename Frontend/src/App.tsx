import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Loader from "./common/Loader";
import PageTitle from "./components/PageTitle";
import ListProducts from "./pages/Products/ListProducts";
import { ListOrders, AddOrder, UpdateOrder, ViewOrder } from "./pages/Orders";

import SignIn from "./pages/Authentication/SignIn";
import ECommerce from "./pages/Dashboard/ECommerce";
import ListClients from "./pages/Clients/ListClients";
import RequireAuth from "./app/Features/RequireAuth";
import ListCategory from "./pages/Categories/ListCategory";
import Calendar from "./pages/ Calendar";
import ClientHistory from "./pages/History/ClientHistory";
import OrderHistory from "./pages/History/OrderHistory";
import ProductHistory from "./pages/History/ProductHistory";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/signin")
    }
  }, [pathname, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/signin"
          element={
            <>
              <PageTitle title="Signin |MEGA" />
              <SignIn />
            </>
          }
        />
        <Route element={<RequireAuth />}>
          <Route
            index
            path="/dashboard"
            element={
              <>
                <PageTitle title="Dashboard |MEGA" />
                <ECommerce />
              </>
            }
          />
          <Route
            path="/categories"
            element={
              <>
                <PageTitle title="Category |MEGA" />
                <ListCategory />
              </>
            }
          />
          <Route
            path="/orders/*"
            element={
              <>
                <PageTitle title="Orders | MEGA" />
                <Routes>
                  <Route path="/" element={<ListOrders />} />
                  <Route path="/add" element={<AddOrder />} />
                  <Route path="/update" element={<UpdateOrder />} />
                  <Route path="/view" element={<ViewOrder />} />
                </Routes>
              </>
            }
          />
          <Route
            path="/history/*"
            element={
              <>
                <PageTitle title="History | MEGA" />
                <Routes>
                  <Route path="/client" element={<ClientHistory />} />
                  <Route path="/product" element={<ProductHistory />} />
                  <Route path="/order" element={<OrderHistory />} />
                </Routes>
              </>
            }
          />
          <Route
            path="/products/*"
            element={
              <>
                <PageTitle title="Products | MEGA" />
                <Routes>
                  <Route path="/" element={<ListProducts />} />
                </Routes>
              </>
            }
          />

          <Route
            path="/clients"
            element={
              <>
                <PageTitle title="Clients |MEGA" />
                <ListClients />
              </>
            }
          />
          <Route
            path="/calendar"
            element={
              <>
                <PageTitle title="Calendar |MEGA" />
                <Calendar />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
