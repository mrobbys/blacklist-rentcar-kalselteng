import { ShieldCheck } from 'lucide-react';

const EmptyCard = ({ searchTerm }) => {
  return (
    <div className="px-4 py-8">
      <div className="bg-accent-green-light rounded-xl border border-green-200 p-6 text-center shadow-sm">
        <div className="bg-neutral-white mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-green-100">
          <ShieldCheck className="text-accent-green h-7 w-7" />
        </div>
        <h2 className="text-accent-green text-base font-bold">Calon Penyewa Aman</h2>
        <p className="text-accent-green mt-0.5 text-[11px] font-semibold">Bebas dari Blacklist</p>
        <div className="bg-neutral-white/50 mx-auto mt-4 max-w-xs rounded-lg border border-green-100 p-3.5">
          <p className="text-neutral-element-black text-sm leading-relaxed">
            Atas nama <span className="font-bold underline">"{searchTerm}"</span> tidak ditemukan dalam blacklist
            rentcar. Calon penyewa ini aman untuk diproses lebih lanjut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyCard;
