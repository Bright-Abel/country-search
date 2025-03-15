const DetailsSkeleton = () => {
  return (
    <section className="w-full h-full p-6 bg-gray-100 dark:bg-dark-300 min-h-screen rounded-lg shadow-lg animate-pulse">
      {/* Title */}
      <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 mx-auto rounded"></div>
      <div className="h-4 w-64 bg-gray-200 dark:bg-gray-700 mx-auto mt-2 rounded"></div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 p-4 bg-white dark:bg-dark-200 rounded-lg shadow">
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          ))}
      </div>

      {/* Flag Placeholder */}
      <div className="mt-6 text-center">
        <div className="h-40 w-64 bg-gray-200 dark:bg-gray-700 mx-auto rounded-lg"></div>
      </div>

      {/* Maps Placeholder */}
      <div className="mt-6 text-center">
        <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 mx-auto rounded"></div>
        <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 mx-auto mt-2 rounded"></div>
      </div>
    </section>
  );
};

export default DetailsSkeleton;
