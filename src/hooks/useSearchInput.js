import { useState, useMemo, useCallback, useRef } from 'react';
import { debounce } from '../utils';

const useSearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const inputRef = useRef(null);

  // memoize debounce agar tidak re-render
  const debouncedSetSearch = useMemo(() => {
    return debounce((value) => {
      setSearchTerm(value);
    });
  }, []);

  const handleSearchChange = useCallback(
    (e) => {
      const value = e.target.value;
      const cleanValue = value.replace(/[^a-zA-Z0-9\s+\-.,']/g, '');
      setInputValue(cleanValue);
      debouncedSetSearch(cleanValue);
      setCurrentPage(1);
    },
    [debouncedSetSearch],
  );
  
  const handleClearSearch = useCallback(() => {
    debouncedSetSearch.cancel();
    setInputValue('');
    setSearchTerm('');
    setCurrentPage(1);
    inputRef.current?.focus();
  }, [debouncedSetSearch]);
  
  return {
    inputValue,
    handleSearchChange,
    handleClearSearch,
    searchTerm,
    currentPage,
    setCurrentPage,
    inputRef
  };
};

export { useSearchInput };
