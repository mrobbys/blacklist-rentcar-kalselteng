import { ChevronLeft, ChevronRight } from 'lucide-react';

const BtnPagination = ({ onclick, disabled, direction = 'prev' }) => {
  return (
    <button
      type="button"
      onClick={onclick}
      disabled={disabled}
      className="text-brand-primary disabled:text-neutral-gray-light bg-neutral-white border-border-regular hover:bg-brand-primary hover:text-neutral-white disabled:hover:bg-neutral-white disabled:hover:text-neutral-gray-light flex cursor-pointer items-center gap-1 rounded-lg border px-3 py-2 text-xs font-bold shadow-sm transition-all duration-150 disabled:cursor-not-allowed disabled:shadow-none"
    >
      {direction === 'prev' ? (
        <>
          <ChevronLeft className="h-4 w-4" />
          <span>Sebelumnya</span>
        </>
      ) : (
        <>
          <span>Selanjutnya</span>
          <ChevronRight className="h-4 w-4" />
        </>
      )}
    </button>
  );
};

export default BtnPagination;
