import { useState } from "react";
import { accounts as mockData } from "../data/accounts";

type Account = (typeof mockData)[0];

export function AccountsTable() {
  const [data, setData] = useState<Account[]>(mockData);
  const [sortKey, setSortKey] = useState<keyof Account | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const sortBy = (key: keyof Account) => {
    setSortKey(key);
    setSortAsc((prev) => (key === sortKey ? !prev : true));
    setData((prev) =>
      [...prev].sort((a, b) =>
        a[key]! > b[key]!
          ? sortAsc
            ? 1
            : -1
          : a[key]! < b[key]!
          ? sortAsc
            ? -1
            : 1
          : 0
      )
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {Object.keys(mockData[0]).map((key) => (
              <th
                key={key}
                onClick={() => sortBy(key as keyof Account)}
                className="cursor-pointer border px-4 py-2 text-left font-semibold"
              >
                {key} {sortKey === key && (sortAsc ? "▲" : "▼")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((account, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              {Object.values(account).map((val, i) => (
                <td key={i} className="border px-4 py-2">
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
