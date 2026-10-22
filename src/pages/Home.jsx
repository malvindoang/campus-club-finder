import { Link } from "react-router";
import ClubImage from "../components/ClubImage.jsx";
import usePageTitle from "../hooks/usePageTitle.js";

const highlights = [
  {
    title: "Jelajahi",
    text: "Lihat daftar klub kampus dan urutkan sesuai keinginanmu.",
  },
  {
    title: "Pelajari",
    text: "Baca deskripsi lengkap dan jadwal acara yang akan datang.",
  },
  {
    title: "Bergabung",
    text: "Gabung dengan satu klik, dan statusmu tersimpan di browser.",
  },
];

const Home = () => {
  usePageTitle("Beranda");

  return (
    <div>
      <section className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-wide text-indigo-700 uppercase">
            Departemen Student Affairs Binus University
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Temukan klub kampus yang cocok untukmu
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            Selamat datang di Campus Club Finder. Kenali berbagai klub
            mahasiswa, lihat kegiatan mereka, dan bergabung dengan komunitas
            yang sesuai dengan minat dan bakatmu.
          </p>
          <Link
            to="/clubs"
            className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Jelajahi Klub
          </Link>
        </div>
        <ClubImage
          src="/images/hero.webp"
          alt="Mahasiswa berkumpul dalam kegiatan klub kampus"
          className="mx-auto aspect-1280/1084 w-full max-w-xl rounded-2xl shadow-lg lg:max-w-none"
        />
      </section>

      <section aria-labelledby="highlights-heading" className="mt-16">
        <h2
          id="highlights-heading"
          className="text-2xl font-bold text-slate-900"
        >
          Cara kerjanya
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {highlights.map(({ title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-indigo-700">{title}</h3>
              <p className="mt-2 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
