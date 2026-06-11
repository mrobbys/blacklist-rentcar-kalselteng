import { Search, X } from 'lucide-react';

const BtnSearchActions = ({ value, onClear }) => {
  return (
    <div className="absolute inset-y-1.5 right-1.5 flex items-center gap-2.5">
      {/* clear button */}
      {value && (
        <button
          type="button"
          onClick={onClear}
          className="flex cursor-pointer items-center"
        >
          <div className="bg-neutral-light-white text-neutral-gray-base hover:bg-neutral-light-black hover:text-neutral-white rounded-full p-2 transition-all duration-150">
            <X size={16} />
          </div>
        </button>
      )}

      {/* search / submit button  */}
      <button
        type="submit"
        className="bg-brand-primary hover:bg-brand-primary/75 text-neutral-white flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg shadow-sm transition-all duration-150"
      >
        <Search size={20} />
      </button>
    </div>
  );
};

export default BtnSearchActions;
