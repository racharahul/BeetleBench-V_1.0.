import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

interface SidebarProps {
  dbName: string;
}

const Sidebar: React.FC<SidebarProps> = ({ dbName }) => {
  const [ledgersOpen, setLedgersOpen] = useState(true);
  const [expandedLedger, setExpandedLedger] = useState<string | null>(null);

  // Example ledgers - later you will replace this with actual dynamic data
  const ledgers = ["Ledger 1", "Ledger 2"];

  const toggleLedger = (ledgerName: string) => {
    if (expandedLedger === ledgerName) {
      setExpandedLedger(null);
    } else {
      setExpandedLedger(ledgerName);
    }
  };

  return (
    <div className="w-64 bg-gray-100 p-4 min-h-screen">
      {/* Database Name */}
      <div className="text-xl font-bold text-gray-700 mb-6">{dbName}</div>

      {/* Ledgers Section */}
      <div>
        <button
          className="w-full text-left font-semibold text-gray-600 mb-2"
          onClick={() => setLedgersOpen(!ledgersOpen)}
        >
          {ledgersOpen ? "▾ Ledgers" : "▸ Ledgers"}
        </button>

        {/* Ledgers List */}
        {ledgersOpen && (
          <ul className="pl-4 space-y-2">
            {ledgers.map((ledger) => (
              <li key={ledger}>
                <button
                  onClick={() => toggleLedger(ledger)}
                  className="w-full text-left text-gray-700 hover:text-indigo-600"
                >
                  {expandedLedger === ledger ? "▾" : "▸"} {ledger}
                </button>

                {/* Sub-Items: Accounts / Transactions / Settings */}
                {expandedLedger === ledger && (
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>
                      <Link
                        to={`/database/${dbName}/${ledger}/accounts`}
                        className="text-gray-600 hover:text-indigo-500"
                      >
                        Accounts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/database/${dbName}/${ledger}/transactions`}
                        className="text-gray-600 hover:text-indigo-500"
                      >
                        Transactions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/database/${dbName}/${ledger}/settings`}
                        className="text-gray-600 hover:text-indigo-500"
                      >
                        Settings
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
