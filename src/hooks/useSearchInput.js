import { useState, useMemo, useCallback } from 'react';
import { debounce } from '../utils';

const useSearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

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
  }, [debouncedSetSearch]);

  return {
    inputValue,
    handleSearchChange,
    handleClearSearch,
    searchTerm,
    currentPage,
    setCurrentPage,
  };
};

export { useSearchInput };
