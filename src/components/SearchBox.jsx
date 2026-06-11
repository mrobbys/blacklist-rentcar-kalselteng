import { memo } from 'react';

const SearchBox = memo(({ value, onChange, onSubmit, children, inputRef }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full"
    >
      <input
        type="search"
        enterKeyHint="search"
        id="search"
        name="search"
        placeholder="Nama atau nomor identitas..."
        value={value}
        onChange={onChange}
        maxLength={50}
        autoComplete="off"
        ref={inputRef}
        className="border-border-regular bg-neutral-white text-neutral-element-black placeholder-neutral-gray-light focus:border-brand-primary focus:ring-brand-primary w-full rounded-xl border py-2.5 pr-12 pl-2 text-base transition-all duration-150 outline-none focus:ring-1 md:text-sm "
      />

      {/* btn actions */}
      {children}
    </form>
  );
});

export default SearchBox;
