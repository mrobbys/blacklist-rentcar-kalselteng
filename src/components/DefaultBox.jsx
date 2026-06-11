import { UserRoundSearch } from 'lucide-react';

const DefaultBox = ({ totalBlacklistData = 0, isLoading = false }) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20">
      <div className="bg-brand-secondary mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-sm">
        <UserRoundSearch className="text-accent-blue h-10 w-10" />
      </div>
      <h2 className="text-brand-primary text-center text-lg font-bold">Verifikasi Calon Penyewa</h2>
      <p className="text-neutral-gray-base mt-1 text-center text-sm leading-relaxed">
        Silakan masukkan nama lengkap atau nomor identitas calon penyewa mobil pada kolom pencarian di atas untuk
        melakukan pemindaian rekam jejak.
      </p>

      {/* 
        // ? kode dibawah ini di komentari dulu untuk semantara, karena masih tidak tau apakah digunakan atau tidak
      */}
      {/* {isLoading && (
        <div className="border-border-light bg-brand-secondary mt-8 w-full max-w-xs animate-pulse rounded-xl border p-5 text-center shadow-sm">
          <div className="bg-neutral-gray-light/30 mx-auto h-5 w-48 rounded-md"></div>
        </div>
      )}
      {!isLoading && totalBlacklistData > 0 && (
        <div className="border-border-light bg-brand-secondary mt-8 w-full max-w-xs rounded-xl border p-5 text-center shadow-sm">
          <p className="text-brand-primary text-sm font-bold">Total Data Blacklist: {totalBlacklistData} Terlaporkan</p>
        </div>
      )} */}
    </div>
  );
};

export default DefaultBox;
