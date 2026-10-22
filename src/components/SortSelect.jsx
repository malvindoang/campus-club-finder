const SortSelect = ({ value, onChange }) => (
  <div className="flex items-center gap-2">
    <label htmlFor="sort-clubs" className="text-sm font-medium text-slate-700">
      Urutkan
    </label>
    <select
      id="sort-clubs"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <option value="name-asc">Nama A-Z</option>
      <option value="name-desc">Nama Z-A</option>
    </select>
  </div>
);

export default SortSelect;
