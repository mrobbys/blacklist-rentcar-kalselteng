import { useState, useMemo, useEffect } from 'react';
import blacklistData from './data/blacklistData.json';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import { debounce } from './utils';
import DefaultBox from './components/DefaultBox';
import BtnClearSearch from './components/BtnClearSearch';
import CardList from './components/CardList';
import EmptyCard from './components/EmptyCard';
import PaginationCardList from './components/PaginationCardList';
 
const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  // otomatis scroll ke atas setiap currentPage berubah
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const debouncedSetSearch = useMemo(() => {
    return debounce((value) => {
      setSearchTerm(value);
    });
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSetSearch(value);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setInputValue('');
    setSearchTerm('');
    setCurrentPage(1);
  };

  const filteredData = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return [];

    return blacklistData.filter((item) => {
      const name = item.NAMA ? item.NAMA.toLowerCase() : '';
      const noIdentitas = item.NO ? String(item.NO).toLowerCase() : '';
      return name.includes(query) || noIdentitas.includes(query);
    });
  }, [searchTerm]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col overflow-x-hidden">
      <Header>
        <SearchBox
          value={inputValue}
          onChange={handleSearchChange}
        >
          {inputValue && <BtnClearSearch onClick={handleClearSearch} />}
        </SearchBox>
      </Header>

      <main className="flex-1">
        {!searchTerm.trim() ? (
          /**
           * Default Box
           * Tampil ketika input search kosong
           */
          <DefaultBox totalBlacklistData={blacklistData.length} />
        ) : filteredData.length > 0 ? (
          /**
           * Card List
           * Tampil ketika pencarian ditemukan
           */
          <CardList
            filteredData={paginatedData}
            totalCount={filteredData.length}
          >
            {totalPages > 1 && (
              <PaginationCardList
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </CardList>
        ) : (
          /**
           * Empty Card
           * Tampil ketika pencarian tidak ditemukan
           */
          <EmptyCard searchTerm={searchTerm} />
        )}
      </main>
    </div>
  );
};

export default App;
