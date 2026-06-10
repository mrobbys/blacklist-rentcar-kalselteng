import { Search } from 'lucide-react';

const SearchBox = ({ value, onChange, children }) => {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="text-neutral-gray-light h-4 w-4" />
      </div>
      <input
        type="text"
        placeholder="Cari nama atau nomor identitas penyewa..."
        value={value}
        onChange={onChange}
        className="border-border-regular bg-neutral-white text-neutral-element-black placeholder-neutral-gray-light focus:border-brand-primary focus:ring-brand-primary w-full rounded-xl border py-2.5 pr-10 pl-10 text-sm transition-all duration-150 outline-none focus:ring-1"
      />
      {children}
    </div>
  );
};

export default SearchBox;
