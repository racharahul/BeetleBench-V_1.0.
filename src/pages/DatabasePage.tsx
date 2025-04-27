import { useParams } from "react-router-dom";

const DatabasePage = () => {
  const { dbName } = useParams<{ dbName: string }>();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Database: {dbName}</h2>
      {/* Future: ledgers → accounts → transactions */}
    </div>
  );
};

export default DatabasePage;
