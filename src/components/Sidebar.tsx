import { Link, useLocation } from "react-router-dom";
import { Home, Table, Send, List, Settings } from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home, path: "/" },
  { name: "Accounts", icon: Table, path: "/accounts" },
  { name: "Transfers", icon: Send, path: "/transfers" },
  { name: "Transactions", icon: List, path: "/transactions" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r shadow-sm flex flex-col">
      <div className="text-4xl font-bold px-7 py-4 text-indigo-600">
        BeetleBench
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map(({ name, icon: Icon, path }) => (
          <Link
            key={name}
            to={path}
            className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-indigo-50 ${
              location.pathname === path
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-700"
            }`}
          >
            <Icon size={20} />
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
