import { useQuery } from '@tanstack/react-query';
import { getSearchDataService } from '../services/blacklistService';

export const blacklistKeys = {
  totalCount: () => ['blacklist', 'totalCount'],
  search: (query, page, limit) => ['blacklist', 'search', query, page, limit],
};

// ? kode ini digunakan atau tidak yak🤔
// Hook untuk total count
// const useTotalCount = () => {
//   const { data, isPending, isError } = useQuery({
//     queryKey: blacklistKeys.totalCount(),
//     queryFn: getTotalDataCountService,
//   });

//   return {
//     isLoading: isPending,
//     isError,
//     totalDatabaseCount: data?.totalDataCount ?? 0,
//   };
// };

// Hook untuk pencarian data
const useBlacklistSearch = (searchTerm, currentPage, itemsPerPage = 10) => {
  const query = searchTerm.trim().toLowerCase();

  const { data, isPending, isFetching, isError, isPlaceholderData } = useQuery({
    queryKey: blacklistKeys.search(query, currentPage, itemsPerPage),
    queryFn: () => getSearchDataService(query, currentPage, itemsPerPage),
    // jangan fetch jika pencarian kosong
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
    placeholderData: (previousData, previousQuery) => {
      return previousQuery?.queryKey[2] === query ? previousData : undefined;
    },
  });

  return {
    isLoading: isPending && !!query,
    isFetching,
    isPlaceholderData,
    isError,
    userList: data?.data ?? [],
    totalCount: data?.totalCount ?? 0,
  };
};

export { useBlacklistSearch };
