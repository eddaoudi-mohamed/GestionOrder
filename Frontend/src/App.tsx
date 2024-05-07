import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Loader from "./common/Loader";
import PageTitle from "./components/PageTitle";
import ListProducts from "./pages/Products/ListProducts";
import { ListOrders, AddOrder, UpdateOrder, ViewOrder } from "./pages/Orders";

import SignIn from "./pages/Authentication/SignIn";
import ECommerce from "./pages/Dashboard/ECommerce";
import FormElements from "./pages/Form/FormElements";
import FormLayout from "./pages/Form/FormLayout";
import ListClients from "./pages/Clients/ListClients";
import RequireAuth from "./app/Features/RequireAuth";
import ListCategory from "./pages/Category/ListCategory";
import { useAppSelector } from "./app/hooks";

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
              <PageTitle title="Signin |The MEGA" />
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
                <PageTitle title="Dashboard |The MEGA" />
                <ECommerce />
              </>
            }
          />
          <Route
            path="/categories"
            element={
              <>
                <PageTitle title="Category |The MEGA" />
                <ListCategory />
              </>
            }
          />
          <Route
            path="/orders/*"
            element={
              <>
                <PageTitle title="Orders | The MEGA" />
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
            path="/products/*"
            element={
              <>
                <PageTitle title="Products | The MEGA" />
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
                <PageTitle title="Clients |The MEGA" />
                <ListClients />
              </>
            }
          />
        </Route>

        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements |The MEGA" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout |The MEGA" />
              <FormLayout />
            </>
          }
        />
          <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout |The MEGA" />
              <FormLayout />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
