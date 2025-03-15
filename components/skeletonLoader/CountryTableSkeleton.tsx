import React from "react";

const CountryTableSkeleton = () => {
  return (
    <div className="w-full h-full flex overflow-hidden flex-col justify-between">
      <div className="w-full overflow-auto h-[85%] px-2 space-y-3">
        <div className="h-8 w-80 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>

        <table className="w-full table-auto xl:table-fixed">
          <thead className="bg-light-100 dark:bg-dark-400">
            <tr className="text-sm text-left capitalize">
              <th className="p-2 px-2 py-3 w-[5%] rounded-tl-lg"></th>
              {[...Array(10)].map((_, index) => (
                <th
                  key={index}
                  className="px-2 py-3 text-dark-600 dark:text-light-100 capitalize"
                >
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, rowIndex) => (
              <tr
                key={rowIndex}
                className="text-left cursor-pointer text-xs md:text-sm bg-white dark:bg-dark-200"
              >
                <td className="table-data">
                  <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </td>
                {[...Array(10)].map((_, colIndex) => (
                  <td key={colIndex} className="table-data">
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex justify-center mt-4">
        <div className="h-8 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default CountryTableSkeleton;
