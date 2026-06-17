 // or reuse Navbar

import { Outlet } from "react-router-dom";
import StoreLayout from "../components/store/StoreLayout";

export default function ShopLayout() {
  return (
    <>
      <StoreLayout>
        <Outlet />
      </StoreLayout>
    </>
  );
}