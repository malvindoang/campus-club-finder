# Dokumentasi Campus Club Finder

Dokumen ini menjelaskan cara kerja aplikasi mulai dari kondisi awal, lalu menelusuri semua halaman dan fitur satu per satu.

## Kondisi awal

Saat pertama kali dibuka, belum ada klub yang diikuti dan `localStorage` belum berisi data aplikasi ini. Aplikasi berisi 5 klub bawaan dari file `src/data/clubs.js`: Klub Robotika, Klub Fotografi, Klub Musik, Klub Debat, dan Klub Pecinta Alam.

Cara menjalankan:

```bash
npm install
npm run dev
```

## 1. Halaman Beranda (`/`)

Halaman pertama berisi pesan sambutan, deskripsi singkat aplikasi, hero section dengan gambar, dan tombol **Jelajahi Klub** yang membawa ke halaman daftar klub. Navbar di bagian atas menampilkan tiga menu (Beranda, Klub, Tentang), dan menu **Beranda** diberi warna berbeda karena sedang aktif.

## 2. Daftar Klub (`/clubs`)

Klik **Jelajahi Klub** atau menu **Klub**. Kelima klub tampil sebagai kartu dengan gambar, nama, deskripsi singkat, dan tombol **Lihat Detail**. Kondisi awalnya: diurutkan **Nama A-Z** dengan tampilan **Grid**. Menu **Klub** di navbar kini menjadi yang aktif.

### Mengurutkan klub

Dropdown **Urutkan** punya dua pilihan: **Nama A-Z** dan **Nama Z-A**. Memilih **Nama Z-A** membalik urutan kartu, dan teks status di bawah kontrol ikut berubah.

### Mengganti tampilan Grid dan List

Tombol **Grid** dan **List** mengubah susunan kartu. Pada **Grid**, kartu tersusun dalam kolom (1 kolom di mobile, 2 di tablet, 3 di desktop). Pada **List**, kartu ditumpuk ke bawah dan gambar berada di samping teks pada layar yang cukup lebar. Pilihan sorting tetap dipertahankan saat tampilan diganti.

### Tampilan responsif

Tata letak menyesuaikan ukuran layar. Berikut contoh tampilan di ukuran ponsel.

## 3. Detail Klub (`/clubs/:clubId`)

Klik **Lihat Detail** pada salah satu kartu, misalnya Klub Robotika (`/clubs/robotics`). Halaman ini menampilkan gambar besar, nama klub, deskripsi lengkap, dan daftar **Acara Mendatang** (tiga acara per klub, lengkap dengan tanggal). Karena belum bergabung, tombol bertuliskan **Gabung Klub**.

### Bergabung dengan klub

Klik **Gabung Klub**. Muncul pesan konfirmasi berwarna hijau, dan tombol berubah menjadi nonaktif dengan tulisan **Kamu sudah bergabung di klub ini!**. Id klub disimpan ke `localStorage`.

### Status tersimpan setelah refresh

Refresh halaman (atau tutup lalu buka lagi). Tombol tetap menampilkan **Kamu sudah bergabung di klub ini!**, menandakan data bertahan di `localStorage`.

### Penanda di daftar klub

Kembali ke `/clubs`. Kartu klub yang sudah diikuti kini memiliki label **Sudah bergabung**.

### Bukti data di localStorage

Di DevTools browser, buka tab **Application**, lalu **Local Storage**. Terdapat key `campus-club-finder:joined-clubs` yang berisi daftar id klub yang diikuti, misalnya `["robotics"]`.

## 4. Halaman Tentang (`/about`)

Menjelaskan fungsi aplikasi dan teknologi yang dipakai: Vite, React, React Router, Tailwind CSS, dan localStorage.

## 5. Halaman 404 (`*`)

Membuka alamat yang tidak ada, misalnya `/halaman-ngawur` atau `/clubs/tidak-ada`, menampilkan pesan ramah dan tombol **Kembali ke Beranda** yang membawa pengguna ke halaman utama.

## Ringkasan fitur dan lokasi kodenya

| Fitur | Lokasi |
| --- | --- |
| Data 5 klub | `src/data/clubs.js` |
| Rute dan 404 | `src/App.jsx` |
| Navbar dengan penanda halaman aktif | `src/components/Navbar.jsx` |
| Sorting dan toggle Grid/List (`useState` dan props) | `src/pages/ClubList.jsx`, `SortSelect.jsx`, `ViewToggle.jsx`, `ClubCard.jsx` |
| Gabung klub dan penyimpanan `localStorage` | `src/hooks/useJoinedClubs.js`, `src/pages/ClubDetail.jsx` |
| Halaman Tentang dan 404 | `src/pages/About.jsx`, `src/pages/NotFound.jsx` |

## Aksesibilitas

- Struktur semantik: `header`, `nav`, `main`
- Tautan "Lewati ke konten utama" untuk pengguna keyboard
- Setiap gambar punya teks alternatif, dan setiap kontrol punya label
- Tombol Grid/List memakai `aria-pressed`, navbar memakai `aria-current` pada halaman aktif
- Pesan konfirmasi dan status dibacakan lewat `role="status"`
- Fokus keyboard terlihat jelas pada semua tombol dan tautan
