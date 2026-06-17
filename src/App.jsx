import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ShopLayout from "./layouts/ShopLayout";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import StoreShop from "./pages/StoreShop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Store from "./pages/Store";
import AddProduct from "./pages/AddProduct";
import ManageProduct from "./pages/ManageProduct";
import OrderProduct from "./pages/OrderProduct";
import AdminLayout from "./layouts/AdminLayout";
import Admin from "./pages/Admin";
import Stores from "./pages/Stores";
import Approve from "./pages/Approve";
import Coupons from "./pages/Coupons";
import CreateStore from "./pages/CreateStore";
import PricingPage from "./pages/Pricing";

const App = () => {
  return (
    <Routes>

      {/* MAIN WEBSITE */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:username" element={<StoreShop />} />
        <Route path="/create-store" element={<CreateStore />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Route>

      {/* STORE DASHBOARD (you can also create another layout later) */}
      <Route element={<ShopLayout />}>
        <Route path="/store" element={<Store />} />
        <Route path="/store/add-product" element={<AddProduct />} />
        <Route path="/store/manage-product" element={<ManageProduct />} />
        <Route path="/store/orders" element={<OrderProduct />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/stores" element={<Stores />} />
        <Route path="/admin/approve" element={<Approve />} />
        <Route path="/admin/coupons" element={<Coupons />} />
      </Route>

    </Routes>
  );
};

export default App;