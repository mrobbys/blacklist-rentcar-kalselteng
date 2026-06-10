import BtnPagination from './BtnPagination';

const PaginationCardList = ({ currentPage, totalPages, onPageChange }) => {
  // onPageChange for previous
  const prevPage = () => {
    const change = Math.max(currentPage - 1, 1);
    onPageChange(change);
  };

  // onPageChange for next
  const nextPage = () => {
    const change = Math.min(currentPage + 1, totalPages);
    onPageChange(change);
  };

  return (
    <div className="border-border-light mt-6 flex items-center justify-between border-t py-6">
      <BtnPagination
        onclick={prevPage}
        disabled={currentPage === 1}
        direction="prev"
      />

      <span className="text-neutral-gray-base text-xs font-semibold">
        Halaman {currentPage} dari {totalPages}
      </span>

      <BtnPagination
        onclick={nextPage}
        disabled={currentPage === totalPages}
        direction="next"
      />
    </div>
  );
};

export default PaginationCardList;
