# Blacklist Rentcar Kalselteng v1.0.0

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

## Tentang Proyek

Blacklist Rentcar Kalselteng adalah sebuah aplikasi berbasis web (*Progressive Web App*) yang dirancang khusus untuk memenuhi kebutuhan pengusaha rental mobil di wilayah Kalimantan Selatan dan Kalimantan Tengah. Sistem ini memungkinkan para pemilik usaha untuk mencari dan memverifikasi riwayat penyewa bermasalah secara *real-time* sebelum menyetujui pelepasan unit kendaraan. Dengan memanfaatkan infrastruktur *serverless*, aplikasi ini memberikan performa yang cepat, stabil, dan sangat efisien dalam meminimalkan risiko kerugian operasional akibat penyewa fiktif atau bermasalah.

## Fitur Utama

* **Pencarian Real-time**: Mengambil data langsung dari pangkalan data berbasis Google Sheets dengan optimasi performa tinggi.
* **Mobile-First & Responsive UI**: Antarmuka dirancang mengutamakan pengalaman pengguna di perangkat seluler yang sering digunakan di lapangan.
* **Installable PWA (Progressive Web App)**: Mendukung mode *Standalone*, memungkinkan aplikasi diinstal langsung ke layar utama (*Home Screen*) perangkat pengguna layaknya aplikasi *native* Android/iOS.
* **Aksesibilitas Tinggi (WCAG A11y)**: Implementasi *Semantic HTML*, navigasi ramah pembaca layar (*Screen Reader*), dan elemen interaktif yang mematuhi standar aksesibilitas web tingkat lanjut.
* **Proteksi Spam Klik (State Lock)**: Antarmuka secara cerdas mengunci interaksi (*state*) pada tombol pencarian untuk mencegah kelebihan muatan *request* ke peladen (*server*) saat terjadi interaksi berulang.
* **Keamanan dan Privasi**: Dilengkapi dengan pengaturan meta tag `noindex` dan `nofollow` untuk mencegah mesin pencari mengindeks halaman web, memastikan privasi data tetap terjaga secara ketat.

## Arsitektur Teknologi (Tech Stack)

### Frontend
* **Framework**: React.js
* **Build Tool**: Vite
* **Styling**: Tailwind CSS
* **Data Fetching & Caching**: TanStack Query (React Query)
* **Ikonografi**: Lucide React
* **PWA Engine**: `vite-plugin-pwa`

### Backend
* **Platform API**: Serverless REST API menggunakan Google Apps Script (GAS) yang dioptimasi dengan *V8 Engine*.
* **Database**: Google Sheets sebagai basis data terpusat.

### Deployment
* **Frontend Hosting**: Netlify (Direkomendasikan).
* **Backend Hosting**: Infrastruktur cloud internal Google via web app deployment.

## Prasyarat (Prerequisites)

Sebelum melakukan instalasi di lingkungan pengembangan lokal, pastikan perangkat Anda telah terinstal:
* **Node.js**: Versi LTS terbaru (v18.x atau lebih tinggi).
* **npm**: Versi bawaan instalasi Node.js.
* **Git**: Versi kontrol untuk mengkloning repositori.

## Panduan Instalasi Lokal

Lakukan langkah-langkah perintah terminal berikut untuk menjalankan proyek di komputer lokal:

1. **Kloning repositori proyek ini**
   ```bash
   git clone https://github.com/mrobbys/blacklist-rentcar-kalselteng.git
   cd blacklist-rentcar-kalselteng
   ```

2. **Instalasi dependensi proyek**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan pada alamat standar lokal, umumnya di `http://localhost:5173`.

## Environment Variables

Aplikasi ini membutuhkan *environment variables* yang berisi kredensial peladen (*server endpoint*). Buatlah sebuah file bernama `.env` di akar direktori (*root directory*) proyek dan tambahkan baris berikut:

```env
VITE_BASE_URL=https://script.google.com/macros/s/ID_DEPLOYMENT_ANDA/exec
```
*Catatan: Ganti nilai variabel di atas dengan URL eksekusi (Web App URL) dari publikasi Google Apps Script yang valid.*

## Panduan Deployment

Proyek ini telah dikonfigurasi penuh agar kompatibel dengan lingkungan *deployment* modern seperti Netlify.

1. **Simulasi Build Lokal**
   Pastikan tidak ada *error* pada saat kompilasi kode:
   ```bash
   npm run build
   ```
2. **Proses Netlify Deployment**
   * Buat situs baru di panel administrasi Netlify dan hubungkan dengan *repository* GitHub ini.
   * Pastikan setelan kompilasinya adalah sebagai berikut:
     * **Build command**: `npm run build`
     * **Publish directory**: `dist`
   * Masuk ke menu **Site configuration** > **Environment variables**.
   * Tambahkan key `VITE_BASE_URL` dan masukkan tautan API eksekusi (*Web App URL*) dari peladen GAS Anda.
   * Lakukan *Trigger Deploy*. Aplikasi web siap digunakan.

## Struktur Google Sheets

Untuk menjamin kelancaran respons data dari API, format basis data tabel Google Sheets harus memenuhi persyaratan berikut:
* Data referensi utama dibaca dari *header* tabel yang wajib ditempatkan secara persis pada **baris ke-4**.
* Kolom indikator wajib (*mandatory column headers*) harus dinamakan **"NAMA"** dan **"NO"** agar pemrosesan indeks *backend* berjalan lancar.
