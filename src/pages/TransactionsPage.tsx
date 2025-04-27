import { useParams } from "react-router-dom";

const TransactionsPage = () => {
  const { dbName, ledgerName } = useParams<{
    dbName: string;
    ledgerName: string;
  }>();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Transactions - {ledgerName} ({dbName})
      </h2>
      {/* Later you can list transactions here */}
      <p className="text-gray-600">This is the Transactions page.</p>
    </div>
  );
};

export default TransactionsPage;
