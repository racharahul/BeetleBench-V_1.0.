import React from "react";
import { useNavigate } from "react-router-dom";

const databases = ["DB1", "DB2", "DB3"]; // Dummy databases for now

const DatabaseList: React.FC = () => {
  const navigate = useNavigate();

  const handleDatabaseClick = (dbName: string) => {
    navigate(`/database/${dbName}`);
  };

  const handleAddDatabase = () => {
    // TODO: Add database logic (popup, file picker, etc.)
    alert("Feature coming soon!");
  };

  return (
    <div className="flex flex-col items-center w-full p-8 pt-16">
      <h1 className="text-4xl font-bold mb-6">Welcome to BeetleBench</h1>
      <h2 className="text-2xl font-bold mb-10">
        Select a database to continue
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {databases.map((db) => (
          <div
            key={db}
            onClick={() => handleDatabaseClick(db)}
            className="cursor-pointer border border-gray-300 rounded-lg p-6 shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-indigo-600">{db}</h2>
          </div>
        ))}

        {/* Add Database Box */}
        <div
          onClick={handleAddDatabase}
          className="cursor-pointer flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-6 hover:bg-gray-100 transition"
        >
          <span className="text-gray-600 font-medium">+ Add Database</span>
        </div>
      </div>
    </div>
  );
};

export default DatabaseList;
