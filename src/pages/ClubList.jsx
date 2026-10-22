import { useState } from "react";
import { clubs } from "../data/clubs.js";
import { useJoinedClubs } from "../hooks/useJoinedClubs.js";
import usePageTitle from "../hooks/usePageTitle.js";
import ClubCard from "../components/ClubCard.jsx";
import SortSelect from "../components/SortSelect.jsx";
import ViewToggle from "../components/ViewToggle.jsx";

const sortClubs = (list, order) => {
  const sorted = [...list].sort((a, b) => a.name.localeCompare(b.name, "id"));
  return order === "name-desc" ? sorted.reverse() : sorted;
};

const sortLabels = {
  "name-asc": "Nama A-Z",
  "name-desc": "Nama Z-A",
};

const ClubList = () => {
  usePageTitle("Daftar Klub");

  const [sortOrder, setSortOrder] = useState("name-asc");
  const [view, setView] = useState("grid");
  const { isJoined } = useJoinedClubs();

  const sortedClubs = sortClubs(clubs, sortOrder);
  const layoutClass =
    view === "grid"
      ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      : "flex flex-col gap-4";

  return (
    <section aria-labelledby="clubs-heading">
      <h1
        id="clubs-heading"
        className="text-3xl font-bold tracking-tight text-slate-900"
      >
        Daftar Klub
      </h1>
      <p className="mt-2 text-slate-600">
        Pilih klub yang menarik minatmu, lalu lihat detailnya.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <SortSelect value={sortOrder} onChange={setSortOrder} />
        <ViewToggle view={view} onChange={setView} />
      </div>

      <p role="status" className="mt-4 text-sm text-slate-600">
        Menampilkan {sortedClubs.length} klub, diurutkan {sortLabels[sortOrder]},
        tampilan {view}.
      </p>

      <ul className={`mt-4 ${layoutClass}`}>
        {sortedClubs.map((club) => (
          <li key={club.id} className="flex">
            <ClubCard club={club} view={view} joined={isJoined(club.id)} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ClubList;
