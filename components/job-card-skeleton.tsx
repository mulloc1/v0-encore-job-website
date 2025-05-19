export default function JobCardSkeleton() {
  return (
    <div className="border border-[#e0e0e0] dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 overflow-hidden flex flex-col h-full animate-pulse">
      <div className="p-5 flex-grow">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-4"></div>

        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4"></div>

        <div className="space-y-3">
          <div className="flex items-start">
            <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full mr-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          </div>

          <div className="flex items-start">
            <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full mr-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
          </div>

          <div className="flex items-start">
            <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full mr-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 px-5 py-2.5 border-t border-[#e0e0e0] dark:border-gray-700 mt-auto">
        <div className="flex justify-between items-center">
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  )
}
