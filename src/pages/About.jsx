import usePageTitle from "../hooks/usePageTitle.js";

const techStack = [
  {
    name: "Vite",
    text: "Menyiapkan proyek dan membundel kode dengan cepat.",
  },
  {
    name: "React",
    text: "Membangun antarmuka dari komponen fungsional dan Hooks.",
  },
  {
    name: "React Router",
    text: "Mengatur navigasi antar halaman tanpa memuat ulang.",
  },
  {
    name: "Tailwind CSS",
    text: "Menata tampilan responsif lewat class utilitas.",
  },
  {
    name: "localStorage",
    text: "Menyimpan klub yang kamu ikuti langsung di browser.",
  },
];

const About = () => {
  usePageTitle("Tentang");

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Tentang Campus Club Finder
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Campus Club Finder adalah aplikasi web dari Departemen Student Affairs milik Binus University Alam Sutera Campus, yang dibuat
        untuk membantu mahasiswa menemukan, mengenal, dan bergabung dengan klub
        kampus. Kamu bisa melihat daftar klub, mengurutkannya, mengganti
        tampilan antara grid dan list, membaca detail klub beserta jadwal
        acaranya, lalu bergabung dengan satu klik.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Aplikasi ini tidak memakai server. Semua data klub berasal dari file di
        dalam aplikasi, dan klub yang kamu ikuti disimpan di browser milikmu
        sendiri.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Teknologi yang digunakan
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {techStack.map(({ name, text }) => (
          <li
            key={name}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="font-semibold text-indigo-700">{name}</h3>
            <p className="mt-1 text-slate-600">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
