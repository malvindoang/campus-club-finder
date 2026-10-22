import { Link } from "react-router";
import usePageTitle from "../hooks/usePageTitle.js";

const NotFound = () => {
  usePageTitle("Halaman tidak ditemukan");

  return (
    <section className="py-16 text-center">
      <p className="text-6xl font-bold text-indigo-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">
        Halaman tidak ditemukan
      </h1>
      <p className="mx-auto mt-2 max-w-md text-slate-600">
        Ups, halaman yang kamu cari tidak ada atau sudah dipindahkan. Yuk
        kembali ke beranda dan lanjut menjelajah klub.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Kembali ke Beranda
      </Link>
    </section>
  );
};

export default NotFound;
