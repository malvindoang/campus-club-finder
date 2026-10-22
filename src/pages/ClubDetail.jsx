import { useState } from "react";
import { Link, useParams } from "react-router";
import { clubs } from "../data/clubs.js";
import { useJoinedClubs } from "../hooks/useJoinedClubs.js";
import usePageTitle from "../hooks/usePageTitle.js";
import { formatDate } from "../utils/formatDate.js";
import ClubImage from "../components/ClubImage.jsx";
import NotFound from "./NotFound.jsx";

const ClubDetail = () => {
  const { clubId } = useParams();
  const club = clubs.find((item) => item.id === clubId);
  const { isJoined, joinClub } = useJoinedClubs();
  const [showConfirmation, setShowConfirmation] = useState(false);

  usePageTitle(club ? club.name : "Halaman tidak ditemukan");

  if (!club) {
    return <NotFound />;
  }

  const joined = isJoined(club.id);

  const handleJoin = () => {
    joinClub(club.id);
    setShowConfirmation(true);
  };

  return (
    <article>
      <Link
        to="/clubs"
        className="inline-block rounded-md text-sm font-medium text-indigo-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        ← Kembali ke daftar klub
      </Link>

      <ClubImage
        src={club.image}
        alt={`Gambar ${club.name}`}
        className="mt-4 h-64 w-full rounded-2xl shadow-sm sm:h-80 lg:h-96"
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {club.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            {club.description}
          </p>

          <div className="mt-8">
            <p role="status">
              {showConfirmation && (
                <span className="block rounded-lg border border-emerald-200 bg-emerald-50 p-4 font-medium text-emerald-800">
                  Selamat! Kamu berhasil bergabung dengan {club.name}.
                </span>
              )}
            </p>
            <button
              type="button"
              onClick={handleJoin}
              disabled={joined}
              className="mt-4 rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-emerald-100 disabled:text-emerald-800 disabled:shadow-none"
            >
              {joined ? "Kamu sudah bergabung di klub ini!" : "Gabung Klub"}
            </button>
          </div>
        </div>

        <section
          aria-labelledby="events-heading"
          className="h-fit rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h2
            id="events-heading"
            className="text-xl font-semibold text-slate-900"
          >
            Acara Mendatang
          </h2>
          <ul className="mt-4 divide-y divide-slate-200">
            {club.events.map((event) => (
              <li key={event.name} className="py-3 first:pt-0 last:pb-0">
                <p className="font-medium text-slate-900">{event.name}</p>
                <time dateTime={event.date} className="text-sm text-slate-600">
                  {formatDate(event.date)}
                </time>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
};

export default ClubDetail;
