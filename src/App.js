import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Stats from "./pages/stats/Stats";
import Productlist from "./pages/productlist/Productlist";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Singleproduct from "./pages/singleproduct/Singleproduct";
import NewProduct from "./pages/newProduct/NewProduct";
import OrdersList from "./pages/orderslist/OrdersList";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users" className="CustomerClass">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Customer" />}
              />
            </Route>
            <Route path="products" className="ProductClass">
              <Route index element={<Productlist />} />
              <Route path=":productId" element={<Singleproduct />} />
              <Route
                path="new"
                element={
                  <NewProduct inputs={productInputs} title="Add New Product" />
                }
              />
            </Route>
            <Route path="orders" className="OrderClass">
              <Route index element={<OrdersList />} />
            </Route>
            <Route path="stats" className="StatsClass">
              <Route index element={<Stats />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
