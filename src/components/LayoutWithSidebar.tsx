import { Outlet, useParams } from "react-router-dom";
import TopBar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";

export default function LayoutWithSidebar() {
  const { dbName } = useParams();

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar dbName={dbName || ""} />
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
