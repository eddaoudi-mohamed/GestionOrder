import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import { ListProducts , AddProduct , UpdateProduct , ViewProduct } from "./pages/Products";
import { ListOrders , AddOrder , UpdateOrder , ViewOrder } from "./pages/Orders";

import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import ListClients from './pages/Clients/ListClients';
import Category from './pages/Category/Category';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
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
              <Category />
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
                <Route path="/add" element={<AddProduct />} />
                <Route path="/update" element={<UpdateProduct />} />
                <Route path="/view" element={<ViewProduct />} />
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

        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar |The MEGA" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile |The MEGA" />
              <Profile />
            </>
          }
        />
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
          path="/tables"
          element={
            <>
              <PageTitle title="Tables |The MEGA" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings |The MEGA" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart |The MEGA" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts |The MEGA" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons |The MEGA" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin |The MEGA" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup |The MEGA" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
