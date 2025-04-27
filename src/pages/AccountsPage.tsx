import { useParams } from "react-router-dom";

const AccountsPage = () => {
  const { dbName, ledgerName } = useParams<{
    dbName: string;
    ledgerName: string;
  }>();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Accounts - {ledgerName} ({dbName})
      </h2>
      {/* Later you can list accounts here */}
      <p className="text-gray-600">This is the Accounts page.</p>
    </div>
  );
};

export default AccountsPage;
