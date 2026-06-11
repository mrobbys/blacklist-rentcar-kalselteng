const BASE_URL = import.meta.env.VITE_BASE_URL;

// Fungsi untuk mendapatkan jumlah data blacklist
const fetchTotalDataCount = async () => {
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

// Fungsi untuk mendapatkan data blacklist berdasarkan pencarian
const fetchSearchData = async (search, page, limit) => {
  const params = {
    search: search,
    page: page,
    limit: limit,
  };
  const queryString = new URLSearchParams(params).toString();
  const fetchURL = `${BASE_URL}?${queryString}`;
  const response = await fetch(fetchURL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

export { fetchTotalDataCount, fetchSearchData };
