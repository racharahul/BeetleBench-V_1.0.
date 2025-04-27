import { Outlet } from "react-router-dom";
import TopBar from "../Components/Topbar";

export default function LayoutWithoutSidebar() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
