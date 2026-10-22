# Campus Club Finder

Aplikasi web satu halaman (single-page app) dari Departemen Student Affairs untuk membantu mahasiswa menemukan, mengenal, dan bergabung dengan klub kampus. Dibuat sebagai tugas bootcamp Front-End.

Panduan lengkap dengan screenshot setiap halaman dan fitur ada di [DOCUMENTATION.md](DOCUMENTATION.md).

## Fitur

- Halaman Beranda dengan hero section dan tombol menuju daftar klub
- Daftar 5 klub dalam bentuk kartu, bisa diurutkan **Nama A-Z** atau **Nama Z-A**
- Tombol pengalih tampilan **Grid** dan **List**, responsif di mobile, tablet, dan desktop
- Halaman detail klub: gambar, deskripsi lengkap, dan daftar acara mendatang
- Tombol **Gabung Klub** dengan konfirmasi, status tersimpan di `localStorage` sehingga tetap ada setelah halaman di-refresh
- Halaman Tentang dan halaman 404
- Navbar di semua halaman dengan penanda halaman aktif
- Tanpa backend, tanpa login. Semua data berjalan di browser

## Teknologi

| Teknologi | Fungsi |
| --- | --- |
| Vite | Setup proyek dan bundling |
| React (functional components dan Hooks) | Antarmuka dan state |
| React Router | Navigasi antar halaman |
| Tailwind CSS | Seluruh styling dan responsivitas |
| localStorage | Menyimpan klub yang diikuti |

## Menjalankan di komputer sendiri

Pastikan Node.js sudah terpasang (disarankan versi 20.19 atau lebih baru).

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal, biasanya `http://localhost:5173`.

Perintah lain:

```bash
npm run build
npm run preview
```

## Gambar

Gambar klub dan hero disimpan di `public/images`:

| File | Dipakai di |
| --- | --- |
| `hero.jpg` | Hero di halaman Beranda |
| `robotics.jpg` | Klub Robotika |
| `photography.jpg` | Klub Fotografi |
| `music.jpg` | Klub Musik |
| `debate.jpg` | Klub Debat |
| `hiking.jpg` | Klub Pecinta Alam |

Jika sebuah gambar belum ada, aplikasi menampilkan latar gradasi sebagai pengganti.

## Struktur proyek

```
src/
  data/clubs.js            data 5 klub (terpisah dari UI)
  hooks/                   useJoinedClubs (localStorage) dan usePageTitle
  utils/formatDate.js      format tanggal
  components/              Navbar, Layout, ClubCard, ClubImage, SortSelect, ViewToggle
  pages/                   Home, ClubList, ClubDetail, About, NotFound
  App.jsx                  definisi rute
  main.jsx                 titik masuk aplikasi
```

## Rute

| Path | Halaman |
| --- | --- |
| `/` | Beranda |
| `/clubs` | Daftar klub |
| `/clubs/:clubId` | Detail klub |
| `/about` | Tentang |
| `*` | 404 Not Found |

## Cara kerja singkat

- **Sorting dan Grid/List** di halaman daftar memakai `useState`. State `sortOrder` dan `view` dikirim ke komponen `SortSelect`, `ViewToggle`, dan `ClubCard` lewat props.
- **Gabung klub** ditangani hook `useJoinedClubs`. Daftar id klub yang diikuti dibaca dari `localStorage` saat aplikasi dimuat dan disimpan kembali setiap kali berubah.
