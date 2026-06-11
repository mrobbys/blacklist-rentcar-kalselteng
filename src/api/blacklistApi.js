const BASE_URL = import.meta.env.VITE_BASE_URL;

// Guard: Pastikan env var tersedia saat aplikasi dijalankan
if (!BASE_URL) {
  throw new Error(
    '[blacklistApi] VITE_BASE_URL tidak ditemukan. Pastikan file .env sudah dikonfigurasi.',
  );
}

// Fungsi untuk mendapatkan jumlah data blacklist
const fetchTotalDataCount = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(`Gagal mengambil total data: ${response.status} ${response.statusText}`);
  }
  return response.json();
};

// Fungsi untuk mendapatkan data blacklist berdasarkan pencarian
const fetchSearchData = async (search, page, limit) => {
  const queryString = new URLSearchParams({ search, page, limit }).toString();
  const response = await fetch(`${BASE_URL}?${queryString}`);
  if (!response.ok) {
    throw new Error(`Gagal mencari data: ${response.status} ${response.statusText}`);
  }
  return response.json();
};

export { fetchTotalDataCount, fetchSearchData };
