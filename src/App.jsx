import { useState } from 'react';
import { Search, AlertTriangle, ShieldCheck, Database, Info } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('state1'); // state1: Default, state2: Match, state3: Safe

  // Mock data representing the 3 states from PRD
  const mockBlacklist = [
    {
      id: 1,
      nama: 'Ahmad Faisal',
      nik: '6371020908950002',
      lokasi: 'Banjarmasin Tengah, Banjarmasin',
      kasus: 'Membawa kabur unit mobil Avanza Veloz (DA 1234 XX) selama 3 hari tanpa kabar.',
    },
  ];

  return (
    <div className="bg-neutral-light-white mx-auto min-h-screen max-w-md px-4 py-6">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-brand-primary text-2xl font-bold tracking-tight">Blacklist Detector</h1>
        <p className="text-neutral-gray-base text-xs">Kalselteng Rentcar Community Database</p>
      </header>

      {/* State Preview Switcher (For Development Setup Verification) */}
      <div className="bg-brand-secondary mb-6 rounded-lg p-3">
        <span className="text-brand-primary mb-2 block text-center text-xs font-medium">
          Preview State (PRD 3-State System):
        </span>
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => {
              setActiveTab('state1');
              setSearchQuery('');
            }}
            className={`rounded py-2 text-xs font-bold transition-all duration-150 ${
              activeTab === 'state1'
                ? 'bg-brand-primary text-neutral-white shadow-sm'
                : 'bg-neutral-white text-brand-primary border-border-light border'
            }`}
          >
            State 1: Default
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('state2');
              setSearchQuery('Ahmad');
            }}
            className={`rounded py-2 text-xs font-bold transition-all duration-150 ${
              activeTab === 'state2'
                ? 'bg-brand-primary text-neutral-white shadow-sm'
                : 'bg-neutral-white text-brand-primary border-border-light border'
            }`}
          >
            State 2: Match
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('state3');
              setSearchQuery('Budi');
            }}
            className={`rounded py-2 text-xs font-bold transition-all duration-150 ${
              activeTab === 'state3'
                ? 'bg-brand-primary text-neutral-white shadow-sm'
                : 'bg-neutral-white text-brand-primary border-border-light border'
            }`}
          >
            State 3: Safe
          </button>
        </div>
      </div>

      {/* Column Pencarian */}
      <div className="relative mb-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="text-neutral-gray-light h-5 w-5" />
        </div>
        <input
          type="text"
          placeholder="Cari Nama Lengkap atau NIK..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (e.target.value.trim() === '') {
              setActiveTab('state1');
            } else if (e.target.value.toLowerCase().includes('ahmad')) {
              setActiveTab('state2');
            } else {
              setActiveTab('state3');
            }
          }}
          className="border-border-regular bg-neutral-white focus:border-brand-primary focus:ring-brand-primary w-full rounded-xl border py-2 pr-3 pl-10 text-base transition-all duration-150 outline-none focus:ring-1"
        />
      </div>

      {/* Dynamic State Layout (PRD Section 3) */}
      <main className="space-y-3">
        {/* State 1: Default State */}
        {activeTab === 'state1' && (
          <div className="border-accent-blue-light bg-accent-blue-light rounded-xl border p-6 text-center shadow-sm">
            <Database className="text-accent-blue mx-auto mb-2 h-10 w-10" />
            <h2 className="text-brand-primary text-lg font-bold">Total Data Blacklist: 153 Terlaporkan</h2>
            <p className="text-neutral-gray-base mt-2 text-xs leading-relaxed">
              Masukkan nama lengkap atau nomor identitas (KTP/NIK) calon penyewa untuk melakukan pengecekan data secara
              real-time.
            </p>
          </div>
        )}

        {/* State 2: Active Match State */}
        {activeTab === 'state2' && (
          <div className="space-y-3">
            <div className="text-neutral-gray-base flex items-center gap-2 text-xs font-medium">
              <Info className="h-4 w-4" />
              <span>Menampilkan hasil pencarian untuk "{searchQuery}"</span>
            </div>

            {mockBlacklist.map((item) => (
              <div
                key={item.id}
                className="border-border-light bg-neutral-white rounded-xl border p-6 shadow-sm"
              >
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="text-neutral-element-black text-base font-bold">{item.nama}</h3>
                    <code className="text-neutral-gray-base font-mono text-xs">NIK: {item.nik}</code>
                  </div>
                  <span className="bg-accent-purple-light text-accent-purple rounded px-2 py-0.5 text-xs font-bold">
                    Terlapor
                  </span>
                </div>

                <div className="text-neutral-gray-base mb-4 text-xs">
                  <span className="font-semibold">Lokasi:</span> {item.lokasi}
                </div>

                {/* Kasus (Sorotan Merah Tegas) */}
                <div className="rounded border border-red-200 bg-red-50 p-3 text-xs text-red-700">
                  <div className="mb-1 flex items-center gap-1 font-bold text-red-800">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Laporan Kasus:</span>
                  </div>
                  <p className="leading-relaxed">{item.kasus}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* State 3: Safe State */}
        {activeTab === 'state3' && (
          <div className="border-accent-green-light bg-accent-green-light rounded-xl border p-6 text-center shadow-sm">
            <ShieldCheck className="text-accent-green mx-auto mb-2 h-10 w-10" />
            <h2 className="text-accent-green text-lg font-bold">Calon Penyewa Aman</h2>
            <p className="text-accent-green mt-2 text-xs leading-relaxed">
              Nama atau nomor identitas "{searchQuery}" tidak ditemukan di database daftar hitam. Calon penyewa ini aman
              untuk bertransaksi.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
