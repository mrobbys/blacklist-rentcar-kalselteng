import { AlertCircle } from 'lucide-react';

const CardRefetch = ({ onClick }) => {
  return (
    <div className="px-4 py-8">
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center shadow-sm">
        <div className="bg-neutral-white mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-red-100">
          <AlertCircle className="h-7 w-7 text-red-500" />
        </div>
        <h2 className="text-base font-bold text-red-600">Gagal Memuat Data</h2>
        <p className="text-neutral-gray-base mx-auto mt-1 max-w-sm text-center text-xs leading-relaxed">
          Terjadi kesalahan saat mengambil data dari server. Silakan periksa koneksi internet Anda dan coba lagi.
        </p>
        <button
          onClick={onClick}
          type="button"
          className="bg-brand-primary text-neutral-white hover:bg-brand-primary/75 focus-visible:ring-brand-primary mt-4 inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-xs font-bold shadow-sm transition-all duration-150 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  );
};

export default CardRefetch;
