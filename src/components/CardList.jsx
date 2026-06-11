import { MapPin, ShieldAlert } from 'lucide-react';
import { memo } from 'react';

const CardList = memo(({ filteredData = [], totalCount = 0, children = null }) => {
  return (
    <div className="space-y-4 px-4 pt-6 pb-12">
      <div className="text-neutral-gray-base flex items-center justify-between text-xs font-semibold">
        <span>Hasil Pencarian</span>
        <span>{totalCount} Data Terdeteksi</span>
      </div>

      {filteredData.map((item, index) => (
        <div
          key={index}
          className="border-border-light bg-neutral-white hover:border-brand-primary rounded-xl border p-5 shadow-sm transition-all duration-200"
        >
          {/* Header Card Start */}
          <div className="mb-3 flex items-start justify-between">
            <div>
              <h3 className="text-neutral-element-black text-base leading-tight font-bold">{item.NAMA}</h3>
              <span className="text-neutral-gray-base text-xs">{item.KELAMIN || 'Jenis Kelamin Tidak Diketahui'}</span>
            </div>
            <span className="rounded border border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-extrabold tracking-wide text-red-600 uppercase">
              Terlapor
            </span>
          </div>
          {/* Header Card End */}

          {/* Jenis & No Identitas Start */}
          <div className="border-border-light bg-neutral-light-white mb-3 flex items-center gap-2 rounded-lg border p-2.5">
            <span className="bg-brand-primary text-neutral-white rounded px-1.5 py-0.5 text-[10px] font-bold uppercase">
              {item.IDENTITAS || 'ID'}
            </span>
            <code className="text-neutral-light-black font-mono text-xs font-bold tracking-wider">
              {item.NO || '-'}
            </code>
          </div>
          {/* Jenis & No Identitas End */}

          {/* Info Detail Start */}
          <div className="text-neutral-element-black mb-4 space-y-2 text-xs">
            {item['TEMPAT TANGGAL LAHIR'] && item['TEMPAT TANGGAL LAHIR'] !== '-' && (
              <div className="flex items-start gap-1.5">
                <span className="text-neutral-gray-base font-semibold">TTL:</span>
                <span>{item['TEMPAT TANGGAL LAHIR']}</span>
              </div>
            )}
            <div className="flex items-start gap-1.5">
              <MapPin
                className="text-neutral-gray-light mt-0.5 h-3.5 w-3.5 shrink-0"
                aria-hidden="true"
              />
              <div>
                <p className="leading-relaxed">{item.ALAMAT}</p>
                {(item.KEL || item.KEC) && (
                  <p className="text-neutral-gray-base mt-0.5 text-[10px]">
                    Kel. {item.KEL || '-'} • Kec. {item.KEC || '-'}
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* Info Detail End */}

          {/* Keterangan Start */}
          <div className="rounded border border-red-200 bg-red-50 p-3.5 text-xs text-red-700">
            <div className="mb-1.5 flex items-center gap-1.5 font-bold text-red-800">
              <ShieldAlert
                className="h-3.5 w-3.5 shrink-0"
                aria-hidden="true"
              />
              <span>Detail Pelanggaran:</span>
            </div>
            <p className="leading-relaxed">{item.KETERANGAN || 'Tidak ditemukan.'}</p>
          </div>
          {/* Keterangan End */}
        </div>
      ))}

      {children}
    </div>
  );
});

export default CardList;
