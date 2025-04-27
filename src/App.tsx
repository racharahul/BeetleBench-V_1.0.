import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutWithoutSidebar from "./Components/LayoutWithoutSidebar";
import LayoutWithSidebar from "./Components/LayoutWithSidebar";
import DatabaseList from "./pages/DatabaseList";
import DatabasePage from "./pages/DatabasePage";
import AccountsPage from "./pages/AccountsPage";
import TransactionsPage from "./pages/TransactionsPage";
import SettingsPage from "./pages/SettingsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Before selecting database */}
        <Route element={<LayoutWithoutSidebar />}>
          <Route index element={<DatabaseList />} />
        </Route>

        {/* After selecting database */}
        <Route path="database/:dbName" element={<LayoutWithSidebar />}>
          <Route index element={<DatabasePage />} />
          <Route path=":ledgerName/accounts" element={<AccountsPage />} />
          <Route
            path=":ledgerName/transactions"
            element={<TransactionsPage />}
          />
          <Route path=":ledgerName/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
