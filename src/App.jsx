import { useEffect } from 'react';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import { windowScrollToTop } from './utils';
import DefaultBox from './components/DefaultBox';
import CardList from './components/CardList';
import EmptyCard from './components/EmptyCard';
import PaginationCardList from './components/PaginationCardList';
import CardListSkeleton from './components/CardListSkeleton';
import { useBlacklistSearch } from './hooks/useBlacklist';
import { useSearchInput } from './hooks/useSearchInput';
import BtnSearchActions from './components/BtnSearchActions';

const App = () => {
  // set items per page
  const itemsPerPage = 10;

  // search custom hooks
  const {
    inputValue,
    searchTerm,
    currentPage,
    setCurrentPage,
    handleSearchChange,
    handleClearSearch,
    inputRef,
    handleSearchSubmit,
  } = useSearchInput();

  // ? kode ini digunakan atau tidak yak🤔
  // total count custom hooks
  // const { totalDatabaseCount, isLoading: isCountLoading, isError: isCountError } = useTotalCount();

  // blacklist search custom hooks
  const { userList, totalCount, isLoading, isPlaceholderData, isError, isFetching } = useBlacklistSearch(
    searchTerm,
    currentPage,
    itemsPerPage,
  );
  // hitung total pages
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  // Scroll to top, behavior = 'instant'
  useEffect(() => {
    windowScrollToTop();
  }, [currentPage]);

  // handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isFetching) return;
    handleSearchSubmit(e);
  };

  // render konten utama
  const renderContent = () => {
    if (!searchTerm.trim()) {
      return <DefaultBox />;
    }

    if (isLoading) {
      return <CardListSkeleton />;
    }

    if (isError) {
      return <p className="py-10 text-center text-xs text-red-500">Gagal memuat data. Coba lagi.</p>;
    }

    if (userList.length > 0) {
      return (
        <div
          className={`transition-opacity duration-200 ${
            isPlaceholderData ? 'pointer-events-none opacity-25' : 'opacity-100'
          }`}
        >
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
        </div>
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
          inputRef={inputRef}
          onClear={handleClearSearch}
          onSubmit={handleFormSubmit}
          isFetching={isFetching}
        >
          <BtnSearchActions
            value={inputValue}
            onClear={handleClearSearch}
            isFetching={isFetching}
          />
        </SearchBox>
      </Header>

      <main className="flex-1">{renderContent()}</main>
    </div>
  );
};

export default App;
