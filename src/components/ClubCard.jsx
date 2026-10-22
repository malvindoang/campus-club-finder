import { Link } from "react-router";
import ClubImage from "./ClubImage.jsx";

const ClubCard = ({ club, view, joined }) => {
  const isList = view === "list";

  return (
    <article
      className={`flex w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md ${
        isList ? "flex-col sm:flex-row" : "flex-col"
      }`}
    >
      <ClubImage
        src={club.image}
        alt={`Gambar ${club.name}`}
        className={
          isList ? "h-48 w-full shrink-0 sm:h-auto sm:w-64" : "h-48 w-full"
        }
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">{club.name}</h2>
          {joined && (
            <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-800">
              Sudah bergabung
            </span>
          )}
        </div>
        <p className="flex-1 text-sm text-slate-600">{club.shortDescription}</p>
        <div>
          <Link
            to={`/clubs/${club.id}`}
            className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Lihat Detail
            <span className="sr-only"> {club.name}</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ClubCard;
