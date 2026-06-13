import { useState, useCallback, useRef } from 'react';

const useSearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const inputRef = useRef(null);

  const handleSearchChange = useCallback((e) => {
    const value = e.target.value;
    const cleanValue = value.replace(/[^a-zA-Z0-9\s+\-.,']/g, '');
    setInputValue(cleanValue);
  }, []);

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setSearchTerm(inputValue);
    setCurrentPage(1);

    if (inputRef && inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleClearSearch = useCallback(() => {
    setInputValue('');
    setSearchTerm('');
    setCurrentPage(1);
    inputRef.current?.focus();
  }, []);

  return {
    inputValue,
    handleSearchChange,
    handleSearchSubmit,
    handleClearSearch,
    searchTerm,
    currentPage,
    setCurrentPage,
    inputRef,
  };
};

export { useSearchInput };
