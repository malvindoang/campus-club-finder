const options = [
  { value: "grid", label: "Grid" },
  { value: "list", label: "List" },
];

const ViewToggle = ({ view, onChange }) => (
  <div
    role="group"
    aria-label="Pilih tampilan daftar klub"
    className="inline-flex overflow-hidden rounded-md border border-slate-300 bg-white"
  >
    {options.map(({ value, label }) => (
      <button
        key={value}
        type="button"
        aria-pressed={view === value}
        onClick={() => onChange(value)}
        className={`px-4 py-2 text-sm font-medium focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-indigo-600 ${
          view === value
            ? "bg-indigo-600 text-white"
            : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        {label}
      </button>
    ))}
  </div>
);

export default ViewToggle;
