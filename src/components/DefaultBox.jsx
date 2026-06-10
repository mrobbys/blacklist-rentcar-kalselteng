import { UserRoundSearch } from 'lucide-react';

const DefaultBox = ({ totalBlacklistData }) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20">
      <div className="bg-brand-secondary mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-sm">
        <UserRoundSearch className="text-accent-blue h-10 w-10" />
      </div>
      <h2 className="text-brand-primary text-center text-lg font-bold">Verifikasi Calon Penyewa</h2>
      <p className="text-neutral-gray-base mt-1 text-center text-sm leading-relaxed">
        Silakan masukkan nama lengkap calon penyewa mobil pada kolom pencarian di atas untuk melakukan pemindaian rekam
        jejak.
      </p>
      <div className="border-border-light bg-brand-secondary mt-8 w-full max-w-xs rounded-xl border p-5 text-center shadow-sm">
        <p className="text-brand-primary text-sm font-bold">Total Data Blacklist: {totalBlacklistData} Terlaporkan</p>
      </div>
    </div>
  );
};

export default DefaultBox;
