import { fetchTotalDataCount, fetchSearchData } from '../api/blacklistApi';

// Service untuk mengambil total data blacklist dari database (google sheet)
// CATATAN: TanStack Query mengharapkan fungsi ini melempar error (throw) saat gagal,
// bukan mengembalikan { success: false }. Jangan wrap dengan try/catch di sini.
const getTotalDataCountService = async () => {
  const rawData = await fetchTotalDataCount();

  return {
    totalDataCount: rawData.totalDataCount,
  };
};

// Service untuk melakukan pencarian
const getSearchDataService = async (search, page, limit) => {
  const rawData = await fetchSearchData(search, page, limit);

  return {
    data: rawData.data || [],
    totalCount: rawData.totalCount || 0,
  };
};

export { getTotalDataCountService, getSearchDataService };
