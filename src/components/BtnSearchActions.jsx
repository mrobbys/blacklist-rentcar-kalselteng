import { Search, X, LoaderCircle } from 'lucide-react';

const BtnSearchActions = ({ value, onClear, isFetching }) => {
  return (
    <div className="absolute inset-y-1.5 right-1.5 flex items-center gap-2.5">
      {/* clear button */}
      {value && !isFetching && (
        <button
          type="button"
          onClick={onClear}
          disabled={isFetching}
          aria-label="Hapus pencarian"
          className={`flex items-center ${isFetching ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
        >
          <div
            className={`bg-neutral-light-white text-neutral-gray-base rounded-full p-2 transition-all duration-150 ${isFetching ? '' : 'hover:bg-neutral-light-black hover:text-neutral-white'}`}
          >
            <X
              size={16}
              aria-hidden="true"
            />
          </div>
          <span className="sr-only">Hapus pencarian</span>
        </button>
      )}

      {/* search / submit button  */}
      <button
        type="submit"
        disabled={isFetching || !value}
        aria-label={isFetching ? 'Sedang mencari...' : 'Cari'}
        className={`bg-brand-primary text-neutral-white flex h-8 w-8 items-center justify-center rounded-lg shadow-sm transition-all duration-150 ${isFetching || !value ? 'cursor-not-allowed opacity-50' : 'hover:bg-brand-primary/75 cursor-pointer'}`}
      >
        {isFetching ? (
          <>
            <LoaderCircle
              size={20}
              className="animate-spin"
              aria-hidden="true"
            />
            <span className="sr-only">Sedang mencari...</span>
          </>
        ) : (
          <>
            <Search
              size={20}
              aria-hidden="true"
            />
            <span className="sr-only">Cari</span>
          </>
        )}
      </button>
    </div>
  );
};

export default BtnSearchActions;
