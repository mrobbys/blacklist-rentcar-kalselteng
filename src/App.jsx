import { useState, useMemo, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import { debounce } from './utils';
import DefaultBox from './components/DefaultBox';
import BtnClearSearch from './components/BtnClearSearch';
import CardList from './components/CardList';
import EmptyCard from './components/EmptyCard';
import PaginationCardList from './components/PaginationCardList';
import CardListSkeleton from './components/CardListSkeleton';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [userList, setUserList] = useState([]);
  const [totalDatabaseCount, setTotalDatabaseCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isCountLoading, setIsCountLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  useEffect(() => {
    const fetchTotalCount = async () => {
      setIsCountLoading(true);
      try {
        const response = await fetch(`${BASE_URL}?search=`);
        const result = await response.json();
        setTotalDatabaseCount(result.totalDataCount);
      } catch (error) {
        console.error('Error fetching total count:', error);
        setIsError(true);
      } finally {
        setIsCountLoading(false);
      }
    };

    fetchTotalCount();
  }, []);

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
    setUserList([]);
    setTotalCount(0);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const query = searchTerm.trim().toLowerCase();
      if (!query) {
        setUserList([]);
        setTotalCount(0);
        return;
      }

      setIsLoading(true);
      try {
        const params = {
          search: query,
          page: currentPage.toString(),
          limit: itemsPerPage.toString(),
        };
        const queryString = new URLSearchParams(params).toString();
        const fetchURL = `${BASE_URL}?${queryString}`;

        const response = await fetch(fetchURL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setUserList(result.data || []);
        setTotalCount(result.totalCount || 0);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, currentPage]);


  const renderContent = () => {
    if (!searchTerm.trim()) {
      return (
        <DefaultBox
          totalBlacklistData={totalDatabaseCount}
          isLoading={isCountLoading}
        />
      );
    }

    if (isLoading) {
      return <CardListSkeleton />;
    }

    if (isError) {
      return <p className="py-10 text-center text-xs text-red-500">Gagal memuat data. Coba lagi.</p>;
    }

    if (userList.length > 0) {
      return (
        <CardList
          filteredData={userList}
          totalCount={totalCount}
        >
          {totalPages > 1 && (
            <PaginationCardList
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </CardList>
      );
    }

    return <EmptyCard searchTerm={searchTerm} />;
  };
  
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

      <main className="flex-1">{renderContent()}</main>
    </div>
  );
};

export default App;
