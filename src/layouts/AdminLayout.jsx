import { Outlet } from "react-router-dom";
import AdminLayout from "../components/admin/AdminLayout";

export default function ShopLayout() {
  return (
    <>
      <AdminLayout>
        <Outlet />
      </AdminLayout>
    </>
  );
}
