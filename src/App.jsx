import { useEffect } from 'react';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import { windowScrollToTop } from './utils';
import DefaultBox from './components/DefaultBox';
import BtnClearSearch from './components/BtnClearSearch';
import CardList from './components/CardList';
import EmptyCard from './components/EmptyCard';
import PaginationCardList from './components/PaginationCardList';
import CardListSkeleton from './components/CardListSkeleton';
import { useBlacklistSearch } from './hooks/useBlacklist';
import { useSearchInput } from './hooks/useSearchInput';

const App = () => {
  // set items per page
  const itemsPerPage = 10;

  // search custom hooks
  const { inputValue, searchTerm, currentPage, setCurrentPage, handleSearchChange, handleClearSearch, inputRef } =
    useSearchInput();

  // ? kode ini digunakan atau tidak yak🤔
  // total count custom hooks
  // const { totalDatabaseCount, isLoading: isCountLoading, isError: isCountError } = useTotalCount();

  // blacklist search custom hooks
  const {
    userList,
    totalCount,
    isLoading,
    isPlaceholderData,
    isError,

  } = useBlacklistSearch(searchTerm, currentPage, itemsPerPage);
  // hitung total pages
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  // Scroll to top, behavior = 'instant'
  useEffect(() => {
    windowScrollToTop();
  }, [currentPage]);

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

    // Tidak perlu kondisi if — jika semua kondisi di atas false, pasti userList kosong
    return <EmptyCard searchTerm={searchTerm} />;
  };

  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col overflow-x-hidden">
      <Header>
        <SearchBox
          value={inputValue}
          onChange={handleSearchChange}
          inputRef={inputRef}
        >
          {inputValue && <BtnClearSearch onClick={handleClearSearch} />}
        </SearchBox>
      </Header>

      <main className="flex-1">{renderContent()}</main>
    </div>
  );
};

export default App;
