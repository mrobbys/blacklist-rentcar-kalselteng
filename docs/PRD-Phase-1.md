# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Blacklist Rentcar Kalselteng Detector (Phase 1 - MVP)

---

## 1. Deskripsi Proyek

Aplikasi web berbasis satu halaman (**Single Page Application**) yang dirancang khusus dengan pendekatan **Mobile-First**. Berfungsi sebagai mesin pencari kilat bagi pemilik rental mobil di Kalimantan Selatan dan Kalimantan Tengah untuk menyaring dan mendeteksi calon penyewa yang masuk dalam daftar hitam (_blacklist_) komunitas secara _real-time_ langsung dari _smartphone_ mereka.

---

## 2. Batasan & Arsitektur Sistem

- **Arsitektur**: Arsitektur murni _client-side_ tanpa database eksternal di Fase 1. Data langsung dibaca dari file JSON statis (`src/data/blacklistData.json`) yang berisi 153 data terlaporkan.
- **UI/UX Standar**: Mengikuti aturan Hyperline Design System (`docs/design-tokens-DESIGN.md`) untuk keselarasan warna, tipografi, radius sudut (_border-radius_), dan jarak (_spacing_).
- **Elemen yang Dilarang**: Dilarang keras menggunakan komponen tabel konvensional horizontal (`<table>`). Semua data wajib ditampilkan dalam bentuk kartu (**Card List**) yang disusun vertikal ke bawah demi kenyamanan membaca di layar HP.

---

## 3. Logika Antarmuka Dinamis (3-State Layout System)

Aplikasi ini menerapkan **Query-Driven UI**, di mana area di bawah kolom pencarian akan berubah secara dinamis tergantung pada kondisi input pengguna:

### State 1: Default State (Kolom Input Kosong)

- Menampilkan header statis dan kolom pencarian di bagian atas.
- Di bawah kolom pencarian hanya menampilkan satu buah kartu informasi ringkas yang berisi total database terkunci saat ini: `"Total Data Blacklist: XXX Terlaporkan"`.

### State 2: Active Match State (Pencarian Berhasil)

- Kartu informasi total data otomatis menghilang (_unmount_).
- Menampilkan rentetan kartu (_Card List_) secara vertikal ke bawah yang terfilter secara _real-time_ berdasarkan kecocokan karakter pada Nama atau Nomor Identitas (bersifat _case-insensitive_).
- Data berdasarkan file JSON (`src/data/blacklistData.json`)
- **Anatomi Kartu**:
  - Nama Lengkap (Teks Tebal/**Bold**)
  - Tempat Tanggal Lahir
  - Jenis Identitas & Nomor Identitas (Font `Monospace`)
  - Alamat (Alamat/Kelurahan/Kecamatan)
  - Informasi Keterangan.

### State 3: Safe State (Data Tidak Ditemukan)

- Jika kata kunci yang diketik tidak menghasilkan kecocokan di dalam database, seluruh kartu disembunyikan.
- Menampilkan satu banner/alert informatif berwarna hijau muda yang menyatakan bahwa calon penyewa tidak terdaftar dalam blacklist (Aman).
