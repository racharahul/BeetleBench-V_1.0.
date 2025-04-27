import { useParams } from "react-router-dom";

const SettingsPage = () => {
  const { dbName, ledgerName } = useParams<{
    dbName: string;
    ledgerName: string;
  }>();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Settings - {ledgerName} ({dbName})
      </h2>
      {/* Later you can add settings related to the ledger here */}
      <p className="text-gray-600">This is the Settings page.</p>
    </div>
  );
};

export default SettingsPage;
