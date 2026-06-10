import { X } from 'lucide-react';

const BtnClearSearch = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute inset-y-0 right-0 flex items-center pr-3"
    >
      <div className="bg-neutral-light-white text-neutral-gray-base hover:bg-neutral-light-black hover:text-neutral-white rounded-full p-1 transition-all">
        <X className="h-3 w-3" />
      </div>
    </button>
  );
};

export default BtnClearSearch;
