const CardListSkeleton = () => {
  return (
    <div className="space-y-4 px-4 py-6">
      <div className="text-neutral-gray-base text-xs font-semibold">
        <span>Mencari data...</span>
      </div>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="border-border-light bg-neutral-white animate-pulse space-y-4 rounded-xl border p-5 shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div className="w-2/3 space-y-2">
              <div className="bg-neutral-gray-light/20 h-4 w-3/4 rounded"></div>
              <div className="bg-neutral-gray-light/20 h-3 w-1/2 rounded"></div>
            </div>
            <div className="bg-neutral-gray-light/20 h-4 w-12 rounded"></div>
          </div>
          <div className="bg-neutral-gray-light/20 h-7 w-full rounded"></div>
          <div className="space-y-2">
            <div className="bg-neutral-gray-light/20 h-3 w-5/6 rounded"></div>
            <div className="bg-neutral-gray-light/20 h-3 w-2/3 rounded"></div>
          </div>
          <div className="bg-neutral-gray-light/20 h-10 w-full rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default CardListSkeleton;
